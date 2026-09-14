import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { derivedArtefactsService } from "../derived-artefacts.service";

export function useRegisterDerivedArtefact() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return derivedArtefactsService.registerDerivedArtefact(variables);
    },
    { invalidateQueries: [["derived-artefacts"]] },
  );
}

export function usePurgeDerivedArtefact() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { artefactId, ...body } = variables ?? {};
      return derivedArtefactsService.purgeDerivedArtefact(artefactId, body);
    },
    { invalidateQueries: [["derived-artefacts"]] },
  );
}

export function useExemptDerivedArtefact() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { artefactId, ...body } = variables ?? {};
      return derivedArtefactsService.exemptDerivedArtefact(artefactId, body);
    },
    { invalidateQueries: [["derived-artefacts"]] },
  );
}

export function useBlockDerivedArtefactCohortRefresh() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { artefactId, ...body } = variables ?? {};
      return derivedArtefactsService.blockDerivedArtefactCohortRefresh(artefactId, body);
    },
    { invalidateQueries: [["derived-artefacts"]] },
  );
}
