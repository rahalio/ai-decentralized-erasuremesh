import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { recipientNoticesService } from "../recipient-notices.service";

export function useCreateRecipientNotice() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return recipientNoticesService.createRecipientNotice(variables);
    },
    { invalidateQueries: [["recipient-notices"]] },
  );
}

export function useSendRecipientNotice() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { noticeId, ...body } = variables ?? {};
      return recipientNoticesService.sendRecipientNotice(noticeId, body);
    },
    { invalidateQueries: [["recipient-notices"]] },
  );
}

export function useMarkRecipientNoticeDisproportionate() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { noticeId, ...body } = variables ?? {};
      return recipientNoticesService.markRecipientNoticeDisproportionate(noticeId, body);
    },
    { invalidateQueries: [["recipient-notices"]] },
  );
}
