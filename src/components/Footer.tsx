import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-inner-content">
        <div>
          <span className="footer-brand-script">{personal.wordmark}</span>
          <p style={{ fontSize: '0.86rem', color: 'rgba(248, 243, 237, 0.7)', marginTop: '0.4rem' }}>
            AI Engineer &bull; Building intelligent applications with mathematical rigor and aesthetic refinement.
          </p>
        </div>

        <div className="footer-nav-links">
          <a href="#hero" className="footer-nav-link">Home</a>
          <a href="#about" className="footer-nav-link">About</a>
          <a href="#projects" className="footer-nav-link">Projects</a>
          <a href="#experience" className="footer-nav-link">Experience</a>
          <a href="#skills" className="footer-nav-link">Skills</a>
          <a href="#contact" className="footer-nav-link">Contact</a>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: '1px solid rgba(248, 243, 237, 0.25)',
            color: 'var(--color-warm-ivory)',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          title="Return to top"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <div className="footer-bottom-bar">
        <span>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</span>
        <span>Crafted with React, Vite & TypeScript &bull; Delhi, India</span>
      </div>
    </footer>
  );
};
