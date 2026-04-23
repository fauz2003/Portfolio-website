import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './SectionHeader';
import API_KEY from '../config';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const inputClass =
  'w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3.5 text-white placeholder-zinc-600 shadow-inner transition focus:border-accent-primary/50 focus:outline-none focus:ring-2 focus:ring-accent-primary/20';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const hasFormConfig = Boolean(API_KEY);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hasFormConfig) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');

    try {
      const form = e.currentTarget;
      const submittedData = new FormData(form);

      submittedData.append('access_key', API_KEY);

      const object = Object.fromEntries(submittedData);
      const json = JSON.stringify(object);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: json,
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        form.reset();
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
    <section id="contact" className="relative py-18 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            eyebrow="Contact"
            title="Let's talk"
            subtitle="Share a bit about your timeline, stack, and goals — I typically reply within one business day."
            isInView={isInView}
          />

          {formStatus === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="surface-glass rounded-3xl px-10 py-16 text-center"
            >
              <p className="font-display text-2xl font-semibold text-white">Message sent.</p>
              <p className="mt-3 text-zinc-500">I'll get back to you shortly.</p>
              <button
                type="button"
                onClick={() => setFormStatus('idle')}
                className="mt-10 font-mono text-xs font-semibold uppercase tracking-wider text-accent-primary transition hover:text-white"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.15, duration: 0.65 }}
              className="surface-glass rounded-3xl p-8 sm:p-10 lg:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your name or company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    placeholder="Project scope, constraints, and what success looks like…"
                  />
                </div>

                {formStatus === 'error' && (
                  <p className="text-sm text-red-400/90">
                    {hasFormConfig
                      ? 'Something went wrong. Please try again.'
                      : 'Form is not configured. Add VITE_EMAILJS_PUBLIC_KEY to your environment.'}
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={formStatus === 'loading' || !hasFormConfig}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full rounded-full bg-linear-to-r from-accent-primary to-sky-400 py-4 text-sm font-semibold text-dark-950 shadow-glow-sm transition hover:shadow-glow-md disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {formStatus === 'loading'
                    ? 'Sending...'
                    : hasFormConfig
                      ? 'Send message'
                      : 'Configure form key'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
