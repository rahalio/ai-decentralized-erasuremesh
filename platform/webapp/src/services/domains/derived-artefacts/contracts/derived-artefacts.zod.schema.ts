/**
 * derived-artefacts Domain Contracts
 * Re-exports Zod schemas from @erasuremesh/core.
 */

import { derivedartefactsSchemas as coreSchemas } from "@erasuremesh/core/derived-artefacts";
import type { z } from "zod";

export const derivedartefactsSchemas = coreSchemas as Record<string, z.ZodTypeAny>;
