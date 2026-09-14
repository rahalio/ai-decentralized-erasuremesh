/**
 * identity Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { identitySchemas as coreSchemas } from "@erasuremesh/core/identity";
import type { z } from "zod";

export const identitySchemas = coreSchemas as Record<string, z.ZodTypeAny>;
