import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../components/Icons';

const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/harshitmohantas131-png', icon: GitHubIcon },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshit-mohanta-0201729b/', icon: LinkedInIcon },
  { id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/harshit_s131_kalvium/', icon: LeetCodeIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden" style={{ background: 'var(--clr-cream)' }}>
      {/* Subtle top border/divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(28,25,23,0.1), transparent)' }} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center w-full text-center space-y-6 mx-auto"
        >
          <h2 className="w-full text-center text-4xl md:text-5xl font-bold tracking-tight mx-auto" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)', textAlign: 'center' }}>
            Let&apos;s Build Something Together.
          </h2>
          <p className="w-full text-center text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--clr-text-muted)' }}>
            I&apos;m currently open for new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          {/* Contact Action */}
          <div className="w-full pt-8 pb-12 flex justify-center items-center">
            <a
              href="mailto:harshitmohanta@example.com"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-medium transition-all"
              style={{ 
                background: 'var(--clr-text)', 
                color: 'var(--clr-white)',
                boxShadow: '0 8px 32px rgba(28, 25, 23, 0.15)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(28, 25, 23, 0.2)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(28, 25, 23, 0.15)'; }}
            >
              <Mail size={20} /> Say Hello
            </a>
          </div>

          {/* Social Links Row */}
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <p className="w-full text-center text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--clr-warm-gray)' }}>
              Or connect with me on
            </p>
            <div className="w-full flex flex-wrap items-center justify-center gap-4">
              {socials.map(({ id, label, href, icon: Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-14 h-14 rounded-2xl glass transition-all duration-300"
                  style={{ 
                    color: 'var(--clr-text)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.9)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--grad-glass)'; }}
                  aria-label={label}
                >
                  <Icon />
                  <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-stone-500 pointer-events-none">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Location snippet */}
          <div className="w-full pt-16 pb-8 flex items-center justify-center gap-2 text-sm text-center" style={{ color: 'var(--clr-warm-gray)' }}>
            <MapPin size={14} /> Based in Punjab, India
          </div>
        </motion.div>
      </div>
    </section>
  );
}
