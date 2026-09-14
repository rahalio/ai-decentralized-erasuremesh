/**
 * evidence-packs Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { evidencepacksSchemas as coreSchemas } from "@erasuremesh/core/evidence-packs";
import type { z } from "zod";

export const evidencepacksSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
