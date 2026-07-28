-- Run this once in your Supabase project's SQL Editor
-- (Dashboard -> SQL Editor -> New query -> paste -> Run)

-- ===================== CERTIFICATES =====================
create table if not exists public.certificates (
  id           bigint generated always as identity primary key,
  provider     text not null,          -- e.g. "IBM", "Google", "Meta"
  title        text not null,          -- e.g. "Introduction to Cloud Computing"
  url          text not null,          -- verification link
  icon_slug    text,                   -- simple-icons slug, e.g. "ibm", "google", "docker" (see https://simpleicons.org)
  icon_color   text default '5A6672',  -- hex without '#', used to tint the icon
  sort_order   int default 0,          -- lower = shown first
  created_at   timestamptz default now()
);

alter table public.certificates enable row level security;

create policy "Public can read certificates"
  on public.certificates for select
  using (true);

create policy "Authenticated users can insert certificates"
  on public.certificates for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update certificates"
  on public.certificates for update
  to authenticated
  using (true);

create policy "Authenticated users can delete certificates"
  on public.certificates for delete
  to authenticated
  using (true);


-- ===================== SKILLS =====================
create table if not exists public.skills (
  id           bigint generated always as identity primary key,
  name         text not null,          -- e.g. "Terraform"
  group_name   text not null default 'Active practice', -- "Daily essentials" | "Active practice" | "Next on the roadmap" (or any custom group)
  level_label  text not null default 'learning', -- e.g. "daily use", "comfortable", "practicing", "learning", "exploring"
  icon_slug    text,                   -- simple-icons slug, e.g. "terraform", "kubernetes"
  icon_color   text default '4FD1C5',
  sort_order   int default 0,
  created_at   timestamptz default now()
);

alter table public.skills enable row level security;

create policy "Public can read skills"
  on public.skills for select
  using (true);

create policy "Authenticated users can insert skills"
  on public.skills for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update skills"
  on public.skills for update
  to authenticated
  using (true);

create policy "Authenticated users can delete skills"
  on public.skills for delete
  to authenticated
  using (true);


-- ===================== BLOG POSTS =====================
create table if not exists public.blog_posts (
  id           bigint generated always as identity primary key,
  slug         text not null unique,   -- used in the URL: /blog/<slug>
  title        text not null,
  category     text not null default 'General',  -- e.g. "CI/CD", "Linux / Sysadmin"
  read_time    text not null default '5 min read',
  excerpt      text not null,          -- short summary shown on the blog list card
  content_md   text not null,          -- full post body, written in simple Markdown
  cover_note   text,                   -- optional small caption/credit
  published    boolean not null default true,
  sort_order   int default 0,
  created_at   timestamptz default now()
);

alter table public.blog_posts enable row level security;

create policy "Public can read published posts"
  on public.blog_posts for select
  using (published = true);

create policy "Authenticated users can read all posts"
  on public.blog_posts for select
  to authenticated
  using (true);

create policy "Authenticated users can insert posts"
  on public.blog_posts for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update posts"
  on public.blog_posts for update
  to authenticated
  using (true);

create policy "Authenticated users can delete posts"
  on public.blog_posts for delete
  to authenticated
  using (true);
