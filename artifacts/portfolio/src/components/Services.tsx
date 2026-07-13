import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const SERVICES = [
  {
    icon: <FaCode className="text-3xl text-primary" />,
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and highly interactive user interfaces using modern frameworks like React and Next.js.'
  },
  {
    icon: <FaServer className="text-3xl text-primary" />,
    title: 'Backend Development',
    description: 'Designing scalable APIs and robust server-side architectures using Node.js, Express, and modern databases.'
  },
  {
    icon: <FaMobileAlt className="text-3xl text-primary" />,
    title: 'Full-Stack Web Apps',
    description: 'End-to-end development of complex web applications with seamless integration between frontend and backend.'
  },
  {
    icon: <FaPaintBrush className="text-3xl text-primary" />,
    title: 'UI/UX Implementation',
    description: 'Translating design mockups into pixel-perfect, beautifully animated web experiences with a focus on craft.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a complete range of web development services, turning complex problems into elegant, performant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-white/5 rounded-xl p-8 hover:border-primary/50 group box-glow-hover transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>
              <div className="mb-6 relative z-10">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
