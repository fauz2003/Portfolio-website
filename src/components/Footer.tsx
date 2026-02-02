import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white font-medium text-lg mb-1">Your Name</p>
            <p className="text-gray-600 text-sm">Software Engineer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-8"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:you@example.com"
              className="text-gray-500 text-sm hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-sm"
          >
            © {currentYear}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
