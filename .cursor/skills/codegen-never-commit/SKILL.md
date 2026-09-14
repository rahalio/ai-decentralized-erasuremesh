---
name: codegen-never-commit
description: >-
  Enforce that .codegen is never committed or pushed to GitHub for Erasuremesh.
  Use when cloning, committing, syncing the scaffold, or running zero-codegen.
---

# Never commit `.codegen`

## Rule

- **Do not** commit or push `.codegen/` to GitHub.
- `.codegen/` is in `.gitignore` as a safeguard.
- Treat `.codegen` as local-only tooling synced from the codegen scaffold baseline.

## Obtain / refresh locally

```bash
# From this repo root — copy tool only (do not modify the scaffold repo)
rsync -a --delete \
  --exclude '__pycache__/' \
  /path/to/zero-apps-codegen-scaffold/.codegen/ \
  ./.codegen/

pnpm codegen:paths
```

## Before every commit

Confirm `git status` does **not** list `.codegen/` or files under it. If it does, unstage and fix `.gitignore`.

## Related

- Scaffold baseline: `zero-apps-codegen-scaffold`
- Pipeline skill: `ddd-codegen`
- Package scope in this product: `@erasuremesh`
