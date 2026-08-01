import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLanguage();
  const ROLES = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
        if (displayText === currentRole) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, ROLES]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles/Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-primary font-mono tracking-wider mb-4 uppercase text-sm md:text-base">
              {t.hero.welcome}
            </h2>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.hero.name}
          </motion.h1>

          <motion.div 
            className="h-12 flex items-center justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              <span className="font-mono text-primary text-glow">{displayText}</span>
              <span className="animate-pulse text-primary">_</span>
            </p>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              {t.hero.viewWork}
            </a>
            <a 
              href="/Mustapha_Bounnit_CV.pdf"
              download="Mustapha_Bounnit_CV.pdf"
              className="w-full sm:w-auto px-8 py-3 bg-card border border-white/10 text-white font-semibold rounded-md hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
            >
              {t.hero.downloadCv}
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-card/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.hero.projects}</div>
            </div>
            <div className="bg-card/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.hero.technologies}</div>
            </div>
            <div className="bg-card/60 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-1">4+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.hero.services}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs tracking-widest text-muted-foreground uppercase mb-2">{t.hero.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
