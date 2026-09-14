'use client';

import type { ReactNode } from 'react';

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="page-header">
      <div>
        <h1>{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
      </div>
      {actions ? <div className="page-actions">{actions}</div> : null}
    </div>
  );
}

export function Panel({
  title,
  children,
  tone,
}: {
  title?: string;
  children: ReactNode;
  tone?: 'default' | 'amber' | 'signal' | 'cyan';
}) {
  return (
    <section className={`panel panel-${tone ?? 'default'}`}>
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  );
}

export function MonoId({ children }: { children: ReactNode }) {
  return <code className="mono-id">{children}</code>;
}

export function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: 'cyan' | 'amber' | 'signal' | 'steel';
}) {
  return <span className={`status-pill status-${tone}`}>{label}</span>;
}

export function EmptyState({ message }: { message: string }) {
  return <p className="empty-state">{message}</p>;
}
