import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const sealEvidencePack_Body = z
  .object({ incompleteNodesNoted: z.array(z.string()) })
  .partial()
  .passthrough();
const ErasureOrderId = z.string();
const EvidencePackStatus = z.enum(['draft', 'sealed']);
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
const EvidencePackId = z.string();
const EvidencePack = z
  .object({
    id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
    orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
    status: z.enum(['draft', 'sealed']),
    packHash: z.string().optional(),
    sealedAt: z.string().datetime({ offset: true }).optional(),
    retainUntil: z.string().datetime({ offset: true }),
    incompleteNodesNoted: z.array(z.string()).optional(),
    shareExpiresAt: z.string().datetime({ offset: true }).optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const EvidencePackListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
          orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
          status: z.enum(['draft', 'sealed']),
          packHash: z.string().optional(),
          sealedAt: z.string().datetime({ offset: true }).optional(),
          retainUntil: z.string().datetime({ offset: true }),
          incompleteNodesNoted: z.array(z.string()).optional(),
          shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
const EvidencePackListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
              orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
              status: z.enum(['draft', 'sealed']),
              packHash: z.string().optional(),
              sealedAt: z.string().datetime({ offset: true }).optional(),
              retainUntil: z.string().datetime({ offset: true }),
              incompleteNodesNoted: z.array(z.string()).optional(),
              shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
const EvidencePackResponse = z
  .object({
    data: z
      .object({
        id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
        orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
        status: z.enum(['draft', 'sealed']),
        packHash: z.string().optional(),
        sealedAt: z.string().datetime({ offset: true }).optional(),
        retainUntil: z.string().datetime({ offset: true }),
        incompleteNodesNoted: z.array(z.string()).optional(),
        shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
const SealEvidencePackRequest = z
  .object({ incompleteNodesNoted: z.array(z.string()) })
  .partial()
  .passthrough();
const VerifySealResult = z
  .object({
    valid: z.boolean(),
    packHash: z.string(),
    verifiedAt: z.string().datetime({ offset: true }),
  })
  .passthrough();
const VerifySealResponse = z
  .object({
    data: z
      .object({
        valid: z.boolean(),
        packHash: z.string(),
        verifiedAt: z.string().datetime({ offset: true }),
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
const ShareEvidencePackRequest = z
  .object({ ttlHours: z.number().int().gte(1).lte(168).default(24) })
  .partial()
  .passthrough();
const ShareEvidencePackResult = z
  .object({
    shareUrl: z.string().url(),
    expiresAt: z.string().datetime({ offset: true }),
    packHash: z.string(),
  })
  .passthrough();
const ShareEvidencePackResponse = z
  .object({
    data: z
      .object({
        shareUrl: z.string().url(),
        expiresAt: z.string().datetime({ offset: true }),
        packHash: z.string(),
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
  sealEvidencePack_Body,
  ErasureOrderId,
  EvidencePackStatus,
  Problem,
  EvidencePackId,
  EvidencePack,
  EvidencePackListData,
  ResponseMeta,
  EvidencePackListResponse,
  EvidencePackResponse,
  SealEvidencePackRequest,
  VerifySealResult,
  VerifySealResponse,
  ShareEvidencePackRequest,
  ShareEvidencePackResult,
  ShareEvidencePackResponse,
};

const endpoints = makeApi([
  {
    method: 'post',
    path: '/v1/erasure-orders/:orderId/evidence-pack',
    alias: 'assembleEvidencePack',
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
            id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['draft', 'sealed']),
            packHash: z.string().optional(),
            sealedAt: z.string().datetime({ offset: true }).optional(),
            retainUntil: z.string().datetime({ offset: true }),
            incompleteNodesNoted: z.array(z.string()).optional(),
            shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
    method: 'get',
    path: '/v1/evidence-packs',
    alias: 'listEvidencePacks',
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
        schema: z.enum(['draft', 'sealed']).optional(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
                  orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
                  status: z.enum(['draft', 'sealed']),
                  packHash: z.string().optional(),
                  sealedAt: z.string().datetime({ offset: true }).optional(),
                  retainUntil: z.string().datetime({ offset: true }),
                  incompleteNodesNoted: z.array(z.string()).optional(),
                  shareExpiresAt: z
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
    ],
  },
  {
    method: 'get',
    path: '/v1/evidence-packs/:packId',
    alias: 'getEvidencePack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'packId',
        type: 'Path',
        schema: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['draft', 'sealed']),
            packHash: z.string().optional(),
            sealedAt: z.string().datetime({ offset: true }).optional(),
            retainUntil: z.string().datetime({ offset: true }),
            incompleteNodesNoted: z.array(z.string()).optional(),
            shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/evidence-packs/:packId/seal',
    alias: 'sealEvidencePack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: sealEvidencePack_Body.optional(),
      },
      {
        name: 'packId',
        type: 'Path',
        schema: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            id: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
            orderId: z.string().regex(/^eor_[0-9A-HJKMNP-TV-Z]{26}$/),
            status: z.enum(['draft', 'sealed']),
            packHash: z.string().optional(),
            sealedAt: z.string().datetime({ offset: true }).optional(),
            retainUntil: z.string().datetime({ offset: true }),
            incompleteNodesNoted: z.array(z.string()).optional(),
            shareExpiresAt: z.string().datetime({ offset: true }).optional(),
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
    path: '/v1/evidence-packs/:packId/share',
    alias: 'shareEvidencePack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: z
          .object({ ttlHours: z.number().int().gte(1).lte(168).default(24) })
          .partial()
          .passthrough()
          .optional(),
      },
      {
        name: 'packId',
        type: 'Path',
        schema: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
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
            shareUrl: z.string().url(),
            expiresAt: z.string().datetime({ offset: true }),
            packHash: z.string(),
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
    path: '/v1/evidence-packs/:packId/verify-seal',
    alias: 'verifyEvidencePackSeal',
    requestFormat: 'json',
    parameters: [
      {
        name: 'packId',
        type: 'Path',
        schema: z.string().regex(/^evp_[0-9A-HJKMNP-TV-Z]{26}$/),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            valid: z.boolean(),
            packHash: z.string(),
            verifiedAt: z.string().datetime({ offset: true }),
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
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
