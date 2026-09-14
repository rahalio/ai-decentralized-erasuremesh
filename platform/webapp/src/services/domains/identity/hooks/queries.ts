import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { identityService } from "../identity.service";

export function useListTenantApiKeys(query?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "listTenantApiKeys", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      identityService.listTenantApiKeys(query, signal),
  );
}

export function useGetTenantApiKey(keyId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "getTenantApiKey", keyId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      identityService.getTenantApiKey(keyId, query, signal),
  );
}

export function useListTenantUsers(query?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "listTenantUsers", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      identityService.listTenantUsers(query, signal),
  );
}

export function useGetTenantUser(userId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "getTenantUser", userId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      identityService.getTenantUser(userId, query, signal),
  );
}

export function useGetOperatorMe(query?: Record<string, any>) {
  return useTenantQuery(
    ["identity", "getOperatorMe", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      identityService.getOperatorMe(query, signal),
  );
}
