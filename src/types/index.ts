export interface SkillCategory {
  category: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  desc: string | null;
  active: boolean;
}

export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  num: string;
  name: string;
  desc: string;
  tech: string[];
  link: ProjectLink | null;
}
