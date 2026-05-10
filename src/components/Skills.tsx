import type { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    category: '// Languages',
    tags: ['JavaScript', 'TypeScript', 'SQL', 'PHP'],
  },
  {
    category: '// Frontend',
    tags: ['React Native', 'React.js', 'Next.js', 'BabylonJS', 'Redux Toolkit'],
  },
  {
    category: '// Backend',
    tags: ['NestJS', 'Node.js', 'Laravel', 'PHP', 'REST API'],
  },
  {
    category: '// Database',
    tags: ['MySQL', 'PostgreSQL', 'MySQL Workbench', 'PhpMyAdmin'],
  },
  {
    category: '// Dev Tools',
    tags: ['Git / GitHub', 'BitBucket', 'VS Code', 'Postman', 'Figma', 'Xcode'],
  },
  {
    category: '// AI & More',
    tags: ['ChatGPT', 'GitHub Copilot', 'Stripe API', 'In-App Purchase', 'WebGL'],
  },
];

export default function Skills(): React.JSX.Element {
  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-num">02 /</span>
        <div className="section-line" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Tech Stack
        </span>
      </div>
      <h2 className="reveal">
        Tools of<br />
        <span style={{ color: 'var(--neon)' }}>the Trade.</span>
      </h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-card reveal" key={skill.category}>
            <div className="skill-cat">{skill.category}</div>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
