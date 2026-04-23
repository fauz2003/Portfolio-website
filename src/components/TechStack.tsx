import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Nest.js',
  'GraphQL',
  'Redis',
  'Firebase',
  'Supabase',
  'Kubernetes',
  'FlutterFlow',
  'Webflow',
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [isPaused, setIsPaused] = useState(false);

  const duplicated = [...technologies, ...technologies];

  return (
    <section className="relative overflow-hidden border-b border-white/[0.04] py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-12 text-center font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            Stack & tools
          </p>

          <div
            className="relative py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-dark-950 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-dark-950 to-transparent" />

            <motion.div
              className="flex gap-6"
              animate={{ x: isPaused ? 0 : [0, -1400] }}
              transition={{
                x: {
                  duration: 45,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatType: 'loop',
                },
              }}
            >
              {duplicated.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="shrink-0 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2.5 font-mono text-sm text-zinc-400 transition hover:border-accent-primary/30 hover:text-accent-primary"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
