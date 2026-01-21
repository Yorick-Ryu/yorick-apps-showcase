'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      setThemeState(stored)
    }
  }, [])

  const setTheme = (newTheme: Theme) => {
    const root = document.documentElement

    const updateTheme = () => {
      let applied: 'light' | 'dark' = 'light'

      if (newTheme === 'system') {
        applied = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        applied = newTheme
      }

      // 直接切换主题
      root.classList.remove('light', 'dark')
      root.classList.add(applied)
      setResolvedTheme(applied)

      setThemeState(newTheme)
      localStorage.setItem('theme', newTheme)
    }

    updateTheme()
  }

  useEffect(() => {
    const root = document.documentElement

    const updateTheme = () => {
      let applied: 'light' | 'dark' = 'light'

      if (theme === 'system') {
        applied = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        applied = theme
      }

      root.classList.remove('light', 'dark')
      root.classList.add(applied)
      setResolvedTheme(applied)
    }

    updateTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => theme === 'system' && updateTheme()
    mediaQuery.addEventListener('change', handler)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
