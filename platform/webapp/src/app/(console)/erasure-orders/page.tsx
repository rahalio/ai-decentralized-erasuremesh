'use client';

import Link from 'next/link';
import { PageHeader, Panel, StatusPill, MonoId, EmptyState } from '@/components/ui';
import { useListErasureOrders } from '@/services/domains/erasure-orders/hooks';

function slaTone(dueAt?: string) {
  if (!dueAt) return 'steel' as const;
  const ms = new Date(dueAt).getTime() - Date.now();
  if (ms < 0) return 'signal' as const;
  if (ms < 7 * 86400000) return 'amber' as const;
  return 'cyan' as const;
}

export default function ErasureOrdersPage() {
  const { data, isLoading, isError, refetch } = useListErasureOrders();
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];

  return (
    <>
      <PageHeader
        title="Erasure order desk"
        subtitle="Channel-agnostic intake, fan-out tasks, SLA clock, completion gates."
        actions={
          <>
            <button className="btn" type="button" onClick={() => refetch()}>
              Refresh
            </button>
            <Link className="btn btn-primary" href="/erasure-orders/new">
              Open order
            </Link>
          </>
        }
      />
      <Panel title="Queue">
        {isLoading ? <p className="muted">Loading orders…</p> : null}
        {isError ? <p className="error">Failed to load orders.</p> : null}
        {!isLoading && items.length === 0 ? (
          <EmptyState message="No open orders — start guided intake." />
        ) : null}
        <ul className="stack">
          {items.map((order: any) => (
            <li key={order.id} className="order-row">
              <div>
                <Link href={`/erasure-orders/${order.id}`} className="text-link">
                  <MonoId>{order.id}</MonoId>
                </Link>
                <p className="muted">
                  subject <MonoId>{order.subjectRef}</MonoId>
                  {order.tenantId ? (
                    <>
                      {' '}
                      · tenant <MonoId>{order.tenantId}</MonoId>
                    </>
                  ) : null}
                </p>
              </div>
              <div className="row-gap">
                <StatusPill
                  label={order.status ?? 'open'}
                  tone={order.status === 'blocked' ? 'signal' : 'steel'}
                />
                <StatusPill
                  label={order.dueAt ? new Date(order.dueAt).toLocaleDateString() : 'SLA'}
                  tone={slaTone(order.dueAt)}
                />
              </div>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
