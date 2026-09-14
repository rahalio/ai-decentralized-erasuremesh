/**
 * recipient-notices Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { recipientnoticesSchemas as coreSchemas } from "@erasuremesh/core/recipient-notices";
import type { z } from "zod";

export const recipientnoticesSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
