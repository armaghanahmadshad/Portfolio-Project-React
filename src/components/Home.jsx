import React, { useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Certificates from './Certificates';
import Blog from './Blog.jsx'; 
import Contact from './Contact';

export default function Home() {
  
  // Scroll animations observer (reveal effect)
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

    // Cleanup function
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main id="top">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Blog />
      <Contact />
    </main>
  );
}