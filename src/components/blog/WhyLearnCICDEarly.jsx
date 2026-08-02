import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyLearnCICDEarly() {
  return (
    <main id="top">
      <div className="post-wrap">
        <Link to="/blog" className="post-back">← back to all posts</Link>
        <p className="post-meta">CI/CD · 6 min read · student notes</p>
        <h1>Why Every Developer Should Learn CI/CD Early</h1>

        <p>
          Most of my coursework so far has treated "running the code" as the finish line. Write the program, get the expected output, submit the assignment. It took building my first GitHub Actions workflow to realize how much that mindset leaves on the table once code has to survive contact with other people.
        </p>

        <p>
          <strong>CI/CD isn't an ops-team thing bolted onto real development — it's a feedback loop you can build for yourself, today, on a solo project.</strong> A pipeline that lints, tests, and builds your code on every push is really just a very disciplined friend who checks your work before anyone else sees it.
        </p>

        <h2>What actually clicked for me</h2>
        <p>
          I set up a workflow for a small Flask API: on every push, it installs dependencies, runs <code>flake8</code>, runs the test suite, and only then builds a Docker image. The first time a typo in a test file failed the whole pipeline, I understood something no lecture had gotten across — the pipeline doesn't care that the code "basically works." It only cares whether it can prove that.
        </p>

        <p>
          That distinction — "I think it works" versus "something automated confirmed it works" — is most of what separates student code from code a team can actually ship.
        </p>

        <h2>Three reasons to start now, not later</h2>
        <ul>
          <li><strong>You build the habit while the stakes are low.</strong> Breaking a pipeline on a personal project costs you an evening. Breaking one at a job costs a teammate their afternoon.</li>
          <li><strong>It forces you to write tests you'd otherwise skip.</strong> A red pipeline is a much stronger nudge than a guilty conscience.</li>
          <li><strong>It's a visible signal to employers.</strong> A repo with a green checkmark and a real workflow file says more about your practices than any bullet point on a resume.</li>
        </ul>

        <blockquote>
          The pipeline is the smallest possible version of "someone reviewing your code" — and it never gets tired of checking.
        </blockquote>

        <h2>Where to start if you haven't</h2>
        <p>
          Pick one small project you already have. Add a single GitHub Actions workflow that runs your existing tests on every push — nothing fancier. Watch it fail once on purpose, so you know what a broken pipeline actually looks like before you're debugging one under pressure.
        </p>

        <p>
          That's it. Everything else — build stages, deployment, infrastructure as code — is easier to learn once that first feedback loop is in place.
        </p>
      </div>
    </main>
  );
}