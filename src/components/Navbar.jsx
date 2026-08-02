import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NAV_ITEMS = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/certificates', label: 'Certificates' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <span className="nav-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <polygon points="20,5 35,33 27,33 20,19 13,33 5,33" fill="#9AE66E" />
            </svg>
          </span>
          <span className="nav-logo-text">
            Armaghan Ahmad Shad{' '}
            <span className="nav-logo-subtitle">DevOps & Cloud Engineer</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          menu
        </button>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          <Link to="/contact" className="nav-talk-btn">
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
          </Link>
        </div>
      </div>
    </header>
  );
}
