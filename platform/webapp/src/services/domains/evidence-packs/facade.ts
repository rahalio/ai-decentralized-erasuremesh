/** EvidencePacks Facade */

import { evidencePacksService } from "./evidence-packs.service";

export const evidencePacksFacade = {
  async listEvidencePacks(...args: Parameters<typeof evidencePacksService.listEvidencePacks>): Promise<any> {
    return evidencePacksService.listEvidencePacks(...args);
  },
  async getEvidencePack(...args: Parameters<typeof evidencePacksService.getEvidencePack>): Promise<any> {
    return evidencePacksService.getEvidencePack(...args);
  },
  async assembleEvidencePack(...args: Parameters<typeof evidencePacksService.assembleEvidencePack>): Promise<any> {
    return evidencePacksService.assembleEvidencePack(...args);
  },
  async sealEvidencePack(...args: Parameters<typeof evidencePacksService.sealEvidencePack>): Promise<any> {
    return evidencePacksService.sealEvidencePack(...args);
  },
  async verifyEvidencePackSeal(...args: Parameters<typeof evidencePacksService.verifyEvidencePackSeal>): Promise<any> {
    return evidencePacksService.verifyEvidencePackSeal(...args);
  },
  async shareEvidencePack(...args: Parameters<typeof evidencePacksService.shareEvidencePack>): Promise<any> {
    return evidencePacksService.shareEvidencePack(...args);
  }
};
