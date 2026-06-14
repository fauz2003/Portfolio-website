import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 1,
    title: 'FitFlex',
    category: 'AI-powered Fitness App',
    year: '2024',
  },
  {
    id: 2,
    title: 'Manufacturing Automation Platform',
    category: 'Custom Software Solution',
    year: '2025',
  },
  {
    id: 3,
    title: 'HackScan',
    category: 'Intelligent Vulnerability Scanner',
    year: '2024',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative py-18 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Work"
            title="Selected projects"
            isInView={isInView}
          />

          <div className="surface-glass overflow-visible rounded-3xl md:overflow-hidden">
            <div className="hidden border-b border-white/[0.06] px-8 py-4 md:grid md:grid-cols-12 md:gap-6 md:px-10 lg:px-12">
              <span className="col-span-1 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-600">
                #
              </span>
              <span className="col-span-3 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-600">
                Focus
              </span>
              <span className="col-span-5 font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-600">
                Project
              </span>
              <span className="col-span-3 text-right font-mono text-[10px] font-medium uppercase tracking-widest text-zinc-600">
                Year
              </span>
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.12 + index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="group relative mb-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] last:mb-0 md:mb-0 md:rounded-none md:border-x-0 md:border-t-0 md:border-b md:border-white/[0.06] md:last:border-b-0"
              >
                <span
                  className={`pointer-events-none absolute right-0 top-0 h-12 w-12 -translate-y-1/2 translate-x-1/2 rounded-full border md:hidden ${
                    index === 0
                      ? 'border-accent-primary/35'
                      : index === 1
                        ? 'border-accent-secondary/35'
                        : 'border-accent-tertiary/35'
                  }`}
                />
                <div
                  className={`absolute inset-y-0 left-0 w-1 md:w-0 ${
                    index === 0
                      ? 'bg-accent-primary/60'
                      : index === 1
                        ? 'bg-accent-secondary/60'
                        : 'bg-accent-tertiary/60'
                  }`}
                />
                <div className="absolute inset-y-0 left-0 hidden w-0 bg-linear-to-r from-accent-primary/10 to-transparent transition-all duration-500 group-hover:w-full group-hover:opacity-100 md:block" />
                <div className="relative grid cursor-pointer gap-5 px-5 py-7 transition md:grid-cols-12 md:items-center md:gap-6 md:px-10 md:py-10 lg:px-12">
                  <div className="flex items-center justify-between md:hidden">
                    <span className="font-mono text-xs tabular-nums tracking-widest text-zinc-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      {project.year}
                    </span>
                  </div>
                  <span className="hidden font-mono text-sm tabular-nums text-zinc-600 md:col-span-1 md:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 md:col-span-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white transition group-hover:text-accent-primary sm:text-2xl md:col-span-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <div className="hidden items-center justify-between gap-6 md:col-span-3 md:flex md:justify-end">
                    <span className="text-sm text-zinc-500">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
