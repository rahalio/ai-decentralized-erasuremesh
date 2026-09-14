'use client';

import { useState } from 'react';
import { PageHeader, Panel } from '@/components/ui';
import { useCreateErasureOrder } from '@/services/domains/erasure-orders/hooks';
import { useRouter } from 'next/navigation';

export default function NewErasureOrderPage() {
  const router = useRouter();
  const create = useCreateErasureOrder();
  const [subjectRef, setSubjectRef] = useState('');
  const [channel, setChannel] = useState('portal');
  const [tenantId, setTenantId] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    try {
      const res = await create.mutateAsync({
        subjectRef,
        channel,
        ...(tenantId ? { tenantId } : {}),
      });
      const id = (res as any)?.data?.id ?? (res as any)?.id;
      if (id) router.push(`/erasure-orders/${id}`);
      else router.push('/erasure-orders');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Create failed');
    }
  }

  return (
    <>
      <PageHeader
        title="Open erasure order"
        subtitle="Verbal, written, portal, or API intake — tenant-scoped when set (BR-6)."
      />
      <Panel>
        <form className="form" onSubmit={onSubmit}>
          <label>
            Subject ref (pseudonym)
            <input
              required
              value={subjectRef}
              onChange={(e) => setSubjectRef(e.target.value)}
            />
          </label>
          <label>
            Channel
            <select
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option value="written">written</option>
              <option value="verbal">verbal</option>
              <option value="portal">portal</option>
              <option value="api">api</option>
            </select>
          </label>
          <label>
            Tenant id (optional)
            <input
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              placeholder="tnt_…"
            />
          </label>
          {error ? <p className="error">{error}</p> : null}
          <button className="btn btn-primary" type="submit">
            Create order
          </button>
        </form>
      </Panel>
    </>
  );
}
