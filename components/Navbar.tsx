'use client'

// 使用命名导入，Next.js 14 的打包器会自动 tree-shake
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from '@/lib/theme-context'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logoWrapper}>
            <Image
              src="/assets/icons/logo.png"
              alt="Yorick Apps Logo"
              width={40}
              height={40}
              className={styles.logo}
            />
          </div>
          <span className={styles.brandName}>Yorick Apps</span>
        </div>

        <button
          onClick={toggleTheme}
          className={styles.themeToggle}
          aria-label="Toggle theme"
        >
          {resolvedTheme === 'dark' ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>
      </div>
    </nav>
  )
}
