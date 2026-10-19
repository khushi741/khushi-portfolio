import React from 'react';
import { Sparkles, GraduationCap, Briefcase, Code2, Award, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="editorial-section about-section-wrap">
      <div className="section-container-inner">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-label-script">Biography & Perspective</span>
          <h2 className="section-headline-serif">{personal.bioHeading}</h2>
          <div className="section-divider-delicate" />
          <p className="section-sublead-text">
            Bridging theoretical machine learning architectures with robust, production-grade software engineering.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="about-editorial-grid">
          {/* Left Column: Narrative Essay */}
          <div className="about-narrative-panel">
            <p className="about-intro-lead">
              "{personal.bioIntroduction}"
            </p>

            {personal.bioNarrative.map((paragraph, idx) => (
              <p key={idx} className="about-paragraph">
                {paragraph}
              </p>
            ))}

            {/* Editorial Stats Row */}
            <div className="about-stats-row">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">AI Systems Deployed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98.3%</span>
                <span className="stat-label">ML Model Accuracy</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">250+</span>
                <span className="stat-label">LeetCode Solved</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Dossier Card */}
          <div className="about-dossier-card">
            <div className="dossier-card-header">
              <span className="dossier-label">Official Engineering Profile</span>
              <h3 className="dossier-name">{personal.name}</h3>
            </div>

            {/* Current Role */}
            <div className="dossier-entry">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Briefcase size={15} color="var(--color-burgundy)" />
                <span className="dossier-entry-label">Current Role</span>
              </div>
              <span className="dossier-entry-value">{personal.currentRole.title}</span>
              <span className="dossier-entry-focus">@ {personal.currentRole.company} &bull; {personal.currentRole.period}</span>
            </div>

            {/* Education */}
            <div className="dossier-entry">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <GraduationCap size={16} color="var(--color-burgundy)" />
                <span className="dossier-entry-label">Education</span>
              </div>
              <span className="dossier-entry-value">{personal.education.degree}</span>
              <span className="dossier-entry-focus">{personal.education.institution} ({personal.education.period})</span>
            </div>

            {/* Algorithmic Problem Solving */}
            <div className="dossier-entry">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Code2 size={16} color="var(--color-burgundy)" />
                <span className="dossier-entry-label">Algorithmic Problem Solving</span>
              </div>
              <span className="dossier-entry-value">{personal.leetcodeStats}</span>
              <span className="dossier-entry-focus">Data Structures, Graph Algorithms & Dynamic Programming</span>
            </div>

            {/* Core Technical Interests */}
            <div className="dossier-entry">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <Sparkles size={15} color="var(--color-burgundy)" />
                <span className="dossier-entry-label">Technical Focus Areas</span>
              </div>
              <div className="dossier-interests-tags">
                {personal.technicalInterests.map((interest, idx) => (
                  <span key={idx} className="interest-tag-pill">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Resume Button */}
            <div style={{ paddingTop: '0.5rem' }}>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-view-project"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <FileText size={16} />
                <span>View Full Curriculum Vitae</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
