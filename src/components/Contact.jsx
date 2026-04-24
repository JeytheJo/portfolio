const LINKS = [
  {
    label: 'GitHub',
    value: 'github.com/JeytheJo',
    href: 'https://github.com/JeytheJo',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/joão-eduardo',
    href: 'https://www.linkedin.com/in/jo%C3%A3o-eduardo-138903226/',
  },
  {
    label: 'Email',
    value: 'je.sousapessoa@gmail.com',
    href: 'mailto:je.sousapessoa@gmail.com',
  },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-label">
        <span>// Contato</span>
      </div>

      <div className="contact-grid">

        <div className="contact-text">
          <h2 className="contact-heading">
            Vamos construir<br />
            <span className="contact-heading-accent">algo juntos.</span>
          </h2>
          <p className="contact-sub">
            Aberto para estágio, freela e projetos interessantes.
            Se quiser conversar sobre segurança, desenvolvimento
            ou uma ideia maluca — pode chamar.
          </p>
        </div>

        <div className="contact-links">
          {LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">{link.label}</span>
              <span className="contact-link-value">{link.value}</span>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>

      </div>

      <footer className="site-footer">
        <span>© 2025 <span className="footer-accent">JeytheJo</span> — built with caffeine & curiosity</span>
        <span>Piauí, Brasil</span>
      </footer>

    </section>
  )
}