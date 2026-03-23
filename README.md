# Yorick Apps Showcase

一个现代化的个人作品展示网站，展示 Yorick 开发的各类 AI 工具和插件。

## 特性

- 暗色优先的工业编辑风设计，琥珀色单一强调色
- 深浅色主题切换，基于 View Transition API 的圆形扩散动画
- Syne 显示字体 + JetBrains Mono 等宽字体排版
- 完全响应式设计
- 基于 Next.js 14 + TypeScript

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: CSS Modules + CSS Variables
- **图标**: Lucide React
- **部署**: 静态导出，可部署到任何静态托管服务

## 📦 项目结构

```
yorick-apps-showcase/
├── app/                  # Next.js App Router
├── components/           # React 组件
├── lib/                  # 工具库（主题系统）
└── public/assets/        # 静态资源
    ├── icons/           # Logo 和应用图标
    └── qrcodes/         # 社交平台二维码
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 添加资源文件

将以下文件放入对应目录：

```
public/assets/icons/
  ├── logo.png           # 站点 Logo 和 Favicon
  ├── deepshare.svg      # DeepShare 图标
  ├── bananapeel.png     # BananaPeel 图标
  └── qingmu.svg         # 青幕图标

public/assets/qrcodes/
  ├── xhs_qr.jpg         # 小红书二维码
  └── douyin_qr.jpg      # 抖音二维码
```

### 本地开发

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
npm run build
```

生成的静态文件位于 `out/` 目录。

## 🎯 展示的应用

- **DeepShare** - AI 对话导出 Word 工具
- **BananaPeel** - AI 图片处理工具
- **SuperLens** - 图片局部放大镜
- **青幕 (QingMu)** - 语音转字幕工具
