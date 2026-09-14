import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { derivedArtefactsService } from "../derived-artefacts.service";

export function useListDerivedArtefacts(query?: Record<string, any>) {
  return useTenantQuery(
    ["derived-artefacts", "listDerivedArtefacts", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      derivedArtefactsService.listDerivedArtefacts(query, signal),
  );
}

export function useGetDerivedArtefact(artefactId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["derived-artefacts", "getDerivedArtefact", artefactId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      derivedArtefactsService.getDerivedArtefact(artefactId, query, signal),
  );
}
