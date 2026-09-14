import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { evidencePacksService } from "../evidence-packs.service";

export function useAssembleEvidencePack() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { orderId, ...body } = variables ?? {};
      return evidencePacksService.assembleEvidencePack(orderId, body);
    },
    { invalidateQueries: [["evidence-packs"]] },
  );
}

export function useSealEvidencePack() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { packId, ...body } = variables ?? {};
      return evidencePacksService.sealEvidencePack(packId, body);
    },
    { invalidateQueries: [["evidence-packs"]] },
  );
}

export function useVerifyEvidencePackSeal() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { packId, ...body } = variables ?? {};
      return evidencePacksService.verifyEvidencePackSeal(packId, body);
    },
    { invalidateQueries: [["evidence-packs"]] },
  );
}

export function useShareEvidencePack() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { packId, ...body } = variables ?? {};
      return evidencePacksService.shareEvidencePack(packId, body);
    },
    { invalidateQueries: [["evidence-packs"]] },
  );
}
