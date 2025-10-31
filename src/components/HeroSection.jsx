import { useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.25]);

  // Prevent body overscroll bounce on touch for smoother exploration
  useEffect(() => {
    const handler = (e) => {
      // Allow normal page scroll; no passive tweak here
    };
    window.addEventListener('touchmove', handler, { passive: true });
    return () => window.removeEventListener('touchmove', handler);
  }, []);

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
      >
        <Spline
          scene="https://prod.spline.design/8Gm8c1rZ8R0N6B5w/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Fallback subtle grid background in case Spline fails to load */}
      <div className="absolute inset-0 z-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
}
