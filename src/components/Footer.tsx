import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '💻' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '💼' },
  { name: 'Email', url: 'mailto:your.email@example.com', icon: '📧' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-accent-primary/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Your Name</h3>
            <p className="text-gray-500 text-sm">Software Engineer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-400 hover:text-accent-primary transition-colors duration-300"
                aria-label={link.name}
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-sm text-center md:text-right"
          >
            <p>© {currentYear} All rights reserved</p>
            <p className="text-xs mt-1">Built with Astro, React & Tailwind CSS</p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-linear-to-r from-transparent via-accent-primary to-transparent mt-8 origin-center"
        />

        {/* Additional note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-600 text-xs mt-6"
        >
          💡 Update social links in src/components/Footer.tsx
        </motion.p>
      </div>
    </footer>
  );
}
