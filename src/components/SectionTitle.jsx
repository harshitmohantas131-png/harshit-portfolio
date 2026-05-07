import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, align = 'left' }) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <div className="flex items-center gap-4 mb-4">
        {!isCenter && <div className="w-8 h-px" style={{ background: 'var(--clr-saffron)' }} />}
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--clr-saffron)' }}>
          {subtitle}
        </span>
        {isCenter && <div className="w-8 h-px" style={{ background: 'var(--clr-saffron)' }} />}
      </div>
      
      <h2 
        className="text-4xl md:text-5xl font-bold tracking-tight" 
        style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
