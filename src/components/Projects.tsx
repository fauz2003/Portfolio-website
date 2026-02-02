import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Project One',
    category: 'Web Platform',
    year: '2025',
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'Mobile App',
    year: '2025',
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Backend System',
    year: '2024',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
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
            Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-light text-white mb-20"
          >
            Selected projects
          </motion.h2>

          <div className="space-y-0">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group border-t border-gray-800 py-8 flex items-center justify-between cursor-pointer hover:bg-dark-800/30 -mx-6 px-6 transition-colors duration-300"
              >
                <div className="flex items-center gap-8">
                  <span className="text-gray-600 text-sm font-mono w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-light group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{project.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-600 text-sm hidden md:block">{project.year}</span>
                  <motion.div
                    className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-accent-primary group-hover:bg-accent-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-gray-500 group-hover:text-accent-primary text-sm">→</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-800" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-600 text-sm mt-12"
          >
            Edit projects in src/components/Projects.tsx
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
