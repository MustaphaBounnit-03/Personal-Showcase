import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGithub, FaPhp, FaJava, FaPython, FaGit,
  FaLinux, FaBug, FaLock, FaMobileAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMysql, SiSqlite, SiSharp,
} from 'react-icons/si';
import { MdDesignServices, MdApi } from 'react-icons/md';
import { useLanguage } from '@/lib/i18n';

const CATEGORY_COLORS = [
  '#00d4ff',
  '#a78bfa',
  '#fb923c',
  '#f97316',
  '#34d399',
];

const SKILL_ICONS: Record<string, ReactNode> = {
  'React.js': <FaReact className="text-[#61DAFB]" />,
  'JavaScript (ES6+)': <FaJs className="text-[#F7DF1E]" />,
  HTML5: <FaHtml5 className="text-[#E34F26]" />,
  CSS3: <FaCss3Alt className="text-[#1572B6]" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
  'Responsive Design': <FaMobileAlt className="text-[#00d4ff]" />,
  'Node.js': <FaNodeJs className="text-[#339933]" />,
  'Express.js': <SiExpress className="text-white" />,
  PHP: <FaPhp className="text-[#777BB4]" />,
  Java: <FaJava className="text-[#ED8B00]" />,
  'C#': <SiSharp className="text-[#239120]" />,
  Python: <FaPython className="text-[#3776AB]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  SQLite: <SiSqlite className="text-[#44a8c4]" />,
  Git: <FaGit className="text-[#F05032]" />,
  GitHub: <FaGithub className="text-white" />,
  'UI/UX Design': <MdDesignServices className="text-[#f472b6]" />,
  'REST APIs': <MdApi className="text-[#00d4ff]" />,
  'JWT Authentication': <FaLock className="text-[#fbbf24]" />,
  Debugging: <FaBug className="text-[#f87171]" />,
  Linux: <FaLinux className="text-[#FCC624]" />,
};

export default function Skills() {
  const { t } = useLanguage();

  const CATEGORIES = [
    {
      title: t.skills.categories.frontend,
      skills: [
        'React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design',
      ],
    },
    {
      title: t.skills.categories.backend,
      skills: [
        'Node.js', 'Express.js', 'PHP', 'Java', 'C#', 'Python',
      ],
    },
    {
      title: t.skills.categories.databases,
      skills: ['MySQL', 'SQLite'],
    },
    {
      title: t.skills.categories.versionControl,
      skills: ['Git', 'GitHub'],
    },
    {
      title: t.skills.categories.other,
      skills: ['UI/UX Design', 'REST APIs', 'JWT Authentication', 'Debugging', 'Linux'],
    },
  ].map((category, index) => ({
    ...category,
    color: CATEGORY_COLORS[index],
    skills: category.skills.map((name) => ({
      name,
      icon: SKILL_ICONS[name],
    })),
  }));

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.skills.title}</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
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
