# Erasuremesh

OpenAPI-first DDD monorepo for the Erasuremesh privacy-ops console — processor-graph fan-out, derived-artefact purge, evidence packs, and dual-control exceptions.

Package scope: `@erasuremesh/*`. Product specs: [`PRODUCT.md`](./PRODUCT.md), [`WEBAPP.md`](./WEBAPP.md), [`USER_STORIES.md`](./USER_STORIES.md).

## Layout

```
packages/openapi-core   # one YAML (+ schemas) per domain
packages/core           # generated domain models
platform/services       # use cases / ports
platform/adapters       # DynamoDB + sandbox
platform/api-server     # Fastify
platform/webapp         # Next.js console
.codegen/               # local-only zero_codegen (never commit)
```

## Quick start

```bash
# If .codegen is missing, sync from zero-apps-codegen-scaffold then:
pnpm install
pnpm codegen:paths
pnpm lint:openapi && pnpm bundle:openapi
pnpm build
pnpm dev:api    # http://127.0.0.1:4000/health
pnpm dev:web    # http://127.0.0.1:3000
```

Demo API key (sandbox): `X-API-Key: ddd_demo_local_dev_key`

## Domains

| Domain | OpenAPI |
|--------|---------|
| identity | `packages/openapi-core/src/identity.yaml` |
| processor-graph | `…/processor-graph.yaml` |
| erasure-orders | `…/erasure-orders.yaml` |
| derived-artefacts | `…/derived-artefacts.yaml` |
| recipient-notices | `…/recipient-notices.yaml` |
| evidence-packs | `…/evidence-packs.yaml` |
| exceptions | `…/exceptions.yaml` |

## Codegen rules

- **New domain:** Mode A full multi-layer generate, then hand-fit DI.
- **YAML edit:** Mode B — bundle → `pnpm codegen:core` → handwrite platform.
- **Never commit `.codegen/`** — see `.cursor/skills/codegen-never-commit`.

See [`docs/CODEGEN.md`](./docs/CODEGEN.md).
