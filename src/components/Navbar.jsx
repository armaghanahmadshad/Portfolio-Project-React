import React from 'react';

export default function Navbar() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        {/* Logo link ko update kar ke root ("/") par set kar diya */}
        <a href="/" className="nav-logo">
          <span className="nav-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,5 35,33 27,33 20,19 13,33 5,33" fill="#F59E0B" />
            </svg>
          </span>
          <span className="nav-logo-text">
            Armaghan Ahmad Shad{' '}
            <span className="nav-logo-subtitle">DevOps & Cloud Engineer</span>
          </span>
        </a>
        
        <button 
          className="nav-toggle" 
          aria-label="Toggle navigation" 
          aria-expanded="false"
        >
          menu
        </button>
        
        <ul className="nav-links">
          {/* Saare .html extensions ko /# anchors se replace kar diya */}
          <li><a href="/#about">About</a></li>
          <li><a href="/#skills">Skills</a></li>
          <li><a href="/#certificates">Certificates</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#blog">Blog</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
        
        <a href="/#contact" className="nav-talk-btn">
          LET'S TALK
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <path 
              d="M7 17L17 7M17 7H9M17 7V15" 
              stroke="currentColor" 
              strokeWidth="2.4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none" 
            />
          </svg>
        </a>
      </div>
    </header>
  );
}