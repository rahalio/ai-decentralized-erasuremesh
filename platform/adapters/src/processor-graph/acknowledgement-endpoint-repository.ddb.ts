/**
 * AcknowledgementEndpointRepository - DynamoDB Implementation (action stub)
 *
 * Domain: processor-graph — ack endpoint probe (x-repository: none in OpenAPI).
 */

import type { TestAcknowledgementEndpointRepository } from '@erasuremesh/services/processor-graph';

export class AcknowledgementEndpointRepositoryDdb
  implements TestAcknowledgementEndpointRepository
{
  constructor(private readonly dynamoClient: unknown) {}

  async testProcessorNodeAckEndpoint(
    input: Parameters<
      TestAcknowledgementEndpointRepository['testProcessorNodeAckEndpoint']
    >[0]
  ): Promise<
    Awaited<
      ReturnType<
        TestAcknowledgementEndpointRepository['testProcessorNodeAckEndpoint']
      >
    >
  > {
    const raw = input as Record<string, unknown>;
    return {
      data: {
        ok: false,
        statusCode: 501,
        detail: 'Ack endpoint probe not configured in sandbox',
        testedAt: new Date().toISOString(),
      },
      meta: {
        correlationId: String(raw.correlationId ?? ''),
        generatedAt: new Date().toISOString(),
      },
    } as never;
  }
}
