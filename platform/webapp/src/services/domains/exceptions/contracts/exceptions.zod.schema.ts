/**
 * exceptions Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { exceptionsSchemas as coreSchemas } from "@erasuremesh/core/exceptions";
import type { z } from "zod";

export const exceptionsSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
