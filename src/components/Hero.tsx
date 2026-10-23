import React, { useState } from 'react';
import { Sparkles, FileText, Camera, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects }) => {
  const { personal } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="hero-split-section">
      {/* Subtle floating ambient sparkles in background */}
      <div className="hero-ambient-sparkles" aria-hidden="true">
        <span className="ambient-sparkle sp-1">✦</span>
        <span className="ambient-sparkle sp-2">✦</span>
        <span className="ambient-sparkle sp-3">✧</span>
        <span className="ambient-sparkle sp-4">✦</span>
        <span className="ambient-sparkle sp-5">✧</span>
      </div>

      {/* ====================================================================
          LEFT SIDE: Warm Ivory Panel (~48% width) with Editorial Portrait
          ==================================================================== */}
      <div className="hero-panel-left">
        <div className="portrait-editorial-composition">
          {/* Status Badge floating at top of portrait */}
          <div className="portrait-floating-badge">
            <span className="status-pulse-dot" />
            <span>Open to AI Roles &amp; Collaborations</span>
          </div>

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
              /* Fallback if image fails */
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
                  Khushi Nayak
                </div>
              </div>
            )}

            {/* Subtle Gradient Vignette Overlay */}
            <div className="portrait-vignette-overlay" aria-hidden="true" />
          </div>

          {/* Decorative Corner Filigree Ornament */}
          <div className="portrait-corner-ornament" aria-hidden="true" />

          {/* Decorative Vertical Label Near Edge */}
          <div className="portrait-vertical-label" aria-hidden="true">
            <span>AI ENGINEER &bull; EDITORIAL FOLIO &bull; 2026</span>
          </div>

          {/* Bottom editorial caption pill */}
          <div className="portrait-bottom-caption">
            <Sparkles size={13} className="sparkle-gold" />
            <span>Machine Learning &bull; Agentic Workflows &bull; C++ Systems</span>
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
            <span>{personal.title} &bull; Machine Learning &amp; Systems</span>
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
              <Compass size={15} />
              <span>A Little About Me</span>
            </a>

            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
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
