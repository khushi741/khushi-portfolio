import React, { useState } from 'react';
import { ArrowRight, Sparkles, FileText, Camera } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="hero-split-section">
      {/* ====================================================================
          LEFT SIDE: Warm Ivory Panel (~48% width) with Editorial Portrait
          ==================================================================== */}
      <div className="hero-panel-left">
        <div className="portrait-editorial-composition">
          {/* Large Vertically Oriented Portrait Frame */}
          <div className="portrait-frame">
            {!imageError ? (
              <img
                src={personal.portraitUrl}
                alt={`${personal.name} — AI Engineer`}
                className="portrait-image"
                onError={() => setImageError(true)}
              />
            ) : (
              /* High-End Editorial Portrait Placeholder (No fake portrait or altered identity) */
              <div className="portrait-placeholder-wrapper">
                <div className="placeholder-silhouette-art">
                  <span className="placeholder-initials">KN</span>
                </div>
                <h3 className="placeholder-title">{personal.name}</h3>
                <p className="placeholder-note">
                  AI Engineer &bull; Editorial Folio
                </p>
                <div className="placeholder-upload-hint">
                  <Camera size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
                  Editable Portrait Frame
                </div>
              </div>
            )}
          </div>

          {/* Decorative Corner Filigree Ornament */}
          <div className="portrait-corner-ornament" aria-hidden="true" />

          {/* Decorative Vertical Label Near Edge */}
          <div className="portrait-vertical-label" aria-hidden="true">
            <span>AI ENGINEER &bull; EDITORIAL FOLIO &bull; 2026</span>
          </div>
        </div>
      </div>

      {/* ====================================================================
          RIGHT SIDE: Dusty Rose Panel (~52% width) with Large Serif Headline
          ==================================================================== */}
      <div className="hero-panel-right">
        <div className="hero-content-wrap">
          {/* Subtitle / Discipline Tag */}
          <div className="hero-subtitle-tag">
            <span>{personal.title} &bull; Machine Learning & Systems</span>
          </div>

          {/* Large High-Contrast Serif Headline */}
          <h1 className="hero-headline">
            Building Intelligence,<br />
            <span className="script-accent">Beautifully.</span>
          </h1>

          {/* Short, Professionally Written AI Engineer Introduction */}
          <p className="hero-supporting-text">
            {personal.heroSupporting}
          </p>

          {/* Burgundy Pill-Shaped CTA & Secondary Actions */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="hero-primary-pill-cta"
              onClick={onExploreProjects}
            >
              <span>{personal.heroCta}</span>
              <span className="cta-arrow" aria-hidden="true">&rarr;</span>
            </button>

            <a
              href="#about"
              className="hero-secondary-link"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('about');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>A Little About Me</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <FileText size={15} />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Editorial Micro-Meta Status Ribbon */}
          <div className="hero-status-ribbon">
            <span className="status-indicator-dot" />
            <span className="status-indicator-text">
              Currently: <strong>{personal.currentRole.title}</strong> @ {personal.currentRole.company} &bull; {personal.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
