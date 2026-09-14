/**
 * Identity Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawIdentityService = {
  async listTenantApiKeys(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v0/tenants/me/api-keys` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async createTenantApiKey(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getTenantApiKey(keyId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v0/tenants/me/api-keys/${keyId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async revokeTenantApiKey(keyId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/api-keys/${keyId}`;
    const response = await apiClient.delete<any>(url, { signal });
    return response.data;
  },
  async listTenantUsers(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v0/tenants/me/users` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async createTenantUser(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getTenantUser(userId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v0/tenants/me/users/${userId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async updateTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}`;
    const response = await apiClient.patch<any>(url, { body: data, signal });
    return response.data;
  },
  async disableTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}/disable`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async enableTenantUser(userId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/tenants/me/users/${userId}/enable`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async operatorLogin(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/login`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getOperatorMe(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v0/auth/me` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async updateOperatorMe(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/me`;
    const response = await apiClient.patch<any>(url, { body: data, signal });
    return response.data;
  },
  async operatorRefresh(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/refresh`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async operatorLogout(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v0/auth/logout`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const identityService = makeService(rawIdentityService, "identity");
