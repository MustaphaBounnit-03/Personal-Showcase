import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with payment processing, user authentication, and an admin dashboard for inventory management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  },
  {
    title: 'DevChat Application',
    description: 'Real-time chat application for developers featuring channels, direct messaging, code snippets, and typing indicators.',
    tech: ['Next.js', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  },
  {
    title: 'Project Task Manager',
    description: 'Kanban-style task management tool with drag-and-drop capabilities, team collaboration, and progress analytics.',
    tech: ['React', 'Redux', 'Node.js', 'Framer Motion'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  },
  {
    title: 'Cyberpunk Portfolio',
    description: 'This very website. A highly interactive, performant personal portfolio with a distinct cyberpunk aesthetic.',
    tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  },
  {
    title: 'Weather App',
    description: 'Location-based weather forecast app providing real-time data, hourly predictions, and interactive weather maps.',
    tech: ['JavaScript', 'OpenWeather API', 'CSS Modules'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  },
  {
    title: 'Finance Tracker',
    description: 'Personal finance dashboard that visualizes income and expenses with interactive charts and automated categorization.',
    tech: ['React', 'Recharts', 'Express', 'MongoDB'],
    github: 'https://github.com/MustaphaBounnit-03',
    demo: 'https://github.com/MustaphaBounnit-03',
  }
];

export default function Projects() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Real-world applications built with modern technologies.
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
                    {/* Placeholder for project icon/visual */}
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
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
            View more on GitHub <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
