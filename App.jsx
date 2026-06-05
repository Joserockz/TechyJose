import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the sweet spot of the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background cyber particles and mesh overlay */}
      <BackgroundEffect />
      <div className="bg-cyber-overlay"></div>

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer style={{
        background: 'rgba(10, 10, 20, 0.8)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '3rem 0',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5
      }}>
        <div className="container">
          <p style={{ color: 'var(--text-muted)', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
            Designed & Engineered with React & Vanilla CSS.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Josemon Placid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
