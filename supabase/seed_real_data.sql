-- ============================================================
-- Seed real certificates + skills data
-- ============================================================
-- WHY THIS FILE EXISTS:
-- The certificates and skills sections of this site are database-driven
-- (see src/components/certificates.jsx and src/components/Skills.jsx),
-- pulling from Supabase at runtime. I don't have your Supabase project
-- credentials, so I can't insert this data for you directly — running
-- this script is a one-time manual step on your end.
--
-- HOW TO RUN:
-- 1. Go to your Supabase project dashboard.
-- 2. Open SQL Editor -> New query.
-- 3. Paste this entire file and click Run.
-- 4. Refresh your site's /certificates and /skills pages.
--
-- NOTE ON URLS:
-- Where I didn't have your exact personal "Show credential" verification
-- link, I used the certification/course's public provider page instead
-- (never a fabricated link). If you'd rather link to your own credential
-- ID pages, copy the "Show credential" URL from each LinkedIn entry and
-- swap it into the `url` column below.
-- ============================================================

-- ===================== CERTIFICATES =====================
-- Clearing first avoids duplicate rows if you run this more than once.
-- Comment this line out if you've already added certificates manually
-- via the admin dashboard and want to keep them.
delete from public.certificates;

insert into public.certificates (provider, title, url, icon_slug, icon_color, sort_order) values
('Microsoft', 'Certified: Azure Fundamentals (AZ-900)', 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/', 'microsoftazure', '0078D4', 10),
('Microsoft', 'AZ-104: Manage Identities and Governance in Azure', 'https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/', 'microsoftazure', '0078D4', 20),
('Microsoft', 'Manage Identity and Access in Microsoft Entra ID', 'https://learn.microsoft.com/en-us/entra/fundamentals/', 'microsoftazure', '0078D4', 30),
('AWS', 'AWS Cloud Practitioner Essentials', 'https://aws.amazon.com/certification/certified-cloud-practitioner/', 'amazonaws', 'FF9900', 40),
('IBM', 'Cloud Computing Fundamentals', 'https://www.coursera.org/learn/cloud-computing', 'ibm', '052FAD', 50),
('IBM', 'Introduction to Cloud Computing', 'https://www.coursera.org/learn/introduction-to-cloud-computing', 'ibm', '052FAD', 60),
('IBM', 'DevOps Essentials', 'https://www.coursera.org/learn/devops-essentials', 'ibm', '052FAD', 70),
('The Linux Foundation', 'Linux for Developers', 'https://training.linuxfoundation.org/', 'linux', 'FCC624', 80),
('The Linux Foundation', 'Linux Tools for Developers', 'https://training.linuxfoundation.org/', 'linux', 'FCC624', 90),
('The Linux Foundation', 'Using Git for Distributed Development', 'https://training.linuxfoundation.org/', 'git', 'F05032', 100),
('The Linux Foundation', 'Open Source Software Development, Linux and Git (Specialization)', 'https://training.linuxfoundation.org/', 'linux', 'FCC624', 110),
('Microsoft', 'C++ Programming Fundamentals', 'https://learn.microsoft.com/en-us/training/', 'cplusplus', '00599C', 120),
('Microsoft', 'Intermediate C++ Programming Techniques', 'https://learn.microsoft.com/en-us/training/', 'cplusplus', '00599C', 130),
('Microsoft', 'Advanced C++ Programming and Modern Practices', 'https://learn.microsoft.com/en-us/training/', 'cplusplus', '00599C', 140),
('Microsoft', 'Object-Oriented Programming with C++', 'https://learn.microsoft.com/en-us/training/', 'cplusplus', '00599C', 150),
('Google', 'Python Programming Fundamentals', 'https://grow.google/', 'python', '3776AB', 160),
('Google', 'Hello, Python!', 'https://grow.google/', 'python', '3776AB', 170),
('Google', 'Crash Course on Python', 'https://www.coursera.org/learn/python-crash-course', 'python', '3776AB', 180),
('Google', 'Google AI Professional Certificate', 'https://grow.google/ai/', 'google', '4285F4', 190),
('Anthropic', 'Claude Platform 101', 'https://www.anthropic.com/', null, 'D97757', 200),
('Anthropic', 'Claude Code 101', 'https://www.anthropic.com/', null, 'D97757', 210),
('Meta', 'HTML and CSS in Depth', 'https://www.coursera.org/learn/html-and-css-in-depth', 'meta', '0866FF', 220),
('Cisco Networking Academy', 'Getting Started with Cisco Packet Tracer', 'https://www.netacad.com/courses/getting-started-cisco-packet-tracer', 'cisco', '1BA0D7', 230),
('HP', 'Resume Writing and Job Interviewing', 'https://www.coursera.org/', null, '0096D6', 240);


-- ===================== SKILLS =====================
delete from public.skills;

insert into public.skills (name, group_name, level_label, icon_slug, icon_color, sort_order) values
-- Daily essentials
('Linux Administration', 'Daily essentials', 'daily use', 'linux', 'FCC624', 10),
('Bash Scripting', 'Daily essentials', 'daily use', 'gnubash', '4EAA25', 20),
('Git & GitHub', 'Daily essentials', 'daily use', 'git', 'F05032', 30),
('C++', 'Daily essentials', 'comfortable', 'cplusplus', '00599C', 40),
('Python', 'Daily essentials', 'comfortable', 'python', '3776AB', 50),

-- Active practice
('Microsoft Azure', 'Active practice', 'practicing', 'microsoftazure', '0078D4', 60),
('AWS', 'Active practice', 'practicing', 'amazonaws', 'FF9900', 70),
('Nginx', 'Active practice', 'practicing', 'nginx', '009639', 80),
('SSH Hardening', 'Active practice', 'practicing', null, '4FD1C5', 90),
('UFW Firewall', 'Active practice', 'practicing', null, '4FD1C5', 100),
('JavaScript', 'Active practice', 'practicing', 'javascript', 'F7DF1E', 110),
('React', 'Active practice', 'practicing', 'react', '61DAFB', 120),
('SQL', 'Active practice', 'practicing', 'mysql', '4479A1', 130),
('REST APIs', 'Active practice', 'practicing', null, '4FD1C5', 140),
('Prompt Engineering / AI Tools', 'Active practice', 'practicing', null, 'D97757', 150),

-- Next on the roadmap
('Docker', 'Next on the roadmap', 'learning', 'docker', '2496ED', 160),
('Terraform', 'Next on the roadmap', 'exploring', 'terraform', '844FBA', 170),
('Kubernetes', 'Next on the roadmap', 'exploring', 'kubernetes', '326CE5', 180),
('GitHub Actions / CI/CD', 'Next on the roadmap', 'learning', 'githubactions', '2088FF', 190);
