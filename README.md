# Quick Page Creator

一个简单的 Obsidian 插件，用于快速在 `pages` 目录下创建以时间戳命名的笔记。

## 功能

- 在左侧边栏添加 + 按钮
- 点击按钮自动在 `pages` 目录下创建新笔记
- 笔记文件名格式：`yyyymmddhhmm.md`（例如：`202501091430.md`）
- 自动打开新创建的笔记

## 安装

### Obsidian 社区市场安装（推荐）

打开 Obsidian 设置 → 第三方插件 → 浏览，搜索 **Quick Page** 或 **fengshuzi** 即可安装。

### 手动安装


### 开发模式安装

1. 将此插件文件夹复制到你的 Obsidian vault 的 `.obsidian/plugins/` 目录下
2. 在插件文件夹中运行：
   ```bash
   npm install
   npm run build
   ```
3. 在 Obsidian 设置中启用 "Quick Page Creator" 插件

### 快速开发

```bash
cd obsidian-quick-page
npm install
npm run dev
```

开发模式会监听文件变化并自动重新编译。

## 使用方法

1. 点击左侧边栏的 + 图标
2. 或使用命令面板（Ctrl/Cmd + P）搜索 "在 pages 目录创建新页面"
3. 新笔记会自动创建并打开

## 兼容性

- 与 Logseq 的 pages 目录结构完全兼容
- 适合 Logseq 和 Obsidian 混用的场景

## 技术栈

- TypeScript
- Obsidian API
- esbuild

## 许可证

MIT


---

## ☕ 请作者喝杯咖啡

如果这个插件帮助了你，欢迎扫码打赏，感谢支持！

<div align="center">
  <img src="./assets/wechat-donate.jpg" alt="微信打赏" width="200" />
  <p><sub>微信扫码打赏</sub></p>
</div>
