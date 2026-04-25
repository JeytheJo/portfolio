import { useState, useEffect } from 'react'

const TITLE = 'Software Engineer & Security Enthusiast'

// theme vem como prop do App.jsx — única fonte de verdade
export default function Hero({ theme }) {
  const [typed, setTyped] = useState('')
  const [done, setDone]   = useState(false)

  useEffect(() => {
    if (typed.length >= TITLE.length) {
      setDone(true)
      return
    }
    const timer = setTimeout(() => {
      setTyped(TITLE.slice(0, typed.length + 1))
    }, 60)
    return () => clearTimeout(timer)
  }, [typed])

  return (
    <section className="hero" id="hero">

      <div className="hero-photo">
        <img
          src={theme === 'dark' ? '/portfolio/foto-dark.png' : '/portfolio/foto-light.png'}
          alt="João Eduardo"
          className="hero-photo-img"
        />
      </div>

      <div className="hero-content">
        <div className="hero-tag">&gt; IDENTIFICANDO...</div>
        <h1 className="hero-name">
          JEYTHE<br />
          <span className="hero-name-accent">JO</span>
        </h1>
        <p className="hero-realname">// João Eduardo · BR/PI</p>
        <p className="hero-title">
          {typed}
          {!done && <span className="hero-cursor" />}
        </p>
        <p className="hero-bio">
          Estudante de Engenharia de Software apaixonado por segurança
          da informação, desenvolvimento fullstack e automação.
          Construindo sistemas reais, quebrando coisas para entender
          como funcionam.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">Ver Projetos</a>
          <a href="https://github.com/JeytheJo" target="_blank" rel="noreferrer" className="btn-ghost">GitHub</a>
          <a href="/cv.pdf" target="_blank" className="btn-ghost">Currículo</a>
        </div>
      </div>

    </section>
  )
}