import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            How I <span className="text-accent-primary">Work</span>
          </h2>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I believe great software starts with understanding the real problem. 
              Before writing a single line of code, I take time to understand your business, 
              your users, and what success looks like for you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Once we're aligned, I design clean, scalable solutions that solve the immediate 
              need while preparing for future growth. I've built everything from rapid MVPs 
              to complex enterprise systems, and I know when to move fast and when to build 
              for the long term.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              My approach is pragmatic: I choose the right tool for the job, not the trendy one. 
              Sometimes that's custom code, sometimes it's a no-code solution that gets you to 
              market in days instead of months. What matters is delivering something reliable 
              that actually works for your business.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I've worn many hats—sole engineer on complex systems, technical lead on fast-paced 
              teams, and everything in between. I bring that breadth of experience to every project, 
              thinking beyond just code to consider business outcomes, user experience, and long-term 
              maintainability.
            </motion.p>
          </div>

          {/* Subtle decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="h-1 bg-linear-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-full mt-12 max-w-xs mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
