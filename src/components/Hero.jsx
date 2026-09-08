import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero-v3">
      <div className="wrap hero-v3-grid">
        <div className="hero-v3-copy">
          <span className="hero-v3-eyebrow">HELLO, I'M</span>
          <h1 className="hero-v3-name">Armaghan<br /><span className="accent">Ahmad Shad</span></h1>
          <p className="hero-v3-role">
            <svg viewBox="0 0 24 24" width="17" height="17" className="hero-v3-role-icon" aria-hidden="true">
              <path
                d="M7 18h10a4 4 0 0 0 .6-7.96A5.5 5.5 0 0 0 7.2 9.05 4 4 0 0 0 7 18Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            DevOps &amp; Cloud Engineer <span className="hero-v3-role-dim">(in progress)</span>
          </p>
          <p className="hero-v3-desc">
            I'm a BS Information Technology student building toward cloud and DevOps engineering — learning pipelines, infrastructure code, and containers through real practice projects.
          </p>

          <div className="hero-v3-stats">
            <div>
              <span className="hero-v3-stat-num">40+</span>
              <span className="hero-v3-stat-label">Certifications<br />Earned</span>
            </div>
            <div>
              <span className="hero-v3-stat-num">6</span>
              <span className="hero-v3-stat-label">Practice Projects<br />Completed</span>
            </div>
            <div>
              <span className="hero-v3-stat-num">12+</span>
              <span className="hero-v3-stat-label">Tools &amp;<br />Technologies</span>
            </div>
          </div>

          <div className="hero-v3-cta">
            <Link to="/projects" className="btn-dark-pill">VIEW MY WORK
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path 
                  d="M7 17L17 7M17 7H9M17 7V15" 
                  stroke="currentColor" 
                  strokeWidth="2.4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </svg>
            </Link>
            <a href="https://www.linkedin.com/in/armaghanahmadshad" target="_blank" rel="noopener noreferrer" className="btn-outline-pill">
              LINKEDIN
            </a>
          </div>

          <div className="hero-v3-follow">
            <span>FOLLOW ME</span>
            <div className="hero-v3-social">
              <a href="https://www.linkedin.com/in/armaghanahmadshad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/>
                </svg>
              </a>
              <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a href="mailto:armaghanahmadshad@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" width="15" height="15">
                  <path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.4L4.4 7H19.6L12 12.4zM3 8.2V18h18V8.2l-9 6.3-9-6.3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-v3-visual">
          <div className="hero-v3-blob" aria-hidden="true"></div>
          <img src="/assets/hero-photo-panel.png" alt="Armaghan Ahmad Shad portrait panel" className="hero-v3-photo" />
        </div>
      </div>
    </section>
  );
}