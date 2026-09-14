/**
 * Exceptions Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/exceptions.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ExceptionCreate = components["schemas"]["ExceptionCreate"];
export type ExceptionKind = components["schemas"]["ExceptionKind"];
export type ExceptionListData = components["schemas"]["ExceptionListData"];
export type ExceptionRecord = components["schemas"]["ExceptionRecord"];
export type ExceptionStatus = components["schemas"]["ExceptionStatus"];
export type ExceptionDecisionRequest = components["schemas"]["ExceptionDecisionRequest"];
export type Exception = components["schemas"]["ExceptionResponse"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateExceptionRequestInput = NonNullable<operations["createException"]["requestBody"]>["content"]["application/json"];
export type DecideExceptionRequestInput = NonNullable<operations["decideException"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListExceptionsParams = NonNullable<operations["listExceptions"]["parameters"]["query"]>;
export type GetExceptionParams = operations["getException"]["parameters"]["path"];
export type DecideExceptionParams = operations["decideException"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListExceptionsResponse = operations["listExceptions"]["responses"]["200"]["content"]["application/json"];
export type CreateExceptionResponse = operations["createException"]["responses"]["201"]["content"]["application/json"];
export type GetExceptionResponse = operations["getException"]["responses"]["200"]["content"]["application/json"];
export type DecideExceptionResponse = operations["decideException"]["responses"]["200"]["content"]["application/json"];


