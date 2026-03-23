'use client'

import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = (e: React.MouseEvent) => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark', e)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/icons/logo.png"
              alt="Yorick Apps Logo"
              width={28}
              height={28}
              className={styles.logo}
            />
          </div>
          <span className={styles.brandName}>
            <span className={styles.brandYorick}>YORICK</span>
            <span className={styles.brandSep}>·</span>
            <span className={styles.brandApps}>APPS</span>
          </span>
        </div>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {resolvedTheme === 'dark' ? (
            <Sun size={15} />
          ) : (
            <Moon size={15} />
          )}
        </button>
      </div>
    </nav>
  )
}
