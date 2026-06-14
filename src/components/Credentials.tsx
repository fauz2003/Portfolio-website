import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

const baseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;
const resumeUrl = `${baseUrl}FauzAhmed.pdf`;

const education = {
  degree: 'BS in Computer Science',
  school: 'FAST (NUCES)',
  period: '2021 - 2025',
  coursework: [
    'Design & Analysis of Algorithms',
    'Software Architecture',
    'Software Engineering',
    'Software Project Management',
    'Cloud Computing',
    'DevOps',
    'Web Programming',
    'UX Engineering',
  ],
};

const achievements = [
  {
    title: 'Batch Gold Medalist',
    detail: 'FAST (NUCES) · Fall ’24',
    tone: 'gold' as const,
  },
  {
    title: '3× Dean’s List of Honor',
    detail: 'Fall ’23 · Fall ’24 · Spring ’25',
    tone: 'violet' as const,
  },
];

const certifications = [
  { name: 'AWS Academy Cloud Foundations', issuer: 'Amazon Web Services', tone: 'cyan' as const },
  { name: 'AWS Academy Web Application Builder', issuer: 'Amazon Web Services', tone: 'cyan' as const },
  { name: 'HCIA - Huawei Cloud Services v3.0', issuer: 'Huawei', tone: 'pink' as const },
  { name: 'HCIA - Huawei Cloud Computing v3.0', issuer: 'Huawei', tone: 'pink' as const },
];

const tones = {
  gold: {
    iconWrap: 'border-amber-300/30 bg-amber-300/10 text-amber-300',
    glow: 'bg-amber-300/10',
    line: 'from-amber-300/60',
  },
  violet: {
    iconWrap: 'border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary',
    glow: 'bg-accent-secondary/10',
    line: 'from-accent-secondary/60',
  },
  cyan: {
    iconWrap: 'border-accent-primary/25 bg-accent-primary/10 text-accent-primary',
    eyebrow: 'text-accent-primary/80',
    line: 'from-accent-primary/60',
  },
  pink: {
    iconWrap: 'border-accent-tertiary/25 bg-accent-tertiary/10 text-accent-tertiary',
    eyebrow: 'text-accent-tertiary/80',
    line: 'from-accent-tertiary/60',
  },
};

function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
      <path d="M12 4 2 9l10 5 10-5-10-5Z" strokeLinejoin="round" />
      <path d="M6 11v4.5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5V11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9v5" strokeLinecap="round" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" strokeLinejoin="round" />
      <path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14v3M9 20h6M10 20l.5-3M14 20l-.5-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
      <path d="m12 3 2.6 5.6 6 .7-4.4 4.2 1.2 6L12 16.9 6.6 19.5l1.2-6L3.4 9.3l6-.7L12 3Z" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5" aria-hidden>
      <path d="M12 3 5 6v5c0 4.3 2.9 7.6 7 9 4.1-1.4 7-4.7 7-9V6l-7-3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const achievementIcons = {
  gold: <TrophyIcon />,
  violet: <StarIcon />,
};

export default function Credentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="credentials" className="relative py-18 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[440px] w-[440px] rounded-full bg-accent-secondary/5 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Credentials"
            title="Education & certifications"
            subtitle="A computer science foundation, recognised academic performance, and cloud certifications across AWS and Huawei."
            isInView={isInView}
          />

          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            {/* Education + achievements */}
            <div className="space-y-5 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="surface-glass surface-glass-hover group relative overflow-hidden rounded-2xl p-6 sm:p-7"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-accent-primary/60 to-transparent" />
                <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent-primary/10 blur-2xl" />
                <div className="relative flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-primary/25 bg-accent-primary/10 text-accent-primary">
                    <GraduationIcon />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-accent-primary">
                      Education
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{education.degree}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {education.school}
                      <span className="text-zinc-600"> · {education.period}</span>
                    </p>
                  </div>
                </div>

                <div className="relative mt-6">
                  <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                    Relevant coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[11px] text-zinc-400 transition group-hover:border-white/[0.12]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {achievements.map((item, index) => {
                const t = tones[item.tone];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                    transition={{ delay: 0.25 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="surface-glass surface-glass-hover group relative flex items-center gap-4 overflow-hidden rounded-2xl p-5"
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${t.line} to-transparent`} />
                    <div className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${t.glow}`} />
                    <span className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${t.iconWrap}`}>
                      {achievementIcons[item.tone]}
                    </span>
                    <div className="relative min-w-0">
                      <h4 className="font-display text-base font-semibold text-white">{item.title}</h4>
                      <p className="mt-0.5 text-xs text-zinc-500">{item.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <div className="surface-glass relative h-full overflow-hidden rounded-2xl p-6 sm:p-7">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-accent-tertiary/50 via-accent-primary/40 to-transparent" />
                <div className="mb-5 flex items-center gap-3">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    Certifications
                  </p>
                  <span className="h-px flex-1 bg-white/[0.06]" />
                  <span className="font-mono text-[10px] text-zinc-600">{certifications.length}</span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {certifications.map((cert, index) => {
                    const t = tones[cert.tone];
                    return (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                        transition={{ delay: 0.35 + index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="surface-glass-hover group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                      >
                        <div className="flex items-start gap-3">
                          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${t.iconWrap}`}>
                            <ShieldCheckIcon />
                          </span>
                          <div className="min-w-0">
                            <p className={`font-mono text-[10px] font-medium uppercase tracking-[0.15em] ${t.eyebrow}`}>
                              {cert.issuer}
                            </p>
                            <h4 className="mt-1 font-display text-sm font-semibold leading-snug text-white">
                              {cert.name}
                            </h4>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="surface-glass relative mt-5 flex flex-col gap-5 overflow-hidden rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:mt-6"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent-primary/10 blur-3xl" />
            <div className="relative">
              <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">Want the full picture?</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                Grab a PDF copy of my resume with the complete breakdown of experience, projects, and skills.
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-3 sm:shrink-0">
              <motion.a
                href={resumeUrl}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-accent-primary to-sky-400 px-6 py-3 text-sm font-semibold text-dark-950 shadow-glow-md transition hover:shadow-glow-lg"
              >
                <DownloadIcon />
                Download resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-accent-primary/40 hover:text-white"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
