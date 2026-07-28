import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Blog() {
  const [dynamicPosts, setDynamicPosts] = useState([]);

  useEffect(() => {
    let active = true;
    supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('sort_order')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (active) setDynamicPosts(data || []);
      });
    return () => { active = false; };
  }, []);

  return (
    <section id="blog">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">05 / blog</span>
          <h2>Notes from the process</h2>
          <p>
            Short write-ups on what I'm learning, aimed at other students starting the same climb.
          </p>
        </div>
        <div className="blog-grid">
          
          {/* Link 1: Linux Home Server */}
          <Link to="/blog/linux-home-server" className="blog-card reveal">
            <span className="meta">Linux / Sysadmin — 8 min read</span>
            <h3>Building a Linux Home Server From Scratch</h3>
            <p>
              Turning a blank Ubuntu Server install into a secured self-hosted server — users, permissions, Nginx, SSH hardening, UFW, and backup automation, phase by phase.
            </p>
            <span className="read">Read post →</span>
          </Link>
          
          {/* Link 2: CI/CD Early */}
          <Link to="/blog/why-learn-cicd-early" className="blog-card reveal">
            <span className="meta">CI/CD — 6 min read</span>
            <h3>Why Every Developer Should Learn CI/CD Early</h3>
            <p>
              The pipeline isn't just for "DevOps people" — it's the fastest feedback loop a student developer can build, and most courses never teach it.
            </p>
            <span className="read">Read post →</span>
          </Link>
          
          {/* Link 3: GitOps */}
          <Link to="/blog/first-pipeline-lessons" className="blog-card reveal">
            <span className="meta">GitOps — 7 min read</span>
            <h3>GitOps vs Traditional Ops: What I Learned Shipping My First Pipeline</h3>
            <p>
              Three broken deploys taught me more about the difference between GitOps and manual ops than any article did.
            </p>
            <span className="read">Read post →</span>
          </Link>
          
          {/* Link 4: Compose to Kubernetes */}
          <Link to="/blog/compose-to-kubernetes" className="blog-card reveal">
            <span className="meta">Containers — 6 min read</span>
            <h3>Docker Compose to Kubernetes: A Student's Roadmap</h3>
            <p>
              A realistic, unhurried path from a single docker-compose.yml to understanding what Kubernetes is actually solving.
            </p>
            <span className="read">Read post →</span>
          </Link>
          
          {/* Posts added from the admin dashboard */}
          {dynamicPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card reveal">
              <span className="meta">{post.category} — {post.read_time}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="read">Read post →</span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}