import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const capabilities = [
  {
    title: 'Web Platforms',
    description: 'Full-featured web applications built for scale, from user-facing products to internal dashboards.',
    icon: '🌐',
  },
  {
    title: 'Scalable Systems',
    description: 'Backend architectures that handle growth—real-time data, APIs, databases, and cloud infrastructure.',
    icon: '⚡',
  },
  {
    title: 'Internal Tools',
    description: 'Custom solutions that streamline operations, automate workflows, and boost team efficiency.',
    icon: '🛠️',
  },
  {
    title: 'Rapid MVPs',
    description: 'Get to market fast with validated proof-of-concepts that evolve into production systems.',
    icon: '🚀',
  },
  {
    title: 'Mobile Applications',
    description: 'Cross-platform mobile experiences that feel native and perform beautifully.',
    icon: '📱',
  },
  {
    title: 'No-Code Solutions',
    description: 'Leveraging automation platforms to deliver working solutions in days, not months.',
    icon: '⚙️',
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="capabilities" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What I <span className="text-accent-primary">Build</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Solutions tailored to your business needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-dark-800 border border-accent-primary/10 rounded-xl p-8 hover:border-accent-primary/30 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-accent-primary transition-colors duration-300">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {capability.description}
                </p>

                {/* Decorative gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-linear-to-r from-accent-primary to-accent-secondary rounded-full mt-6 origin-left"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
