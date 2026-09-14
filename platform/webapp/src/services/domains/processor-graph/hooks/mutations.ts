import { useTenantMutation } from "@/services/shared/infrastructure/tenant-mutation";
import { processorGraphService } from "../processor-graph.service";

export function useRegisterProcessorNode() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return processorGraphService.registerProcessorNode(variables);
    },
    { invalidateQueries: [["processor-graph"]] },
  );
}

export function useUpdateProcessorNode() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { nodeId, ...body } = variables ?? {};
      return processorGraphService.updateProcessorNode(nodeId, body);
    },
    { invalidateQueries: [["processor-graph"]] },
  );
}

export function useTestProcessorNodeAckEndpoint() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      const { nodeId, ...body } = variables ?? {};
      return processorGraphService.testProcessorNodeAckEndpoint(nodeId, body);
    },
    { invalidateQueries: [["processor-graph"]] },
  );
}

export function useLinkProcessorEdge() {
  return useTenantMutation(
    async (_orgId: string | null, variables: any) => {
      return processorGraphService.linkProcessorEdge(variables);
    },
    { invalidateQueries: [["processor-graph"]] },
  );
}
