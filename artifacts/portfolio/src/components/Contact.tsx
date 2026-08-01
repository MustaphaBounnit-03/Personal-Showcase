import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/i18n';
import { useSendContactMessage } from '@workspace/api-client-react';

const CONTACT_EMAIL = 'mustapha.bounnit.2005@gmail.com';
const MIN_SUBMIT_MS = 2000;

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const sendMessage = useSendContactMessage();
  const formStartedAt = useRef<number | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot: this field is hidden from humans. Bots fill it — reject.
    const website = String(formData.get('website') ?? '');
    if (website !== '') return;

    // Minimum fill time: real humans take >2s. Bots submit instantly.
    const now = Date.now();
    const started = formStartedAt.current;
    formStartedAt.current = now;
    if (started !== null && now - started < MIN_SUBMIT_MS) return;

    const data = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      message: String(formData.get('message') ?? ''),
    };

    if (!data.name || !data.email || !data.message) return;

    try {
      await sendMessage.mutateAsync({ data });
      form.reset();
      toast({
        title: t.contact.form.successTitle,
        description: t.contact.form.successDescription,
        variant: 'default',
      });
    } catch {
      toast({
        title: t.contact.form.errorTitle,
        description: t.contact.form.errorDescription,
        variant: 'destructive',
      });
    }
  };

  const handleFocus = () => {
    if (formStartedAt.current === null) formStartedAt.current = Date.now();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          
          <motion.div 
            className="md:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6">{t.contact.connect}</h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${CONTACT_EMAIL}`} 
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaEnvelope />
                  </div>
                  <span>{t.contact.email}</span>
                </a>
                <a 
                  href="https://github.com/MustaphaBounnit-03" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaGithub />
                  </div>
                  <span>{t.contact.github}</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/mustapha-bounnit-3407b2421/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <FaLinkedin />
                  </div>
                  <span>{t.contact.linkedin}</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-3 bg-card border border-white/5 p-8 rounded-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} onFocus={handleFocus} className="space-y-6">
              {/* Honeypot field — hidden from humans, bots fill it and get rejected */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">{t.contact.form.fullName}</label>
                  <input 
                    id="name" 
                    name="name"
                    type="text" 
                    required
                    maxLength={100}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder={t.contact.form.fullNamePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">{t.contact.form.email}</label>
                  <input 
                    id="email" 
                    name="email"
                    type="email" 
                    required
                    maxLength={254}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">{t.contact.form.message}</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  required
                  maxLength={5000}
                  className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={sendMessage.isPending}
                className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sendMessage.isPending ? t.contact.form.sending : t.contact.form.send}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

