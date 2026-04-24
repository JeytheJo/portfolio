/* useTheme.js — Hook customizado de tema*/

import { useState, useEffect } from 'react'

export function useTheme() {

  const [theme, setTheme] = useState(
    () => localStorage.getItem('portfolio-theme') || 'dark'
  )

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Alterna entre 'dark' e 'light'
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}