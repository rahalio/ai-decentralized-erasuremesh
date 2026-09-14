import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerDerivedArtefact_Body = z
  .object({
    orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    subjectRef: z.string().min(1).max(200),
    artefactType: z.enum([
      'persona',
      'embedding',
      'segment_membership',
      'model_weight_contribution',
    ]),
    systemName: z.string().optional(),
  })
  .passthrough();
const purgeDerivedArtefact_Body = z
  .object({
    purgeProofHash: z.string().min(1),
    method: z.enum(['delete', 'retrain_exclude', 'suppress']).optional(),
  })
  .passthrough();
const ErasureOrderId = z.string();
const ArtefactStatus = z.enum([
  'identified',
  'purge_pending',
  'purged',
  'exempt',
]);
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
const DerivedArtefactId = z.string();
const ArtefactType = z.enum([
  'persona',
  'embedding',
  'segment_membership',
  'model_weight_contribution',
]);
const PurgeMethod = z.enum(['delete', 'retrain_exclude', 'suppress']);
const DerivedArtefact = z
  .object({
    id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
    orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    subjectRef: z.string().min(1).max(200),
    artefactType: z.enum([
      'persona',
      'embedding',
      'segment_membership',
      'model_weight_contribution',
    ]),
    status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
    blocksCompletion: z.boolean().default(true),
    systemName: z.string().optional(),
    purgeProofHash: z.string().optional(),
    purgeMethod: z.enum(['delete', 'retrain_exclude', 'suppress']).optional(),
    exemptRationale: z.string().optional(),
    cohortRefreshBlocked: z.boolean().optional().default(false),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const DerivedArtefactListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
          orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
          subjectRef: z.string().min(1).max(200),
          artefactType: z.enum([
            'persona',
            'embedding',
            'segment_membership',
            'model_weight_contribution',
          ]),
          status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
          blocksCompletion: z.boolean().default(true),
          systemName: z.string().optional(),
          purgeProofHash: z.string().optional(),
          purgeMethod: z
            .enum(['delete', 'retrain_exclude', 'suppress'])
            .optional(),
          exemptRationale: z.string().optional(),
          cohortRefreshBlocked: z.boolean().optional().default(false),
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
const DerivedArtefactListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
              orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
              subjectRef: z.string().min(1).max(200),
              artefactType: z.enum([
                'persona',
                'embedding',
                'segment_membership',
                'model_weight_contribution',
              ]),
              status: z.enum([
                'identified',
                'purge_pending',
                'purged',
                'exempt',
              ]),
              blocksCompletion: z.boolean().default(true),
              systemName: z.string().optional(),
              purgeProofHash: z.string().optional(),
              purgeMethod: z
                .enum(['delete', 'retrain_exclude', 'suppress'])
                .optional(),
              exemptRationale: z.string().optional(),
              cohortRefreshBlocked: z.boolean().optional().default(false),
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
const DerivedArtefactCreate = z
  .object({
    orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    subjectRef: z.string().min(1).max(200),
    artefactType: z.enum([
      'persona',
      'embedding',
      'segment_membership',
      'model_weight_contribution',
    ]),
    systemName: z.string().optional(),
  })
  .passthrough();
const DerivedArtefactResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
        orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
        subjectRef: z.string().min(1).max(200),
        artefactType: z.enum([
          'persona',
          'embedding',
          'segment_membership',
          'model_weight_contribution',
        ]),
        status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
        blocksCompletion: z.boolean().default(true),
        systemName: z.string().optional(),
        purgeProofHash: z.string().optional(),
        purgeMethod: z
          .enum(['delete', 'retrain_exclude', 'suppress'])
          .optional(),
        exemptRationale: z.string().optional(),
        cohortRefreshBlocked: z.boolean().optional().default(false),
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
const PurgeDerivedArtefactRequest = z
  .object({
    purgeProofHash: z.string().min(1),
    method: z.enum(['delete', 'retrain_exclude', 'suppress']).optional(),
  })
  .passthrough();
const ExemptDerivedArtefactRequest = z
  .object({ rationale: z.string().min(1).max(4000) })
  .passthrough();

export const schemas: any = {
  registerDerivedArtefact_Body,
  purgeDerivedArtefact_Body,
  ErasureOrderId,
  ArtefactStatus,
  Problem,
  DerivedArtefactId,
  ArtefactType,
  PurgeMethod,
  DerivedArtefact,
  DerivedArtefactListData,
  ResponseMeta,
  DerivedArtefactListResponse,
  DerivedArtefactCreate,
  DerivedArtefactResponse,
  PurgeDerivedArtefactRequest,
  ExemptDerivedArtefactRequest,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/derived-artefacts',
    alias: 'listDerivedArtefacts',
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
        name: 'orderId',
        type: 'Query',
        schema: z
          .string()
          .regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/)
          .optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['identified', 'purge_pending', 'purged', 'exempt'])
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
                  id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
                  orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
                  subjectRef: z.string().min(1).max(200),
                  artefactType: z.enum([
                    'persona',
                    'embedding',
                    'segment_membership',
                    'model_weight_contribution',
                  ]),
                  status: z.enum([
                    'identified',
                    'purge_pending',
                    'purged',
                    'exempt',
                  ]),
                  blocksCompletion: z.boolean().default(true),
                  systemName: z.string().optional(),
                  purgeProofHash: z.string().optional(),
                  purgeMethod: z
                    .enum(['delete', 'retrain_exclude', 'suppress'])
                    .optional(),
                  exemptRationale: z.string().optional(),
                  cohortRefreshBlocked: z.boolean().optional().default(false),
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
    path: '/v1/derived-artefacts',
    alias: 'registerDerivedArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerDerivedArtefact_Body,
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
            id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            artefactType: z.enum([
              'persona',
              'embedding',
              'segment_membership',
              'model_weight_contribution',
            ]),
            status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
            blocksCompletion: z.boolean().default(true),
            systemName: z.string().optional(),
            purgeProofHash: z.string().optional(),
            purgeMethod: z
              .enum(['delete', 'retrain_exclude', 'suppress'])
              .optional(),
            exemptRationale: z.string().optional(),
            cohortRefreshBlocked: z.boolean().optional().default(false),
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
    path: '/v1/derived-artefacts/:artefactId',
    alias: 'getDerivedArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            artefactType: z.enum([
              'persona',
              'embedding',
              'segment_membership',
              'model_weight_contribution',
            ]),
            status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
            blocksCompletion: z.boolean().default(true),
            systemName: z.string().optional(),
            purgeProofHash: z.string().optional(),
            purgeMethod: z
              .enum(['delete', 'retrain_exclude', 'suppress'])
              .optional(),
            exemptRationale: z.string().optional(),
            cohortRefreshBlocked: z.boolean().optional().default(false),
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
    path: '/v1/derived-artefacts/:artefactId/block-cohort-refresh',
    alias: 'blockDerivedArtefactCohortRefresh',
    requestFormat: 'json',
    parameters: [
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            artefactType: z.enum([
              'persona',
              'embedding',
              'segment_membership',
              'model_weight_contribution',
            ]),
            status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
            blocksCompletion: z.boolean().default(true),
            systemName: z.string().optional(),
            purgeProofHash: z.string().optional(),
            purgeMethod: z
              .enum(['delete', 'retrain_exclude', 'suppress'])
              .optional(),
            exemptRationale: z.string().optional(),
            cohortRefreshBlocked: z.boolean().optional().default(false),
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
    path: '/v1/derived-artefacts/:artefactId/exempt',
    alias: 'exemptDerivedArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ rationale: z.string().min(1).max(4000) })
          .passthrough(),
      },
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            artefactType: z.enum([
              'persona',
              'embedding',
              'segment_membership',
              'model_weight_contribution',
            ]),
            status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
            blocksCompletion: z.boolean().default(true),
            systemName: z.string().optional(),
            purgeProofHash: z.string().optional(),
            purgeMethod: z
              .enum(['delete', 'retrain_exclude', 'suppress'])
              .optional(),
            exemptRationale: z.string().optional(),
            cohortRefreshBlocked: z.boolean().optional().default(false),
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
    method: 'post',
    path: '/v1/derived-artefacts/:artefactId/purge',
    alias: 'purgeDerivedArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: purgeDerivedArtefact_Body,
      },
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            id: z.string().regex(/^dar_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            subjectRef: z.string().min(1).max(200),
            artefactType: z.enum([
              'persona',
              'embedding',
              'segment_membership',
              'model_weight_contribution',
            ]),
            status: z.enum(['identified', 'purge_pending', 'purged', 'exempt']),
            blocksCompletion: z.boolean().default(true),
            systemName: z.string().optional(),
            purgeProofHash: z.string().optional(),
            purgeMethod: z
              .enum(['delete', 'retrain_exclude', 'suppress'])
              .optional(),
            exemptRationale: z.string().optional(),
            cohortRefreshBlocked: z.boolean().optional().default(false),
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
