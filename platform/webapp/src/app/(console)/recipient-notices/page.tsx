'use client';

import { PageHeader, Panel, StatusPill, MonoId, EmptyState } from '@/components/ui';
import { useListRecipientNotices } from '@/services/domains/recipient-notices/hooks';

export default function RecipientNoticesPage() {
  const { data, isLoading, isError, refetch } = useListRecipientNotices();
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];

  return (
    <>
      <PageHeader
        title="Recipient notices"
        subtitle="Notify prior recipients or record disproportionate effort (BR-4)."
        actions={
          <button className="btn" type="button" onClick={() => refetch()}>
            Refresh
          </button>
        }
      />
      <Panel>
        {isLoading ? <p className="muted">Loading…</p> : null}
        {isError ? <p className="error">Failed to load notices.</p> : null}
        {!isLoading && items.length === 0 ? (
          <EmptyState message="No prior disclosures — auto-complete with audit log when applicable." />
        ) : null}
        <ul className="stack">
          {items.map((n: any) => (
            <li key={n.id} className="order-row">
              <div>
                <MonoId>{n.id}</MonoId>
                <p className="muted">
                  recipient <MonoId>{n.recipientNodeId}</MonoId>
                </p>
              </div>
              <StatusPill
                label={n.status}
                tone={
                  n.status === 'sent'
                    ? 'cyan'
                    : n.status === 'disproportionate_effort'
                      ? 'amber'
                      : 'steel'
                }
              />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
