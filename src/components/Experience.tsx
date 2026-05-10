import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    period: 'Sep 2022 — Present',
    role: 'Game Developer',
    company: 'Logic Simplified · Dehradun, Uttarakhand',
    desc: 'Primarily focused on developing applications using React Native and BabylonJS for WebGL 360 rendering. Collaborated with cross-disciplinary teams to ensure optimal performance and user experience in interactive applications.',
    active: true,
  },
  {
    period: 'Nov 2019 — Aug 2022',
    role: 'Full-Stack Developer',
    company: 'Aynsoft · New Delhi',
    desc: 'Worked as a Full-Stack Developer developing and maintaining CRM and job board software solutions. Wrote and optimized code for both front-end and back-end systems across the full product lifecycle.',
    active: true,
  },
  {
    period: '2017 — 2019',
    role: 'M.Tech — Computer Science & Engineering',
    company: 'Bipin Tripathi Kumaon Institute of Technology · Dwarahat',
    desc: null,
    active: false,
  },
  {
    period: '2013 — 2017',
    role: 'B.Tech — Computer Science & Engineering',
    company: 'Uttarakhand Technical University · Dehradun',
    desc: null,
    active: false,
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience">
      <div className="section-header reveal">
        <span className="section-num">03 /</span>
        <div className="section-line" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Experience
        </span>
      </div>
      <h2 className="reveal">
        Where I&apos;ve<br />
        <span style={{ color: 'var(--neon)' }}>Worked.</span>
      </h2>
      <div className="exp-timeline">
        {experienceData.map((item, idx) => (
          <div className="exp-item reveal" key={idx}>
            <div className={`exp-dot${item.active ? '' : ' muted'}`} />
            <div className="exp-period">{item.period}</div>
            <div className="exp-role">{item.role}</div>
            <div className="exp-company">{item.company}</div>
            {item.desc !== null && <div className="exp-desc">{item.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
