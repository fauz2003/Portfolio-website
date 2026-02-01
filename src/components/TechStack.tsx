import { motion } from 'framer-motion';
import { useState } from 'react';

// Technology logos/names - Update with actual logo images
const technologies = [
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'language' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Docker', category: 'devops' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Redis', category: 'database' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Express', category: 'backend' },
  { name: 'Firebase', category: 'cloud' },
  { name: 'Vercel', category: 'cloud' },
];

export default function TechStack() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-24 px-6 bg-dark-800/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technology <span className="text-accent-primary">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and platforms I work with
          </p>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-dark-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, var(--color-dark-900), transparent)' }}></div>

          {/* Scrolling track */}
          <div
            className="flex gap-8 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8 shrink-0"
              animate={{
                x: isPaused ? 0 : [0, -1920], // Adjust based on content width
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechs.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="shrink-0 bg-dark-700 border border-accent-primary/20 rounded-xl px-8 py-6 min-w-45 
                           hover:border-accent-primary/50 hover:shadow-glow-sm transition-all duration-300"
                >
                  {/* Replace with actual logo images */}
                  <div className="text-center">
                    <div className="text-4xl mb-3">
                      {/* Placeholder - replace with actual SVG/PNG logos */}
                      <div className="w-12 h-12 mx-auto bg-accent-primary/20 rounded-lg flex items-center justify-center text-accent-primary font-bold text-xl">
                        {tech.name.charAt(0)}
                      </div>
                    </div>
                    <p className="text-white font-semibold text-sm">{tech.name}</p>
                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{tech.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Hover to pause • This is a visual representation of tools and platforms I've worked with
        </p>
      </div>
    </section>
  );
}
