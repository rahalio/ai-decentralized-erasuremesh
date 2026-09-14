import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { exceptionsService } from "../exceptions.service";

export function useListExceptions(query?: Record<string, any>) {
  return useTenantQuery(
    ["exceptions", "listExceptions", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      exceptionsService.listExceptions(query, signal),
  );
}

export function useGetException(exceptionId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["exceptions", "getException", exceptionId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      exceptionsService.getException(exceptionId, query, signal),
  );
}
