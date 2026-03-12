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
          源于需求<br />
          归于实用
        </h1>
        <p className={styles.subtitle}>
          探索由 Yorick 独立开发的实用工具集<br />
          每一个工具，都从真实需求出发
        </p>
      </div>
    </section>
  )
}
