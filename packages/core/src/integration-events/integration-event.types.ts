/**
 * Integration event type definition (hand-maintained contract for generated registry).
 */

export type IntegrationEventTypeDefinition = {
  type: string;
  domain: string;
  aggregateType?: string;
  description?: string;
  defaultDeliveryMode?: 'sync' | 'async';
};
