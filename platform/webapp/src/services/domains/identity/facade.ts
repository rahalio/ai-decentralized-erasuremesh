/** Identity Facade */

import { identityService } from "./identity.service";

export const identityFacade = {
  async listTenantApiKeys(...args: Parameters<typeof identityService.listTenantApiKeys>): Promise<any> {
    return identityService.listTenantApiKeys(...args);
  },
  async createTenantApiKey(...args: Parameters<typeof identityService.createTenantApiKey>): Promise<any> {
    return identityService.createTenantApiKey(...args);
  },
  async getTenantApiKey(...args: Parameters<typeof identityService.getTenantApiKey>): Promise<any> {
    return identityService.getTenantApiKey(...args);
  },
  async revokeTenantApiKey(...args: Parameters<typeof identityService.revokeTenantApiKey>): Promise<any> {
    return identityService.revokeTenantApiKey(...args);
  },
  async listTenantUsers(...args: Parameters<typeof identityService.listTenantUsers>): Promise<any> {
    return identityService.listTenantUsers(...args);
  },
  async createTenantUser(...args: Parameters<typeof identityService.createTenantUser>): Promise<any> {
    return identityService.createTenantUser(...args);
  },
  async getTenantUser(...args: Parameters<typeof identityService.getTenantUser>): Promise<any> {
    return identityService.getTenantUser(...args);
  },
  async updateTenantUser(...args: Parameters<typeof identityService.updateTenantUser>): Promise<any> {
    return identityService.updateTenantUser(...args);
  },
  async disableTenantUser(...args: Parameters<typeof identityService.disableTenantUser>): Promise<any> {
    return identityService.disableTenantUser(...args);
  },
  async enableTenantUser(...args: Parameters<typeof identityService.enableTenantUser>): Promise<any> {
    return identityService.enableTenantUser(...args);
  },
  async operatorLogin(...args: Parameters<typeof identityService.operatorLogin>): Promise<any> {
    return identityService.operatorLogin(...args);
  },
  async getOperatorMe(...args: Parameters<typeof identityService.getOperatorMe>): Promise<any> {
    return identityService.getOperatorMe(...args);
  },
  async updateOperatorMe(...args: Parameters<typeof identityService.updateOperatorMe>): Promise<any> {
    return identityService.updateOperatorMe(...args);
  },
  async operatorRefresh(...args: Parameters<typeof identityService.operatorRefresh>): Promise<any> {
    return identityService.operatorRefresh(...args);
  },
  async operatorLogout(...args: Parameters<typeof identityService.operatorLogout>): Promise<any> {
    return identityService.operatorLogout(...args);
  }
};
