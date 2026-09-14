/**
 * erasure-orders Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { erasureordersSchemas as coreSchemas } from "@erasuremesh/core/erasure-orders";
import type { z } from "zod";

export const erasureordersSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
