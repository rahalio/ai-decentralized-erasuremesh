/**
 * ErasureOrders Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawErasureOrdersService = {
  async listErasureOrders(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/erasure-orders` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async createErasureOrder(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getErasureOrder(orderId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/erasure-orders/${orderId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async dispatchErasureOrder(orderId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders/${orderId}/dispatch`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async extendErasureOrderSla(orderId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders/${orderId}/sla-extensions`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getErasureOrderCompletionPolicy(orderId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/erasure-orders/${orderId}/completion-policy` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async completeErasureOrder(orderId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders/${orderId}/complete`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async listErasureOrderTasks(orderId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/erasure-orders/${orderId}/tasks` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async acknowledgeErasureTask(orderId: string, taskId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/erasure-orders/${orderId}/tasks/${taskId}/acknowledgement`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const erasureOrdersService = makeService(rawErasureOrdersService, "erasure-orders");
