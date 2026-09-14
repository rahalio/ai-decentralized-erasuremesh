'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader, Panel, StatusPill, MonoId } from '@/components/ui';
import { useListProcessorNodes } from '@/services/domains/processor-graph/hooks';

export default function ProcessorGraphPage() {
  const { data, isLoading, isError, refetch } = useListProcessorNodes();
  const [selected, setSelected] = useState<string | null>(null);
  const items = (data as any)?.data?.items ?? (data as any)?.items ?? [];

  return (
    <>
      <PageHeader
        title="Processor graph"
        subtitle="Controller → processor → sub-processor liability map with contractual roles (BR-1, BR-8)."
        actions={
          <button className="btn" type="button" onClick={() => refetch()}>
            Refresh
          </button>
        }
      />
      <div className="grid-2">
        <Panel title="Cascade canvas">
          {isLoading ? <p className="muted">Loading graph…</p> : null}
          {isError ? (
            <p className="error">Could not load nodes. Retry with request id.</p>
          ) : null}
          {!isLoading && items.length === 0 ? (
            <p className="empty-state">
              Empty graph — import from CLM or register the first edge.
            </p>
          ) : null}
          <ul className="graph-list">
            {items.map((node: any, idx: number) => (
              <motion.li
                key={node.id ?? idx}
                layout
                className={
                  selected === node.id ? 'graph-node selected' : 'graph-node'
                }
                onClick={() => setSelected(node.id)}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.18 }}
              >
                <div className="row-between">
                  <strong>{node.name ?? 'Unnamed node'}</strong>
                  <StatusPill
                    label={node.critical ? 'critical' : node.role ?? 'node'}
                    tone={node.critical ? 'signal' : 'cyan'}
                  />
                </div>
                <MonoId>{node.id}</MonoId>
              </motion.li>
            ))}
          </ul>
        </Panel>
        <Panel title="Node detail">
          {selected ? (
            <>
              <p>
                Selected <MonoId>{selected}</MonoId>
              </p>
              <p className="muted">
                Edge roles (controller / processor / joint) drive the liability
                narrative. Test acknowledgement endpoint from node actions.
              </p>
            </>
          ) : (
            <p className="muted">Select a node to inspect contacts and ack API.</p>
          )}
        </Panel>
      </div>
    </>
  );
}
