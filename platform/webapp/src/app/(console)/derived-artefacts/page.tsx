'use client';

import { PageHeader, Panel, StatusPill, MonoId, EmptyState } from '@/components/ui';
import { useListDerivedArtefacts } from '@/services/domains/derived-artefacts/hooks';

export default function DerivedArtefactsPage() {
  const { data, isLoading, isError, refetch } = useListDerivedArtefacts();
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];
  const residue = items.filter(
    (a: any) => a.status !== 'purged' && a.status !== 'exempt',
  );

  return (
    <>
      <PageHeader
        title="Derived artefact registry"
        subtitle="Personas, embeddings, segments — Lori-Smith residue blocks complete (BR-2, BR-12)."
        actions={
          <button className="btn" type="button" onClick={() => refetch()}>
            Refresh
          </button>
        }
      />
      {residue.length > 0 ? (
        <p className="banner-amber" role="status">
          Inventory incomplete / residue live — cannot close related orders.
        </p>
      ) : null}
      <Panel title="Artefacts">
        {isLoading ? <p className="muted">Loading…</p> : null}
        {isError ? <p className="error">Failed to load artefacts.</p> : null}
        {!isLoading && items.length === 0 ? (
          <EmptyState message="No derived artefacts registered for the current filters." />
        ) : null}
        <ul className="stack">
          {items.map((a: any) => (
            <li key={a.id} className="order-row">
              <div>
                <MonoId>{a.id}</MonoId>
                <p className="muted">
                  {a.artefactType} · order <MonoId>{a.orderId}</MonoId>
                </p>
              </div>
              <StatusPill
                label={a.status}
                tone={
                  a.status === 'purged'
                    ? 'cyan'
                    : a.status === 'exempt'
                      ? 'steel'
                      : 'amber'
                }
              />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
