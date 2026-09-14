import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { recipientNoticesService } from "../recipient-notices.service";

export function useListRecipientNotices(query?: Record<string, any>) {
  return useTenantQuery(
    ["recipient-notices", "listRecipientNotices", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      recipientNoticesService.listRecipientNotices(query, signal),
  );
}
