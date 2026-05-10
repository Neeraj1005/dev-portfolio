export default function Nav(): React.JSX.Element {
  return (
    <nav>
      <a href="#hero" className="nav-logo">
        NT<span>.</span>
      </a>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
