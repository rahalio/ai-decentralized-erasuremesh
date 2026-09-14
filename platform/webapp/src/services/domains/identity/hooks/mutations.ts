import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { identityService } from "../identity.service";

export function useCreateTenantApiKey() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.createTenantApiKey(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useRevokeTenantApiKey() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { keyId, ...body } = variables ?? {};
      return identityService.revokeTenantApiKey(keyId, body);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useCreateTenantUser() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.createTenantUser(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useUpdateTenantUser() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { userId, ...body } = variables ?? {};
      return identityService.updateTenantUser(userId, body);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useDisableTenantUser() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { userId, ...body } = variables ?? {};
      return identityService.disableTenantUser(userId, body);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useEnableTenantUser() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { userId, ...body } = variables ?? {};
      return identityService.enableTenantUser(userId, body);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useOperatorLogin() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.operatorLogin(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useUpdateOperatorMe() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.updateOperatorMe(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useOperatorRefresh() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.operatorRefresh(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}

export function useOperatorLogout() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return identityService.operatorLogout(variables);
    },
    { invalidateQueries: [["identity"]] },
  );
}
