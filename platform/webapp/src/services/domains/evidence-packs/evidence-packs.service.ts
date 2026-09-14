/**
 * EvidencePacks Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawEvidencePacksService = {
  async listEvidencePacks(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/evidence-packs` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async getEvidencePack(packId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/evidence-packs/${packId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async assembleEvidencePack(orderId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders/${orderId}/evidence-pack`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async sealEvidencePack(packId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/evidence-packs/${packId}/seal`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async verifyEvidencePackSeal(packId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/evidence-packs/${packId}/verify-seal`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async shareEvidencePack(packId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/evidence-packs/${packId}/share`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const evidencePacksService = makeService(rawEvidencePacksService, "evidence-packs");
