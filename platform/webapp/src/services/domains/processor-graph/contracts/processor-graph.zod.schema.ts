/**
 * processor-graph Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { processorgraphSchemas as coreSchemas } from "@erasuremesh/core/processor-graph";
import type { z } from "zod";

export const processorgraphSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
