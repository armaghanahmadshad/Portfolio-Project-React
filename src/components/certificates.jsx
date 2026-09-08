import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Certificates() {
  const [certs, setCerts] = useState([]);

  useEffect(() => {
    let active = true;
    supabase
      .from('certificates')
      .select('*')
      .order('sort_order')
      .order('created_at')
      .then(({ data }) => {
        if (active) setCerts(data || []);
      });
    return () => { active = false; };
  }, []);

  return (
    <section id="certificates">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">03 / certificates</span>
          <h2>Certifications</h2>
          <p>
            Completed courses I've used to build a foundation before diving into the DevOps-specific projects above.
          </p>
        </div>
        <div className="cert-grid">
          {certs.map((cert) => (
            <a
              key={cert.id}
              className="cert-card reveal"
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="cert-icon" aria-hidden="true">
                {cert.icon_svg ? (
                  <svg viewBox={cert.icon_viewbox || '0 0 48 48'} xmlns="http://www.w3.org/2000/svg" dangerouslySetInnerHTML={{ __html: cert.icon_svg }} />
                ) : cert.icon_slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${cert.icon_slug}/${(cert.icon_color || '5A6672').replace('#', '')}`}
                    alt=""
                    width="28"
                    height="28"
                  />
                ) : (
                  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <text x="24" y="30" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="14" fill={`#${(cert.icon_color || '5A6672').replace('#', '')}`}>
                      {cert.provider.slice(0, 3).toUpperCase()}
                    </text>
                  </svg>
                )}
              </div>
              <h3 className="cert-provider">{cert.provider}</h3>
              <p className="cert-title">{cert.title}</p>
              <span className="cert-btn">
                View Certificate
                <svg viewBox="0 0 24 24" className="ext-icon" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
