import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { evidencePacksService } from "../evidence-packs.service";

export function useListEvidencePacks(query?: Record<string, any>) {
  return useTenantQuery(
    ["evidence-packs", "listEvidencePacks", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      evidencePacksService.listEvidencePacks(query, signal),
  );
}

export function useGetEvidencePack(packId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["evidence-packs", "getEvidencePack", packId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      evidencePacksService.getEvidencePack(packId, query, signal),
  );
}
