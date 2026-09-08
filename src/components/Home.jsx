import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';

const EXPLORE_ITEMS = [
  {
    to: '/about',
    num: '01',
    title: 'About',
    desc: 'Background, current focus, and how I turn tutorials into real, reviewable work.',
  },
  {
    to: '/skills',
    num: '02',
    title: 'Skills',
    desc: 'What I use daily, what I actively practice, and what\'s next on the roadmap.',
  },
  {
    to: '/certificates',
    num: '03',
    title: 'Certificates',
    desc: 'Coursera / IBM / Google / Microsoft coursework that built the foundation.',
  },
  {
    to: '/projects',
    num: '04',
    title: 'Projects',
    desc: 'Hands-on builds — this site, a hardened home Linux server, and more coming.',
  },
  {
    to: '/blog',
    num: '05',
    title: 'Blog',
    desc: 'Notes on CI/CD, GitOps, and containers, written for students on the same climb.',
  },
  {
    to: '/contact',
    num: '06',
    title: 'Contact',
    desc: 'Open to internships and collaborations. Usually reply within a day.',
  },
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main id="top">
      <Hero />

      <section id="explore">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">start here</span>
            <h2>Explore the site</h2>
            <p>Six short stops — pick where you want to start.</p>
          </div>
          <div className="explore-grid">
            {EXPLORE_ITEMS.map((item) => (
              <Link to={item.to} className="explore-card reveal" key={item.to}>
                <span className="explore-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="explore-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
