import { motion } from 'framer-motion';
import { FaCode, FaServer, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import { useLanguage } from '@/lib/i18n';

const SERVICE_ICONS = [
  <FaCode className="text-3xl text-primary" />,
  <FaServer className="text-3xl text-primary" />,
  <FaMobileAlt className="text-3xl text-primary" />,
  <FaPaintBrush className="text-3xl text-primary" />,
];

export default function Services() {
  const { t } = useLanguage();
  const SERVICES = t.services.items.map((item, index) => ({
    ...item,
    icon: SERVICE_ICONS[index],
  }));

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.services.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
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
