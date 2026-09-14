/**
 * DerivedArtefacts Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawDerivedArtefactsService = {
  async listDerivedArtefacts(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/derived-artefacts` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async registerDerivedArtefact(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/derived-artefacts`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getDerivedArtefact(artefactId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/derived-artefacts/${artefactId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async purgeDerivedArtefact(artefactId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/derived-artefacts/${artefactId}/purge`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async exemptDerivedArtefact(artefactId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/derived-artefacts/${artefactId}/exempt`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async blockDerivedArtefactCohortRefresh(artefactId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/derived-artefacts/${artefactId}/block-cohort-refresh`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const derivedArtefactsService = makeService(rawDerivedArtefactsService, "derived-artefacts");
