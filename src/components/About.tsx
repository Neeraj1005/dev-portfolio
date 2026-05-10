export default function About(): React.JSX.Element {
  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-num">01 /</span>
        <div className="section-line" />
        <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          About Me
        </span>
      </div>
      <h2 className="reveal">
        Crafting Experiences,<br />
        <span style={{ color: 'var(--neon)' }}>Not Just Code.</span>
      </h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Software Engineer with <span>6+ years</span> of experience building production-grade mobile and web
            applications. Currently working as a <span>Game Developer at Logic Simplified</span>, Dehradun, focusing
            on React Native and BabylonJS for WebGL 360 rendering.
          </p>
          <p>
            Previously at <span>Aynsoft, New Delhi</span> as a Full-Stack Developer where I built CRM and job board
            platforms from the ground up.
          </p>
          <p>
            Passionate about clean architecture, pixel-perfect UI, and experiences that users actually enjoy using.
            Equally comfortable in backend NestJS services or complex React Native frontends.
          </p>
        </div>
        <div className="terminal-box reveal">
          <div className="terminal-bar">
            <div className="t-dot t-red" />
            <div className="t-dot t-yellow" />
            <div className="t-dot t-green" />
            <span className="terminal-title">neeraj.config.ts</span>
          </div>
          <div className="terminal-body">
            <div className="t-comment">// Developer profile</div>
            <div><span className="t-key">const</span> <span className="t-str">developer</span> = {'{'}</div>
            <div>&nbsp;&nbsp;<span className="t-key">name</span>: <span className="t-val">&quot;Neeraj Tangariya&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">role</span>: <span className="t-val">&quot;Full-Stack Developer&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">location</span>: <span className="t-val">&quot;Dehradun, IN&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">experience</span>: <span className="t-str">6</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">education</span>: <span className="t-val">&quot;M.Tech CSE&quot;</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">openToWork</span>: <span className="t-str">true</span>,</div>
            <div>&nbsp;&nbsp;<span className="t-key">superpower</span>: [</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-val">&quot;Mobile Apps&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-val">&quot;3D WebGL&quot;</span>,</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="t-val">&quot;Full-Stack&quot;</span></div>
            <div>&nbsp;&nbsp;]</div>
            <div>{'}'}<span className="blink">|</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
