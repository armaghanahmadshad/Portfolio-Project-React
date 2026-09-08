import { Link } from 'react-router-dom';

export default function GitOpsVsTraditionalOps() {
  return (
    <main id="top">
      <div className="post-wrap">
        <Link to="/blog" className="post-back">← back to all posts</Link>
        <p className="post-meta">GitOps · 7 min read · student notes</p>
        <h1>GitOps vs Traditional Ops: What I Learned Shipping My First Pipeline</h1>

        <p>
          Before building anything myself, "GitOps" was just a word I'd seen in job postings next to "Kubernetes" and "Terraform" — vaguely important, not concretely understood. Three broken deploys later, I finally have a working definition, and it's simpler than the marketing makes it sound.
        </p>

        <h2>The traditional-ops instinct</h2>
        <p>
          My first version of the Terraform sandbox project had a bad habit: when something went wrong on the actual Azure VM, I'd SSH in and fix it directly. Restart a service, tweak a config file, move on. It worked, in the sense that the immediate problem went away.
        </p>
        <p>
          It also meant the running infrastructure and the Terraform files describing it quietly drifted apart. Two weeks later, I ran <code>terraform plan</code> again and it wanted to undo every manual fix I'd made, because as far as Git was concerned, none of them had ever happened.
        </p>

        <h2>What GitOps actually asks of you</h2>
        <p>
          The rule that fixed this was uncomfortable at first: <strong>if it isn't in the repository, it doesn't exist.</strong> Every change to infrastructure — no matter how small or how tempting to just SSH in and patch — goes through a commit, a pull request, and the pipeline, so the Git history and the running system never disagree about what "current" means.
        </p>
        <p>
          That's the whole idea. Traditional ops treats the running system as the source of truth and configuration as documentation of it. GitOps flips that: the repository is the source of truth, and the running system is just the current rendering of it.
        </p>

        <blockquote>
          The moment your infrastructure and your repo can disagree, you've stopped doing GitOps, even if you're using all the right tools.
        </blockquote>

        <h2>Where this bit me</h2>
        <p>
          On my monitored Docker Compose project, I once changed a Grafana dashboard setting directly in the running container to fix a broken panel during a demo. It worked for the demo. It also meant the next person to run <code>docker compose up</code> from the repo got the broken panel back, because my fix lived nowhere except that one running container.
        </p>
        <p>
          The actual fix took ten more minutes: commit the dashboard JSON change, rebuild from that file, confirm the panel still worked. Slower in the moment, but the fix now survives a fresh checkout — which is the entire point.
        </p>

        <h2>The honest takeaway</h2>
        <p>
          GitOps isn't a tool you install. It's a discipline: resist the SSH session, make the change in the repo, let the pipeline apply it. As a student, that discipline is the more valuable lesson than any specific tool — it transfers whether the infrastructure behind it is a single Azure VM or a fleet of Kubernetes clusters.
        </p>
      </div>
    </main>
  );
}