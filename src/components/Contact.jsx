import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div className="contact-panel reveal">
          <span className="eyebrow">06 / contact</span>
          <h2>Let's talk about your next cloud project</h2>
          <p>
            Open to internships, collaborations, and student opportunities. I usually reply within one business day to messages with a clear project or learning goal.
          </p>
          <ul className="contact-links">
            <li><a href="mailto:armaghanahmadshad@gmail.com">armaghanahmadshad@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/armaghanahmadshad" target="_blank" rel="noopener noreferrer">linkedin.com/in/armaghanahmadshad</a></li>
            <li><a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">github.com/armaghanahmadshad</a></li>
          </ul>
        </div>
        
        <form className="contact-form" action="https://formspree.io/f/mpqggnnl" method="POST">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send message
          </button>
          <p className="form-status" role="status"></p>
        </form>
      </div>
    </section>
  );
}