import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-60" />
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-primary/20 blur-[140px] animate-shimmer" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent-secondary/15 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-accent-tertiary/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-12 lg:gap-20 px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
            </span>
            Available for projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Fauz Ahmed</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-6 font-display text-2xl font-light text-zinc-300 sm:text-3xl lg:text-[2rem] lg:leading-snug"
          >
            Building reliable digital products
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-zinc-500 sm:text-lg"
          >
            Transforming complex challenges into elegant solutions that drive measurable business
            outcomes - from architecture to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-accent-primary to-sky-400 px-8 py-3.5 text-sm font-semibold text-dark-950 shadow-glow-md transition hover:shadow-glow-lg"
            >
              Start a project
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-accent-primary/40 hover:text-white"
            >
              View work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-accent-primary/30 via-accent-secondary/20 to-transparent opacity-60 blur-2xl" />
          <div className="surface-glass relative overflow-hidden rounded-3xl p-1">
            <div className="relative aspect-square overflow-hidden rounded-[1.35rem] bg-linear-to-br from-dark-800 to-dark-950 ring-1 ring-white/10">
              <img 
                src="/profile.png" 
                alt="Fauz Ahmed" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-8 text-center font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            <div>
              <p className="text-sm font-semibold text-white">End-to-end</p>
              <p>Scope</p>
            </div>
            <div className="h-8 w-px bg-white/10" aria-hidden />
            <div>
              <p className="text-sm font-semibold text-accent-primary">Remote-first</p>
              <p>Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-11 w-7 items-start justify-center rounded-full border border-white/15 bg-white/[0.03] p-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-accent-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
