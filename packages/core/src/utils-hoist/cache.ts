/**
 * Creates a cache that evicts keys in fifo order
 * @param size {Number}
 *
 * @deprecated This function is deprecated and will be removed in the next major version.
 */
export function makeFifoCache<Key extends string, Value>(
  size: number,
): {
  get: (key: Key) => Value | undefined;
  add: (key: Key, value: Value) => void;
  delete: (key: Key) => boolean;
  clear: () => void;
  size: () => number;
} {
  // Maintain a fifo queue of keys, we cannot rely on Object.keys as the browser may not support it.
  let evictionOrder: Key[] = [];
  let cache: Record<string, Value> = {};

  return {
    add(key: Key, value: Value) {
      while (evictionOrder.length >= size) {
        // shift is O(n) but this is small size and only happens if we are
        // exceeding the cache size so it should be fine.
        const evictCandidate = evictionOrder.shift();

        if (evictCandidate !== undefined) {
          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete cache[evictCandidate];
        }
      }

      // in case we have a collision, delete the old key.
      if (cache[key]) {
        this.delete(key);
      }

      evictionOrder.push(key);
      cache[key] = value;
    },
    clear() {
      cache = {};
      evictionOrder = [];
    },
    get(key: Key): Value | undefined {
      return cache[key];
    },
    size() {
      return evictionOrder.length;
    },
    // Delete cache key and return true if it existed, false otherwise.
    delete(key: Key): boolean {
      if (!cache[key]) {
        return false;
      }

      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete cache[key];

      for (let i = 0; i < evictionOrder.length; i++) {
        if (evictionOrder[i] === key) {
          evictionOrder.splice(i, 1);
          break;
        }
      }

      return true;
    },
  };
}
