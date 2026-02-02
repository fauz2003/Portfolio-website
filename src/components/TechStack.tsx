import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'AWS', 'Docker', 'Next.js', 'GraphQL', 'Redis', 'Firebase',
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPaused, setIsPaused] = useState(false);

  const duplicated = [...technologies, ...technologies];

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-600 text-sm text-center mb-12">
            Technologies I work with
          </p>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-12"
              animate={{ x: isPaused ? 0 : [0, -1200] }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {duplicated.map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="text-gray-500 text-lg font-light whitespace-nowrap hover:text-white transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
