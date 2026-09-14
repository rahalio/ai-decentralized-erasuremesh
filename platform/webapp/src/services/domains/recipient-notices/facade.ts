/** RecipientNotices Facade */

import { recipientNoticesService } from "./recipient-notices.service";

export const recipientNoticesFacade = {
  async listRecipientNotices(...args: Parameters<typeof recipientNoticesService.listRecipientNotices>): Promise<any> {
    return recipientNoticesService.listRecipientNotices(...args);
  },
  async createRecipientNotice(...args: Parameters<typeof recipientNoticesService.createRecipientNotice>): Promise<any> {
    return recipientNoticesService.createRecipientNotice(...args);
  },
  async sendRecipientNotice(...args: Parameters<typeof recipientNoticesService.sendRecipientNotice>): Promise<any> {
    return recipientNoticesService.sendRecipientNotice(...args);
  },
  async markRecipientNoticeDisproportionate(...args: Parameters<typeof recipientNoticesService.markRecipientNoticeDisproportionate>): Promise<any> {
    return recipientNoticesService.markRecipientNoticeDisproportionate(...args);
  }
};
