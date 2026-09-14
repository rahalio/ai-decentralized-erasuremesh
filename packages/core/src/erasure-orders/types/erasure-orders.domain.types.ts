/**
 * Erasure Orders Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/erasure-orders.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type CompletionGate = components["schemas"]["CompletionGate"];
export type ErasureChannel = components["schemas"]["ErasureChannel"];
export type ErasureOrder = components["schemas"]["ErasureOrder"];
export type ErasureOrderCreate = components["schemas"]["ErasureOrderCreate"];
export type ErasureOrderListData = components["schemas"]["ErasureOrderListData"];
export type ErasureOrderStatus = components["schemas"]["ErasureOrderStatus"];
export type ErasureTask = components["schemas"]["ErasureTask"];
export type ErasureTaskListData = components["schemas"]["ErasureTaskListData"];
export type ErasureTaskStatus = components["schemas"]["ErasureTaskStatus"];
export type LegalGround = components["schemas"]["LegalGround"];
export type SlaExtension = components["schemas"]["SlaExtension"];
export type SlaExtensionCreate = components["schemas"]["SlaExtensionCreate"];
export type TaskAcknowledgement = components["schemas"]["TaskAcknowledgement"];
export type CompletionPolicy = components["schemas"]["CompletionPolicyResponse"];
export type Task = operations["listErasureOrderTasks"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateErasureOrderRequestInput = NonNullable<operations["createErasureOrder"]["requestBody"]>["content"]["application/json"];
export type ExtendErasureOrderSlaRequestInput = NonNullable<operations["extendErasureOrderSla"]["requestBody"]>["content"]["application/json"];
export type AcknowledgeErasureTaskRequestInput = NonNullable<operations["acknowledgeErasureTask"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListErasureOrdersParams = NonNullable<operations["listErasureOrders"]["parameters"]["query"]>;
export type GetErasureOrderParams = operations["getErasureOrder"]["parameters"]["path"];
export type DispatchErasureOrderParams = operations["dispatchErasureOrder"]["parameters"]["path"];
export type ExtendErasureOrderSlaParams = operations["extendErasureOrderSla"]["parameters"]["path"];
export type GetErasureOrderCompletionPolicyParams = operations["getErasureOrderCompletionPolicy"]["parameters"]["path"];
export type CompleteErasureOrderParams = operations["completeErasureOrder"]["parameters"]["path"];
export type ListErasureOrderTasksParams = NonNullable<operations["listErasureOrderTasks"]["parameters"]["query"]>;
export type AcknowledgeErasureTaskParams = operations["acknowledgeErasureTask"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListErasureOrdersResponse = operations["listErasureOrders"]["responses"]["200"]["content"]["application/json"];
export type CreateErasureOrderResponse = operations["createErasureOrder"]["responses"]["201"]["content"]["application/json"];
export type GetErasureOrderResponse = operations["getErasureOrder"]["responses"]["200"]["content"]["application/json"];
export type DispatchErasureOrderResponse = operations["dispatchErasureOrder"]["responses"]["200"]["content"]["application/json"];
export type ExtendErasureOrderSlaResponse = operations["extendErasureOrderSla"]["responses"]["200"]["content"]["application/json"];
export type GetErasureOrderCompletionPolicyResponse = operations["getErasureOrderCompletionPolicy"]["responses"]["200"]["content"]["application/json"];
export type CompleteErasureOrderResponse = operations["completeErasureOrder"]["responses"]["200"]["content"]["application/json"];
export type ListErasureOrderTasksResponse = operations["listErasureOrderTasks"]["responses"]["200"]["content"]["application/json"];
export type AcknowledgeErasureTaskResponse = operations["acknowledgeErasureTask"]["responses"]["200"]["content"]["application/json"];


