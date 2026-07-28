import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---------------------------------------------------------------------------
// Generic list + delete button, used by every tab
// ---------------------------------------------------------------------------
function EntryList({ items, renderLabel, onDelete }) {
  if (!items.length) {
    return <p style={{ color: 'var(--text-faint)' }}>Nothing added yet.</p>;
  }
  return (
    <ul className="admin-entry-list">
      {items.map((item) => (
        <li key={item.id} className="admin-entry-row">
          <span>{renderLabel(item)}</span>
          <button
            type="button"
            className="admin-delete-btn"
            onClick={() => onDelete(item.id)}
            aria-label="Delete"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Certificates tab
// ---------------------------------------------------------------------------
function CertificatesTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ provider: '', title: '', url: '', icon_slug: '', icon_color: '5A6672', sort_order: 0 });
  const [status, setStatus] = useState('');

  const load = async () => {
    const { data } = await supabase.from('certificates').select('*').order('sort_order').order('created_at');
    setItems(data || []);
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const { error } = await supabase.from('certificates').insert([{
      ...form,
      sort_order: Number(form.sort_order) || 0,
    }]);
    if (error) {
      setStatus(error.message);
    } else {
      setStatus('Added.');
      setForm({ provider: '', title: '', url: '', icon_slug: '', icon_color: '5A6672', sort_order: 0 });
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('certificates').delete().eq('id', id);
    load();
  };

  return (
    <div>
      <form className="contact-form admin-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Provider (e.g. IBM, Google)</label>
          <input required value={form.provider} onChange={(e) => setForm({ ...form, provider: e.target.value })} />
        </div>
        <div className="field">
          <label>Course / certificate title</label>
          <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div className="field">
          <label>Verification URL</label>
          <input required type="url" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} />
        </div>
        <div className="field">
          <label>Icon slug (optional — from simpleicons.org, e.g. "ibm", "google", "docker")</label>
          <input value={form.icon_slug} onChange={(e) => setForm({ ...form, icon_slug: e.target.value })} />
        </div>
        <div className="field">
          <label>Icon color (hex, no #)</label>
          <input value={form.icon_color} onChange={(e) => setForm({ ...form, icon_color: e.target.value })} />
        </div>
        <div className="field">
          <label>Sort order (lower shows first)</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Add certificate</button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing (admin-added) certificates</h3>
      <EntryList
        items={items}
        renderLabel={(c) => `${c.provider} — ${c.title}`}
        onDelete={handleDelete}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Skills tab
// ---------------------------------------------------------------------------
function SkillsTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '', group_name: 'Active practice', level_label: 'practicing',
    icon_slug: '', icon_color: '4FD1C5', sort_order: 0,
  });
  const [status, setStatus] = useState('');

  const load = async () => {
    const { data } = await supabase.from('skills').select('*').order('sort_order').order('created_at');
    setItems(data || []);
  };

  useEffect(() => { load(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const { error } = await supabase.from('skills').insert([{
      ...form,
      sort_order: Number(form.sort_order) || 0,
    }]);
    if (error) {
      setStatus(error.message);
    } else {
      setStatus('Added.');
      setForm({ name: '', group_name: 'Active practice', level_label: 'practicing', icon_slug: '', icon_color: '4FD1C5', sort_order: 0 });
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('skills').delete().eq('id', id);
    load();
  };

  return (
    <div>
      <form className="contact-form admin-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Skill name (e.g. Kubernetes)</label>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="field">
          <label>Group</label>
          <select value={form.group_name} onChange={(e) => setForm({ ...form, group_name: e.target.value })}>
            <option>Daily essentials</option>
            <option>Active practice</option>
            <option>Next on the roadmap</option>
          </select>
        </div>
        <div className="field">
          <label>Level label (e.g. daily use, comfortable, learning)</label>
          <input required value={form.level_label} onChange={(e) => setForm({ ...form, level_label: e.target.value })} />
        </div>
        <div className="field">
          <label>Icon slug (optional — from simpleicons.org)</label>
          <input value={form.icon_slug} onChange={(e) => setForm({ ...form, icon_slug: e.target.value })} />
        </div>
        <div className="field">
          <label>Icon color (hex, no #)</label>
          <input value={form.icon_color} onChange={(e) => setForm({ ...form, icon_color: e.target.value })} />
        </div>
        <div className="field">
          <label>Sort order (lower shows first)</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Add skill</button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing (admin-added) skills</h3>
      <EntryList
        items={items}
        renderLabel={(s) => `${s.name} — ${s.group_name} (${s.level_label})`}
        onDelete={handleDelete}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Blog posts tab
// ---------------------------------------------------------------------------
function BlogTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    slug: '', title: '', category: 'General', read_time: '5 min read',
    excerpt: '', content_md: '', published: true, sort_order: 0,
  });
  const [status, setStatus] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);

  const load = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('sort_order').order('created_at', { ascending: false });
    setItems(data || []);
  };

  useEffect(() => { load(); }, []);

  const handleTitleChange = (title) => {
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const { error } = await supabase.from('blog_posts').insert([{
      ...form,
      sort_order: Number(form.sort_order) || 0,
    }]);
    if (error) {
      setStatus(error.message);
    } else {
      setStatus('Added.');
      setForm({ slug: '', title: '', category: 'General', read_time: '5 min read', excerpt: '', content_md: '', published: true, sort_order: 0 });
      setSlugTouched(false);
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('blog_posts').delete().eq('id', id);
    load();
  };

  return (
    <div>
      <form className="contact-form admin-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Title</label>
          <input required value={form.title} onChange={(e) => handleTitleChange(e.target.value)} />
        </div>
        <div className="field">
          <label>URL slug (site.com/blog/<em>this</em>)</label>
          <input
            required
            value={form.slug}
            onChange={(e) => { setSlugTouched(true); setForm({ ...form, slug: slugify(e.target.value) }); }}
          />
        </div>
        <div className="field">
          <label>Category (e.g. CI/CD, Linux / Sysadmin)</label>
          <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        </div>
        <div className="field">
          <label>Read time (e.g. "6 min read")</label>
          <input value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} />
        </div>
        <div className="field">
          <label>Excerpt (shown on the blog list card)</label>
          <textarea rows={2} required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </div>
        <div className="field">
          <label>Content (Markdown — ## headings, - lists, ```code``` blocks, **bold**)</label>
          <textarea rows={12} required value={form.content_md} onChange={(e) => setForm({ ...form, content_md: e.target.value })} />
        </div>
        <div className="field field-inline">
          <label>
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setForm({ ...form, published: e.target.checked })}
            /> Published (visible on the site)
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Add blog post</button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing (admin-added) posts</h3>
      <EntryList
        items={items}
        renderLabel={(p) => `${p.title} ${p.published ? '' : '(draft)'} — /blog/${p.slug}`}
        onDelete={handleDelete}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dashboard shell with tabs + logout
// ---------------------------------------------------------------------------
export default function AdminDashboard() {
  const [tab, setTab] = useState('certificates');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <main id="top">
      <section id="admin-dashboard">
        <div className="wrap">
          <div className="section-head reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <span className="eyebrow">admin</span>
              <h2>Content dashboard</h2>
            </div>
            <button type="button" className="btn" onClick={handleLogout}>Log out</button>
          </div>

          <div className="admin-tabs">
            <button className={tab === 'certificates' ? 'active' : ''} onClick={() => setTab('certificates')}>Certificates</button>
            <button className={tab === 'skills' ? 'active' : ''} onClick={() => setTab('skills')}>Skills</button>
            <button className={tab === 'blog' ? 'active' : ''} onClick={() => setTab('blog')}>Blog posts</button>
          </div>

          {tab === 'certificates' && <CertificatesTab />}
          {tab === 'skills' && <SkillsTab />}
          {tab === 'blog' && <BlogTab />}
        </div>
      </section>
    </main>
  );
}
