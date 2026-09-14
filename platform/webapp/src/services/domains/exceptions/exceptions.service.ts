/**
 * Exceptions Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawExceptionsService = {
  async listExceptions(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/exceptions` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async createException(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/exceptions`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getException(exceptionId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/exceptions/${exceptionId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async decideException(exceptionId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/exceptions/${exceptionId}/decide`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const exceptionsService = makeService(rawExceptionsService, "exceptions");
