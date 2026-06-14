import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';

type Role = {
  role: string;
  type?: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

const experiences: Role[] = [
  {
    role: 'Founder',
    company: 'Numen',
    location: 'Remote',
    period: 'Apr 2026 - Present',
    current: true,
    summary:
      'Founder of a software studio helping founders and teams ship products fast - from MVPs to AI agents and SaaS.',
    points: [
      'Build MVPs for non-technical founders, taking ideas from concept to launch.',
      'Design and ship AI agents and workflow automations.',
      'Develop SaaS products and custom software end-to-end.',
    ],
    stack: ['FlutterFlow', 'React', 'TypeScript', 'Supabase', 'Node.js'],
  },
  {
    role: 'Full-Stack Engineer',
    type: 'Part-time',
    company: 'Two.Zero',
    location: 'Spain · Remote',
    period: 'Feb 2026 - Present',
    current: true,
    summary:
      'Building and maintaining cross-platform mobile and web products for an international product studio.',
    points: [
      'Contributed to the development and maintenance of multiple mobile and web applications.',
      'Shipping rapidly with FlutterFlow backed by Supabase and Firebase.',
    ],
    stack: ['FlutterFlow', 'Supabase', 'Firebase'],
  },
  {
    role: 'Polyglot Software Engineer',
    company: 'Cowlar Design Studio',
    location: 'Islamabad',
    period: 'Jul 2025 - Mar 2026',
    summary:
      'Sole developer on a multi-tenant manufacturing automation platform for a globally recognised vehicle manufacturer.',
    points: [
      'Designed and built a multi-tenant platform handling asset management, production tracking, alerting, and role-based reporting.',
      'Implemented the Vue.js frontend and NestJS / Go microservices (Prisma, PostgreSQL, MQTT, Chirpstack) for real-time communication between IoT devices and the app.',
      'Led end-to-end architecture, development, and deployment as the sole developer, collaborating directly with the client.',
      'Delivered live operational dashboards for a factory automation system powering fiber-cable production lines.',
    ],
    stack: ['Vue.js', 'NestJS', 'Go', 'Prisma', 'PostgreSQL', 'MQTT', 'Chirpstack'],
  },
  {
    role: 'Full-Stack Development Intern',
    company: 'SOFTOO',
    location: 'Islamabad',
    period: 'Jul 2024 - Aug 2024',
    summary: 'Led a small team building an internal accounts management platform.',
    points: [
      'Led a 3-member team building an internal accounts management platform on the MERN stack.',
      'Set up CI/CD pipelines with GitHub Actions, cutting deployment time by over 60%.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'GitHub Actions'],
  },
  {
    role: 'MERN Development Fellow',
    company: 'Bytewise',
    location: 'Remote',
    period: 'Jun 2024 - Sep 2024',
    summary: 'Completed a 100-day intensive MERN stack fellowship.',
    points: [
      'Covered JavaScript, React, Redux, Node.js, Express, GraphQL, JWT, and RESTful API design.',
      'Built and deployed a chatbot web application end-to-end.',
    ],
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'GraphQL'],
  },
];

const accents = [
  {
    text: 'text-accent-primary',
    dot: 'bg-accent-primary',
    nodeRing: 'border-accent-primary/40',
    nodeShadow: 'shadow-[0_0_0_4px_rgba(3,3,8,0.95),0_0_18px_-2px_rgba(56,189,248,0.6)]',
    topLine: 'from-accent-primary/60',
    glow: 'bg-accent-primary/10',
    marker: 'bg-accent-primary/80',
  },
  {
    text: 'text-accent-secondary',
    dot: 'bg-accent-secondary',
    nodeRing: 'border-accent-secondary/40',
    nodeShadow: 'shadow-[0_0_0_4px_rgba(3,3,8,0.95),0_0_18px_-2px_rgba(167,139,250,0.6)]',
    topLine: 'from-accent-secondary/60',
    glow: 'bg-accent-secondary/10',
    marker: 'bg-accent-secondary/80',
  },
  {
    text: 'text-accent-tertiary',
    dot: 'bg-accent-tertiary',
    nodeRing: 'border-accent-tertiary/40',
    nodeShadow: 'shadow-[0_0_0_4px_rgba(3,3,8,0.95),0_0_18px_-2px_rgba(244,114,182,0.6)]',
    topLine: 'from-accent-tertiary/60',
    glow: 'bg-accent-tertiary/10',
    marker: 'bg-accent-tertiary/80',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-18 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[460px] w-[460px] rounded-full bg-accent-primary/5 blur-[130px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Experience"
            title="Where I've worked"
            subtitle="From IoT manufacturing platforms to rapid product builds - shipping production software across the stack."
            isInView={isInView}
          />

          <div className="relative">
            <span
              className="pointer-events-none absolute left-4 top-3 bottom-3 w-px -translate-x-1/2 bg-linear-to-b from-accent-primary/50 via-accent-secondary/35 to-transparent sm:left-5"
              aria-hidden
            />

            <div className="space-y-5 sm:space-y-6">
              {experiences.map((exp, index) => {
                const a = accents[index % accents.length];
                return (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                    transition={{
                      delay: 0.15 + index * 0.12,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative pl-12 sm:pl-16"
                  >
                    <span
                      className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center sm:left-5"
                      aria-hidden
                    >
                      <span className={`flex h-3.5 w-3.5 items-center justify-center rounded-full border bg-dark-950 ${a.nodeRing} ${a.nodeShadow}`}>
                        {exp.current ? (
                          <span className="relative flex h-2 w-2">
                            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${a.dot} opacity-70`} />
                            <span className={`relative inline-flex h-2 w-2 rounded-full ${a.dot}`} />
                          </span>
                        ) : (
                          <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                        )}
                      </span>
                    </span>

                    <div className="surface-glass surface-glass-hover group relative overflow-hidden rounded-2xl p-6 sm:p-7">
                      <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r ${a.topLine} to-transparent`} />
                      <div className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition ${a.glow}`} />

                      <div className="relative">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                          <div className="min-w-0">
                            <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-display text-lg font-semibold text-white sm:text-xl">
                              {exp.role}
                              {exp.type ? (
                                <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-400">
                                  {exp.type}
                                </span>
                              ) : null}
                            </h3>
                            <p className="mt-1.5 text-sm text-zinc-400">
                              <span className={`font-medium ${a.text}`}>{exp.company}</span>
                              <span className="text-zinc-600"> · {exp.location}</span>
                            </p>
                          </div>

                          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400 sm:text-[11px]">
                            {exp.current ? (
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary/60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-primary" />
                              </span>
                            ) : null}
                            {exp.period}
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{exp.summary}</p>

                        <ul className="mt-4 space-y-2.5">
                          {exp.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-relaxed text-zinc-500">
                              <span className={`mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[2px] ${a.marker}`} aria-hidden />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {exp.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-400 transition group-hover:border-white/[0.12]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
