/** Exceptions Facade */

import { exceptionsService } from "./exceptions.service";

export const exceptionsFacade = {
  async listExceptions(...args: Parameters<typeof exceptionsService.listExceptions>): Promise<any> {
    return exceptionsService.listExceptions(...args);
  },
  async createException(...args: Parameters<typeof exceptionsService.createException>): Promise<any> {
    return exceptionsService.createException(...args);
  },
  async getException(...args: Parameters<typeof exceptionsService.getException>): Promise<any> {
    return exceptionsService.getException(...args);
  },
  async decideException(...args: Parameters<typeof exceptionsService.decideException>): Promise<any> {
    return exceptionsService.decideException(...args);
  }
};
