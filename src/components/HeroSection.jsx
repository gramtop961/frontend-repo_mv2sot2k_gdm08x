import React, { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import PowerhouseText from './PowerhouseText';
import OverlayGradients from './OverlayGradients';

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function HeroSection() {
  const scaleMv = useMotionValue(1);
  const scale = useSpring(scaleMv, { stiffness: 140, damping: 24, mass: 0.6 });

  const handleWheel = useCallback((e) => {
    // Subtle zoom in/out on scroll
    const delta = e.deltaY;
    const current = scaleMv.get();
    const next = clamp(current - delta * 0.0008, 0.85, 1.2);
    scaleMv.set(next);
  }, [scaleMv]);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
      onWheel={handleWheel}
      aria-label="Interactive 3D grid hero"
    >
      {/* 3D Scene */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="h-full w-full cursor-grab active:cursor-grabbing">
          <Spline
            scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </motion.div>

      {/* Centered Powerhouse Text */}
      <PowerhouseText />

      {/* Subtle gradient edges for contrast */}
      <OverlayGradients />
    </section>
  );
}
