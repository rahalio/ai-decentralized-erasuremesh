/** DerivedArtefacts Facade */

import { derivedArtefactsService } from "./derived-artefacts.service";

export const derivedArtefactsFacade = {
  async listDerivedArtefacts(...args: Parameters<typeof derivedArtefactsService.listDerivedArtefacts>): Promise<any> {
    return derivedArtefactsService.listDerivedArtefacts(...args);
  },
  async registerDerivedArtefact(...args: Parameters<typeof derivedArtefactsService.registerDerivedArtefact>): Promise<any> {
    return derivedArtefactsService.registerDerivedArtefact(...args);
  },
  async getDerivedArtefact(...args: Parameters<typeof derivedArtefactsService.getDerivedArtefact>): Promise<any> {
    return derivedArtefactsService.getDerivedArtefact(...args);
  },
  async purgeDerivedArtefact(...args: Parameters<typeof derivedArtefactsService.purgeDerivedArtefact>): Promise<any> {
    return derivedArtefactsService.purgeDerivedArtefact(...args);
  },
  async exemptDerivedArtefact(...args: Parameters<typeof derivedArtefactsService.exemptDerivedArtefact>): Promise<any> {
    return derivedArtefactsService.exemptDerivedArtefact(...args);
  },
  async blockDerivedArtefactCohortRefresh(...args: Parameters<typeof derivedArtefactsService.blockDerivedArtefactCohortRefresh>): Promise<any> {
    return derivedArtefactsService.blockDerivedArtefactCohortRefresh(...args);
  }
};
