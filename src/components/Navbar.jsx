import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons';

const navLinks = [
  { label: 'Home',       href: '#home'       },
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact'    },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [active,     setActive]     = useState('home');

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.4 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1  }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass border-b border-white/60 py-2.5 shadow-[0_2px_10px_rgba(249,115,22,0.04)]'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-2 group no-underline"
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-stone-800"
               style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <Code2 size={16} strokeWidth={2.5} className="text-white" />
          </div>
          <span className="font-medium text-base tracking-tight"
                style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-body)' }}>
            Harshit<span className="gradient-text">.dev</span>
          </span>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  whileHover={{ y: -1 }}
                  className={`relative px-3 py-1.5 rounded-full text-sm transition-colors duration-200 no-underline block ${
                    isActive
                      ? 'text-stone-900 font-medium'
                      : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  {link.label}
                </motion.a>
              </li>
            );
          })}
        </ul>

        {/* CTA & Socials — desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 border-r border-stone-200 pr-6">
            <a href="https://github.com/harshitmohantas131-png" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/harshit-mohanta-0201729b/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://leetcode.com/u/harshit_s131_kalvium/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-900 transition-colors">
              <LeetCodeIcon />
            </a>
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex px-5 py-2.5 rounded-full text-sm font-medium text-white transition-shadow"
            style={{ background: 'var(--clr-text)', boxShadow: '0 4px 14px rgba(28,25,23,0.15)' }}
          >
            Let&apos;s Talk
          </motion.a>
        </div>

        {/* Hamburger — mobile */}
        <button
          id="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ color: 'var(--clr-saffron)', background: 'rgba(249,115,22,0.08)' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t border-white/60"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 list-none">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0,   opacity: 1  }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className={`block px-4 py-3 rounded-xl font-medium text-sm no-underline transition-colors ${
                      active === link.href.slice(1)
                        ? 'text-stone-900 bg-stone-100'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
