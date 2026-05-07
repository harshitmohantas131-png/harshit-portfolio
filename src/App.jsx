import './index.css';
import Navbar    from './components/Navbar';
import Hero       from './sections/Hero';
import About      from './sections/About';
import Skills     from './sections/Skills';
import Projects   from './sections/Projects';
import Experience from './sections/Experience';
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
        <Contact />
      </main>

      <footer
        className="text-center py-6 text-sm"
        style={{ color: 'var(--clr-warm-gray)', background: 'var(--clr-cream)', borderTop: '1px solid var(--clr-border)' }}
      >
        Designed &amp; Built by{' '}
        <span className="gradient-text font-semibold">Harshit Mohanta</span>{' '}
        · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
