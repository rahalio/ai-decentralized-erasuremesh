/**
 * Derived Artefacts Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/derived-artefacts.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ArtefactStatus = components["schemas"]["ArtefactStatus"];
export type ArtefactType = components["schemas"]["ArtefactType"];
export type DerivedArtefact = components["schemas"]["DerivedArtefact"];
export type DerivedArtefactCreate = components["schemas"]["DerivedArtefactCreate"];
export type DerivedArtefactListData = components["schemas"]["DerivedArtefactListData"];
export type PurgeMethod = components["schemas"]["PurgeMethod"];
export type ExemptDerivedArtefactRequest = components["schemas"]["ExemptDerivedArtefactRequest"];
export type PurgeDerivedArtefactRequest = components["schemas"]["PurgeDerivedArtefactRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterDerivedArtefactRequestInput = NonNullable<operations["registerDerivedArtefact"]["requestBody"]>["content"]["application/json"];
export type PurgeDerivedArtefactRequestInput = NonNullable<operations["purgeDerivedArtefact"]["requestBody"]>["content"]["application/json"];
export type ExemptDerivedArtefactRequestInput = NonNullable<operations["exemptDerivedArtefact"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListDerivedArtefactsParams = NonNullable<operations["listDerivedArtefacts"]["parameters"]["query"]>;
export type GetDerivedArtefactParams = operations["getDerivedArtefact"]["parameters"]["path"];
export type PurgeDerivedArtefactParams = operations["purgeDerivedArtefact"]["parameters"]["path"];
export type ExemptDerivedArtefactParams = operations["exemptDerivedArtefact"]["parameters"]["path"];
export type BlockDerivedArtefactCohortRefreshParams = operations["blockDerivedArtefactCohortRefresh"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListDerivedArtefactsResponse = operations["listDerivedArtefacts"]["responses"]["200"]["content"]["application/json"];
export type RegisterDerivedArtefactResponse = operations["registerDerivedArtefact"]["responses"]["201"]["content"]["application/json"];
export type GetDerivedArtefactResponse = operations["getDerivedArtefact"]["responses"]["200"]["content"]["application/json"];
export type PurgeDerivedArtefactResponse = operations["purgeDerivedArtefact"]["responses"]["202"]["content"]["application/json"];
export type ExemptDerivedArtefactResponse = operations["exemptDerivedArtefact"]["responses"]["200"]["content"]["application/json"];
export type BlockDerivedArtefactCohortRefreshResponse = operations["blockDerivedArtefactCohortRefresh"]["responses"]["200"]["content"]["application/json"];


