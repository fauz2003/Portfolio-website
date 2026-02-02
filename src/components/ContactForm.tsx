import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto">
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
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl font-light text-white mb-6"
          >
            Let's talk
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-500 mb-16"
          >
            Have a project in mind? I'd love to hear about it.
          </motion.p>

          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-white text-xl mb-4">Message sent.</p>
              <p className="text-gray-500 mb-8">I'll get back to you soon.</p>
              <button
                onClick={() => setFormStatus('idle')}
                className="text-accent-primary text-sm hover:underline"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm mb-3">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-white 
                           placeholder-gray-700 focus:outline-none focus:border-accent-primary 
                           transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-white 
                           placeholder-gray-700 focus:outline-none focus:border-accent-primary 
                           transition-colors duration-300"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-800 py-3 text-white 
                           placeholder-gray-700 focus:outline-none focus:border-accent-primary 
                           transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project"
                />
              </div>

              {formStatus === 'error' && (
                <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}

              <motion.button
                type="submit"
                disabled={formStatus === 'loading'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-accent-primary text-white text-sm font-medium 
                         rounded-full hover:bg-accent-secondary transition-colors duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
