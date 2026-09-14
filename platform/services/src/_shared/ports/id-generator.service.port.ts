/**
 * IdGeneratorService Port — starter prefixes (extend in consumer repos).
 */

import type { DomainCode } from '@erasuremesh/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  pgrId(): string;
  eroId(): string;
  darId(): string;
  rcnId(): string;
  evpId(): string;
  excId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
