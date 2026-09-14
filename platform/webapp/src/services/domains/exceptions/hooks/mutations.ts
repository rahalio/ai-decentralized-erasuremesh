import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { exceptionsService } from "../exceptions.service";

export function useCreateException() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return exceptionsService.createException(variables);
    },
    { invalidateQueries: [["exceptions"]] },
  );
}

export function useDecideException() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { exceptionId, ...body } = variables ?? {};
      return exceptionsService.decideException(exceptionId, body);
    },
    { invalidateQueries: [["exceptions"]] },
  );
}
