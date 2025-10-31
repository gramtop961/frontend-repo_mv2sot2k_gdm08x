import React from 'react';
import { motion } from 'framer-motion';

export default function PowerhouseText() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center px-6 text-center">
      <div className="max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]"
        >
          The Powerhouse of Possibilities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 text-base md:text-lg text-white/80"
        >
          Explore a living grid of energy. Scroll to zoom. Click and drag to look around.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-fuchsia-400/80" />
          <span className="text-sm md:text-base text-white/70">Interactive hero — optimized for performance</span>
        </motion.div>
      </div>
    </div>
  );
}
