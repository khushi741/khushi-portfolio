import React from 'react';
import { Terminal, BrainCircuit, Cpu, Database, Layout, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Terminal size={22} />;
      case 'genai':
        return <Sparkles size={22} />;
      case 'mlops':
        return <BrainCircuit size={22} />;
      case 'deployment':
        return <Database size={22} />;
      case 'libraries':
        return <Layout size={22} />;
      default:
        return <Cpu size={22} />;
    }
  };

  return (
    <section id="skills" className="editorial-section skills-section-wrap">
      <div className="section-container-inner">
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-label-script">Capabilities & Stacks</span>
          <h2 className="section-headline-serif">My Technical Toolkit</h2>
          <div className="section-divider-delicate" />
          <p className="section-sublead-text">
            Specialized engineering capabilities across generative AI, deep learning models, backend APIs, and systems.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="skills-categories-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="skill-category-card">
              <div className="skill-card-top-icon">
                {getCategoryIcon(cat.id)}
              </div>

              <h3 className="skill-category-title">{cat.title}</h3>
              <p className="skill-category-subtitle">{cat.subtitle}</p>

              <div className="skill-pills-cluster">
                {cat.skills.map((skill, idx) => (
                  <span key={idx} className="toolkit-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
