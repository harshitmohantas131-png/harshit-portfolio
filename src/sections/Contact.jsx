import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from '../components/Icons';

const socials = [
  { id: 'github',   label: 'GitHub',   href: 'https://github.com/harshitmohantas131-png',                   icon: GitHubIcon   },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/harshit-mohanta-0201729b/',         icon: LinkedInIcon },
  { id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/u/harshit_s131_kalvium/',                  icon: LeetCodeIcon },
];

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1.25rem',
  background: 'rgba(255,255,255,0.8)',
  border: '1.5px solid rgba(28,25,23,0.08)',
  borderRadius: '0.75rem',
  color: 'var(--clr-text)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  fontFamily: 'inherit',
};

function Input({ type = 'text', placeholder, name, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--clr-saffron)' : 'rgba(28,25,23,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(251,191,36,0.1)' : 'none',
      }}
    />
  );
}

function Textarea({ placeholder, name, value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={5}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...inputStyle,
        resize: 'none',
        borderColor: focused ? 'var(--clr-saffron)' : 'rgba(28,25,23,0.08)',
        boxShadow: focused ? '0 0 0 3px rgba(251,191,36,0.1)' : 'none',
      }}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill out all fields.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // REPLACE THIS URL with your Render URL after deploying the server
      const RENDER_URL = "https://harshit-portfolio-backend.onrender.com/api/contact";
      const response = await fetch(RENDER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' }); // reset form
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Submit Error:', error);
      setStatus({ type: 'error', message: 'Network error. Is the server running?' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden" style={{ background: 'var(--clr-cream)' }}>
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px"
             style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.2), transparent)' }} />
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full"
             style={{ background: 'rgba(251,191,36,0.05)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full"
             style={{ background: 'rgba(249,115,22,0.04)', filter: 'blur(80px)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ── CTA Header ── */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p style={{ color: 'var(--clr-saffron)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            Get In Touch
          </p>
          <h2 style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)', lineHeight: '1.1', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0' }}>
            Let&apos;s build something<br />
            <span className="gradient-text">meaningful together.</span>
          </h2>
          <p style={{ color: 'var(--clr-text-muted)', fontSize: '1.125rem', lineHeight: '1.75', maxWidth: '38rem', margin: '2rem auto 0 auto', textAlign: 'center' }}>
            I&apos;m always open to discussing technology, AI, startups, product ideas, and creative collaborations.
          </p>
        </motion.div>

        {/* ── Two Columns: Info + Form ── */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* LEFT: Contact Info */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Email Card */}
            <a
              href="mailto:harshitmohanta4@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1.5px solid rgba(28,25,23,0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                   style={{ background: 'rgba(249,115,22,0.08)', color: 'var(--clr-saffron)' }}>
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--clr-warm-gray)' }}>Email</p>
                <p className="text-base font-semibold" style={{ color: 'var(--clr-text)' }}>harshitmohanta4@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+919348837256"
              className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.75)',
                border: '1.5px solid rgba(28,25,23,0.05)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                   style={{ background: 'rgba(249,115,22,0.08)', color: 'var(--clr-saffron)' }}>
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--clr-warm-gray)' }}>Phone</p>
                <p className="text-base font-semibold" style={{ color: 'var(--clr-text)' }}>+91 93488 37256</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-5 rounded-2xl"
                 style={{
                   background: 'rgba(255,255,255,0.75)',
                   border: '1.5px solid rgba(28,25,23,0.05)',
                   boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
                 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                   style={{ background: 'rgba(249,115,22,0.08)', color: 'var(--clr-saffron)' }}>
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: 'var(--clr-warm-gray)' }}>Location</p>
                <p className="text-base font-semibold" style={{ color: 'var(--clr-text)' }}>Punjab, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--clr-warm-gray)' }}>Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ id, label, href, icon: Icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.75)',
                      border: '1.5px solid rgba(28,25,23,0.06)',
                      color: 'var(--clr-text)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--clr-saffron)'; e.currentTarget.style.color = 'var(--clr-saffron)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(28,25,23,0.06)'; e.currentTarget.style.color = 'var(--clr-text)'; }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="p-8 md:p-10 rounded-3xl"
                 style={{
                   background: 'rgba(255,255,255,0.8)',
                   border: '1.5px solid rgba(28,25,23,0.05)',
                   boxShadow: '0 8px 40px rgba(0,0,0,0.03)',
                 }}>
              <h3 className="text-2xl font-bold mb-8 tracking-tight" style={{ color: 'var(--clr-text)', fontFamily: 'var(--font-display)' }}>
                Send a message
              </h3>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--clr-warm-gray)' }}>Your Name</label>
                    <Input name="name" placeholder="Harshit Mohanta" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--clr-warm-gray)' }}>Email Address</label>
                    <Input type="email" name="email" placeholder="hello@example.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--clr-warm-gray)' }}>Message</label>
                  <Textarea name="message" placeholder="I'd love to collaborate on..." value={form.message} onChange={handleChange} />
                </div>

                {status.message && (
                  <div className={`p-3 rounded-xl text-sm font-medium ${
                    status.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="self-start flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
                  style={{
                    background: 'var(--clr-text)',
                    color: 'var(--clr-white)',
                    boxShadow: '0 6px 24px rgba(28,25,23,0.15)',
                    cursor: isLoading ? 'wait' : 'pointer'
                  }}
                  onMouseEnter={(e) => { if(!isLoading) e.currentTarget.style.boxShadow = '0 10px 32px rgba(28,25,23,0.25)'; }}
                  onMouseLeave={(e) => { if(!isLoading) e.currentTarget.style.boxShadow = '0 6px 24px rgba(28,25,23,0.15)'; }}
                >
                  <Send size={16} className={isLoading ? "animate-pulse" : ""} />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
