import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const createErasureOrder_Body = z
  .object({
    subjectRef: z.string().min(1).max(200),
    tenantId: z
      .string()
      .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    channel: z.enum(['written', 'verbal', 'portal', 'api']),
    legalGround: z
      .enum([
        'consent_withdrawn',
        'no_longer_necessary',
        'marketing_objection',
        'unlawful',
        'legal_obligation',
        'child_iss',
      ])
      .optional(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const extendErasureOrderSla_Body = z
  .object({
    extendedDueAt: z.string().datetime({ offset: true }),
    rationale: z.string().min(1).max(2000),
  })
  .passthrough();
const acknowledgeErasureTask_Body = z
  .object({
    status: z.enum(['acknowledged', 'failed']),
    proofHash: z.string().optional(),
    detail: z.string().optional(),
  })
  .passthrough();
const ErasureOrderStatus = z.enum([
  'open',
  'in_progress',
  'blocked',
  'completed',
  'force_closed',
]);
const TenantId = z.string();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const ErasureOrderId = z.string();
const ErasureChannel = z.enum(['written', 'verbal', 'portal', 'api']);
const LegalGround = z.enum([
  'consent_withdrawn',
  'no_longer_necessary',
  'marketing_objection',
  'unlawful',
  'legal_obligation',
  'child_iss',
]);
const CompletionGate = z
  .object({
    key: z.enum([
      'critical_nodes_acked',
      'derived_artefacts_addressed',
      'recipient_notices_addressed',
      'sla_tracked',
    ]),
    satisfied: z.boolean(),
    detail: z.string(),
  })
  .passthrough();
const SlaExtension = z
  .object({
    extendedDueAt: z.string().datetime({ offset: true }),
    rationale: z.string().min(1).max(2000),
    recordedAt: z.string().datetime({ offset: true }),
    recordedBy: z.string().optional(),
  })
  .passthrough();
const ErasureOrder = z
  .object({
    id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    subjectRef: z.string().min(1).max(200),
    tenantId: z
      .string()
      .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    status: z.enum([
      'open',
      'in_progress',
      'blocked',
      'completed',
      'force_closed',
    ]),
    channel: z.enum(['written', 'verbal', 'portal', 'api']),
    legalGround: z
      .enum([
        'consent_withdrawn',
        'no_longer_necessary',
        'marketing_objection',
        'unlawful',
        'legal_obligation',
        'child_iss',
      ])
      .optional(),
    dueAt: z.string().datetime({ offset: true }),
    derivedArtefactsPending: z.number().int().gte(0),
    completionGates: z
      .array(
        z
          .object({
            key: z.enum([
              'critical_nodes_acked',
              'derived_artefacts_addressed',
              'recipient_notices_addressed',
              'sla_tracked',
            ]),
            satisfied: z.boolean(),
            detail: z.string(),
          })
          .passthrough()
      )
      .optional(),
    slaExtensions: z
      .array(
        z
          .object({
            extendedDueAt: z.string().datetime({ offset: true }),
            rationale: z.string().min(1).max(2000),
            recordedAt: z.string().datetime({ offset: true }),
            recordedBy: z.string().optional(),
          })
          .passthrough()
      )
      .optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ErasureOrderListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
          subjectRef: z.string().min(1).max(200),
          tenantId: z
            .string()
            .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
            .optional(),
          status: z.enum([
            'open',
            'in_progress',
            'blocked',
            'completed',
            'force_closed',
          ]),
          channel: z.enum(['written', 'verbal', 'portal', 'api']),
          legalGround: z
            .enum([
              'consent_withdrawn',
              'no_longer_necessary',
              'marketing_objection',
              'unlawful',
              'legal_obligation',
              'child_iss',
            ])
            .optional(),
          dueAt: z.string().datetime({ offset: true }),
          derivedArtefactsPending: z.number().int().gte(0),
          completionGates: z
            .array(
              z
                .object({
                  key: z.enum([
                    'critical_nodes_acked',
                    'derived_artefacts_addressed',
                    'recipient_notices_addressed',
                    'sla_tracked',
                  ]),
                  satisfied: z.boolean(),
                  detail: z.string(),
                })
                .passthrough()
            )
            .optional(),
          slaExtensions: z
            .array(
              z
                .object({
                  extendedDueAt: z.string().datetime({ offset: true }),
                  rationale: z.string().min(1).max(2000),
                  recordedAt: z.string().datetime({ offset: true }),
                  recordedBy: z.string().optional(),
                })
                .passthrough()
            )
            .optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const ErasureOrderListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
              subjectRef: z.string().min(1).max(200),
              tenantId: z
                .string()
                .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
                .optional(),
              status: z.enum([
                'open',
                'in_progress',
                'blocked',
                'completed',
                'force_closed',
              ]),
              channel: z.enum(['written', 'verbal', 'portal', 'api']),
              legalGround: z
                .enum([
                  'consent_withdrawn',
                  'no_longer_necessary',
                  'marketing_objection',
                  'unlawful',
                  'legal_obligation',
                  'child_iss',
                ])
                .optional(),
              dueAt: z.string().datetime({ offset: true }),
              derivedArtefactsPending: z.number().int().gte(0),
              completionGates: z
                .array(
                  z
                    .object({
                      key: z.enum([
                        'critical_nodes_acked',
                        'derived_artefacts_addressed',
                        'recipient_notices_addressed',
                        'sla_tracked',
                      ]),
                      satisfied: z.boolean(),
                      detail: z.string(),
                    })
                    .passthrough()
                )
                .optional(),
              slaExtensions: z
                .array(
                  z
                    .object({
                      extendedDueAt: z.string().datetime({ offset: true }),
                      rationale: z.string().min(1).max(2000),
                      recordedAt: z.string().datetime({ offset: true }),
                      recordedBy: z.string().optional(),
                    })
                    .passthrough()
                )
                .optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ErasureOrderCreate = z
  .object({
    subjectRef: z.string().min(1).max(200),
    tenantId: z
      .string()
      .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
      .optional(),
    channel: z.enum(['written', 'verbal', 'portal', 'api']),
    legalGround: z
      .enum([
        'consent_withdrawn',
        'no_longer_necessary',
        'marketing_objection',
        'unlawful',
        'legal_obligation',
        'child_iss',
      ])
      .optional(),
    dueAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const ErasureOrderResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
        subjectRef: z.string().min(1).max(200),
        tenantId: z
          .string()
          .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
        status: z.enum([
          'open',
          'in_progress',
          'blocked',
          'completed',
          'force_closed',
        ]),
        channel: z.enum(['written', 'verbal', 'portal', 'api']),
        legalGround: z
          .enum([
            'consent_withdrawn',
            'no_longer_necessary',
            'marketing_objection',
            'unlawful',
            'legal_obligation',
            'child_iss',
          ])
          .optional(),
        dueAt: z.string().datetime({ offset: true }),
        derivedArtefactsPending: z.number().int().gte(0),
        completionGates: z
          .array(
            z
              .object({
                key: z.enum([
                  'critical_nodes_acked',
                  'derived_artefacts_addressed',
                  'recipient_notices_addressed',
                  'sla_tracked',
                ]),
                satisfied: z.boolean(),
                detail: z.string(),
              })
              .passthrough()
          )
          .optional(),
        slaExtensions: z
          .array(
            z
              .object({
                extendedDueAt: z.string().datetime({ offset: true }),
                rationale: z.string().min(1).max(2000),
                recordedAt: z.string().datetime({ offset: true }),
                recordedBy: z.string().optional(),
              })
              .passthrough()
          )
          .optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const SlaExtensionCreate = z
  .object({
    extendedDueAt: z.string().datetime({ offset: true }),
    rationale: z.string().min(1).max(2000),
  })
  .passthrough();
const CompletionPolicyResponse = z
  .object({
    data: z
      .object({
        canComplete: z.boolean(),
        gates: z.array(
          z
            .object({
              key: z.enum([
                'critical_nodes_acked',
                'derived_artefacts_addressed',
                'recipient_notices_addressed',
                'sla_tracked',
              ]),
              satisfied: z.boolean(),
              detail: z.string(),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const ErasureTaskId = z.string();
const ProcessorNodeId = z.string();
const ErasureTaskStatus = z.enum([
  'pending',
  'dispatched',
  'acknowledged',
  'failed',
  'waived',
]);
const ErasureTask = z
  .object({
    id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
    orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    processorNodeId: z.string().regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum([
      'pending',
      'dispatched',
      'acknowledged',
      'failed',
      'waived',
    ]),
    critical: z.boolean().default(false),
    proofHash: z.string().optional(),
    failureDetail: z.string().optional(),
    acknowledgedAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const ErasureTaskListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
          orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
          processorNodeId: z.string().regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum([
            'pending',
            'dispatched',
            'acknowledged',
            'failed',
            'waived',
          ]),
          critical: z.boolean().default(false),
          proofHash: z.string().optional(),
          failureDetail: z.string().optional(),
          acknowledgedAt: z.string().datetime({ offset: true }).optional(),
          createdAt: z.string().datetime({ offset: true }),
          updatedAt: z.string().datetime({ offset: true }),
        })
        .passthrough()
    ),
    nextCursor: z.string().optional(),
  })
  .passthrough();
const ErasureTaskListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
              orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
              processorNodeId: z.string().regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum([
                'pending',
                'dispatched',
                'acknowledged',
                'failed',
                'waived',
              ]),
              critical: z.boolean().default(false),
              proofHash: z.string().optional(),
              failureDetail: z.string().optional(),
              acknowledgedAt: z.string().datetime({ offset: true }).optional(),
              createdAt: z.string().datetime({ offset: true }),
              updatedAt: z.string().datetime({ offset: true }),
            })
            .passthrough()
        ),
        nextCursor: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const TaskAcknowledgement = z
  .object({
    status: z.enum(['acknowledged', 'failed']),
    proofHash: z.string().optional(),
    detail: z.string().optional(),
  })
  .passthrough();
const ErasureTaskResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
        orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
        processorNodeId: z.string().regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum([
          'pending',
          'dispatched',
          'acknowledged',
          'failed',
          'waived',
        ]),
        critical: z.boolean().default(false),
        proofHash: z.string().optional(),
        failureDetail: z.string().optional(),
        acknowledgedAt: z.string().datetime({ offset: true }).optional(),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  createErasureOrder_Body,
  extendErasureOrderSla_Body,
  acknowledgeErasureTask_Body,
  ErasureOrderStatus,
  TenantId,
  Problem,
  ErasureOrderId,
  ErasureChannel,
  LegalGround,
  CompletionGate,
  SlaExtension,
  ErasureOrder,
  ErasureOrderListData,
  ResponseMeta,
  ErasureOrderListResponse,
  ErasureOrderCreate,
  ErasureOrderResponse,
  SlaExtensionCreate,
  CompletionPolicyResponse,
  ErasureTaskId,
  ProcessorNodeId,
  ErasureTaskStatus,
  ErasureTask,
  ErasureTaskListData,
  ErasureTaskListResponse,
  TaskAcknowledgement,
  ErasureTaskResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/erasure-orders',
    alias: 'listErasureOrders',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['open', 'in_progress', 'blocked', 'completed', 'force_closed'])
          .optional(),
      },
      {
        name: 'tenantId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
                  subjectRef: z.string().min(1).max(200),
                  tenantId: z
                    .string()
                    .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
                    .optional(),
                  status: z.enum([
                    'open',
                    'in_progress',
                    'blocked',
                    'completed',
                    'force_closed',
                  ]),
                  channel: z.enum(['written', 'verbal', 'portal', 'api']),
                  legalGround: z
                    .enum([
                      'consent_withdrawn',
                      'no_longer_necessary',
                      'marketing_objection',
                      'unlawful',
                      'legal_obligation',
                      'child_iss',
                    ])
                    .optional(),
                  dueAt: z.string().datetime({ offset: true }),
                  derivedArtefactsPending: z.number().int().gte(0),
                  completionGates: z
                    .array(
                      z
                        .object({
                          key: z.enum([
                            'critical_nodes_acked',
                            'derived_artefacts_addressed',
                            'recipient_notices_addressed',
                            'sla_tracked',
                          ]),
                          satisfied: z.boolean(),
                          detail: z.string(),
                        })
                        .passthrough()
                    )
                    .optional(),
                  slaExtensions: z
                    .array(
                      z
                        .object({
                          extendedDueAt: z.string().datetime({ offset: true }),
                          rationale: z.string().min(1).max(2000),
                          recordedAt: z.string().datetime({ offset: true }),
                          recordedBy: z.string().optional(),
                        })
                        .passthrough()
                    )
                    .optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/erasure-orders',
    alias: 'createErasureOrder',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createErasureOrder_Body,
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            tenantId: z
              .string()
              .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            status: z.enum([
              'open',
              'in_progress',
              'blocked',
              'completed',
              'force_closed',
            ]),
            channel: z.enum(['written', 'verbal', 'portal', 'api']),
            legalGround: z
              .enum([
                'consent_withdrawn',
                'no_longer_necessary',
                'marketing_objection',
                'unlawful',
                'legal_obligation',
                'child_iss',
              ])
              .optional(),
            dueAt: z.string().datetime({ offset: true }),
            derivedArtefactsPending: z.number().int().gte(0),
            completionGates: z
              .array(
                z
                  .object({
                    key: z.enum([
                      'critical_nodes_acked',
                      'derived_artefacts_addressed',
                      'recipient_notices_addressed',
                      'sla_tracked',
                    ]),
                    satisfied: z.boolean(),
                    detail: z.string(),
                  })
                  .passthrough()
              )
              .optional(),
            slaExtensions: z
              .array(
                z
                  .object({
                    extendedDueAt: z.string().datetime({ offset: true }),
                    rationale: z.string().min(1).max(2000),
                    recordedAt: z.string().datetime({ offset: true }),
                    recordedBy: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/erasure-orders/:orderId',
    alias: 'getErasureOrder',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            tenantId: z
              .string()
              .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            status: z.enum([
              'open',
              'in_progress',
              'blocked',
              'completed',
              'force_closed',
            ]),
            channel: z.enum(['written', 'verbal', 'portal', 'api']),
            legalGround: z
              .enum([
                'consent_withdrawn',
                'no_longer_necessary',
                'marketing_objection',
                'unlawful',
                'legal_obligation',
                'child_iss',
              ])
              .optional(),
            dueAt: z.string().datetime({ offset: true }),
            derivedArtefactsPending: z.number().int().gte(0),
            completionGates: z
              .array(
                z
                  .object({
                    key: z.enum([
                      'critical_nodes_acked',
                      'derived_artefacts_addressed',
                      'recipient_notices_addressed',
                      'sla_tracked',
                    ]),
                    satisfied: z.boolean(),
                    detail: z.string(),
                  })
                  .passthrough()
              )
              .optional(),
            slaExtensions: z
              .array(
                z
                  .object({
                    extendedDueAt: z.string().datetime({ offset: true }),
                    rationale: z.string().min(1).max(2000),
                    recordedAt: z.string().datetime({ offset: true }),
                    recordedBy: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/erasure-orders/:orderId/complete',
    alias: 'completeErasureOrder',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            tenantId: z
              .string()
              .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            status: z.enum([
              'open',
              'in_progress',
              'blocked',
              'completed',
              'force_closed',
            ]),
            channel: z.enum(['written', 'verbal', 'portal', 'api']),
            legalGround: z
              .enum([
                'consent_withdrawn',
                'no_longer_necessary',
                'marketing_objection',
                'unlawful',
                'legal_obligation',
                'child_iss',
              ])
              .optional(),
            dueAt: z.string().datetime({ offset: true }),
            derivedArtefactsPending: z.number().int().gte(0),
            completionGates: z
              .array(
                z
                  .object({
                    key: z.enum([
                      'critical_nodes_acked',
                      'derived_artefacts_addressed',
                      'recipient_notices_addressed',
                      'sla_tracked',
                    ]),
                    satisfied: z.boolean(),
                    detail: z.string(),
                  })
                  .passthrough()
              )
              .optional(),
            slaExtensions: z
              .array(
                z
                  .object({
                    extendedDueAt: z.string().datetime({ offset: true }),
                    rationale: z.string().min(1).max(2000),
                    recordedAt: z.string().datetime({ offset: true }),
                    recordedBy: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Completion blocked (Lori-Smith / graph / notices)`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/erasure-orders/:orderId/completion-policy',
    alias: 'getErasureOrderCompletionPolicy',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            canComplete: z.boolean(),
            gates: z.array(
              z
                .object({
                  key: z.enum([
                    'critical_nodes_acked',
                    'derived_artefacts_addressed',
                    'recipient_notices_addressed',
                    'sla_tracked',
                  ]),
                  satisfied: z.boolean(),
                  detail: z.string(),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/erasure-orders/:orderId/dispatch',
    alias: 'dispatchErasureOrder',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            tenantId: z
              .string()
              .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            status: z.enum([
              'open',
              'in_progress',
              'blocked',
              'completed',
              'force_closed',
            ]),
            channel: z.enum(['written', 'verbal', 'portal', 'api']),
            legalGround: z
              .enum([
                'consent_withdrawn',
                'no_longer_necessary',
                'marketing_objection',
                'unlawful',
                'legal_obligation',
                'child_iss',
              ])
              .optional(),
            dueAt: z.string().datetime({ offset: true }),
            derivedArtefactsPending: z.number().int().gte(0),
            completionGates: z
              .array(
                z
                  .object({
                    key: z.enum([
                      'critical_nodes_acked',
                      'derived_artefacts_addressed',
                      'recipient_notices_addressed',
                      'sla_tracked',
                    ]),
                    satisfied: z.boolean(),
                    detail: z.string(),
                  })
                  .passthrough()
              )
              .optional(),
            slaExtensions: z
              .array(
                z
                  .object({
                    extendedDueAt: z.string().datetime({ offset: true }),
                    rationale: z.string().min(1).max(2000),
                    recordedAt: z.string().datetime({ offset: true }),
                    recordedBy: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 409,
        description: `Idempotency key reuse with different body, or state conflict`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/erasure-orders/:orderId/sla-extensions',
    alias: 'extendErasureOrderSla',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: extendErasureOrderSla_Body,
      },
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            tenantId: z
              .string()
              .regex(/^tnt_[0-9A-HJKMNP-TV-Z]{26}$/)
              .optional(),
            status: z.enum([
              'open',
              'in_progress',
              'blocked',
              'completed',
              'force_closed',
            ]),
            channel: z.enum(['written', 'verbal', 'portal', 'api']),
            legalGround: z
              .enum([
                'consent_withdrawn',
                'no_longer_necessary',
                'marketing_objection',
                'unlawful',
                'legal_obligation',
                'child_iss',
              ])
              .optional(),
            dueAt: z.string().datetime({ offset: true }),
            derivedArtefactsPending: z.number().int().gte(0),
            completionGates: z
              .array(
                z
                  .object({
                    key: z.enum([
                      'critical_nodes_acked',
                      'derived_artefacts_addressed',
                      'recipient_notices_addressed',
                      'sla_tracked',
                    ]),
                    satisfied: z.boolean(),
                    detail: z.string(),
                  })
                  .passthrough()
              )
              .optional(),
            slaExtensions: z
              .array(
                z
                  .object({
                    extendedDueAt: z.string().datetime({ offset: true }),
                    rationale: z.string().min(1).max(2000),
                    recordedAt: z.string().datetime({ offset: true }),
                    recordedBy: z.string().optional(),
                  })
                  .passthrough()
              )
              .optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/erasure-orders/:orderId/tasks',
    alias: 'listErasureOrderTasks',
    requestFormat: 'json',
    parameters: [
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
                  orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
                  processorNodeId: z
                    .string()
                    .regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum([
                    'pending',
                    'dispatched',
                    'acknowledged',
                    'failed',
                    'waived',
                  ]),
                  critical: z.boolean().default(false),
                  proofHash: z.string().optional(),
                  failureDetail: z.string().optional(),
                  acknowledgedAt: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  createdAt: z.string().datetime({ offset: true }),
                  updatedAt: z.string().datetime({ offset: true }),
                })
                .passthrough()
            ),
            nextCursor: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/erasure-orders/:orderId/tasks/:taskId/acknowledgement',
    alias: 'acknowledgeErasureTask',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: acknowledgeErasureTask_Body,
      },
      {
        name: 'orderId',
        type: 'Path',
        schema: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'taskId',
        type: 'Path',
        schema: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
      {
        name: 'Idempotency-Key',
        type: 'Header',
        schema: z.string().min(1).max(128),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^etk_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            processorNodeId: z.string().regex(/^pnd_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum([
              'pending',
              'dispatched',
              'acknowledged',
              'failed',
              'waived',
            ]),
            critical: z.boolean().default(false),
            proofHash: z.string().optional(),
            failureDetail: z.string().optional(),
            acknowledgedAt: z.string().datetime({ offset: true }).optional(),
            createdAt: z.string().datetime({ offset: true }),
            updatedAt: z.string().datetime({ offset: true }),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Malformed request`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
      {
        status: 404,
        description: `Resource not found`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
