'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const NAV = [
  { href: '/', label: 'Ops home' },
  { href: '/processor-graph', label: 'Processor graph' },
  { href: '/erasure-orders', label: 'Erasure orders' },
  { href: '/derived-artefacts', label: 'Derived artefacts' },
  { href: '/recipient-notices', label: 'Recipient notices' },
  { href: '/evidence-packs', label: 'Evidence packs' },
  { href: '/exceptions', label: 'Exceptions' },
  { href: '/ack-portal', label: 'Ack portal' },
];

export function AppShell({
  children,
  brandSeal = false,
}: {
  children: ReactNode;
  brandSeal?: boolean;
}) {
  const pathname = usePathname();

  return (
    <div className="app-shell">
      <div className="mesh-bg" aria-hidden />
      <header className="topbar">
        <Link href="/" className="brand">
          <motion.span
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            Erasuremesh
          </motion.span>
        </Link>
        <div className="topbar-meta">
          <span className="tenant-badge">Tenant scoped</span>
          <Link href="/login" className="ghost-link">
            Sign in
          </Link>
        </div>
      </header>
      <div className="shell-body">
        <nav className="sidenav" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx('nav-item', active && 'nav-item-active')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <main className="main-pane">
          {brandSeal ? (
            <p className="brand-seal" aria-label="Erasuremesh evidence seal">
              Erasuremesh
            </p>
          ) : null}
          {children}
        </main>
      </div>
    </div>
  );
}
