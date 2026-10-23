import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section for navigation highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Global smooth scroll reveal for sections and cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.timeline-item-editorial, .skills-card-editorial, .about-editorial-grid, .contact-split-layout'
    );
    elements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Top Dusty-Rose Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main id="main-content">
        {/* Asymmetrical Split-Screen Hero with Editorial Portrait */}
        <Hero onExploreProjects={handleExploreProjects} />

        {/* A Little About Me */}
        <About />

        {/* Selected Works (Art-Directed Editorial Gallery with Live Deployment Links) */}
        <Projects />

        {/* Experience — My Journey Timeline */}
        <Experience />

        {/* Skills — My Technical Toolkit */}
        <Skills />

        {/* Contact — Let's Build Something Intelligent */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
