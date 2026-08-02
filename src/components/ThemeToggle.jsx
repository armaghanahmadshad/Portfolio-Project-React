import React, { useEffect, useState } from 'react';

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  // Default to dark — the site's primary designed theme
  return 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        // Sun icon — shown when dark is active, click to go light
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="12" y1="2.5" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="21.5" y2="12" />
            <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
            <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
            <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
            <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
          </g>
        </svg>
      ) : (
        // Moon icon — shown when light is active, click to go dark
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
