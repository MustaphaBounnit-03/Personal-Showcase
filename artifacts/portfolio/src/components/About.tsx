import { motion } from 'framer-motion';

export default function About() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-8"></div>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm Mustapha Bounnit, a motivated computer science student and full-stack web developer with a profound passion for building modern, scalable web applications. 
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              My journey in tech is driven by curiosity and a commitment to continuous learning. I thrive on solving complex problems and turning ideas into elegant code. Whether I'm designing a database architecture or fine-tuning CSS animations, I care deeply about the craft.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">Birthday:</span>
                <span>March 28, 2005</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">GitHub:</span>
                <a href="https://github.com/MustaphaBounnit-03" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MustaphaBounnit-03</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-mono">Status:</span>
                <span>Open to opportunities</span>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="/Mustapha_Bounnit_CV.pdf"
                download="Mustapha_Bounnit_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-card border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="bg-card border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div className="bg-card border border-white/5 p-4 rounded-xl text-center hover:border-primary/30 transition-colors">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Technologies</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
