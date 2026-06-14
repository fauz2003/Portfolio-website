import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const resumeUrl = `${baseUrl}FauzAhmed.pdf`;

  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-950/80 py-8 lg:py-12 px-5 sm:px-8 lg:px-12 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent-primary/20 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-lg font-semibold text-white">Fauz Ahmed</p>
          <p className="mt-1 text-sm text-zinc-500">Polyglot Software Engineer · Open to roles & freelance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="flex flex-wrap gap-x-10 gap-y-3"
        >
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-accent-primary"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden>
              <path d="M12 3v12m0 0 4-4m-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 17v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Resume
          </a>
          <a
            href="https://github.com/fauz2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fauz-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=fauzahmed2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition hover:text-white"
          >
            Email
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-mono text-xs text-zinc-600"
        >
          © {currentYear}
        </motion.p>
      </div>
    </footer>
  );
}
