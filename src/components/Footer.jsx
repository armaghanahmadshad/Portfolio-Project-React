import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo">Armaghan Ahmad Shad</Link>
          <p>BS IT student building toward cloud &amp; DevOps engineering — pipelines, infrastructure as code, and containers, one real project at a time.</p>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Site</span>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/certificates">Certificates</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <span className="footer-heading">Elsewhere</span>
          <a href="mailto:armaghanahmadshad@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/armaghanahmadshad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {year} Armaghan Ahmad Shad — built with React, no frameworks harmed.</span>
      </div>
    </footer>
  );
}
