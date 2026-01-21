'use client'

import Image from 'next/image'
import XiaohongshuIcon from './icons/XiaohongshuIcon'
import DouyinIcon from './icons/DouyinIcon'
import styles from './Footer.module.css'

const socialPlatforms = [
  {
    name: '小红书',
    icon: XiaohongshuIcon,
    qrCode: '/assets/qrcodes/xhs_qr.jpg'
  },
  {
    name: '抖音',
    icon: DouyinIcon,
    qrCode: '/assets/qrcodes/douyin_qr.jpg'
  }
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>关注我的社交平台</p>

          <div className={styles.social}>
            {socialPlatforms.map((platform) => {
              const IconComponent = platform.icon
              return (
                <div key={platform.name} className={styles.platform}>
                  <span className={styles.platformName}>
                    <span className={styles.platformIcon}>
                      <IconComponent size={20} />
                    </span>
                    {platform.name}
                  </span>
                  <div className={styles.qrCodeWrapper}>
                    <Image
                      src={platform.qrCode}
                      alt={`${platform.name} 二维码`}
                      width={150}
                      height={150}
                      className={styles.qrCode}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 Yorick Apps. 用心打造每一个工具。</p>
        </div>
      </div>
    </footer>
  )
}
