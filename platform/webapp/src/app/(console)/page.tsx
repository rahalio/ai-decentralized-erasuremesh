'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageHeader, Panel, StatusPill } from '@/components/ui';

const SLA_BANDS = [
  { label: 'Breaching', count: 2, tone: 'signal' as const },
  { label: 'At risk (<7d)', count: 5, tone: 'amber' as const },
  { label: 'On track', count: 11, tone: 'cyan' as const },
];

export default function OpsHomePage() {
  return (
    <>
      <PageHeader
        title="Ops home"
        subtitle="Which forget orders will breach SLA with incomplete processor or derived residue?"
        actions={
          <Link className="btn btn-primary" href="/erasure-orders">
            Open hottest order
          </Link>
        }
      />
      <div className="grid-3">
        <Panel title="Open orders by SLA">
          <ul className="stack">
            {SLA_BANDS.map((b) => (
              <li key={b.label} className="row-between">
                <span>{b.label}</span>
                <motion.span
                  className="sla-num"
                  animate={
                    b.tone === 'signal'
                      ? { opacity: [1, 0.55, 1] }
                      : { opacity: 1 }
                  }
                  transition={
                    b.tone === 'signal'
                      ? { duration: 0.26, repeat: Infinity, repeatDelay: 1.2 }
                      : undefined
                  }
                >
                  {b.count}
                </motion.span>
                <StatusPill label={b.tone} tone={b.tone} />
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Blocking overdue nodes" tone="signal">
          <p className="muted">
            Critical processor acknowledgements past SLA surface here for the
            DPO (BR-7).
          </p>
          <Link className="text-link" href="/exceptions">
            Review exceptions →
          </Link>
        </Panel>
        <Panel title="Derived residue" tone="amber">
          <p className="muted">
            Lori-Smith class artefacts still unaddressed — completion blocked
            (BR-12).
          </p>
          <Link className="text-link" href="/derived-artefacts">
            Open registry →
          </Link>
        </Panel>
      </div>
      <Panel title="Recent evidence packs">
        <p className="muted">
          Sealed packs for regulators and enterprise customers — no raw PII.
        </p>
        <Link className="text-link" href="/evidence-packs">
          Evidence vault →
        </Link>
      </Panel>
    </>
  );
}
