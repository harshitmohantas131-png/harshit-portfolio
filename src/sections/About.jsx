import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { ChevronRight, GraduationCap } from 'lucide-react';

const education = [
  {
    id: 1,
    period: '2025 – Present',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science Engineering (Software Product Engineering)',
    institution: 'Lovely Professional University, Punjab',
    desc: 'Industry Work-Integrated Program in collaboration with Kalvium, Bengaluru',
  },
  {
    id: 2,
    period: '2025',
    degree: 'Class XII',
    institution: 'ODM Public School, Bhubaneswar, Odisha',
  },
  {
    id: 3,
    period: '2023',
    degree: 'Class X',
    institution: 'Future Bhubaneswar School, Bhubaneswar, Odisha',
  }
];

const extracurriculars = [
  "Strong interest in technology-driven problem solving and digital product thinking",
  "Actively explore intersections of software with economics, governance, and global systems",
  "Interested in education innovation, future of work, and technology-led social impact",
  "Regularly follow emerging trends in AI, software ecosystems, startups, and global affairs"
];

const focusAreas = [
  'MERN Stack Web Dev',
  'DSA using Python and C++',
  'Mastering AI Tools for Productivity',
  'Mastering Git Flow and Github and Version Control Systems'
];
const interests = ['Startups', 'Emerging Tech', 'Economics', 'Governance', 'Digital Innovation'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section relative" style={{ background: 'var(--clr-white)' }}>
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full" style={{ background: 'rgba(249,115,22,0.03)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 -left-20 w-72 h-72 rounded-full" style={{ background: 'rgba(251,191,36,0.04)', filter: 'blur(50px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="My Journey" title="About Me" align="left" />

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Narrative & Pills */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Intro Narrative */}
            <motion.div variants={itemVariants} className="text-lg leading-relaxed" style={{ color: 'var(--clr-text-muted)', marginTop: '2rem' }}>
              <p style={{ paddingBottom: '1.5rem' }}>
                Motivated undergraduate Computer Science student specializing in Software Product Engineering, with growing hands-on experience in full stack web development, programming fundamentals, and software problem solving through an industry-integrated curriculum.
              </p>
              <p style={{ paddingBottom: '1.5rem' }}>
                Currently developing practical expertise in MERN stack technologies, version control systems, databases, and modern AI-assisted productivity tools.
              </p>
              <p style={{ paddingBottom: '1.5rem' }}>
                Alongside technology, deeply interested in global economics, financial systems, geopolitics, governance, business strategy, and the role of innovation in transforming education and society.
              </p>
              <p style={{ paddingBottom: '3rem' }}>
                Seeking opportunities to apply technical skills in meaningful projects, collaborative environments, and emerging technology ecosystems.
              </p>
            </motion.div>

            {/* Focus & Interests */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-8 border-t" style={{ borderColor: 'var(--clr-border)', paddingTop: '2.5rem' }}>
              
              {/* Focus */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--clr-text)' }}>Current Focus</h4>
                <ul className="space-y-3">
                  {focusAreas.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--clr-text-muted)' }}>
                      <ChevronRight size={14} style={{ color: 'var(--clr-saffron)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold tracking-widest uppercase" style={{ color: 'var(--clr-text)' }}>Interests</h4>
                <ul className="space-y-3">
                  {interests.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: 'var(--clr-text-muted)' }}>
                      <ChevronRight size={14} style={{ color: 'var(--clr-saffron)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </motion.div>

          {/* RIGHT: Education Timeline */}
          <motion.div 
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ background: 'var(--clr-cream)', color: 'var(--clr-saffron)' }}>
                <GraduationCap size={20} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>Education</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-5 -translate-x-1/2 mt-1.5 w-3 h-3 rounded-full border-2 bg-white transition-colors duration-300" 
                       style={{ borderColor: 'var(--clr-saffron)' }} />
                  
                  {/* Content Card */}
                  <div className="ml-10 w-full glass p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                       style={{ 
                         background: 'var(--clr-cream)', 
                         border: '1px solid rgba(28,25,23,0.05)',
                         boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                       }}>
                    <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase mb-3"
                          style={{ background: 'rgba(251,191,36,0.15)', color: 'var(--clr-saffron)' }}>
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold leading-snug mb-1" style={{ color: 'var(--clr-text)' }}>
                      {item.degree}
                    </h4>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--clr-warm-gray)' }}>
                      {item.institution}
                    </p>
                    {item.desc && (
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extracurriculars Box */}
            <motion.div 
              variants={itemVariants}
              className="w-full glass p-6 md:p-8 rounded-3xl"
              style={{ 
                marginTop: '4rem',
                background: 'var(--clr-cream)', 
                border: '1px solid rgba(28,25,23,0.05)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.03)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🎒</span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
                  Extracurricular Interests
                </h3>
              </div>
              <ul className="space-y-4">
                {extracurriculars.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'var(--clr-saffron)' }} />
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
