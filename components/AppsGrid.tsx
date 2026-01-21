import AppCard from './AppCard'
import styles from './AppsGrid.module.css'

// 静态应用数据 - 提升到组件外部避免重复创建
const APPS_DATA = [
  {
    name: 'DeepShare',
    type: '浏览器插件',
    description: '一键从 AI 对话导出 Word 文档，完美保留公式与格式。',
    features: [
      'AI 对话导出 Word',
      '复制 AI 对话中的公式',
      'DeepSeek 长截图',
      '兼容主流 AI 平台'
    ],
    icon: '/assets/icons/deepshare.svg',
    iconAlt: 'DeepShare Logo',
    url: 'https://ds.rick216.cn/'
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
  },
  {
    name: 'BananaPeel',
    type: '浏览器插件',
    description: '专门为 AI 生成图片设计的处理工具。',
    features: [
      '去除 Gemini 生成的水印',
      '智能背景去除',
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
  }
]

export default function AppsGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>精选作品</h2>
        <div className={styles.grid}>
          {APPS_DATA.map((app) => (
            <AppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </section>
  )
}
