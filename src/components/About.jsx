import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">01 / about</span>
          <h2>Still early. Already building.</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              <strong>I'm currently a 2nd-semester BS Information Technology student</strong> at Muhammad Nawaz Sharif University of Engineering &amp; Technology, Multan. I take a practical approach: learn the fundamentals, then build projects that prove the knowledge in a real engineering context.
            </p>
            <p>
              I run technical sessions for peers and teach introductory infrastructure topics. This strengthens my ability to explain systems clearly and write documentation that teams can follow.
            </p>
            <p>
              My current focus is on cloud fundamentals, Git-based delivery, infrastructure as code, and containerized workflows. I want to move beyond tutorials and create systems that stay reliable when they change.
            </p>
          </div>
          <ul className="timeline reveal">
            <li>
              <div className="when">Jan 2025 — present</div>
              <div className="what">Teacher</div>
              <div className="where">The Knowledge School, Multan</div>
            </li>
            <li>
              <div className="when">2025 — present</div>
              <div className="what">BS Information Technology, 2nd semester</div>
              <div className="where">MNS UET Multan</div>
            </li>
            <li>
              <div className="when">2023 — 2025</div>
              <div className="what">Intermediate, Computer Science</div>
              <div className="where">BISE Multan</div>
            </li>
          </ul>
          
          <div className="section-head reveal" style={{ marginTop: '56px' }}>
            <span className="eyebrow">02 / approach</span>
            <h2>How I turn learning into reliable outcomes</h2>
          </div>
          
          <div className="feature-grid reveal" style={{ marginTop: '24px' }}>
            <article className="feature-card">
              <h3>Build to learn</h3>
              <p>I focus on small projects with clear goals so I can test assumptions, learn from failures, and document what worked.</p>
            </article>
            <article className="feature-card">
              <h3>Keep it reviewable</h3>
              <p>I write infrastructure and pipeline code that another engineer can inspect, change, and run without guesswork.</p>
            </article>
            <article className="feature-card">
              <h3>Communicate clearly</h3>
              <p>I explain architecture decisions in plain language and keep notes on what a tool or practice actually adds to the workflow.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}