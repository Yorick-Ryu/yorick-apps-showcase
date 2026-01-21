'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme, event?: React.MouseEvent | { x: number; y: number }) => void
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

  const setTheme = (newTheme: Theme, event?: React.MouseEvent | { x: number; y: number }) => {
    const root = document.documentElement

    const updateTheme = () => {
      let applied: 'light' | 'dark' = 'light'

      if (newTheme === 'system') {
        applied = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        applied = newTheme
      }

      root.classList.remove('light', 'dark')
      root.classList.add(applied)
      setResolvedTheme(applied)

      setThemeState(newTheme)
      localStorage.setItem('theme', newTheme)
    }

    // 如果浏览器不支持 startViewTransition，直接更新
    if (!document.startViewTransition) {
      updateTheme()
      return
    }

    // 获取点击位置
    let x = 0
    let y = 0
    if (event) {
      if ('clientX' in event) {
        x = event.clientX
        y = event.clientY
      } else {
        x = event.x
        y = event.y
      }
    } else {
      x = window.innerWidth / 2
      y = window.innerHeight / 2
    }

    // 开始视图过渡
    root.style.setProperty('--x', `${x}px`)
    root.style.setProperty('--y', `${y}px`)
    root.classList.add('view-transition-active')

    const transition = document.startViewTransition(() => {
      updateTheme()
    })

    transition.finished.finally(() => {
      // 增加一个小延时，确保浏览器完全完成渲染后再移除类，防止样式闪烁
      setTimeout(() => {
        root.classList.remove('view-transition-active')
      }, 20)
    })
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
