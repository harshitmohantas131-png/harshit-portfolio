import './index.css';
import Navbar    from './components/Navbar';
import Hero       from './sections/Hero';
import About      from './sections/About';
import Skills     from './sections/Skills';
import Projects   from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact    from './sections/Contact';

export default function App() {
  return (
    <div className="relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer style={{ background: 'var(--clr-white)', borderTop: '1px solid rgba(28,25,23,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-base font-bold tracking-tight" style={{ color: 'var(--clr-text)' }}>Harshit.dev</span>
            <span className="text-xs" style={{ color: 'var(--clr-warm-gray)' }}>Built with React, Framer Motion &amp; creativity.</span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm transition-colors hover:text-stone-900"
                style={{ color: 'var(--clr-warm-gray)' }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: 'var(--clr-warm-gray)' }}>
            © {new Date().getFullYear()} <span className="font-semibold" style={{ color: 'var(--clr-text)' }}>Harshit Mohanta</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
