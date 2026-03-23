import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import styles from './AppCard.module.css'

interface AppCardProps {
  name: string
  type: string
  description: string
  features: string[]
  icon?: string
  iconAlt?: string
  url: string
}

export default function AppCard({
  name,
  type,
  description,
  features,
  icon,
  iconAlt,
  url
}: AppCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <span className={styles.tag}>{type}</span>
          <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles.iconContainer}>
          {icon ? (
            <Image
              src={icon}
              alt={iconAlt || name}
              width={52}
              height={52}
              className={styles.icon}
            />
          ) : (
            <div className={styles.iconPlaceholder}>
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature} className={styles.feature}>
            <span className={styles.bullet} />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        <span>访问项目</span>
        <ArrowUpRight size={14} className={styles.buttonArrow} />
      </a>
    </div>
  )
}
