import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-primary/20 bg-card shadow-[0_0_30px_rgba(0,212,255,0.08)]">
              <img
                src="/mustapha-photo.png"
                alt="Mustapha Bounnit"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50 -z-10 rounded-tl-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/50 -z-10 rounded-br-lg hidden lg:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.about.title}</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t.about.para1}
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t.about.para2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">{t.about.birthday}</span>
                <span>{t.about.birthdayValue}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">{t.about.github}</span>
                <a href="https://github.com/MustaphaBounnit-03" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MustaphaBounnit-03</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">{t.about.status}</span>
                <span>{t.about.statusValue}</span>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="/Mustapha_Bounnit_CV.pdf"
                download="Mustapha_Bounnit_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {t.about.downloadCv}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.projects}</div>
              </div>
              <div className="bg-card border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.about.technologies}</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
