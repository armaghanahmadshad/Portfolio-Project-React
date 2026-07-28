import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import { renderMarkdownLite } from '../lib/renderMarkdownLite.jsx';

export default function DynamicBlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | found | not-found | error

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (!active) return;
      if (error || !data) {
        setStatus(error ? 'error' : 'not-found');
      } else {
        setPost(data);
        setStatus('found');
      }
    })();
    return () => { active = false; };
  }, [slug]);

  if (status === 'loading') {
    return (
      <main id="top">
        <article className="post-wrap">
          <p>Loading…</p>
        </article>
      </main>
    );
  }

  if (status !== 'found') {
    return (
      <main id="top">
        <article className="post-wrap">
          <Link to="/#blog" className="post-back">← Back to blog</Link>
          <h1>Post not found</h1>
          <p>This post doesn't exist or isn't published yet.</p>
        </article>
      </main>
    );
  }

  return (
    <main id="top">
      <article className="post-wrap">
        <Link to="/#blog" className="post-back">← Back to blog</Link>
        <span className="post-meta">{post.category} — {post.read_time}</span>
        <h1>{post.title}</h1>
        {renderMarkdownLite(post.content_md)}
      </article>
    </main>
  );
}
