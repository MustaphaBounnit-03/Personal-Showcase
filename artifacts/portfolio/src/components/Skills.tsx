import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGithub, FaPhp, FaJava, FaPython, FaGit,
  FaLinux, FaBug, FaLock, FaMobileAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMysql, SiSqlite, SiCsharp,
} from 'react-icons/si';
import { MdDesignServices, MdApi } from 'react-icons/md';

const CATEGORIES = [
  {
    title: 'Frontend Development',
    color: '#00d4ff',
    skills: [
      { name: 'React.js',           icon: <FaReact        className="text-[#61DAFB]" /> },
      { name: 'JavaScript (ES6+)',   icon: <FaJs           className="text-[#F7DF1E]" /> },
      { name: 'HTML5',              icon: <FaHtml5         className="text-[#E34F26]" /> },
      { name: 'CSS3',               icon: <FaCss3Alt       className="text-[#1572B6]" /> },
      { name: 'Tailwind CSS',       icon: <SiTailwindcss   className="text-[#06B6D4]" /> },
      { name: 'Responsive Design',  icon: <FaMobileAlt     className="text-[#00d4ff]" /> },
    ],
  },
  {
    title: 'Backend Development',
    color: '#a78bfa',
    skills: [
      { name: 'Node.js',    icon: <FaNodeJs   className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress  className="text-white"     /> },
      { name: 'PHP',        icon: <FaPhp      className="text-[#777BB4]" /> },
      { name: 'Java',       icon: <FaJava     className="text-[#ED8B00]" /> },
      { name: 'C#',         icon: <SiCsharp   className="text-[#239120]" /> },
      { name: 'Python',     icon: <FaPython   className="text-[#3776AB]" /> },
    ],
  },
  {
    title: 'Databases',
    color: '#fb923c',
    skills: [
      { name: 'MySQL',  icon: <SiMysql  className="text-[#4479A1]" /> },
      { name: 'SQLite', icon: <SiSqlite className="text-[#44a8c4]" /> },
    ],
  },
  {
    title: 'Version Control & Collaboration',
    color: '#f97316',
    skills: [
      { name: 'Git',    icon: <FaGit    className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white"     /> },
    ],
  },
  {
    title: 'Other Skills',
    color: '#34d399',
    skills: [
      { name: 'UI/UX Design',      icon: <MdDesignServices className="text-[#f472b6]" /> },
      { name: 'REST APIs',         icon: <MdApi            className="text-[#00d4ff]" /> },
      { name: 'JWT Authentication',icon: <FaLock           className="text-[#fbbf24]" /> },
      { name: 'Debugging',         icon: <FaBug            className="text-[#f87171]" /> },
      { name: 'Linux',             icon: <FaLinux          className="text-[#FCC624]" /> },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {CATEGORIES.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <h3
                className="text-lg font-semibold text-white mb-5 pl-4 border-l-2"
                style={{ borderColor: category.color }}
              >
                {category.title}
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-card border border-white/5 rounded-lg p-4 flex flex-col items-center gap-3 hover:border-white/20 hover:bg-white/5 transition-all duration-300 group"
                    style={{ ['--hover-color' as string]: category.color }}
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-xs text-gray-400 group-hover:text-white transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
