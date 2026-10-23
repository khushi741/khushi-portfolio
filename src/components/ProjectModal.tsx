import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key & Lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="modal-backdrop-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-button"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header Media Banner */}
        <div style={{ position: 'relative', width: '100%', height: '320px', overflow: 'hidden' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(81, 59, 56, 0.88) 0%, rgba(81, 59, 56, 0.25) 60%, transparent 100%)'
          }} />

          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2.5rem',
            right: '2.5rem',
            color: '#FFFFFF'
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              backgroundColor: 'var(--color-burgundy)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              display: 'inline-block',
              marginBottom: '0.8rem'
            }}>
              {project.categoryLabel}
            </span>
            <h2 id="modal-title" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.4rem',
              fontWeight: 500,
              color: '#FFFFFF',
              lineHeight: 1.2
            }}>
              {project.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--color-dusty-rose-soft)',
              marginTop: '0.3rem'
            }}>
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2.2rem' }}>
          {/* Key Metrics Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
            gap: '1.2rem',
            padding: '1.4rem 1.8rem',
            backgroundColor: 'var(--color-warm-ivory-light)',
            borderRadius: '6px',
            border: '1px solid var(--border-delicate)'
          }}>
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: 'var(--color-burgundy)',
                  display: 'block'
                }}>
                  {m.value}
                </span>
                <span style={{
                  fontSize: '0.74rem',
                  color: 'var(--color-dark-brown-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.8rem',
              borderRadius: '6px',
              border: '1px solid var(--border-delicate)'
            }}>
              <h3 className="modal-section-title">The Engineering Problem</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--color-dark-brown)' }}>
                {project.problem}
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-white)',
              padding: '1.8rem',
              borderRadius: '6px',
              border: '1px solid var(--border-delicate)'
            }}>
              <h3 className="modal-section-title">The Engineered Solution</h3>
              <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: 'var(--color-dark-brown)' }}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Direct Contributions */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            padding: '1.8rem',
            borderRadius: '6px',
            border: '1px solid var(--border-delicate)'
          }}>
            <h3 className="modal-section-title">My Contributions</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.8rem' }}>
              {project.myContribution.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontSize: '0.93rem', lineHeight: '1.65' }}>
                  <CheckCircle2 size={16} color="var(--color-burgundy)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="modal-section-title">Technologies &amp; Infrastructure</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag-editorial" style={{ fontSize: '0.82rem', padding: '0.4rem 0.9rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links — with Live Demo button or dedicated reserved slot */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-delicate)',
            flexWrap: 'wrap'
          }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-view-project"
            >
              <GithubIcon size={15} />
              <span>Explore GitHub Repository</span>
              <ExternalLink size={15} />
            </a>

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-live-demo active"
              >
                <span className="live-pulse-dot" />
                <Globe size={15} />
                <span>View Live Demo</span>
                <ExternalLink size={13} />
              </a>
            ) : (
              <span
                className="btn-live-demo-slot"
                title="Space reserved for live deployment link"
              >
                <Globe size={15} className="slot-globe-icon" />
                <span>Live Demo (Deployment Link Space)</span>
              </span>
            )}

            <button
              type="button"
              className="btn-github-link"
              onClick={onClose}
              style={{ marginLeft: 'auto' }}
            >
              Close Folio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
