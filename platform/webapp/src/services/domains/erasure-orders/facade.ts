/** ErasureOrders Facade */

import { erasureOrdersService } from "./erasure-orders.service";

export const erasureOrdersFacade = {
  async listErasureOrders(...args: Parameters<typeof erasureOrdersService.listErasureOrders>): Promise<any> {
    return erasureOrdersService.listErasureOrders(...args);
  },
  async createErasureOrder(...args: Parameters<typeof erasureOrdersService.createErasureOrder>): Promise<any> {
    return erasureOrdersService.createErasureOrder(...args);
  },
  async getErasureOrder(...args: Parameters<typeof erasureOrdersService.getErasureOrder>): Promise<any> {
    return erasureOrdersService.getErasureOrder(...args);
  },
  async dispatchErasureOrder(...args: Parameters<typeof erasureOrdersService.dispatchErasureOrder>): Promise<any> {
    return erasureOrdersService.dispatchErasureOrder(...args);
  },
  async extendErasureOrderSla(...args: Parameters<typeof erasureOrdersService.extendErasureOrderSla>): Promise<any> {
    return erasureOrdersService.extendErasureOrderSla(...args);
  },
  async getErasureOrderCompletionPolicy(...args: Parameters<typeof erasureOrdersService.getErasureOrderCompletionPolicy>): Promise<any> {
    return erasureOrdersService.getErasureOrderCompletionPolicy(...args);
  },
  async completeErasureOrder(...args: Parameters<typeof erasureOrdersService.completeErasureOrder>): Promise<any> {
    return erasureOrdersService.completeErasureOrder(...args);
  },
  async listErasureOrderTasks(...args: Parameters<typeof erasureOrdersService.listErasureOrderTasks>): Promise<any> {
    return erasureOrdersService.listErasureOrderTasks(...args);
  },
  async acknowledgeErasureTask(...args: Parameters<typeof erasureOrdersService.acknowledgeErasureTask>): Promise<any> {
    return erasureOrdersService.acknowledgeErasureTask(...args);
  }
};
