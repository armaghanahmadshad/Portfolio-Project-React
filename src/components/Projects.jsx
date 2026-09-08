
export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">04 / projects</span>
          <h2>Learning-in-public builds</h2>
          <p>
            Six hands-on builds so far — this site, a hardened home Linux server, and four more spanning C++, TypeScript, Python, and API-driven web apps. Each one is small enough to finish and document properly rather than abandon halfway.
          </p>
        </div>

        {/* Project 1 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <rect x="18" y="26" width="284" height="20" rx="4" fill="none" stroke="#F2A65A" />
                <circle cx="28" cy="36" r="2.4" fill="#F2A65A" />
                <circle cx="37" cy="36" r="2.4" fill="#4FD1C5" />
                <circle cx="46" cy="36" r="2.4" fill="#4FD1C5" />
                <text x="180" y="40" textAnchor="middle" fill="#5A6672" fontSize="8">armaghanahmadshad.github.io/Portfolio</text>
                <rect x="18" y="58" width="130" height="130" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="83" y="90" textAnchor="middle" fill="#4FD1C5" fontSize="11">Hero</text>
                <line x1="30" y1="105" x2="136" y2="105" stroke="#1E2732" strokeWidth="2" />
                <text x="83" y="125" textAnchor="middle" fill="#8B98A5">About · Skills</text>
                <text x="83" y="145" textAnchor="middle" fill="#8B98A5">Certificates</text>
                <text x="83" y="165" textAnchor="middle" fill="#8B98A5">Projects · Blog</text>
                <rect x="158" y="58" width="144" height="60" rx="5" fill="none" stroke="#F2A65A" />
                <text x="230" y="83" textAnchor="middle" fill="#F2A65A">HTML / CSS / JS</text>
                <text x="230" y="102" textAnchor="middle" fill="#5A6672" fontSize="9">no framework, no build step</text>
                <rect x="158" y="128" width="144" height="60" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="230" y="153" textAnchor="middle" fill="#4FD1C5">Formspree + JS</text>
                <text x="230" y="172" textAnchor="middle" fill="#5A6672" fontSize="9">contact form via fetch()</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">WEB / FRONTEND</span>
            <h3>This portfolio site</h3>
            <p className="desc">
              This site is the first project itself — hand-built with plain HTML, CSS, and vanilla JavaScript, no framework or build step. It covers responsive layout, a mobile nav toggle, scroll-reveal animations, an AJAX contact form wired to Formspree, and on-page SEO (Open Graph tags, JSON-LD, sitemap).
            </p>
            <ul className="stack-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Formspree</li>
              <li>GitHub Pages</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad/Portfolio" target="_blank" rel="noopener noreferrer">→ Repository</a>
              <a href="https://armaghanahmadshad.github.io/Portfolio" target="_blank" rel="noopener noreferrer">Live site →</a>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <text x="160" y="26" textAnchor="middle" fill="#5A6672" fontSize="9">Internet</text>
                <line x1="160" y1="30" x2="160" y2="46" stroke="#1E2732" strokeWidth="2" />
                <text x="178" y="42" fill="#5A6672" fontSize="8">ssh 22</text>
                <rect x="60" y="50" width="200" height="150" rx="6" fill="none" stroke="#1E2732" />
                <text x="160" y="66" textAnchor="middle" fill="#8B98A5" fontSize="9">Ubuntu Server</text>
                <rect x="78" y="76" width="164" height="26" rx="4" fill="none" stroke="#F2A65A" />
                <text x="160" y="93" textAnchor="middle" fill="#F2A65A">Nginx — static site</text>
                <rect x="78" y="110" width="164" height="26" rx="4" fill="none" stroke="#4FD1C5" />
                <text x="160" y="127" textAnchor="middle" fill="#4FD1C5">Users &amp; groups · perms</text>
                <rect x="78" y="144" width="164" height="26" rx="4" fill="none" stroke="#4FD1C5" />
                <text x="160" y="161" textAnchor="middle" fill="#4FD1C5">UFW firewall</text>
                <text x="160" y="188" textAnchor="middle" fill="#5A6672" fontSize="9">backup.sh · create_users.sh</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">LINUX / SYSADMIN</span>
            <h3>Home Linux Server</h3>
            <p className="desc">
              Turned a fresh Ubuntu Server 24.04 install into a secured, self-hosted home server: created users and groups with locked-down file permissions, hardened SSH (root login disabled, capped auth tries), enabled UFW to expose only SSH and HTTP, served a custom homepage over Nginx, and wrote a Bash script to back up project data.
            </p>
            <ul className="stack-list">
              <li>Ubuntu Server</li>
              <li>Bash</li>
              <li>Nginx</li>
              <li>UFW</li>
              <li>SSH</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad/Home-Linux-Server" target="_blank" rel="noopener noreferrer">→ Repository</a>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <text x="160" y="26" textAnchor="middle" fill="#5A6672" fontSize="9">Smart Campus Automation</text>
                <rect x="30" y="42" width="120" height="50" rx="5" fill="none" stroke="#F2A65A" />
                <text x="90" y="63" textAnchor="middle" fill="#F2A65A" fontSize="9">Student</text>
                <text x="90" y="78" textAnchor="middle" fill="#5A6672" fontSize="8">class + GPA</text>
                <rect x="170" y="42" width="120" height="50" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="230" y="63" textAnchor="middle" fill="#4FD1C5" fontSize="9">Course</text>
                <text x="230" y="78" textAnchor="middle" fill="#5A6672" fontSize="8">class + roster</text>
                <rect x="30" y="104" width="120" height="50" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="90" y="125" textAnchor="middle" fill="#4FD1C5" fontSize="9">Attendance</text>
                <text x="90" y="140" textAnchor="middle" fill="#5A6672" fontSize="8">class + log</text>
                <rect x="170" y="104" width="120" height="50" rx="5" fill="none" stroke="#F2A65A" />
                <text x="230" y="125" textAnchor="middle" fill="#F2A65A" fontSize="9">Fee Manager</text>
                <text x="230" y="140" textAnchor="middle" fill="#5A6672" fontSize="8">class + ledger</text>
                <text x="160" y="185" textAnchor="middle" fill="#5A6672" fontSize="9">C++ · Object-Oriented Design</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">C++ / OOP</span>
            <h3>Smart Campus Automation System</h3>
            <p className="desc">
              A C++ object-oriented university management system modeling students, courses, attendance, GPA calculation, and fee management as cooperating classes. My strongest structured software project — proof that I can design more than scripts.
            </p>
            <ul className="stack-list">
              <li>C++</li>
              <li>OOP</li>
              <li>Data Structures</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">→ Repository</a>
            </div>
          </div>
        </article>

        {/* Project 4 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <text x="160" y="26" textAnchor="middle" fill="#5A6672" fontSize="9">MediFlow</text>
                <rect x="24" y="44" width="272" height="34" rx="5" fill="none" stroke="#F2A65A" />
                <text x="160" y="65" textAnchor="middle" fill="#F2A65A" fontSize="9">React UI — inventory &amp; requests</text>
                <line x1="160" y1="78" x2="160" y2="94" stroke="#1E2732" strokeWidth="2" />
                <rect x="24" y="96" width="272" height="34" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="160" y="117" textAnchor="middle" fill="#4FD1C5" fontSize="9">TypeScript service layer</text>
                <line x1="160" y1="130" x2="160" y2="146" stroke="#1E2732" strokeWidth="2" />
                <rect x="24" y="148" width="272" height="34" rx="5" fill="none" stroke="#4FD1C5" />
                <text x="160" y="169" textAnchor="middle" fill="#4FD1C5" fontSize="9">Distribution records store</text>
                <text x="160" y="200" textAnchor="middle" fill="#5A6672" fontSize="9">Typed, application-level development</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">TYPESCRIPT</span>
            <h3>MediFlow — Medicine Distribution System</h3>
            <p className="desc">
              A TypeScript-based application for managing medicine distribution workflows — built to practice typed, application-level development beyond the scripting I'd done before.
            </p>
            <ul className="stack-list">
              <li>TypeScript</li>
              <li>Application Design</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">→ Repository</a>
            </div>
          </div>
        </article>

        {/* Project 5 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <text x="160" y="26" textAnchor="middle" fill="#5A6672" fontSize="9">Apna ChatBot</text>
                <rect x="40" y="44" width="140" height="26" rx="12" fill="none" stroke="#4FD1C5" />
                <text x="110" y="61" textAnchor="middle" fill="#4FD1C5" fontSize="8">user: how do I reset SSH?</text>
                <rect x="140" y="80" width="140" height="26" rx="12" fill="none" stroke="#F2A65A" />
                <text x="210" y="97" textAnchor="middle" fill="#F2A65A" fontSize="8">bot: run sudo systemctl…</text>
                <rect x="40" y="116" width="140" height="26" rx="12" fill="none" stroke="#4FD1C5" />
                <text x="110" y="133" textAnchor="middle" fill="#4FD1C5" fontSize="8">user: thanks!</text>
                <text x="160" y="175" textAnchor="middle" fill="#5A6672" fontSize="9">Python · conversational logic</text>
                <text x="160" y="190" textAnchor="middle" fill="#5A6672" fontSize="9">AI-assisted development practice</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">PYTHON / AI</span>
            <h3>Apna ChatBot</h3>
            <p className="desc">
              A Python chatbot exploring conversational logic — part of folding AI-assisted development into how I build and document projects.
            </p>
            <ul className="stack-list">
              <li>Python</li>
              <li>Conversational Logic</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">→ Repository</a>
            </div>
          </div>
        </article>

        {/* Project 6 */}
        <article className="project-card reveal">
          <div className="project-visual">
            <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="1" y="1" width="318" height="218" rx="8" fill="none" stroke="#1E2732" />
              <g fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B98A5">
                <text x="160" y="26" textAnchor="middle" fill="#5A6672" fontSize="9">Live Crypto Pulse</text>
                <polyline points="30,140 70,110 110,125 150,80 190,95 230,60 270,75" fill="none" stroke="#4FD1C5" strokeWidth="2" />
                <rect x="20" y="46" width="280" height="120" rx="5" fill="none" stroke="#1E2732" />
                <text x="160" y="184" textAnchor="middle" fill="#F2A65A" fontSize="9">REST API → live price feed</text>
                <text x="160" y="200" textAnchor="middle" fill="#5A6672" fontSize="9">Vanilla JS · fetch() · external data</text>
              </g>
            </svg>
          </div>
          <div className="project-body">
            <span className="tag">WEB / API</span>
            <h3>Live Crypto Pulse</h3>
            <p className="desc">
              A web app surfacing live cryptocurrency prices via a public REST API — built to practice working with external, constantly-changing data on the frontend.
            </p>
            <ul className="stack-list">
              <li>JavaScript</li>
              <li>REST APIs</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/armaghanahmadshad" target="_blank" rel="noopener noreferrer">→ Repository</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}