import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false,
  sourcemap: true,
  clean: true,
  splitting: false,
  outDir: 'dist',
  external: [/^@erasuremesh\//, /^@aws-sdk\//, /^@fastify\//, 'fastify', 'dotenv', 'jsonwebtoken', 'zod', '@zodios/core'],
});
