import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Project data structure - easily extensible
const projects = [
  {
    id: 1,
    title: 'Project Title One',
    description: 'Brief description of the project outcome and impact. Focus on what problem it solved and the business value delivered.',
    category: 'Web Platform',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: '/placeholder-project-1.jpg', // Add your project images
  },
  {
    id: 2,
    title: 'Project Title Two',
    description: 'Brief description of the project outcome and impact. Focus on what problem it solved and the business value delivered.',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase'],
    image: '/placeholder-project-2.jpg',
  },
  {
    id: 3,
    title: 'Project Title Three',
    description: 'Brief description of the project outcome and impact. Focus on what problem it solved and the business value delivered.',
    category: 'Internal Tool',
    tags: ['Python', 'Automation'],
    image: '/placeholder-project-3.jpg',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="bg-dark-800 border border-accent-primary/10 rounded-2xl overflow-hidden 
               hover:border-accent-primary/30 transition-all duration-300 group"
    >
      {/* Project image */}
      <div className="relative h-64 bg-dark-700 overflow-hidden">
        {/* Placeholder - Replace with actual project images */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-6xl mb-4">🖼️</div>
            <p className="text-sm">Project Screenshot</p>
            <p className="text-xs text-gray-700 mt-2">{project.image}</p>
          </div>
        </div>
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-t from-dark-800 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project content */}
      <div className="p-8">
        <div className="text-accent-primary text-sm font-mono mb-2 tracking-wider">
          {project.category}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent-primary/10 text-accent-primary text-xs rounded-full 
                       border border-accent-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Selected <span className="text-accent-primary">Work</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            A showcase of projects that delivered real results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Note for easy expansion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center text-gray-500 text-sm"
          >
            <p>💡 To add more projects: Edit the projects array in src/components/Projects.tsx</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
