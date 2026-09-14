/**
 * Recipient Notices Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/recipient-notices.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type NoticeStatus = components["schemas"]["NoticeStatus"];
export type RecipientNotice = components["schemas"]["RecipientNotice"];
export type RecipientNoticeCreate = components["schemas"]["RecipientNoticeCreate"];
export type RecipientNoticeListData = components["schemas"]["RecipientNoticeListData"];
export type MarkDisproportionateRequest = components["schemas"]["MarkDisproportionateRequest"];
export type MarkNoticeSentRequest = components["schemas"]["MarkNoticeSentRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateRecipientNoticeRequestInput = NonNullable<operations["createRecipientNotice"]["requestBody"]>["content"]["application/json"];
export type SendRecipientNoticeRequestInput = NonNullable<operations["sendRecipientNotice"]["requestBody"]>["content"]["application/json"];
export type MarkRecipientNoticeDisproportionateRequestInput = NonNullable<operations["markRecipientNoticeDisproportionate"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRecipientNoticesParams = NonNullable<operations["listRecipientNotices"]["parameters"]["query"]>;
export type SendRecipientNoticeParams = operations["sendRecipientNotice"]["parameters"]["path"];
export type MarkRecipientNoticeDisproportionateParams = operations["markRecipientNoticeDisproportionate"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListRecipientNoticesResponse = operations["listRecipientNotices"]["responses"]["200"]["content"]["application/json"];
export type CreateRecipientNoticeResponse = operations["createRecipientNotice"]["responses"]["201"]["content"]["application/json"];
export type SendRecipientNoticeResponse = operations["sendRecipientNotice"]["responses"]["200"]["content"]["application/json"];
export type MarkRecipientNoticeDisproportionateResponse = operations["markRecipientNoticeDisproportionate"]["responses"]["200"]["content"]["application/json"];


