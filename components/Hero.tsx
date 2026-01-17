'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          为 AI 时代<br />
          打造工具
        </h1>
        <p className={styles.subtitle}>
          探索由 Yorick 独立开发的 AI 增强工具集<br />
          让创作更高效，让生活更智能
        </p>
      </div>
    </section>
  )
}
