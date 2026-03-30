import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const capabilities = [
  { title: 'Web Platforms', description: 'Full-stack applications built for scale and performance.' },
  { title: 'Backend Systems', description: 'APIs, databases, and cloud infrastructure you can trust.' },
  { title: 'Mobile Apps', description: 'Cross-platform experiences with native-quality polish.' },
  { title: 'Rapid MVPs', description: 'Fast validation loops from idea to market.' },
  { title: 'Internal Tools', description: 'Workflow automation that saves teams real time.' },
  { title: 'No-Code', description: 'When velocity beats custom code — used strategically.' },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="capabilities"
      className="relative border-y border-white/[0.06] bg-dark-900/40 backdrop-blur-sm py-18 lg:py-24 px-5 sm:px-8 lg:px-12 "
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-accent-primary/[0.03] via-transparent to-accent-secondary/[0.03]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Capabilities"
            title="What I build"
            subtitle="End-to-end ownership across the stack — from first sketch to production metrics."
            isInView={isInView}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.15 + index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="surface-glass surface-glass-hover group relative rounded-2xl p-7"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] font-mono text-xs font-semibold text-accent-primary transition group-hover:border-accent-primary/30 group-hover:bg-accent-primary/10">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-lg font-semibold text-white transition group-hover:text-accent-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
