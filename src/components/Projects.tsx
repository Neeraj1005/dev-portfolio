import type { Project } from '../types';

const projectsData: Project[] = [
  {
    num: '// 01',
    name: 'FarmNerd App',
    desc: 'Agricultural platform for farmers with real-time farm location tracking, satellite imagery, crop health insights, subscription payments, and end-to-end mobile app delivery.',
    tech: ['React Native', 'TypeScript', 'NestJS', 'Redux', 'Maps'],
    link: { href: 'https://farmnerdapp.com', label: 'farmnerdapp.com →' },
  },
  {
    num: '// 02',
    name: 'Dentifyd',
    desc: 'Healthcare platform for independent dentists & clinics. Streamlines appointment booking, secure online payments, and clinic management for both providers and patients.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Stripe', 'PostgreSQL'],
    link: null,
  },
  {
    num: '// 03',
    name: 'WonderWord',
    desc: 'Classic word search game for mobile. Users find hidden words arranged horizontally, vertically, diagonally, or backwards by swiping. Published on Google Play & iOS App Store.',
    tech: ['React Native', 'TypeScript', 'Redux', 'IAP'],
    link: { href: 'https://play.google.com/store/apps/details?id=com.wonderworldnative', label: 'Play Store →' },
  },
  {
    num: '// 04',
    name: 'TVS Bikes 3D WebGL',
    desc: 'Web-based app using Babylon.js to render interactive 3D models of TVS bikes. Users can rotate, zoom, and pan across multiple country variants: Nepal, Indonesia, Sri Lanka.',
    tech: ['BabylonJS', 'WebGL', '3D Rendering', 'JavaScript'],
    link: { href: 'https://iqube360.tvsnepal.com/', label: 'View Live →' },
  },
  {
    num: '// 05',
    name: 'Gofinity Ads Club',
    desc: 'Business web app where users subscribe to purchase Facebook leads. Integrated Meta Business API for lead retrieval and Stripe for subscription and purchase flows.',
    tech: ['React.js', 'Redux', 'Stripe', 'Facebook API', 'Loopback4'],
    link: null,
  },
  {
    num: '// 06',
    name: 'Cookie Gamer',
    desc: 'Cookie-themed village builder game. Led backend development with NestJS — authentication APIs, game save data system, and progress sync across devices.',
    tech: ['NestJS', 'MySQL', 'Unity', 'REST API'],
    link: null,
  },
  {
    num: '// 07',
    name: 'CRM Software',
    desc: 'Comprehensive CRM platform. Lead developer responsible for core application features built on PHP Laravel stack with modern React frontend integration.',
    tech: ['Laravel', 'Inertia.js', 'React', 'Livewire', 'MySQL'],
    link: null,
  },
  {
    num: '// 08',
    name: 'eJobsite Software',
    desc: 'Full-featured job board platform with applicant tracking, employer/jobseeker panels, online assessments, LMS integration, and social login support.',
    tech: ['PHP', 'jQuery', 'MySQL', 'Bootstrap'],
    link: { href: 'https://ejobsitesoftware.com', label: 'ejobsitesoftware.com →' },
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-num">04 /</span>
        <div className="section-line" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Projects
        </span>
      </div>
      <h2 className="reveal">
        Things I&apos;ve<br />
        <span style={{ color: 'var(--neon)' }}>Built.</span>
      </h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card reveal" key={project.num}>
            <div className="proj-num">{project.num}</div>
            <div className="proj-name">{project.name}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-tech">
              {project.tech.map((t) => (
                <span className="proj-tag" key={t}>{t}</span>
              ))}
            </div>
            {project.link !== null && (
              <a href={project.link.href} target="_blank" rel="noreferrer" className="proj-link">
                {project.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
