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
    subject: '',
    message: '',
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    try {
      // Replace with your Formspree endpoint
      // Get your endpoint from https://formspree.io/
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Let's <span className="text-accent-primary">Connect</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>

          <div className="bg-dark-800 border border-accent-primary/10 rounded-2xl p-8 md:p-12">
            {formStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-accent-primary mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="text-accent-primary hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 border border-accent-primary/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary 
                             transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 border border-accent-primary/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary 
                             transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-700 border border-accent-primary/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary 
                             transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-dark-700 border border-accent-primary/20 rounded-lg px-4 py-3 
                             text-white placeholder-gray-500 focus:outline-none focus:border-accent-primary 
                             transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Error message */}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg p-4 text-sm"
                  >
                    Something went wrong. Please try again or contact me directly.
                  </motion.div>
                )}

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  whileHover={{ scale: formStatus === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === 'loading' ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 
                           ${formStatus === 'loading' 
                             ? 'bg-accent-primary/50 cursor-not-allowed' 
                             : 'bg-accent-primary hover:bg-accent-secondary shadow-glow-sm hover:shadow-glow-md'
                           }`}
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            )}

            {/* Setup instructions */}
            <div className="mt-8 p-4 bg-accent-primary/10 border border-accent-primary/20 rounded-lg">
              <p className="text-sm text-accent-primary font-semibold mb-2">📝 Setup Required:</p>
              <p className="text-xs text-gray-400">
                Replace 'YOUR_FORM_ID' with your Formspree endpoint ID from{' '}
                <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">
                  formspree.io
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
