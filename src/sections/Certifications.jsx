import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const certifications = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    provider: 'Codecademy',
    note: 'PERN Stack Focus',
    status: 'Ongoing',
    statusIcon: Clock,
    statusColor: 'var(--clr-saffron)',
    statusBg: 'rgba(251,191,36,0.12)',
  },
  {
    id: 2,
    title: 'MongoDB Course',
    provider: 'Codecademy',
    note: null,
    status: 'Completed',
    statusIcon: CheckCircle,
    statusColor: '#16a34a',
    statusBg: 'rgba(22,163,74,0.08)',
  },
  {
    id: 3,
    title: 'Deloitte Australia Virtual Work Experience Program',
    provider: 'Forage',
    note: null,
    status: 'Completed',
    statusIcon: CheckCircle,
    statusColor: '#16a34a',
    statusBg: 'rgba(22,163,74,0.08)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section relative overflow-hidden" style={{ background: 'var(--clr-white)' }}>
      {/* Subtle background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full"
             style={{ background: 'rgba(251,191,36,0.04)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionTitle subtitle="Growth Path" title="Certifications & Learning" align="left" />

        <motion.div
          style={{ marginTop: '3.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.25 } }}
              className="flex items-center justify-between gap-6 p-6 rounded-2xl transition-all duration-300 group"
              style={{
                background: 'rgba(255,255,255,0.8)',
                border: '1.5px solid rgba(28,25,23,0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}
            >
              {/* Icon + Text */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(249,115,22,0.06)', color: 'var(--clr-saffron)' }}>
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
                    {cert.title}
                  </h4>
                  <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--clr-text-muted)' }}>
                    {cert.provider}{cert.note ? ` · ${cert.note}` : ''}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full shrink-0 text-sm font-bold"
                style={{ background: cert.statusBg, color: cert.statusColor }}
              >
                <cert.statusIcon size={14} />
                {cert.status}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
