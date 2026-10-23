import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reveal observer for cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.reveal-on-scroll');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [selectedFilter]);

  const filterOptions = [
    { id: 'all', label: 'All Works (4)' },
    { id: 'genai', label: 'Generative AI & RAG' },
    { id: 'fullstack', label: 'AI-Powered Applications' },
    { id: 'systems', label: 'High-Performance Systems' },
    { id: 'deeplearning', label: 'Bio-AI & Deep Learning' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedFilter);

  // Group into feature project (Project 1) and duo split cards (Projects 2, 3, 4)
  const featureProject = filteredProjects.find(p => p.layoutVariant === 'large-feature') || filteredProjects[0];
  const duoProjects = filteredProjects.filter(p => p.id !== featureProject?.id);

  return (
    <section id="projects" className="editorial-section projects-section-wrap" ref={sectionRef}>
      <div className="section-container-inner">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-label-script">Curated Folio</span>
          <h2 className="section-headline-serif">Selected Works</h2>
          <div className="section-divider-delicate" />
          <p className="section-sublead-text">
            A curated portfolio of production agentic pipelines, self-healing platforms, and deep learning architectures with source code &amp; live deployment links.
          </p>
        </div>

        {/* Category Filters */}
        <div className="category-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`filter-button ${selectedFilter === opt.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Art-Directed Editorial Gallery */}
        <div className="editorial-gallery">
          {/* 1. Large Feature Card (Deep Research AI) */}
          {featureProject && (
            <article className="project-card-large-feature reveal-on-scroll">
              {/* Media Column */}
              <div
                className="project-media-col"
                onClick={() => setActiveModalProject(featureProject)}
                style={{ cursor: 'pointer' }}
                title="Click to view deep dive architecture"
              >
                <img
                  src={featureProject.image}
                  alt={`${featureProject.title} Architecture`}
                  className="project-media-img"
                />
                <div className="project-media-overlay-badge">
                  {featureProject.categoryLabel}
                </div>
              </div>

              {/* Content Column */}
              <div className="project-content-col">
                <div className="project-index-row">
                  <span className="project-index-num">{featureProject.indexNumber}</span>
                  <span className="featured-pill-tag">Featured Architecture</span>
                </div>
                <h3 className="project-title-serif">{featureProject.title}</h3>
                <p className="project-tagline">{featureProject.tagline}</p>
                <p className="project-short-desc">{featureProject.shortDescription}</p>

                {/* Metrics Strip */}
                <div className="project-metrics-strip">
                  {featureProject.metrics.map((m, idx) => (
                    <div key={idx} className="project-metric-box">
                      <span className="p-metric-val">{m.value}</span>
                      <span className="p-metric-lbl">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="project-tech-tags-row">
                  {featureProject.technologies.slice(0, 6).map((tech, idx) => (
                    <span key={idx} className="tech-tag-editorial">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links Row — with Live Demo button + reserved slot */}
                <div className="project-links-row">
                  <button
                    type="button"
                    className="btn-view-project"
                    onClick={() => setActiveModalProject(featureProject)}
                  >
                    <span>View Architecture</span>
                    <ArrowUpRight size={15} />
                  </button>

                  {/* Reserved Space for Live Deployed Project Link */}
                  {featureProject.liveDemoUrl ? (
                    <a
                      href={featureProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-live-demo active"
                      title="Open Live Deployed Application"
                    >
                      <span className="live-pulse-dot" />
                      <Globe size={15} />
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span
                      className="btn-live-demo-slot"
                      title="Space reserved for live deployed application link"
                    >
                      <Globe size={14} className="slot-globe-icon" />
                      <span>Live Demo</span>
                      <span className="slot-badge">Available Soon</span>
                    </span>
                  )}

                  <a
                    href={featureProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-github-link"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={15} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </article>
          )}

          {/* 2. Alternating Duo / Split Cards */}
          {duoProjects.length > 0 && (
            <div className="editorial-duo-row">
              {duoProjects.map((project, cardIdx) => (
                <article key={project.id} className="project-card-split reveal-on-scroll" style={{ transitionDelay: `${cardIdx * 0.1}s` }}>
                  <div
                    className="split-media-top"
                    onClick={() => setActiveModalProject(project)}
                    style={{ cursor: 'pointer' }}
                    title="Click to view deep dive architecture"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="project-media-overlay-badge">
                      {project.categoryLabel}
                    </div>
                  </div>

                  <div className="split-body-bottom">
                    <span className="project-index-num">{project.indexNumber}</span>
                    <h3 className="project-title-serif" style={{ fontSize: '1.85rem' }}>
                      {project.title}
                    </h3>
                    <p className="project-tagline" style={{ fontSize: '0.88rem' }}>
                      {project.tagline}
                    </p>
                    <p className="project-short-desc" style={{ fontSize: '0.92rem', marginBottom: '1.2rem' }}>
                      {project.shortDescription}
                    </p>

                    {/* Tech Tags */}
                    <div className="project-tech-tags-row" style={{ marginBottom: '1.6rem' }}>
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="tech-tag-editorial">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links — with Live Demo reserved space */}
                    <div className="project-links-row" style={{ marginTop: 'auto', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        className="btn-view-project"
                        onClick={() => setActiveModalProject(project)}
                      >
                        <span>Details</span>
                        <ArrowUpRight size={14} />
                      </button>

                      {/* Reserved Space for Deployed Links */}
                      {project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-live-demo active"
                          title="Open Live Application"
                        >
                          <span className="live-pulse-dot" />
                          <Globe size={14} />
                          <span>Live</span>
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <span
                          className="btn-live-demo-slot"
                          title="Space reserved for deployed application link"
                        >
                          <Globe size={13} className="slot-globe-icon" />
                          <span>Live Demo</span>
                        </span>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-github-link"
                        title="GitHub Repository"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Project Modal Deep Dive */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
};
