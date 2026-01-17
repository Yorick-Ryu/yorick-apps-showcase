'use client'

import AppCard from './AppCard'
import styles from './AppsGrid.module.css'

const apps = [
  {
    name: 'DeepShare',
    type: '浏览器插件',
    description: '一键从 AI 对话导出 Word 文档，完美保留公式与格式。',
    features: [
      '支持导出标准 Word',
      '自动识别渲染数学公式',
      '一键长截图',
      '兼容多款主流 AI 平台'
    ],
    icon: '/assets/icons/deepshare.svg',
    iconAlt: 'DeepShare Logo',
    url: 'https://ds.rick216.cn/'
  },
  {
    name: 'BananaPeel',
    type: '浏览器插件',
    description: '专门为 AI 生成图片设计的处理工具。',
    features: [
      '智能去除 AI 生成产生的水印',
      '一键精准抠图/背景去除',
      '保持图片原始质量',
      '极简操作'
    ],
    icon: '/assets/icons/bananapeel.png',
    iconAlt: 'BananaPeel Logo',
    url: 'https://bp.rick216.cn/'
  },
  {
    name: 'SuperLens',
    type: '网页应用',
    description: '专业的图片局部放大镜工具，为细节展示而生。',
    features: [
      '平滑动态放大效果',
      '多种放大形状与比例可选',
      '支持高分辨率处理',
      '导出高清细节图'
    ],
    url: 'https://superlens.rick216.cn/'
  },
  {
    name: '青幕',
    type: '网页应用',
    description: '高效的语音转字幕工具，让后期制作更简单。',
    features: [
      '高精度语音识别文字',
      '生成专业 SRT 字幕',
      '支持多种文件格式',
      '实时编辑与预览'
    ],
    icon: '/assets/icons/qingmu.svg',
    iconAlt: '青幕 Logo',
    url: 'https://qm.rick216.cn/'
  }
]

export default function AppsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>精选作品</h2>
        <div className={styles.grid}>
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </div>
    </section>
  )
}
