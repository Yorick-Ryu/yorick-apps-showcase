import type { Metadata } from 'next'
import { Syne, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-context'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['400', '600', '700', '800']
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jb',
  display: 'swap',
  weight: ['400', '500']
})

export const metadata: Metadata = {
  title: 'Yorick Apps — Yorick 独立开发的实用工具集',
  description: '探索 Yorick 独立开发的实用工具集',
  icons: {
    icon: '/assets/icons/logo-rounded.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${syne.variable} ${mono.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
