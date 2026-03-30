import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'Web Platform',
    year: '2025',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Mobile App',
    year: '2025',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Backend System',
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
            subtitle="A snapshot of recent builds — swap in case studies, links, and imagery as you ship."
            isInView={isInView}
          />

          <div className="surface-glass overflow-hidden rounded-3xl">
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
                className="group relative border-b border-white/[0.06] last:border-b-0"
              >
                <div className="absolute inset-y-0 left-0 w-0 bg-linear-to-r from-accent-primary/10 to-transparent transition-all duration-500 group-hover:w-full group-hover:opacity-100" />
                <div className="relative grid cursor-pointer gap-6 px-6 py-10 transition md:grid-cols-12 md:items-center md:gap-6 md:px-10 lg:px-12">
                  <span className="font-mono text-sm tabular-nums text-zinc-600 md:col-span-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 md:col-span-3">
                    {project.category}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white transition group-hover:text-accent-primary md:col-span-5 md:text-3xl">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between gap-6 md:col-span-3 md:justify-end">
                    <span className="text-sm text-zinc-500">{project.year}</span>
                    <motion.span
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-zinc-400 transition group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 group-hover:text-accent-primary"
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 font-mono text-[11px] text-zinc-600">
            Tip: edit the project list in <span className="text-zinc-500">src/components/Projects.tsx</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
