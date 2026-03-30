import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  delay?: number;
  isInView: boolean;
};

export default function SectionHeader({ eyebrow, title, subtitle, delay = 0.15, isInView }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-20 max-w-3xl"
    >
      <p className="inline-flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-accent-primary mb-5">
        <span
          className="h-px w-10 bg-linear-to-r from-accent-primary/90 to-transparent"
          aria-hidden
        />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-white leading-[1.08]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
