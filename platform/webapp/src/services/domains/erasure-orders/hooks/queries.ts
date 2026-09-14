import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { erasureOrdersService } from "../erasure-orders.service";

export function useListErasureOrders(query?: Record<string, any>) {
  return useTenantQuery(
    ["erasure-orders", "listErasureOrders", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      erasureOrdersService.listErasureOrders(query, signal),
  );
}

export function useGetErasureOrder(orderId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["erasure-orders", "getErasureOrder", orderId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      erasureOrdersService.getErasureOrder(orderId, query, signal),
  );
}

export function useGetErasureOrderCompletionPolicy(orderId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["erasure-orders", "getErasureOrderCompletionPolicy", orderId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      erasureOrdersService.getErasureOrderCompletionPolicy(orderId, query, signal),
  );
}

export function useListErasureOrderTasks(orderId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["erasure-orders", "listErasureOrderTasks", orderId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      erasureOrdersService.listErasureOrderTasks(orderId, query, signal),
  );
}
