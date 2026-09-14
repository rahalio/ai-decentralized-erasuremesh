'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <main className="login-hero">
      <div className="mesh-bg" aria-hidden />
      <motion.div
        className="login-copy"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <p className="brand-hero">Erasuremesh</p>
        <h1>Forget across the whole chain</h1>
        <p className="muted">
          Fan one right-to-be-forgotten order through processors, derived
          artefacts, and sealed evidence — before the SLA clock expires.
        </p>
        <Link className="btn btn-primary" href="/">
          Enter ops console
        </Link>
      </motion.div>
    </main>
  );
}
