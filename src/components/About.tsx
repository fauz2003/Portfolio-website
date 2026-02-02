import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-accent-primary text-sm font-medium tracking-widest uppercase mb-8"
          >
            Approach
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-relaxed mb-16"
          >
            I build software that solves real problems.{' '}
            <span className="text-gray-500">
              Clean architecture, pragmatic choices, delivered on time.
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="text-5xl font-light text-accent-primary mb-4">01</div>
              <h3 className="text-white font-medium mb-3">Understand</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Deep dive into your business, users, and goals before writing any code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="text-5xl font-light text-accent-primary mb-4">02</div>
              <h3 className="text-white font-medium mb-3">Design</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Architect solutions that scale with your growth and adapt to change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="text-5xl font-light text-accent-primary mb-4">03</div>
              <h3 className="text-white font-medium mb-3">Deliver</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Ship reliable software fast, without sacrificing quality.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
