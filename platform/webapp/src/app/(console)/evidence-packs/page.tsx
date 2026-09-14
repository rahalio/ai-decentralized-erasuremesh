'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHeader, Panel, StatusPill, MonoId, EmptyState } from '@/components/ui';
import { useListEvidencePacks } from '@/services/domains/evidence-packs/hooks';

export default function EvidencePacksPage() {
  const { data, isLoading, isError, refetch } = useListEvidencePacks();
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];

  return (
    <>
      <p className="brand-seal">Erasuremesh</p>
      <PageHeader
        title="Evidence packs"
        subtitle="Regulator and customer proof without raw personal data (BR-5, BR-11)."
        actions={
          <button className="btn" type="button" onClick={() => refetch()}>
            Refresh
          </button>
        }
      />
      <Panel>
        {isLoading ? <p className="muted">Loading…</p> : null}
        {isError ? <p className="error">Failed to load packs.</p> : null}
        {!isLoading && items.length === 0 ? (
          <EmptyState message="No packs yet — assemble from a completed cascade." />
        ) : null}
        <ul className="stack">
          {items.map((p: any) => (
            <li key={p.id} className="order-row">
              <div>
                <Link href={`/evidence-packs/${p.id}`} className="text-link">
                  <MonoId>{p.id}</MonoId>
                </Link>
                <p className="muted">
                  order <MonoId>{p.orderId}</MonoId>
                </p>
              </div>
              <motion.div
                initial={false}
                animate={
                  p.status === 'sealed' ? { scale: [1, 1.04, 1] } : { scale: 1 }
                }
                transition={{ duration: 0.2 }}
              >
                <StatusPill
                  label={p.status}
                  tone={p.status === 'sealed' ? 'cyan' : 'steel'}
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
