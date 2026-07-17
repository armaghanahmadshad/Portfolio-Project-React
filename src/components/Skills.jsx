import React from 'react';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">02 / skills</span>
          <h2>Current toolkit</h2>
          <p>
            Technical skills are grouped by what I use every day, what I practice actively, and what I'm adding to my workflow next.
          </p>
        </div>
        
        {/* Daily Essentials */}
        <div className="skills-group reveal">
          <h3>Daily essentials</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <line x1="10" y1="6" x2="10" y2="26" stroke="#F05033" strokeWidth="2.4" strokeLinecap="round" />
                  <line x1="10" y1="16" x2="22" y2="16" stroke="#F05033" strokeWidth="2.4" strokeLinecap="round" />
                  <line x1="22" y1="16" x2="22" y2="24" stroke="#F05033" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="10" cy="6" r="3.4" fill="#F05033" />
                  <circle cx="10" cy="26" r="3.4" fill="#F05033" />
                  <circle cx="22" cy="24" r="3.4" fill="#F05033" />
                </svg>
              </div>
              <h4 className="skill-name">Git & GitHub</h4>
              <span className="lvl">daily use</span>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="14" height="14" rx="5" fill="#3776AB" />
                  <rect x="13" y="13" width="14" height="14" rx="5" fill="#FFD43B" />
                  <circle cx="10" cy="10" r="1.8" fill="#FFFFFF" />
                  <circle cx="22" cy="22" r="1.8" fill="#3776AB" />
                </svg>
              </div>
              <h4 className="skill-name">Python</h4>
              <span className="lvl">daily use</span>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="4" width="30" height="24" rx="3" fill="#0F172A" />
                  <path d="M7 12l6 5-6 5" fill="none" stroke="#4FD1C5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="22" x2="25" y2="22" stroke="#E5E7EB" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="skill-name">Linux / Bash</h4>
              <span className="lvl">daily use</span>
            </div>
          </div>
        </div>

        {/* Active Practice */}
        <div className="skills-group reveal">
          <h3>Active practice</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="28" height="28" rx="6" fill="#150458" />
                  <rect x="8" y="8" width="6" height="16" rx="1.5" fill="#E70488" />
                  <rect x="16" y="8" width="6" height="10" rx="1.5" fill="#FFFFFF" />
                  <rect x="16" y="20" width="6" height="4" rx="1.5" fill="#FFFFFF" />
                </svg>
              </div>
              <h4 className="skill-name">Pandas</h4>
              <span className="lvl">comfortable</span>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="14" width="6" height="6" rx="1" fill="#2496ED" />
                  <rect x="11" y="14" width="6" height="6" rx="1" fill="#2496ED" />
                  <rect x="11" y="7" width="6" height="6" rx="1" fill="#2496ED" />
                  <rect x="18" y="14" width="6" height="6" rx="1" fill="#2496ED" />
                  <path d="M2 20c2 5 7 8 13 8 7 0 12.5-4 15-10-1.5.6-3 .6-4.5 0-2 4-6 6.5-10.5 6.5-4 0-8-1.8-10-4.5H2z" fill="#2496ED" />
                </svg>
              </div>
              <h4 className="skill-name">Docker</h4>
              <span className="lvl">comfortable</span>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="none" stroke="#2088FF" strokeWidth="2.2" />
                  <circle cx="16" cy="16" r="4.2" fill="#2088FF" />
                  <circle cx="16" cy="4.5" r="2.6" fill="#2088FF" />
                  <circle cx="27.5" cy="16" r="2.6" fill="#2088FF" />
                </svg>
              </div>
              <h4 className="skill-name">GitHub Actions</h4>
              <span className="lvl">practicing</span>
            </div>
          </div>
        </div>

        {/* Next on Roadmap */}
        <div className="skills-group reveal">
          <h3>Next on the roadmap</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="2,4 10,8 10,17 2,13" fill="#5C4EE5" />
                  <polygon points="11,8 19,12 19,21 11,17" fill="#7B42BC" />
                  <polygon points="20,4 28,8 28,17 20,13" fill="#5C4EE5" />
                  <polygon points="11,18 19,22 19,31 11,27" fill="#4040B2" />
                </svg>
              </div>
              <h4 className="skill-name">Terraform</h4>
              <span className="lvl">learning</span>
            </div>
            
            <div className="skill-card">
              <div className="skill-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,3 20,3 12.5,25 3,25" fill="#0089D6" />
                  <polygon points="14,3 21,3 29,24 22.5,24 17,10.5 14.5,17" fill="#0089D6" opacity="0.85" />
                </svg>
              </div>
              <h4 className="skill-name">Microsoft Azure</h4>
              <span className="lvl">exploring</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}