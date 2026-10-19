export interface PersonalInfo {
  name: string;
  wordmark: string; // Calligraphic / script representation
  title: string;
  subtitle: string;
  heroHeadline: string;
  heroSupporting: string;
  heroCta: string;
  portraitUrl: string;
  portraitLabel: string;
  bioHeading: string;
  bioIntroduction: string;
  bioNarrative: string[];
  education: {
    degree: string;
    institution: string;
    period: string;
    focus: string;
  };
  currentRole: {
    title: string;
    company: string;
    period: string;
    focus: string;
  };
  technicalInterests: string[];
  email: string;
  phoneDisplay: string;
  phoneLink: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  leetcodeStats: string;
  resumeUrl: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'genai' | 'fullstack' | 'systems' | 'deeplearning';
  categoryLabel: string;
  indexNumber: string;
  tagline: string;
  shortDescription: string;
  problem: string;
  solution: string;
  myContribution: string[];
  technologies: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  layoutVariant: 'large-feature' | 'split-editorial' | 'compact-card';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  focus?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  projects: Project[];
  experiences: ExperienceItem[];
  skillCategories: SkillCategory[];
}
