import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="editorial-section experience-section-wrap">
      <div className="section-container-inner">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-label-script">Chronicle & Milestones</span>
          <h2 className="section-headline-serif">My Journey</h2>
          <div className="section-divider-delicate" />
          <p className="section-sublead-text">
            Professional trajectory in AI engineering, generative agent architectures, and data modeling.
          </p>
        </div>

        {/* Vertical Editorial Timeline */}
        <div className="editorial-timeline">
          <div className="timeline-spine-line" aria-hidden="true" />

          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-entry">
              {/* Timeline Node Dot */}
              <div className="timeline-node-dot" />

              {/* Timeline Entry Card */}
              <div className="timeline-entry-card">
                <div className="timeline-meta-header">
                  <div>
                    <h3 className="timeline-role-title">{exp.role}</h3>
                    <span className="timeline-company-name">
                      {exp.company} &bull; {exp.location}
                    </span>
                  </div>

                  <span className="timeline-period-pill">
                    {exp.period}
                  </span>
                </div>

                <p className="timeline-summary-text">
                  {exp.summary}
                </p>

                {/* Key Contributions */}
                <ul className="timeline-bullets-list">
                  {exp.contributions.map((bullet, idx) => (
                    <li key={idx} className="timeline-bullet-item">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="project-tech-tags-row" style={{ marginBottom: 0 }}>
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag-editorial">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
