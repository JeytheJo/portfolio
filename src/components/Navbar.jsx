/* Navbar.jsx — Barra de navegação*/

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        JEYtheJO<span className="navbar-logo-accent">.</span>
      </div>

      <ul className="navbar-links">
        <li><a href="#about">Sobre</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      {/* Botão que alterna entre os dois temas */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '◑ E-INK' : '◐ TERMINAL'}
      </button>

    </nav>
  )
}