import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Full-stack solutions built from the ground up, tailored to your specific business needs and designed to scale with your growth.',
    deliverables: [
      'Requirements analysis & planning',
      'Custom application development',
      'Database design & optimization',
      'Testing & quality assurance',
    ],
    icon: '💻',
  },
  {
    title: 'Web Platforms & Applications',
    description: 'Modern, responsive web applications that deliver exceptional user experiences and drive business results.',
    deliverables: [
      'User interface design & development',
      'API integration & backend services',
      'Performance optimization',
      'Deployment & hosting setup',
    ],
    icon: '🌐',
  },
  {
    title: 'Rapid MVP Development',
    description: 'Get your idea to market quickly with a focused MVP that validates your concept and attracts early users.',
    deliverables: [
      'Core feature identification',
      'Rapid prototyping',
      'User feedback integration',
      'Foundation for future growth',
    ],
    icon: '🚀',
  },
  {
    title: 'No-Code & Automation',
    description: 'Leverage powerful no-code platforms to deliver working solutions in days, perfect for validating ideas or streamlining operations.',
    deliverables: [
      'Platform selection & setup',
      'Workflow automation',
      'Integration with existing tools',
      'Training & documentation',
    ],
    icon: '⚙️',
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-dark-800 border border-accent-primary/10 rounded-2xl p-8 
               hover:border-accent-primary/30 transition-all duration-300 group"
    >
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>

        <div className="flex-1">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent-primary transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            {service.description}
          </p>

          {/* Deliverables */}
          <div>
            <p className="text-sm font-semibold text-accent-primary mb-3">What's Included:</p>
            <ul className="space-y-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start text-gray-400 text-sm">
                  <span className="text-accent-primary mr-2">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            How I Can <span className="text-accent-primary">Help</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            Services designed to solve real business challenges
          </p>

          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6 text-lg">
              Not sure which service fits your needs?
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent-primary text-white px-8 py-4 rounded-lg font-semibold 
                       hover:bg-accent-secondary transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
            >
              Let's Talk About Your Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
