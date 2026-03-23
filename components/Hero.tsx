import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.watermark} aria-hidden="true">07</div>
      <div className={styles.fadeBottom} />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          <span>YORICK APPS · 07 PROJECTS</span>
          <span className={styles.eyebrowLine} />
        </div>
        <h1 className={styles.title}>
          源于需求
          <br />
          <span className={styles.titleAccent}>归于实用</span>
        </h1>
        <p className={styles.subtitle}>
          探索由 Yorick 独立开发的实用工具集<br />
          每一个工具，都从真实需求出发
        </p>
      </div>
    </section>
  )
}
