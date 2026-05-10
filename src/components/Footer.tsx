export default function Footer(): React.JSX.Element {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-text">NEERAJ TANGARIYA · FULL-STACK DEVELOPER</div>
      <div className="footer-copy">© {year} — Dehradun, IN</div>
    </footer>
  );
}
