import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative glass rounded-[2rem] p-4 md:p-8 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center group overflow-hidden`}
      style={{
        background: 'rgba(255,255,255,0.7)',
        border: '1px solid rgba(28,25,23,0.04)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.02)'
      }}
    >
      {/* Subtle hover gradient behind the card */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
           style={{ background: `radial-gradient(circle at ${isEven ? 'right' : 'left'} center, rgba(251,191,36,0.04), transparent 70%)` }} />

      {/* Image Section */}
      <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden relative shadow-lg"
           style={{ border: '1px solid rgba(28,25,23,0.05)' }}>
        <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-6 relative z-10">
        
        {/* Header (Status & Featured) */}
        <div className="flex items-center gap-3">
          {project.featured && (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(251,191,36,0.15)', color: 'var(--clr-saffron)' }}>
              <Sparkles size={12} />
              Featured
            </span>
          )}
          {project.status && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ background: 'rgba(28,25,23,0.04)', color: 'var(--clr-warm-gray)' }}>
              {project.status}
            </span>
          )}
        </div>

        {/* Title & Description — Boxed */}
        <div style={{
          border: '2.5px solid var(--clr-saffron)',
          padding: '1.5rem',
          background: 'rgba(249,115,22,0.02)'
        }}>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
            {project.title}
          </h3>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-sm text-[13px] leading-snug font-medium transition-colors"
              style={{ 
                background: 'rgba(249,115,22,0.04)', 
                color: 'var(--clr-text)', 
                border: '1px solid var(--clr-saffron)' 
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'var(--clr-text)', color: 'var(--clr-white)', boxShadow: '0 4px 12px rgba(28,25,23,0.15)' }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-stone-100"
              style={{ color: 'var(--clr-text)', border: '1px solid rgba(28,25,23,0.1)' }}
            >
              <GitHubIcon className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>

      </div>
    </motion.div>
  );
}
