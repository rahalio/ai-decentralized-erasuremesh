'use client';

import { useParams } from 'next/navigation';
import { PageHeader, Panel, StatusPill, MonoId } from '@/components/ui';
import {
  useGetErasureOrder,
  useGetErasureOrderCompletionPolicy,
  useListErasureOrderTasks,
} from '@/services/domains/erasure-orders/hooks';

export default function ErasureOrderDetailPage() {
  const params = useParams<{ orderId: string }>();
  const orderId = params.orderId;
  const orderQ = useGetErasureOrder(orderId);
  const tasksQ = useListErasureOrderTasks(orderId);
  const policyQ = useGetErasureOrderCompletionPolicy(orderId);

  const order = (orderQ.data as any)?.data ?? orderQ.data;
  const tasks =
    (tasksQ.data as any)?.data?.items ?? (tasksQ.data as any)?.items ?? [];
  const gates =
    (policyQ.data as any)?.data?.gates ??
    (policyQ.data as any)?.gates ??
    order?.completionGates ??
    [];
  const canComplete =
    (policyQ.data as any)?.data?.canComplete ??
    (policyQ.data as any)?.canComplete;

  return (
    <>
      <PageHeader
        title="Order detail"
        subtitle="Fan-out tasks, SLA extensions, Lori-Smith completion checklist."
      />
      <div className="grid-2">
        <Panel title="Order">
          {orderQ.isLoading ? <p className="muted">Loading…</p> : null}
          {order ? (
            <>
              <p>
                <MonoId>{order.id}</MonoId>
              </p>
              <p className="muted">
                Subject <MonoId>{order.subjectRef}</MonoId> · channel{' '}
                {order.channel}
              </p>
              <StatusPill label={order.status} tone="steel" />
            </>
          ) : null}
        </Panel>
        <Panel
          title="Completion policy"
          tone={canComplete === false ? 'amber' : 'default'}
        >
          <ul className="stack">
            {gates.map((g: any) => (
              <li key={g.key} className="row-between">
                <span>{g.key}</span>
                <StatusPill
                  label={g.satisfied ? 'ok' : 'blocked'}
                  tone={g.satisfied ? 'cyan' : 'amber'}
                />
              </li>
            ))}
            {gates.length === 0 ? (
              <li className="muted">Gates load after dispatch.</li>
            ) : null}
          </ul>
          {canComplete === false ? (
            <p className="banner-amber" role="status">
              Close refused — derived residue or critical node incomplete
              (BR-12).
            </p>
          ) : null}
        </Panel>
      </div>
      <Panel title="Fan-out tasks">
        <ul className="stack">
          {tasks.map((t: any) => (
            <li key={t.id} className="row-between">
              <MonoId>{t.id}</MonoId>
              <StatusPill
                label={t.status}
                tone={
                  t.status === 'acknowledged'
                    ? 'cyan'
                    : t.status === 'failed'
                      ? 'signal'
                      : 'amber'
                }
              />
            </li>
          ))}
          {tasks.length === 0 ? (
            <li className="muted">No tasks yet — dispatch against the graph.</li>
          ) : null}
        </ul>
      </Panel>
    </>
  );
}
