import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Custom Development',
    description: 'End-to-end software built to your specifications, with clear milestones.',
  },
  {
    title: 'Technical Consulting',
    description: 'Architecture reviews, tech strategy, and hands-on team guidance.',
  },
  {
    title: 'MVP Development',
    description: 'Rapid prototyping and validation so you learn fast without burning runway.',
  },
  {
    title: 'System Integration',
    description: 'Connect your tools, automate workflows, and remove operational drag.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="services"
      className="relative overflow-hidden border-y border-white/[0.06] py-18 lg:py-24 px-5 sm:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent-secondary/[0.06] via-transparent to-accent-primary/[0.05]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <SectionHeader
                eyebrow="Services"
                title="How I can help"
                subtitle="Whether you need a full product or senior hands on an existing team, engagements are structured for clarity and outcomes."
                isInView={isInView}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                  transition={{
                    delay: 0.1 + index * 0.07,
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="surface-glass surface-glass-hover group relative overflow-hidden rounded-2xl p-6 sm:p-8"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                      index % 2 === 0
                        ? 'bg-linear-to-r from-accent-primary/60 to-transparent'
                        : 'bg-linear-to-l from-accent-secondary/60 to-transparent'
                    }`}
                  />
                  <div
                    className={`absolute -right-8 -top-8 h-24 w-24 rounded-full border transition ${
                      index % 2 === 0 ? 'border-accent-primary/18' : 'border-accent-secondary/18'
                    } group-hover:border-accent-primary/30`}
                  />
                  <div className="flex items-start gap-4">
                    <p
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-white/[0.03] font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${
                        index % 2 === 0
                          ? 'border-accent-primary/25 text-accent-primary/80'
                          : 'border-accent-secondary/25 text-accent-secondary/80'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl font-semibold text-white transition group-hover:text-accent-primary">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-500">{service.description}</p>
                      <div
                        className={`mt-6 h-px w-12 transition group-hover:w-full ${
                          index % 2 === 0
                            ? 'bg-linear-to-r from-accent-primary/50 to-transparent'
                            : 'bg-linear-to-r from-accent-secondary/50 to-transparent'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
