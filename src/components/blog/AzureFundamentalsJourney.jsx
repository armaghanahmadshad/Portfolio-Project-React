import { Link } from 'react-router-dom';

export default function AzureFundamentalsJourney() {
  return (
    <main id="top">
      <article className="post-wrap">
        <Link to="/blog" className="post-back">← Back to blog</Link>
        <span className="post-meta">Cloud / Azure — 6 min read</span>
        <h1>From AZ-900 to AZ-104: What Studying Azure Actually Taught Me</h1>

        <p>
          Most of my hands-on projects so far have been Linux-shaped — a terminal, a Bash script, a firewall
          rule. Azure was the first time I had to think about infrastructure I couldn't SSH into directly,
          and it changed how I think about "cloud" as more than a buzzword on a slide.
        </p>

        <h2>Starting with AZ-900: the vocabulary problem</h2>
        <p>
          Microsoft Certified: Azure Fundamentals (AZ-900) is deliberately non-technical — no labs, mostly
          concepts. I almost skipped it to jump straight into something hands-on. That would have been a
          mistake. Half of what makes cloud platforms confusing at first isn't the technology, it's the
          vocabulary: resource groups, subscriptions, management groups, regions versus availability zones.
          AZ-900 is where that vocabulary finally clicked into a mental model instead of a list of terms to
          memorize.
        </p>

        <h2>Then AZ-104: where it got real</h2>
        <p>
          The AZ-104 material — managing identities and governance in Azure, working with Microsoft Entra ID,
          understanding the prerequisites for Azure administration — is where the fundamentals started to feel
          like actual admin work rather than definitions. Managing identity and access is conceptually similar
          to the Linux users-and-groups work I'd already done on my home server, just at a different layer:
          instead of <code>chmod</code> and <code>/etc/passwd</code>, it's role assignments and Entra ID.
        </p>

        <p>
          <strong>That parallel was the most useful thing I took from the whole track.</strong> Access control
          is access control — the specific tool changes, but the underlying questions don't: who can do what,
          to which resource, and how do you prove it later if something goes wrong.
        </p>

        <h2>Where AWS Cloud Practitioner fit in</h2>
        <p>
          I picked up AWS Cloud Practitioner Essentials shortly after, mostly to see how much of the Azure
          mental model would transfer. Most of it did. The services have different names and the console looks
          different, but the shape of the problem — compute, storage, networking, identity, and how billing
          ties back to all of it — is close enough that the second cloud platform is much faster to reason
          about than the first one was.
        </p>

        <h2>What I'd tell someone starting this today</h2>
        <ul>
          <li><strong>Don't skip the "boring" fundamentals course.</strong> AZ-900 felt slow at the time; it's the reason AZ-104 material wasn't overwhelming.</li>
          <li><strong>Map new concepts onto something you already know.</strong> If you've touched Linux permissions, cloud IAM will make more sense faster than it looks like it should.</li>
          <li><strong>Study a second cloud platform sooner than feels necessary.</strong> The repetition is what turns "I passed a quiz on this" into "I actually understand this."</li>
        </ul>

        <blockquote>
          Cloud fundamentals aren't really about memorizing a provider's service catalog — they're about
          building one mental model for access, identity, and infrastructure that transfers between providers.
        </blockquote>

        <p>
          I'm still early in this — AZ-104 as a full administrator certification is a longer road than the
          fundamentals track, and I haven't touched infrastructure-as-code tooling like Terraform or Bicep yet.
          That's next.
        </p>
      </article>
    </main>
  );
}
