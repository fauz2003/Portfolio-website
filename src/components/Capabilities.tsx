import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  { title: 'Web Platforms', description: 'Full-stack applications built for scale.' },
  { title: 'Backend Systems', description: 'APIs, databases, and cloud infrastructure.' },
  { title: 'Mobile Apps', description: 'Cross-platform experiences.' },
  { title: 'Rapid MVPs', description: 'Fast validation to market.' },
  { title: 'Internal Tools', description: 'Workflow automation.' },
  { title: 'No-Code', description: 'When speed matters most.' },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-32 px-6 md:px-12 lg:px-24 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
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
            Capabilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-light text-white mb-20"
          >
            What I build
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent-primary mt-2 shrink-0" />
                  <div>
                    <h3 className="text-white font-medium text-lg mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
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
