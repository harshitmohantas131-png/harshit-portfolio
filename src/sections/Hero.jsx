import { motion } from 'framer-motion';
import { ArrowRight, Mail, Code2 } from 'lucide-react';

import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../components/Icons';

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const socials = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/harshitmohantas131-png',
    icon: GitHubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshit-mohanta-0201729b/',
    icon: LinkedInIcon,
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    href: 'https://leetcode.com/u/harshit_s131_kalvium/',
    icon: LeetCodeIcon,
  },
];

/* ─── role tags ─── */
const roles = [
  'Software Product Engineer',
  'MERN Stack Developer',
  'AI Builder',
  'Open Source Learner',
  'SWE Intern @ Yuga Yatra Retail (OPC) Pvt Ltd.',
  '1st Year CS Freshman @ Lovely Professional University X Kalvium',
];

/* ─── background blobs ─── */
function Blob({ className, style }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none select-none ${className}`}
      style={{ filter: 'blur(80px)', ...style }}
    />
  );
}


/* ═══════════════════════════════════════════
   HERO SECTION
═══════════════════════════════════════════ */
export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col pt-32 md:pt-40 lg:pt-48 pb-10 overflow-hidden"
      style={{ background: 'var(--grad-hero)' }}
    >
      {/* ── Background Decorative Blobs ── */}
      <Blob
        className="w-[600px] h-[600px] -top-32 -right-32 animate-float-slow"
        style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)' }}
      />
      <Blob
        className="w-[500px] h-[500px] -bottom-24 -left-24 animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
      <Blob
        className="w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 70%)', animationDelay: '2s' }}
      />

      {/* ── Subtle Grid Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(var(--clr-saffron) 1px, transparent 1px), linear-gradient(90deg, var(--clr-saffron) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 mt-40 md:mt-52 lg:mt-60 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6"
          >
            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-2">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--clr-text)' }}
              >
                Hi, I&apos;m{' '}
                <br />
                <span className="gradient-text">Harshit</span>{' '}
                <span style={{ color: 'var(--clr-text)' }}>Mohanta</span>
              </h1>
            </motion.div>

            {/* Animated role tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  className="px-3 py-1 rounded-full text-xs font-medium tracking-wide"
                  style={{
                    background: 'rgba(255, 255, 255, 0.6)',
                    color: 'var(--clr-text-muted)',
                    border: '1px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>

            {/* Sub-heading */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: 'var(--clr-text-muted)', fontFamily: 'var(--font-body)' }}
            >
              Building{' '}
              <span className="font-semibold" style={{ color: 'var(--clr-text)' }}>modern web experiences</span>,{' '}
              <span className="font-semibold" style={{ color: 'var(--clr-text)' }}>AI-powered products</span>, and{' '}
              creative digital solutions that make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <motion.a
                id="hero-view-projects"
                href="#projects"
                onClick={(e) => { e.preventDefault(); handleScroll('#projects'); }}
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects <ArrowRight size={16} />
              </motion.a>

              <motion.a
                id="hero-contact"
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
                className="btn-outline"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} /> Contact Me
              </motion.a>
            </motion.div>

          </motion.div>

          {/* RIGHT — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0,  scale: 1    }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Main card */}
            <div
              className="relative w-[380px] h-[440px] rounded-[2.5rem] glass flex flex-col items-center justify-center gap-6 overflow-hidden"
              style={{ border: '1.5px solid rgba(255,255,255,0.8)', boxShadow: 'var(--shadow-lg)' }}
            >
              {/* Inner gradient ring */}
              <div
                className="w-36 h-36 rounded-full flex items-center justify-center glass"
                style={{
                  border: '1px solid rgba(255,255,255,0.9)',
                  background: 'rgba(255,255,255,0.5)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                }}
              >
                <span className="text-6xl select-none">👨‍💻</span>
              </div>

              <div className="text-center px-8">
                <p className="text-xl font-bold" style={{ color: 'var(--clr-text)' }}>
                  Harshit Mohanta
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--clr-text-muted)' }}>
                  Software Product Engineer
                </p>
                <div
                  className="mt-4 px-4 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-2"
                  style={{ background: 'rgba(255,255,255,0.8)', color: 'var(--clr-text)', border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Open to Opportunities
                </div>
              </div>

              {/* Skill pills row */}
              {/* Skills Categorized */}
              <div className="w-full flex flex-col gap-3 px-2 mt-4">
                {[
                  { title: "Languages & Core", skills: ["Python", "C++", "Data Structures", "Algorithms"] },
                  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
                  { title: "Backend & DB", skills: ["Node.js", "Express.js", "MongoDB", "MySQL"] },
                  { title: "Tools & AI", skills: ["Git", "GitHub", "Figma", "ChatGPT", "Claude", "Gemini", "NotebookLM", "Napkin AI", "Gamma"] }
                ].map((group) => (
                  <div key={group.title} className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1.5">{group.title}</span>
                    <div className="flex gap-1.5 flex-wrap justify-center">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors hover:bg-white hover:text-stone-900"
                          style={{ background: 'rgba(255,255,255,0.4)', color: 'var(--clr-text-muted)', border: '1px solid rgba(255,255,255,0.6)' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative inner blobs */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full"
                style={{ background: 'rgba(249,115,22,0.12)', filter: 'blur(30px)' }}
              />
              <div
                className="absolute -top-8 -left-8 w-32 h-32 rounded-full"
                style={{ background: 'rgba(251,191,36,0.18)', filter: 'blur(25px)' }}
              />
            </div>

          </motion.div>
        </div>
      </div>

    </section>
  );
}
