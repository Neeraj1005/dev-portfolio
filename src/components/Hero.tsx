import { useEffect, useRef, RefObject } from 'react';

function useCountUp(ref: RefObject<HTMLDivElement | null>, target: number, suffix: string = ''): void {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const step = target / 40;
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                el.textContent = `${target}${suffix}`;
                clearInterval(timer);
              } else {
                el.textContent = `${Math.floor(current)}${suffix}`;
              }
            }, 30);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix]);
}

export default function Hero(): React.JSX.Element {
  const yearsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useCountUp(yearsRef, 6, '+');
  useCountUp(projectsRef, 8, '+');

  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-tag">Available for work</div>
        <h1>
          NEERAJ<br />
          <span className="accent">TANGARIYA</span>
        </h1>
        <p className="hero-desc">
          <span>React &amp; React Native Developer</span> with 6+ years of crafting<br />
          high-performance mobile &amp; web applications.<br />
          Dehradun, Uttarakhand<span className="blink">_</span>
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
        <div className="stats-bar">
          <div className="stat">
            <div className="stat-num" ref={yearsRef}>6+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-num" ref={projectsRef}>8+</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div className="stat">
            <div className="stat-num">M.Tech</div>
            <div className="stat-label">CSE Degree</div>
          </div>
          <div className="stat">
            <div className="stat-num">2</div>
            <div className="stat-label">Companies</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
