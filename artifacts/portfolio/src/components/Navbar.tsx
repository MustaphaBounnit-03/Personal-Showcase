import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n';
import type { Language } from '@/lib/translations';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const switchLanguage = (next: Language) => {
    setLanguage(next);
  };

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-0.5 origin-left bg-primary shadow-[0_0_10px_rgba(0,212,255,0.8)]"
      />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="text-2xl font-bold text-white group"
        >
          Mustapha<span className="text-primary group-hover:text-glow transition-all duration-300">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary shadow-[0_0_8px_rgba(0,212,255,0.8)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1 border border-white/10 rounded-full p-1 bg-card/60 backdrop-blur-sm">
            {(['en', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`px-3 py-1 text-xs font-bold uppercase rounded-full transition-all duration-300 ${
                  language === lang
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-white'
                }`}
                aria-pressed={language === lang}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 border border-white/10 rounded-full p-1 bg-card/60 backdrop-blur-sm">
            {(['en', 'fr'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => switchLanguage(lang)}
                className={`px-2.5 py-0.5 text-xs font-bold uppercase rounded-full transition-all duration-300 ${
                  language === lang
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-white'
                }`}
                aria-pressed={language === lang}
              >
                {lang}
              </button>
            ))}
          </div>
          <button 
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/5 overflow-hidden"
          >
            <nav className="flex flex-col container mx-auto px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`py-3 text-lg font-medium border-b border-white/5 last:border-0 ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
