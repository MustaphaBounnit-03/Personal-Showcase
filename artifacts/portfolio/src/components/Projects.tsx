import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n';

const PROJECT_ICONS = [
  <svg key="store" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>,
  <svg key="store-system" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
  </svg>,
  <svg key="vet" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M15.5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M6.5 6a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M4 12c0-3 2-5 4-5s3 1.5 4 1.5S13 7 15 7s4 2 4 5c0 4-3 7-7 7-1.5 0-3-1-4-1s-2.5 1-4 1c0 0-3-3-3-7z"/>
  </svg>,
  <svg key="ai" stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>,
];

export default function Projects() {
  const { t } = useLanguage();
  const techMap = [
    ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    ['React', 'Node.js', 'Express', 'SQLite', 'Tailwind CSS'],
    ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI'],
  ];

  const PROJECTS = t.projects.items.map((item, index) => ({
    ...item,
    tech: techMap[index],
    github: index === 3 ? '' : 'https://github.com/MustaphaBounnit-03',
    demo: index === 3 ? '' : 'https://github.com/MustaphaBounnit-03',
    comingSoon: index === 3,
    icon: PROJECT_ICONS[index],
  }));

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-white/5 rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/40 box-glow-hover transition-all duration-300"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl text-primary/20 group-hover:text-primary/50 transition-colors">
                    {project.icon ?? (
                      <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.comingSoon ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 rounded-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        {t.projects.comingSoon}
                      </span>
                    ) : (
                      <>
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={t.projects.github}
                        >
                          <FaGithub size={20} />
                        </a>
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={t.projects.demo}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/MustaphaBounnit-03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-glow transition-all"
          >
            {t.projects.viewMore} <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
