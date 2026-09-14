/**
 * ProcessorGraph Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawProcessorGraphService = {
  async listProcessorNodes(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/processor-nodes` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async registerProcessorNode(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/processor-nodes`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async getProcessorNode(nodeId: string, params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/processor-nodes/${nodeId}` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async updateProcessorNode(nodeId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/processor-nodes/${nodeId}`;
    const response = await apiClient.patch<any>(url, { body: data, signal });
    return response.data;
  },
  async testProcessorNodeAckEndpoint(nodeId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/processor-nodes/${nodeId}/test-acknowledgement-endpoint`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async listProcessorGraphEdges(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/processor-graph/edges` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async linkProcessorEdge(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/processor-graph/edges`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const processorGraphService = makeService(rawProcessorGraphService, "processor-graph");
