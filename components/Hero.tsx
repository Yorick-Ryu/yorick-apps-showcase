import styles from './Hero.module.css'

// 静态背景元素 - 提升到组件外部避免重复创建
const GRADIENT_BACKGROUND = (
  <div className={styles.background}>
    <div className={styles.gradientOrb1}></div>
    <div className={styles.gradientOrb2}></div>
    <div className={styles.gradientOrb3}></div>
  </div>
)

export default function Hero() {
  return (
    <section className={styles.hero}>
      {GRADIENT_BACKGROUND}

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
