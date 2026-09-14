/**
 * RecipientNotices Service — regenerated from OpenAPI operationIds
 */

import { apiClient } from "@/services/shared/infrastructure";
import { makeService } from "@/services/shared/infrastructure/service-wrapper";

const rawRecipientNoticesService = {
  async listRecipientNotices(params?: Record<string, any>, signal?: AbortSignal): Promise<any> {
    const qs = params ? `?${new URLSearchParams(params as any).toString()}` : '';
    const url = `/v1/recipient-notices` + qs;
    const response = await apiClient.get<any>(url, { signal });
    return response.data;
  },
  async createRecipientNotice(data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/recipient-notices`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async sendRecipientNotice(noticeId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/recipient-notices/${noticeId}/send`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  },
  async markRecipientNoticeDisproportionate(noticeId: string, data?: any, signal?: AbortSignal): Promise<any> {
    const url = `/v1/recipient-notices/${noticeId}/disproportionate-effort`;
    const response = await apiClient.post<any>(url, { body: data, signal });
    return response.data;
  }
};

export const recipientNoticesService = makeService(rawRecipientNoticesService, "recipient-notices");
