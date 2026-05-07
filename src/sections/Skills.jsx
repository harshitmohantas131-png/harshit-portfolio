import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Layout, Server, Database, Code, Cloud, Sparkles, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'C++'],
    delay: 0.1,
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['HTML', 'CSS', 'Javascript', 'React.js'],
    delay: 0.2,
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Express.js'],
    delay: 0.3,
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL'],
    delay: 0.4,
  },
  {
    title: 'Core Computer Science',
    icon: Server, // Reusing Server or maybe another icon would be better, but Server works for CS
    skills: ['Basic Data Structures and Algorithms in Python and C++'],
    delay: 0.5,
  },
  {
    title: 'Development Tools',
    icon: Cloud,
    skills: ['Git', 'GitHub', 'Basic Figma'],
    delay: 0.6,
  },
  {
    title: 'Productivity & Documentation',
    icon: Layout, 
    skills: ['MS Word', 'MS PowerPoint'],
    delay: 0.7,
  },
  {
    title: 'AI & Prompt Engineering Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'Claude', 'Gemini', 'NotebookLM', 'Napkin AI', 'Gamma', 'Canva'],
    delay: 0.8,
  },
  {
    title: 'Deployment Tools',
    icon: Globe,
    skills: ['Render', 'Vercel', 'Google Cloud Run'],
    delay: 0.9,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden" style={{ background: 'var(--clr-cream)' }}>
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 -right-64 w-96 h-96 rounded-full" style={{ background: 'rgba(251,191,36,0.06)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 -left-64 w-[30rem] h-[30rem] rounded-full" style={{ background: 'rgba(249,115,22,0.04)', filter: 'blur(100px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Technical Arsenal" title="My Skills" align="center" />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ marginTop: '4rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass p-8 rounded-lg flex flex-col items-start transition-all duration-300 relative group overflow-hidden"
              style={{ 
                background: 'rgba(255,255,255,0.7)', 
                border: '2px solid var(--clr-saffron)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.02)'
              }}
            >
              {/* Soft hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                   style={{ background: 'radial-gradient(circle at top right, rgba(251,191,36,0.08), transparent 70%)' }} />

              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm border transition-transform duration-300 group-hover:scale-110"
                   style={{ background: 'var(--clr-white)', borderColor: 'rgba(0,0,0,0.03)', color: 'var(--clr-saffron)' }}>
                <category.icon size={22} strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-4" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-sm text-[13px] leading-snug font-medium transition-colors"
                    style={{ 
                      background: 'rgba(249,115,22,0.04)', 
                      color: 'var(--clr-text)', 
                      border: '1px solid var(--clr-saffron)' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
