import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Custom Development',
    description: 'End-to-end software built to your specifications.',
  },
  {
    title: 'Technical Consulting',
    description: 'Architecture reviews, tech strategy, and team guidance.',
  },
  {
    title: 'MVP Development',
    description: 'Rapid prototyping to validate your ideas.',
  },
  {
    title: 'System Integration',
    description: 'Connect your tools and automate workflows.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-dark-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-accent-primary text-sm font-medium tracking-widest uppercase mb-8"
              >
                Services
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-4xl font-light text-white mb-8"
              >
                How I can help
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-500 leading-relaxed"
              >
                Whether you need a complete product built from scratch or expertise to augment your team, I deliver reliable solutions that drive results.
              </motion.p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <h3 className="text-white font-medium text-lg mb-2 group-hover:text-accent-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
