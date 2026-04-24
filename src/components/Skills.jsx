const SKILLS = [
  {
    category: 'Linguagens',
    items: [
      { name: 'Python',      level: 'main' },
      { name: 'Java',        level: 'main' },
      { name: 'JavaScript',  level: 'main' },
      { name: 'SQL',         level: 'main' },
      { name: 'HTML/CSS',    level: 'secondary' },
      { name: 'Bash',        level: 'secondary' },
    ],
  },
  {
    category: 'Frameworks & Libs',
    items: [
      { name: 'React Native', level: 'main' },
      { name: 'Flask',        level: 'main' },
      { name: 'Expo',         level: 'main' },
      { name: 'React',        level: 'secondary' },
      { name: 'Tailwind',     level: 'secondary' },
    ],
  },
  {
    category: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL', level: 'main' },
      { name: 'SQLite',     level: 'main' },
      { name: 'psycopg2',   level: 'secondary' },
    ],
  },
  {
    category: 'Segurança & OSINT',
    items: [
      { name: 'Redes',          level: 'main' },
      { name: 'OWASP Top 10',   level: 'main' },
      { name: 'Scripting',      level: 'main' },
      { name: 'OSINT',          level: 'main' },
      { name: 'Nmap',           level: 'secondary' },
      { name: 'Wireshark',      level: 'secondary' },
      { name: 'Metasploit',     level: 'secondary' },
      { name: 'Kali Linux',     level: 'secondary' },
    ],
  },
  {
    category: 'Ferramentas',
    items: [
      { name: 'Git',        level: 'main' },
      { name: 'Linux',      level: 'main' },
      { name: 'VSCode',     level: 'main' },
      { name: 'pgAdmin',    level: 'secondary' },
      { name: 'Docker',     level: 'secondary' },
      { name: 'Draw.io',    level: 'secondary' },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-label">
        <span>// Skills</span>
      </div>

      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skills-group">

            <h3 className="skills-category">{group.category}</h3>

            <div className="skills-tags">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`skill-tag ${skill.level === 'main' ? 'skill-tag--main' : ''}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}