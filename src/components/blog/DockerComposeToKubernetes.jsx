import React from 'react';
import { Link } from 'react-router-dom';

export default function DockerComposeToKubernetes() {
  return (
    <main id="top">
      <div className="post-wrap">
        <Link to="/" className="post-back">← back to all posts</Link>
        <p className="post-meta">Containers · 6 min read · student notes</p>
        <h1>Docker Compose to Kubernetes: A Student's Roadmap</h1>

        <p>
          Every roadmap I found online jumps from "here's a Dockerfile" straight to "here's a Kubernetes cluster," as if there's no distance between the two. In practice, the gap is exactly where most of the useful learning lives, and it's worth walking through deliberately rather than skipping.
        </p>

        <h2>Step 1 — one container, understood completely</h2>
        <p>
          Before touching Compose, I made myself explain, out loud, what a single Dockerfile for my Flask app actually does line by line: base image, dependency layer, copied source, exposed port, start command. If any line is a mystery, the tools built on top of it will be mysteries too.
        </p>

        <h2>Step 2 — Compose, for the problem it actually solves</h2>
        <p>
          Docker Compose earns its place the moment an app stops being one container. My monitoring project needed a web service, a worker, Prometheus, and Grafana all talking to each other — Compose's job is purely to describe that set of containers and their networking in one file, so <code>docker compose up</code> replaces four separate manual commands.
        </p>
        <p>
          The useful mental model: <strong>Compose is for one machine.</strong> It assumes everything runs on the same host. That assumption is exactly what it gives up once you need more than one machine — which is the actual reason Kubernetes exists.
        </p>

        <h2>Step 3 — naming the problem Kubernetes solves</h2>
        <p>
          Kubernetes stopped being intimidating once I stopped treating it as "the next tool after Compose" and instead asked: what breaks about the Compose model at scale?
        </p>
        <ul>
          <li>If a container crashes, Compose doesn't restart it on a different machine — there's no "different machine" in its model.</li>
          <li>If traffic grows, Compose has no concept of running three copies of the worker and load-balancing between them.</li>
          <li>If a host dies entirely, Compose has nothing to say about where those containers go next.</li>
        </ul>
        <p>
          Kubernetes is, at its core, an answer to those three questions — scheduling containers across many machines, restarting what fails, and scaling what's under load. Once the problem is named, the vocabulary (pods, deployments, services) stops feeling arbitrary.
        </p>

        <h2>A realistic order to actually learn it in</h2>
        <ol>
          <li>Get comfortable writing and debugging a single Dockerfile.</li>
          <li>Use Compose on a real multi-container project — not a tutorial, something you'll actually keep using.</li>
          <li>Read about what happens when a single Docker host isn't enough, before opening a Kubernetes tutorial.</li>
          <li>Run a local cluster (minikube or kind) and deploy the same app you already understand from Compose — don't start with a new example app.</li>
        </ol>

        <p>
          I'm currently between steps 2 and 3. The point of writing this down is mostly for the next student who finds a Kubernetes tutorial overwhelming on day one — the tutorial isn't wrong, you're just missing the step before it.
        </p>
      </div>
    </main>
  );
}