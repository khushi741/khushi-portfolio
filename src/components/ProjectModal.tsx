import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="project-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="project-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-editorial">
          <div>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              color: 'var(--color-dusty-rose)',
              fontStyle: 'italic',
              display: 'block'
            }}>
              Project {project.indexNumber} &bull; {project.categoryLabel}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: 'var(--color-burgundy-dark)',
              fontWeight: 500
            }}>
              {project.title}
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--color-burgundy)',
              fontWeight: 600,
              marginTop: '0.2rem'
            }}>
              {project.tagline}
            </p>
          </div>
          <button
            type="button"
            className="modal-close-button"
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body Content */}
        <div className="modal-body-scrollable">
          {/* Key Metrics Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
            gap: '1rem',
            padding: '1.2rem',
            backgroundColor: 'var(--color-white)',
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
            <h3 className="modal-section-title">Technologies & Infrastructure</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag-editorial" style={{ fontSize: '0.82rem', padding: '0.4rem 0.9rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-delicate)'
          }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-view-project"
            >
              <span>Explore GitHub Repository</span>
              <ExternalLink size={15} />
            </a>

            <button
              type="button"
              className="btn-github-link"
              onClick={onClose}
            >
              Close Folio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
