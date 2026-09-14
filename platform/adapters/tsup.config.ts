import { defineConfig } from 'tsup';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function collectEntries(dir: string, acc: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === 'dist') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      collectEntries(full, acc);
    } else if (name.endsWith('.ts') && !name.endsWith('.d.ts')) {
      acc.push(full);
    }
  }
  return acc;
}

export default defineConfig({
  entry: collectEntries('src'),
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: false,
  outDir: 'dist',
  external: [/^@erasuremesh\//, /^@aws-sdk\//, 'ulid', 'pdf-lib', '@pdf-lib/fontkit'],
});
