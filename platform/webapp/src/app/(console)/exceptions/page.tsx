'use client';

import { useState } from 'react';
import { PageHeader, Panel, StatusPill, MonoId, EmptyState } from '@/components/ui';
import {
  useListExceptions,
  useDecideException,
} from '@/services/domains/exceptions/hooks';

export default function ExceptionsPage() {
  const { data, isLoading, isError, refetch } = useListExceptions({
    status: 'pending_second_approval',
  });
  const decide = useDecideException();
  const [note, setNote] = useState('');
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];

  return (
    <>
      <PageHeader
        title="Exceptions · dual control"
        subtitle="Force-close and SLA breaches require two authorised operators (BR-7, BR-10)."
        actions={
          <button className="btn" type="button" onClick={() => refetch()}>
            Refresh
          </button>
        }
      />
      <div className="grid-2">
        <Panel title="Pending overrides">
          {isLoading ? <p className="muted">Loading…</p> : null}
          {isError ? <p className="error">Failed to load exceptions.</p> : null}
          {!isLoading && items.length === 0 ? (
            <EmptyState message="No pending force-closes." />
          ) : null}
          <ul className="stack">
            {items.map((ex: any) => (
              <li key={ex.id} className="order-row">
                <div>
                  <MonoId>{ex.id}</MonoId>
                  <p className="muted">
                    {ex.kind} · order <MonoId>{ex.orderId}</MonoId>
                  </p>
                  <p>{ex.rationale}</p>
                </div>
                <StatusPill label={ex.status} tone="signal" />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Second approver">
          <label className="form">
            Decision rationale / remediation plan
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
            />
          </label>
          <div className="row-gap">
            <button
              className="btn btn-primary"
              type="button"
              disabled={!items[0]}
              onClick={() =>
                decide.mutate({
                  exceptionId: items[0]?.id,
                  decision: 'approve',
                  decisionRationale: note,
                  remediationPlan: note,
                })
              }
            >
              Approve override
            </button>
            <button
              className="btn"
              type="button"
              disabled={!items[0]}
              onClick={() =>
                decide.mutate({
                  exceptionId: items[0]?.id,
                  decision: 'deny',
                  decisionRationale: note,
                })
              }
            >
              Deny
            </button>
          </div>
        </Panel>
      </div>
    </>
  );
}
