import { useTheme } from './hooks/useTheme'

import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Contact   from './components/Contact'

import './styles/globals.css'
import './styles/theme-dark.css'
import './styles/theme-ligth.css'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="app-wrapper">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}