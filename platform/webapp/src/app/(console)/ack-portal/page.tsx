'use client';

import { useState } from 'react';
import { PageHeader, Panel, MonoId } from '@/components/ui';
import { useAcknowledgeErasureTask } from '@/services/domains/erasure-orders/hooks';

export default function AckPortalPage() {
  const ack = useAcknowledgeErasureTask();
  const [orderId, setOrderId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [proofHash, setProofHash] = useState('');
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    try {
      await ack.mutateAsync({
        orderId,
        taskId,
        status: 'acknowledged',
        proofHash,
      });
      setMsg('Acknowledgement recorded.');
    } catch (err) {
      setMsg(err instanceof Error ? err.message : 'Ack failed');
    }
  }

  return (
    <>
      <PageHeader
        title="Processor acknowledgement portal"
        subtitle="Narrow surface for processors — attach proof hash, no database access."
      />
      <Panel>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Order id
            <input
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
            />
          </label>
          <label>
            Task id
            <input
              required
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
            />
          </label>
          <label>
            Proof hash
            <input
              required
              value={proofHash}
              onChange={(e) => setProofHash(e.target.value)}
              className="mono-input"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Acknowledge purge
          </button>
          {msg ? (
            <p className="muted" role="status">
              {msg}{' '}
              {taskId ? (
                <>
                  task <MonoId>{taskId}</MonoId>
                </>
              ) : null}
            </p>
          ) : null}
        </form>
      </Panel>
    </>
  );
}
