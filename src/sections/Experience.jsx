import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Sparkles, GitMerge, Users, Cloud, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    featured: true,
    icon: Sparkles,
    label: 'AI Hackathon Series',
    role: 'Ongoing Participant',
    org: 'Google Prompt Wars',
    period: '2024 – Present',
    status: 'Ongoing',
    color: 'var(--clr-saffron)',
    colorBg: 'rgba(251,191,36,0.12)',
    highlights: [
      'Built AI-powered applications under real hackathon conditions',
      'Developed and deployed venueflow.ai — an AI stadium management platform',
      'Developed and deployed votewise.ai — a civic education AI platform',
      'Rapid prototyping workflows using modern prompt engineering techniques',
      'Deployed production applications on Google Cloud Run',
    ],
  },
  {
    id: 2,
    featured: false,
    icon: GitMerge,
    label: 'Open Source',
    role: 'Contributor',
    org: 'Kalvium × Mathesar',
    period: '2025',
    status: 'Merged',
    color: '#16a34a',
    colorBg: 'rgba(22,163,74,0.08)',
    highlights: [
      'Contributed to a PostgreSQL-based open-source project',
      'Worked in an Ubuntu Linux development environment',
      'Collaborated via CLI and repository workflows',
      'Contributions successfully reviewed and merged',
    ],
  },
  {
    id: 3,
    featured: false,
    icon: Users,
    label: 'Developer Conference',
    role: 'Attendee',
    org: 'Google DevFest',
    period: '2024',
    status: 'Attended',
    color: '#2563eb',
    colorBg: 'rgba(37,99,235,0.07)',
    highlights: [
      'Gained exposure to Google\'s developer ecosystem and tooling',
      'Networked with engineers, founders, and product builders',
      'Engaged in industry-focused technical sessions and talks',
    ],
  },
  {
    id: 4,
    featured: false,
    icon: Cloud,
    label: 'Cloud Community Event',
    role: 'Attendee',
    org: 'AWS Community Day',
    period: '2024',
    status: 'Attended',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.07)',
    highlights: [
      'Explored cloud infrastructure and AWS service ecosystems',
      'Participated in community-driven architecture discussions',
      'Learned from industry practitioners in cloud and DevOps',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden" style={{ background: 'var(--clr-cream)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full" style={{ background: 'rgba(251,191,36,0.04)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full" style={{ background: 'rgba(249,115,22,0.03)', filter: 'blur(60px)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="My Path" title="Experience" align="left" />

        <motion.div
          className="relative"
          style={{ marginTop: '4rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(249,115,22,0.2) 15%, rgba(249,115,22,0.2) 85%, transparent)' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="w-full p-6 md:p-8 rounded-2xl transition-all duration-300 relative overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.75)',
                    border: exp.featured ? `2px solid var(--clr-saffron)` : '1px solid rgba(28,25,23,0.05)',
                    boxShadow: exp.featured
                      ? '0 8px 32px rgba(251,191,36,0.08)'
                      : '0 4px 20px rgba(0,0,0,0.02)',
                  }}
                >
                  {/* Featured glow */}
                  {exp.featured && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: 'radial-gradient(circle at top left, rgba(251,191,36,0.06), transparent 60%)' }}
                    />
                  )}

                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        {exp.featured && (
                          <span
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
                            style={{ background: 'rgba(251,191,36,0.15)', color: 'var(--clr-saffron)' }}
                          >
                            <Sparkles size={10} />
                            Featured
                          </span>
                        )}
                        <span
                          className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest"
                          style={{ background: exp.colorBg, color: exp.color }}
                        >
                          {exp.label}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
                          style={{ background: 'rgba(28,25,23,0.04)', color: 'var(--clr-warm-gray)' }}
                        >
                          {exp.status}
                        </span>
                      </div>

                      <h3
                        className="text-2xl md:text-3xl font-bold tracking-tight"
                        style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}
                      >
                        {exp.org}
                      </h3>
                      <p className="text-base font-medium" style={{ color: 'var(--clr-text-muted)' }}>
                        {exp.role}
                      </p>
                    </div>

                    {/* Period badge */}
                    <span
                      className="px-4 py-2 rounded-xl text-sm font-bold shrink-0"
                      style={{ background: 'rgba(28,25,23,0.03)', color: 'var(--clr-warm-gray)', border: '1px solid rgba(28,25,23,0.06)' }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mb-5" style={{ height: '1px', background: 'rgba(28,25,23,0.05)' }} />

                  {/* Highlights */}
                  <ul className="space-y-3 relative z-10">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight
                          size={16}
                          className="shrink-0 mt-0.5"
                          style={{ color: exp.color }}
                        />
                        <span className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
