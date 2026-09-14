import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { erasureOrdersService } from "../erasure-orders.service";

export function useCreateErasureOrder() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return erasureOrdersService.createErasureOrder(variables);
    },
    { invalidateQueries: [["erasure-orders"]] },
  );
}

export function useDispatchErasureOrder() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { orderId, ...body } = variables ?? {};
      return erasureOrdersService.dispatchErasureOrder(orderId, body);
    },
    { invalidateQueries: [["erasure-orders"]] },
  );
}

export function useExtendErasureOrderSla() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { orderId, ...body } = variables ?? {};
      return erasureOrdersService.extendErasureOrderSla(orderId, body);
    },
    { invalidateQueries: [["erasure-orders"]] },
  );
}

export function useCompleteErasureOrder() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { orderId, ...body } = variables ?? {};
      return erasureOrdersService.completeErasureOrder(orderId, body);
    },
    { invalidateQueries: [["erasure-orders"]] },
  );
}

export function useAcknowledgeErasureTask() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { orderId, taskId, ...body } = variables ?? {};
      return erasureOrdersService.acknowledgeErasureTask(orderId, taskId, body);
    },
    { invalidateQueries: [["erasure-orders"]] },
  );
}
