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
  { title: 'No-Code', description: 'When velocity beats custom code - used strategically.' },
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

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 lg:gap-5">
            {capabilities.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.15 + index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="surface-glass surface-glass-hover group relative min-w-[82%] snap-start rounded-2xl p-7 sm:min-w-0"
              >
                <div
                  className={`pointer-events-none absolute inset-x-7 top-0 h-px ${
                    index % 3 === 0
                      ? 'bg-linear-to-r from-accent-primary/60 to-transparent'
                      : index % 3 === 1
                        ? 'bg-linear-to-r from-accent-secondary/60 to-transparent'
                        : 'bg-linear-to-r from-accent-tertiary/60 to-transparent'
                  }`}
                />
                <div
                  className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl border bg-white/[0.03] font-mono text-xs font-semibold transition ${
                    index % 3 === 0
                      ? 'border-accent-primary/25 text-accent-primary group-hover:border-accent-primary/40 group-hover:bg-accent-primary/10'
                      : index % 3 === 1
                        ? 'border-accent-secondary/25 text-accent-secondary group-hover:border-accent-secondary/40 group-hover:bg-accent-secondary/10'
                        : 'border-accent-tertiary/25 text-accent-tertiary group-hover:border-accent-tertiary/40 group-hover:bg-accent-tertiary/10'
                  }`}
                >
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
