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
    name: 'ToFly',
    type: '网页应用',
    description: 'The ultimate suite of privacy-focused productivity tools. Fast, secure, and running entirely on the edge.',
    features: [
      '隐私优先设计',
      '完全端侧运行',
      '快速响应体验',
      '安全可靠'
    ],
    icon: '/assets/icons/tofly.png',
    iconAlt: 'ToFly Logo',
    url: 'https://www.tofly.app/'
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
  },
  {
    name: 'SharedNotes',
    type: 'Android / Desktop',
    description: 'A note-taking application that supports real-time sharing, Markdown syntax, and supports Android platform and Desktop platform (Windows, MacOS, Linux).',
    features: [
      '实时共享笔记',
      'Markdown 语法支持',
      'Android 客户端',
      '跨平台桌面端'
    ],
    url: 'https://github.com/Yorick-Ryu/SharedNotes'
  },
  {
    name: '酷客工具箱',
    type: 'Android',
    description: '用于 vivo/iQOO 的系统工具箱',
    features: [
      '系统优化工具',
      'vivo/iQOO 专用',
      '多种实用功能',
      '便捷管理'
    ],
    icon: '/assets/icons/cokotools.png',
    iconAlt: '酷客工具箱 Logo',
    url: 'https://github.com/Yorick-Ryu/CokoTools'
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
