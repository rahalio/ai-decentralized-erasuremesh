import { useTenantQuery } from "@/services/shared/infrastructure/tenant-query";
import { processorGraphService } from "../processor-graph.service";

export function useListProcessorNodes(query?: Record<string, any>) {
  return useTenantQuery(
    ["processor-graph", "listProcessorNodes", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      processorGraphService.listProcessorNodes(query, signal),
  );
}

export function useGetProcessorNode(nodeId: string, query?: Record<string, any>) {
  return useTenantQuery(
    ["processor-graph", "getProcessorNode", nodeId, query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      processorGraphService.getProcessorNode(nodeId, query, signal),
  );
}

export function useListProcessorGraphEdges(query?: Record<string, any>) {
  return useTenantQuery(
    ["processor-graph", "listProcessorGraphEdges", query],
    async (_orgId: string | null, signal?: AbortSignal) =>
      processorGraphService.listProcessorGraphEdges(query, signal),
  );
}
