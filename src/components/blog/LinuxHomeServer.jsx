import React from 'react';
import { Link } from 'react-router-dom';

export default function LinuxHomeServer() {
  return (
    <main id="top">
      <article className="post-wrap">
        <Link to="/blog" className="post-back">← Back to blog</Link>
        <span className="post-meta">Linux / Sysadmin — 8 min read</span>
        <h1>Building a Linux Home Server From Scratch: A DevOps Learning Project</h1>

        <p>
          There's a particular kind of satisfaction in taking a blank Ubuntu Server install and turning it into something that actually works — a machine with real users, real permissions, a live website, a locked-down SSH door, and a firewall standing guard at the gate. That's exactly what this project was about.
        </p>

        <p>Here's a walkthrough of how I built it, phase by phase.</p>

        <h2>Why This Project</h2>
        <p>
          I wanted hands-on practice with the kind of Linux administration work that shows up constantly in DevOps and junior sysadmin roles: user management, permissions, service configuration, and basic security hardening. Instead of reading about these concepts, I set out to actually do them, end to end, on a real (virtual) machine.
        </p>

        <h2>The Setup</h2>
        <p>I spun up a fresh <strong>Ubuntu Server 24.04 LTS</strong> VM using VirtualBox, with:</p>
        <ul>
          <li>2 GB RAM</li>
          <li>2 CPU cores</li>
          <li>20 GB disk</li>
        </ul>
        <p>Nothing fancy — just enough to run a lightweight web server and a handful of system services comfortably.</p>
        <p>The first step was giving the machine an identity:</p>
        <pre><code>sudo hostnamectl set-hostname homeserver</code></pre>
        <p>A quick <code>hostname</code> check confirmed it: <code>homeserver</code> was live.</p>

        <h2>Phase 1: Users and Groups</h2>
        <p>Every real server has more than one person touching it, so I created three accounts to simulate that:</p>
        <pre><code>{`sudo adduser developer
sudo adduser admin
sudo adduser guest`}</code></pre>
        <p>Then I grouped the people who'd actually be working on code:</p>
        <pre><code>{`sudo groupadd developers
sudo usermod -aG developers developer`}</code></pre>
        <p><code>groups developer</code> confirmed the membership, and <code>cat /etc/passwd</code> gave me a full picture of the accounts on the system.</p>

        <h2>Phase 2: Locking Down Permissions</h2>
        <p>
          Users without boundaries aren't very useful for a security lesson, so next came a shared project directory with real access control:
        </p>
        <pre><code>{`sudo mkdir /projects
sudo chown developer:developers /projects
sudo chmod 770 /projects`}</code></pre>
        <p>
          The result — <code>drwxrwx---</code> — meant only the owner and the <code>developers</code> group could get in. Everyone else, including <code>guest</code>, was locked out. This is the kind of least-privilege thinking that matters far more in production than most tutorials let on.
        </p>

        <h2>Phase 3: Standing Up Nginx</h2>
        <p>With users and permissions sorted, it was time to give the server something to actually do: serve a website.</p>
        <pre><code>{`sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx`}</code></pre>
        <p>
          Hitting the server's IP in a browser and seeing the default "Welcome to nginx!" page was the first real payoff. From there, I replaced the stock page with a custom one:
        </p>
        <pre><code>sudo nano /var/www/html/index.html</code></pre>
        <p>A simple, dark-themed landing page announcing the server was mine.</p>

        <h2>Phase 4: Hardening SSH</h2>
        <p>
          SSH is the front door to any remote Linux box, so it needed attention. After installing <code>openssh-server</code>, I edited <code>/etc/ssh/sshd_config</code> to apply a few sensible defaults:
        </p>
        <pre><code>{`PermitRootLogin no
PasswordAuthentication yes
MaxAuthTries 3`}</code></pre>
        <p>
          Disabling root login alone closes off one of the most commonly attempted attack vectors. Capping <code>MaxAuthTries</code> slows down brute-force attempts. A restart and a test login from <code>developer@SERVER-IP</code> confirmed everything worked as expected.
        </p>

        <h2>Phase 5: The Firewall</h2>
        <p>With services running, the next job was making sure only the <em>intended</em> doors were open:</p>
        <pre><code>{`sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw enable`}</code></pre>
        <p>
          <code>sudo ufw status</code> confirmed exactly two rules active — port 22 for SSH, port 80 for HTTP — and nothing else. Everything else on the machine was now invisible from the outside.
        </p>

        <h2>Phase 6: Automating the Boring Stuff</h2>
        <p>The last piece was making sure the work I'd done wasn't fragile. I wrote a small backup script:</p>
        <pre><code>{`#!/bin/bash
DATE=$(date +%F)
tar -czf backup-$DATE.tar.gz /projects
echo "Backup Completed"`}</code></pre>
        <p>
          and a companion script to recreate the users and permissions setup from scratch (<code>create_users.sh</code>) — so the whole environment is reproducible with two commands instead of forty.
        </p>

        <h2>What I'd Do Next</h2>
        <p>A few bonus challenges are still on my list:</p>
        <ul>
          <li>Switching SSH to key-based authentication only</li>
          <li>Moving SSH off port 22</li>
          <li>Scheduling <code>backup.sh</code> with <code>cron</code> for daily runs</li>
          <li>Adding HTTPS via Let's Encrypt once the server has a real domain</li>
        </ul>

        <h2>Wrapping Up</h2>
        <p>
          This project covered a surprising amount of ground for something that runs on a 20 GB VM: user and group management, filesystem permissions, a live Nginx deployment, SSH hardening, firewall configuration, and Bash automation. It's a small system, but every piece of it mirrors what a real server needs on day one.
        </p>
        <p>
          Next up: wrapping this same environment in Docker, and building toward a full container-based deployment pipeline.
        </p>

        <p>
          Full code and configuration for this project are available in the{' '}
          <a href="https://github.com/armaghanahmadshad/Home-Linux-Server" target="_blank" rel="noopener noreferrer">
            Home-Linux-Server GitHub repo
          </a>.
        </p>
      </article>
    </main>
  );
}