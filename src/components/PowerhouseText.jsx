import { motion } from 'framer-motion';

export default function PowerhouseText() {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/70">
            Powerhouse
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto text-white/80"
        >
          A dynamic 3D canvas you can explore. Scroll to zoom. Click and drag to look around.
        </motion.p>
      </motion.div>
    </div>
  );
}
