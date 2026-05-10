export default function Contact(): React.JSX.Element {
  return (
    <section id="contact">
      <div className="contact-glow" />
      <div className="contact-inner">
        <div className="section-header reveal" style={{ justifyContent: 'center' }}>
          <span className="section-num">05 /</span>
          <div className="section-line" />
          <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Contact
          </span>
        </div>
        <h2 className="reveal">
          Let&apos;s Build<br />
          <span style={{ color: 'var(--neon)' }}>Together.</span>
        </h2>
        <p className="contact-sub reveal">
          Open to new opportunities,<br />
          or just a good conversation about tech.
        </p>
        <div className="contact-links reveal">
          <a href="mailto:neeraj.tangariya123@gmail.com" className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2,4 12,13 22,4" />
            </svg>
            neeraj.tangariya123@gmail.com
          </a>
          <a href="tel:+918954518355" className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 8954518355
          </a>
          <a href="https://www.linkedin.com/in/neeraj-tangariya/" target="_blank" rel="noreferrer" className="contact-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
