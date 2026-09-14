/**
 * Evidence Packs Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/evidence-packs.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type EvidencePack = components["schemas"]["EvidencePack"];
export type EvidencePackListData = components["schemas"]["EvidencePackListData"];
export type EvidencePackStatus = components["schemas"]["EvidencePackStatus"];
export type ShareEvidencePackResult = components["schemas"]["ShareEvidencePackResult"];
export type VerifySealResult = components["schemas"]["VerifySealResult"];
export type SealEvidencePackRequest = components["schemas"]["SealEvidencePackRequest"];
export type ShareEvidencePackRequest = components["schemas"]["ShareEvidencePackRequest"];
export type VerifySeal = components["schemas"]["VerifySealResponse"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SealEvidencePackRequestInput = NonNullable<operations["sealEvidencePack"]["requestBody"]>["content"]["application/json"];
export type ShareEvidencePackRequestInput = NonNullable<operations["shareEvidencePack"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListEvidencePacksParams = NonNullable<operations["listEvidencePacks"]["parameters"]["query"]>;
export type GetEvidencePackParams = operations["getEvidencePack"]["parameters"]["path"];
export type AssembleEvidencePackParams = operations["assembleEvidencePack"]["parameters"]["path"];
export type SealEvidencePackParams = operations["sealEvidencePack"]["parameters"]["path"];
export type VerifyEvidencePackSealParams = operations["verifyEvidencePackSeal"]["parameters"]["path"];
export type ShareEvidencePackParams = operations["shareEvidencePack"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListEvidencePacksResponse = operations["listEvidencePacks"]["responses"]["200"]["content"]["application/json"];
export type GetEvidencePackResponse = operations["getEvidencePack"]["responses"]["200"]["content"]["application/json"];
export type AssembleEvidencePackResponse = operations["assembleEvidencePack"]["responses"]["201"]["content"]["application/json"];
export type SealEvidencePackResponse = operations["sealEvidencePack"]["responses"]["200"]["content"]["application/json"];
export type VerifyEvidencePackSealResponse = operations["verifyEvidencePackSeal"]["responses"]["200"]["content"]["application/json"];
export type ShareEvidencePackResponse = operations["shareEvidencePack"]["responses"]["200"]["content"]["application/json"];


