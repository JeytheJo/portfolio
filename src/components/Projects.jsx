const PROJECTS = [
  {
    id: 1,
    type: 'Mobile App',
    title: 'Tô Lembrado',
    description:
      'App de lembretes para cuidadores de idosos. Notificações inteligentes com ações interativas, gerenciamento de rotinas de cuidado e persistência local. Chegou ao alpha v0.6.0 distribuído para grupo de testes.',
    stack: ['React Native', 'Expo', 'SQLite', 'expo-notifications', 'EAS Build'],
    github: 'https://github.com/JeytheJo/ToLembrado',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    type: 'Web App',
    title: 'Bodies Barber',
    description:
      'Sistema de agendamento para barbearia com CRUD completo. Gerenciamento de clientes, horários e serviços. Deploy na Render.',
    stack: ['Flask', 'PostgreSQL', 'psycopg2', 'Tailwind', 'Python'],
    github: 'https://github.com/JeytheJo/SistemaCRUD_Barbearia',
    demo: null,
    featured: true,
  },
  {
    id: 3,
    type: 'Academia · Java',
    title: 'Supermercado OOP',
    description:
      'Sistema de gerenciamento com OOP em Java. Cobre herança, polimorfismo, encapsulamento, sobrecarga e sobrescrita.',
    stack: ['Java', 'OOP', 'UML', 'Draw.io'],
    github: 'https://github.com/JeytheJo/Supermercado',
    demo: null,
    featured: false,
  },
  /*
  {
    id: 4,
    type: 'Academia · SQL',
    title: 'SQL Joins & Queries',
    description:
      'Estudo prático dos seis tipos de JOIN, constraints, sequences e manipulação avançada de dados com PostgreSQL.',
    stack: ['PostgreSQL', 'SQL', 'pgAdmin'],
    github: 'https://github.com/JeytheJo',
    demo: null,
    featured: false,
  },
  */
  
  {
    id: 5,
    type: 'Web Portfolio',
    title: 'Portfolio Web',
    description: 'Repositório do projeto de um Portfolio online utilizando tecnologias de frontend como React, JS, HTML5, CSS3 e o uso avançado de Vite',
    stack: ['React', 'Node', 'HTML', 'CSS', 'Vite'],
    github: 'https://github.com/JeytheJo/portfolio',
    demo: null,
    featured: true,
  },
  /*
  Pra adicionar futuramente novos projetos
    {
    id: 5,
    type: 'Web App',
    title: 'Novo Projeto',
    description: 'Descrição do projeto...',
    stack: ['React', 'Node'],
    github: 'https://github.com/JeytheJo/novo-projeto',
    demo: 'https://link-da-demo.com',
    featured: true,
  },
  */ 
  
]

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-label">
        <span>// Projetos</span>
      </div>

      {/* Projetos em destaque — grid de 2 colunas */}
      <div className="projects-featured">
        {PROJECTS.filter(p => p.featured).map(project => (
          <div key={project.id} className="project-card project-card--featured">

            <div className="project-card-header">
              <span className="project-type">{project.type}</span>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo →
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.stack.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Projetos secundários — lista horizontal */}
      <div className="projects-list">
        {PROJECTS.filter(p => !p.featured).map(project => (
          <div key={project.id} className="project-card project-card--list">

            <div className="project-card-header">
              <span className="project-type">{project.type}</span>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.stack.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}