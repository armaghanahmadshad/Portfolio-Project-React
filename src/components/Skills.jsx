import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const GROUPS = ['Daily essentials', 'Active practice', 'Next on the roadmap'];

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon" aria-hidden="true">
        {skill.icon_slug ? (
          <img
            src={`https://cdn.simpleicons.org/${skill.icon_slug}/${(skill.icon_color || '4FD1C5').replace('#', '')}`}
            alt=""
            width="24"
            height="24"
          />
        ) : (
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="13" fill="none" stroke={`#${(skill.icon_color || '4FD1C5').replace('#', '')}`} strokeWidth="2.2" />
          </svg>
        )}
      </div>
      <h4 className="skill-name">{skill.name}</h4>
      <span className="lvl">{skill.level_label}</span>
    </div>
  );
}

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let active = true;
    supabase
      .from('skills')
      .select('*')
      .order('sort_order')
      .order('created_at')
      .then(({ data }) => {
        if (active) setSkills(data || []);
      });
    return () => { active = false; };
  }, []);

  const byGroup = (groupName) => skills.filter((s) => s.group_name === groupName);

  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">02 / skills</span>
          <h2>Current toolkit</h2>
          <p>
            Technical skills are grouped by what I use every day, what I practice actively, and what I'm adding to my workflow next.
          </p>
        </div>

        {GROUPS.map((groupName) => {
          const groupSkills = byGroup(groupName);
          if (!groupSkills.length) return null;
          return (
            <div className="skills-group reveal" key={groupName}>
              <h3>{groupName}</h3>
              <div className="skills-grid">
                {groupSkills.map((s) => <SkillCard key={s.id} skill={s} />)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
