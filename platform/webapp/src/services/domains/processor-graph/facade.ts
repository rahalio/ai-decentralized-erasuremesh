/** ProcessorGraph Facade */

import { processorGraphService } from "./processor-graph.service";

export const processorGraphFacade = {
  async listProcessorNodes(...args: Parameters<typeof processorGraphService.listProcessorNodes>): Promise<any> {
    return processorGraphService.listProcessorNodes(...args);
  },
  async registerProcessorNode(...args: Parameters<typeof processorGraphService.registerProcessorNode>): Promise<any> {
    return processorGraphService.registerProcessorNode(...args);
  },
  async getProcessorNode(...args: Parameters<typeof processorGraphService.getProcessorNode>): Promise<any> {
    return processorGraphService.getProcessorNode(...args);
  },
  async updateProcessorNode(...args: Parameters<typeof processorGraphService.updateProcessorNode>): Promise<any> {
    return processorGraphService.updateProcessorNode(...args);
  },
  async testProcessorNodeAckEndpoint(...args: Parameters<typeof processorGraphService.testProcessorNodeAckEndpoint>): Promise<any> {
    return processorGraphService.testProcessorNodeAckEndpoint(...args);
  },
  async listProcessorGraphEdges(...args: Parameters<typeof processorGraphService.listProcessorGraphEdges>): Promise<any> {
    return processorGraphService.listProcessorGraphEdges(...args);
  },
  async linkProcessorEdge(...args: Parameters<typeof processorGraphService.linkProcessorEdge>): Promise<any> {
    return processorGraphService.linkProcessorEdge(...args);
  }
};
