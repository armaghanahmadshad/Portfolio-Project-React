import { useEffect, useState } from 'react';
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
// Generic list + edit/delete buttons, used by every tab
// ---------------------------------------------------------------------------
function EntryList({ items, renderLabel, onEdit, onDelete, editingId }) {
  if (!items.length) {
    return <p style={{ color: 'var(--text-faint)' }}>Nothing added yet.</p>;
  }
  return (
    <ul className="admin-entry-list">
      {items.map((item) => (
        <li key={item.id} className={`admin-entry-row${editingId === item.id ? ' is-editing' : ''}`}>
          <span>{renderLabel(item)}</span>
          <span className="admin-entry-actions">
            <button type="button" className="admin-edit-btn" onClick={() => onEdit(item)}>Edit</button>
            <button type="button" className="admin-delete-btn" onClick={() => onDelete(item.id)}>Delete</button>
          </span>
        </li>
      ))}
    </ul>
  );
}

// ---------------------------------------------------------------------------
// Certificates tab
// ---------------------------------------------------------------------------
const EMPTY_CERT = { provider: '', title: '', url: '', icon_slug: '', icon_color: '5A6672', icon_svg: '', icon_viewbox: '0 0 48 48', sort_order: 0 };

function CertificatesTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY_CERT);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');

  const load = async () => {
    const { data } = await supabase.from('certificates').select('*').order('sort_order').order('created_at');
    setItems(data || []);
  };

  // One-time fetch on mount. `load()` awaits Supabase then calls setState;
  // that's the standard data-fetching pattern, not the render-cascade issue
  // this rule is designed to catch, so it's safe to disable here.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  const resetForm = () => {
    setForm(EMPTY_CERT);
    setEditingId(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      provider: item.provider || '',
      title: item.title || '',
      url: item.url || '',
      icon_slug: item.icon_slug || '',
      icon_color: item.icon_color || '5A6672',
      icon_svg: item.icon_svg || '',
      icon_viewbox: item.icon_viewbox || '0 0 48 48',
      sort_order: item.sort_order ?? 0,
    });
    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const payload = { ...form, sort_order: Number(form.sort_order) || 0 };

    const { error } = editingId
      ? await supabase.from('certificates').update(payload).eq('id', editingId)
      : await supabase.from('certificates').insert([payload]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus(editingId ? 'Updated.' : 'Added.');
      resetForm();
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('certificates').delete().eq('id', id);
    if (editingId === id) resetForm();
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
          <label>Advanced: custom full-color icon SVG (optional — inner SVG markup only, overrides the slug above)</label>
          <textarea rows={3} value={form.icon_svg} onChange={(e) => setForm({ ...form, icon_svg: e.target.value })} placeholder='e.g. &lt;path fill="#4285F4" d="..." /&gt;' />
        </div>
        <div className="field">
          <label>Icon viewBox (only needed with custom SVG above)</label>
          <input value={form.icon_viewbox} onChange={(e) => setForm({ ...form, icon_viewbox: e.target.value })} />
        </div>
        <div className="field">
          <label>Sort order (lower shows first)</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {editingId ? 'Save changes' : 'Add certificate'}
          </button>
          {editingId && (
            <button type="button" className="btn" style={{ alignSelf: 'flex-start' }} onClick={resetForm}>
              Cancel edit
            </button>
          )}
        </div>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing certificates</h3>
      <EntryList
        items={items}
        editingId={editingId}
        renderLabel={(c) => `${c.provider} — ${c.title}`}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Skills tab
// ---------------------------------------------------------------------------
const EMPTY_SKILL = {
  name: '', group_name: 'Active practice', level_label: 'practicing',
  icon_slug: '', icon_color: '4FD1C5', icon_svg: '', icon_viewbox: '0 0 32 32', sort_order: 0,
};

function SkillsTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY_SKILL);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');

  const load = async () => {
    const { data } = await supabase.from('skills').select('*').order('sort_order').order('created_at');
    setItems(data || []);
  };

  // One-time fetch on mount. `load()` awaits Supabase then calls setState;
  // that's the standard data-fetching pattern, not the render-cascade issue
  // this rule is designed to catch, so it's safe to disable here.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  const resetForm = () => {
    setForm(EMPTY_SKILL);
    setEditingId(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      name: item.name || '',
      group_name: item.group_name || 'Active practice',
      level_label: item.level_label || 'practicing',
      icon_slug: item.icon_slug || '',
      icon_color: item.icon_color || '4FD1C5',
      icon_svg: item.icon_svg || '',
      icon_viewbox: item.icon_viewbox || '0 0 32 32',
      sort_order: item.sort_order ?? 0,
    });
    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const payload = { ...form, sort_order: Number(form.sort_order) || 0 };

    const { error } = editingId
      ? await supabase.from('skills').update(payload).eq('id', editingId)
      : await supabase.from('skills').insert([payload]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus(editingId ? 'Updated.' : 'Added.');
      resetForm();
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('skills').delete().eq('id', id);
    if (editingId === id) resetForm();
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
          <label>Advanced: custom full-color icon SVG (optional — inner SVG markup only, overrides the slug above)</label>
          <textarea rows={3} value={form.icon_svg} onChange={(e) => setForm({ ...form, icon_svg: e.target.value })} placeholder='e.g. &lt;rect ... /&gt;' />
        </div>
        <div className="field">
          <label>Icon viewBox (only needed with custom SVG above)</label>
          <input value={form.icon_viewbox} onChange={(e) => setForm({ ...form, icon_viewbox: e.target.value })} />
        </div>
        <div className="field">
          <label>Sort order (lower shows first)</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {editingId ? 'Save changes' : 'Add skill'}
          </button>
          {editingId && (
            <button type="button" className="btn" style={{ alignSelf: 'flex-start' }} onClick={resetForm}>
              Cancel edit
            </button>
          )}
        </div>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing skills</h3>
      <EntryList
        items={items}
        editingId={editingId}
        renderLabel={(s) => `${s.name} — ${s.group_name} (${s.level_label})`}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Blog posts tab
// ---------------------------------------------------------------------------
const EMPTY_POST = {
  slug: '', title: '', category: 'General', read_time: '5 min read',
  excerpt: '', content_md: '', published: true, sort_order: 0,
};

function BlogTab() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY_POST);
  const [editingId, setEditingId] = useState(null);
  const [status, setStatus] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);

  const load = async () => {
    const { data } = await supabase.from('blog_posts').select('*').order('sort_order').order('created_at', { ascending: false });
    setItems(data || []);
  };

  // One-time fetch on mount. `load()` awaits Supabase then calls setState;
  // that's the standard data-fetching pattern, not the render-cascade issue
  // this rule is designed to catch, so it's safe to disable here.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { load(); }, []);

  const resetForm = () => {
    setForm(EMPTY_POST);
    setEditingId(null);
    setSlugTouched(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setSlugTouched(true); // don't auto-regenerate the slug while editing
    setForm({
      slug: item.slug || '',
      title: item.title || '',
      category: item.category || 'General',
      read_time: item.read_time || '5 min read',
      excerpt: item.excerpt || '',
      content_md: item.content_md || '',
      published: item.published ?? true,
      sort_order: item.sort_order ?? 0,
    });
    setStatus('');
  };

  const handleTitleChange = (title) => {
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving…');
    const payload = { ...form, sort_order: Number(form.sort_order) || 0 };

    const { error } = editingId
      ? await supabase.from('blog_posts').update(payload).eq('id', editingId)
      : await supabase.from('blog_posts').insert([payload]);

    if (error) {
      setStatus(error.message);
    } else {
      setStatus(editingId ? 'Updated.' : 'Added.');
      resetForm();
      load();
    }
  };

  const handleDelete = async (id) => {
    await supabase.from('blog_posts').delete().eq('id', id);
    if (editingId === id) resetForm();
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
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            {editingId ? 'Save changes' : 'Add blog post'}
          </button>
          {editingId && (
            <button type="button" className="btn" style={{ alignSelf: 'flex-start' }} onClick={resetForm}>
              Cancel edit
            </button>
          )}
        </div>
        {status && <p className="form-status">{status}</p>}
      </form>

      <h3 className="admin-list-heading">Existing posts</h3>
      <EntryList
        items={items}
        editingId={editingId}
        renderLabel={(p) => `${p.title} ${p.published ? '' : '(draft)'} — /blog/${p.slug}`}
        onEdit={handleEdit}
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
