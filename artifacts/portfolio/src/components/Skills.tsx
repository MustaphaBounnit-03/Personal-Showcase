import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGithub
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const PROFICIENT_SKILLS = [
  { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
  { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
  { name: 'Express', icon: <SiExpress className="text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
  { name: 'Git/GitHub', icon: <FaGithub className="text-white" /> },
];


export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 border-l-2 border-primary pl-4">Proficient</h3>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {PROFICIENT_SKILLS.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="bg-card border border-white/5 rounded-lg p-4 flex items-center gap-4 hover:border-primary/40 box-glow-hover transition-all duration-300 group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
