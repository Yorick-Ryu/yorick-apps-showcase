'use client'

import { ExternalLink } from 'lucide-react'
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
        <div className={styles.iconContainer}>
          {icon ? (
            <Image
              src={icon}
              alt={iconAlt || name}
              width={64}
              height={64}
              className={styles.icon}
            />
          ) : (
            <div className={styles.iconPlaceholder}>
              {name.charAt(0)}
            </div>
          )}
        </div>

        <div className={styles.headerText}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.tag}>{type}</span>
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <span className={styles.bullet}>•</span>
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
        <span>访问网站</span>
        <ExternalLink size={18} />
      </a>
    </div>
  )
}
