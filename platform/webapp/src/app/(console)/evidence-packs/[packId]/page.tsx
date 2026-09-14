'use client';

import { useParams } from 'next/navigation';
import { PageHeader, Panel, MonoId, StatusPill } from '@/components/ui';
import {
  useGetEvidencePack,
  useVerifyEvidencePackSeal,
  useShareEvidencePack,
} from '@/services/domains/evidence-packs/hooks';

export default function EvidencePackDetailPage() {
  const { packId } = useParams<{ packId: string }>();
  const packQ = useGetEvidencePack(packId);
  const verify = useVerifyEvidencePackSeal();
  const share = useShareEvidencePack();
  const pack = (packQ.data as any)?.data ?? packQ.data;

  return (
    <>
      <p className="brand-seal">Erasuremesh</p>
      <PageHeader
        title="Evidence pack viewer"
        subtitle="Sealed cascade proof — hashes only, no PII payload."
      />
      <Panel>
        {packQ.isLoading ? <p className="muted">Loading…</p> : null}
        {pack ? (
          <>
            <p>
              <MonoId>{pack.id}</MonoId>
            </p>
            <StatusPill
              label={pack.status}
              tone={pack.status === 'sealed' ? 'cyan' : 'steel'}
            />
            {pack.packHash ? (
              <p className="muted">
                hash <MonoId>{pack.packHash}</MonoId>
              </p>
            ) : null}
            <div className="row-gap" style={{ marginTop: '1rem' }}>
              <button
                className="btn"
                type="button"
                onClick={() => verify.mutate({ packId })}
              >
                Verify seal
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => share.mutate({ packId, ttlHours: 24 })}
              >
                Share (24h)
              </button>
            </div>
            {verify.data ? (
              <p className="muted" role="status">
                Verify result: {JSON.stringify((verify.data as any)?.data ?? verify.data)}
              </p>
            ) : null}
            {share.data ? (
              <p className="muted" role="status">
                Share:{' '}
                {(share.data as any)?.data?.shareUrl ??
                  (share.data as any)?.shareUrl}
              </p>
            ) : null}
          </>
        ) : null}
      </Panel>
    </>
  );
}
