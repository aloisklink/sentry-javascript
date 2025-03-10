export type {
  Breadcrumb,
  BreadcrumbHint,
  // eslint-disable-next-line deprecation/deprecation
  Request,
  RequestEventData,
  SdkInfo,
  Event,
  EventHint,
  ErrorEvent,
  Exception,
  SeverityLevel,
  StackFrame,
  Stacktrace,
  Thread,
  User,
  Session,
} from '@sentry/core';

export type { BrowserOptions } from './client';

export type { ReportDialogOptions } from './sdk';

export {
  addEventProcessor,
  addBreadcrumb,
  addIntegration,
  captureException,
  captureEvent,
  captureMessage,
  close,
  createTransport,
  lastEventId,
  flush,
  // eslint-disable-next-line deprecation/deprecation
  getCurrentHub,
  getClient,
  isInitialized,
  getCurrentScope,
  getIsolationScope,
  getGlobalScope,
  setCurrentClient,
  Scope,
  continueTrace,
  suppressTracing,
  SDK_VERSION,
  setContext,
  setExtra,
  setExtras,
  setTag,
  setTags,
  setUser,
  withScope,
  withIsolationScope,
  functionToStringIntegration,
  inboundFiltersIntegration,
  dedupeIntegration,
  parameterize,
  startSession,
  captureSession,
  endSession,
  spanToJSON,
  spanToTraceHeader,
  spanToBaggageHeader,
  updateSpanName,
} from '@sentry/core';

export {
  SEMANTIC_ATTRIBUTE_SENTRY_OP,
  SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
  SEMANTIC_ATTRIBUTE_SENTRY_SOURCE,
  SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
} from '@sentry/core';

export { WINDOW } from './helpers';
export { BrowserClient } from './client';
export { makeFetchTransport } from './transports/fetch';
export {
  defaultStackParser,
  defaultStackLineParsers,
  chromeStackLineParser,
  geckoStackLineParser,
  opera10StackLineParser,
  opera11StackLineParser,
  winjsStackLineParser,
} from './stack-parsers';
export { eventFromException, eventFromMessage, exceptionFromError } from './eventbuilder';
export { createUserFeedbackEnvelope } from './userfeedback';
export {
  getDefaultIntegrations,
  forceLoad,
  init,
  onLoad,
  showReportDialog,
  // eslint-disable-next-line deprecation/deprecation
  captureUserFeedback,
} from './sdk';

export { breadcrumbsIntegration } from './integrations/breadcrumbs';
export { globalHandlersIntegration } from './integrations/globalhandlers';
export { httpContextIntegration } from './integrations/httpcontext';
export { linkedErrorsIntegration } from './integrations/linkederrors';
export { browserApiErrorsIntegration } from './integrations/browserapierrors';

export { lazyLoadIntegration } from './utils/lazyLoadIntegration';
