import type { BrowserOptions } from '@sentry/browser';
import {
  browserTracingIntegration,
  getDefaultIntegrations as getBrowserDefaultIntegrations,
  init as initBrowserSdk,
  setTag,
} from '@sentry/browser';
import { applySdkMetadata, hasTracingEnabled } from '@sentry/core';
import type { Client, Integration } from '@sentry/types';

// Tree-shakable guard to remove all code related to tracing
declare const __SENTRY_TRACING__: boolean;

/**
 * Initialize the client side of the Sentry Astro SDK.
 *
 * @param options Configuration options for the SDK.
 */
export function init(options: BrowserOptions): Client | undefined {
  const opts = {
    defaultIntegrations: getDefaultIntegrations(options),
    ...options,
  };

  applySdkMetadata(opts, 'astro', ['astro', 'browser']);

  const client = initBrowserSdk(opts);

  setTag('runtime', 'browser');

  return client;
}

function getDefaultIntegrations(options: BrowserOptions): Integration[] | undefined {
  // This evaluates to true unless __SENTRY_TRACING__ is text-replaced with "false",
  // in which case everything inside will get treeshaken away
  if (typeof __SENTRY_TRACING__ === 'undefined' || __SENTRY_TRACING__) {
    if (hasTracingEnabled(options)) {
      return [...getBrowserDefaultIntegrations(options), browserTracingIntegration()];
    }
  }

  return undefined;
}
