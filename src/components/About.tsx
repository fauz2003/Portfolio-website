import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    {
      n: '01',
      title: 'Understand',
      body: 'Deep dive into your business, users, and goals before writing any code.',
    },
    {
      n: '02',
      title: 'Design',
      body: 'Architect solutions that scale with your growth and adapt to change.',
    },
    {
      n: '03',
      title: 'Deliver',
      body: 'Ship reliable software fast, without sacrificing quality.',
    },
  ];

  return (
    <section id="about" className="relative py-18 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 max-w-4xl md:mb-24"
          >
            <p className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-accent-primary">
              <span
                className="h-px w-10 bg-linear-to-r from-accent-primary/90 to-transparent"
                aria-hidden
              />
              Approach
            </p>
            <h2 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
              I build software that solves real problems.{' '}
              <span className="font-light text-zinc-500">
                Clean architecture, pragmatic choices, delivered on time.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="surface-glass surface-glass-hover group relative overflow-hidden rounded-2xl p-8"
              >
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-accent-primary/5 blur-2xl transition group-hover:bg-accent-primary/10" />
                <p className="font-display text-4xl font-light tabular-nums text-white/10 transition group-hover:text-accent-primary/30">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
