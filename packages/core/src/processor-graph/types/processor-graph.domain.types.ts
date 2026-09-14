/**
 * Processor Graph Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/processor-graph.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type AckEndpointTestResult = components["schemas"]["AckEndpointTestResult"];
export type ContractualRole = components["schemas"]["ContractualRole"];
export type GraphEdge = components["schemas"]["GraphEdge"];
export type GraphEdgeCreate = components["schemas"]["GraphEdgeCreate"];
export type GraphEdgeListData = components["schemas"]["GraphEdgeListData"];
export type ProcessorNode = components["schemas"]["ProcessorNode"];
export type ProcessorNodeCreate = components["schemas"]["ProcessorNodeCreate"];
export type ProcessorNodeListData = components["schemas"]["ProcessorNodeListData"];
export type ProcessorNodeRole = components["schemas"]["ProcessorNodeRole"];
export type ProcessorNodeStatus = components["schemas"]["ProcessorNodeStatus"];
export type ProcessorNodeUpdate = components["schemas"]["ProcessorNodeUpdate"];
export type Edge = operations["listProcessorGraphEdges"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterProcessorNodeRequestInput = NonNullable<operations["registerProcessorNode"]["requestBody"]>["content"]["application/json"];
export type UpdateProcessorNodeRequestInput = NonNullable<operations["updateProcessorNode"]["requestBody"]>["content"]["application/json"];
export type UpdateProcessorNodeRequest = UpdateProcessorNodeRequestInput;
export type LinkProcessorEdgeRequestInput = NonNullable<operations["linkProcessorEdge"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListProcessorNodesParams = NonNullable<operations["listProcessorNodes"]["parameters"]["query"]>;
export type GetProcessorNodeParams = operations["getProcessorNode"]["parameters"]["path"];
export type UpdateProcessorNodeParams = operations["updateProcessorNode"]["parameters"]["path"];
export type TestProcessorNodeAckEndpointParams = operations["testProcessorNodeAckEndpoint"]["parameters"]["path"];
export type ListProcessorGraphEdgesParams = NonNullable<operations["listProcessorGraphEdges"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListProcessorNodesResponse = operations["listProcessorNodes"]["responses"]["200"]["content"]["application/json"];
export type RegisterProcessorNodeResponse = operations["registerProcessorNode"]["responses"]["201"]["content"]["application/json"];
export type GetProcessorNodeResponse = operations["getProcessorNode"]["responses"]["200"]["content"]["application/json"];
export type UpdateProcessorNodeResponse = operations["updateProcessorNode"]["responses"]["200"]["content"]["application/json"];
export type TestProcessorNodeAckEndpointResponse = operations["testProcessorNodeAckEndpoint"]["responses"]["200"]["content"]["application/json"];
export type ListProcessorGraphEdgesResponse = operations["listProcessorGraphEdges"]["responses"]["200"]["content"]["application/json"];
export type LinkProcessorEdgeResponse = operations["linkProcessorEdge"]["responses"]["201"]["content"]["application/json"];


