# Quickstart: 交互式提示词演示网站

**Feature**: 001-llm-slides
**Date**: 2026-03-19

## 环境要求

- Node.js 18+
- npm 9+

## 安装

```bash
npm install
```

## 开发

```bash
npm run dev
```

访问 http://localhost:5173 查看演示。

## 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

## 预览

```bash
npm run preview
```

## 测试

```bash
# 运行所有测试
npm test

# 运行测试并监视变化
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 项目结构

```
src/
├── components/    # React 组件
├── hooks/        # 自定义 Hooks
├── pages/        # 页面入口
├── services/     # 内容加载
├── types/        # 类型定义
├── styles/       # 样式
└── App.tsx       # 应用入口

file/             # 内容文件 (Markdown)
public/           # 静态资源
tests/            # 测试文件
```

## 导航操作

| 操作 | 方式 |
|------|------|
| 下一页 | 右箭头键 / 空格键 / 左滑 / 点击右箭头 |
| 上一页 | 左箭头键 / 右滑 / 点击左箭头 |
| 跳转 | 点击底部圆点指示器 |

## 内容文件

内容文件位于 `file/` 目录：

- `openai.md` - OpenAI 介绍
- `anthropic.md` - Anthropic 介绍
- `google.md` - Google 介绍
- `llm_compare.md` - LLM 选型决策表
- `claude.md` - Claude 使用
- `sdd.md` - SDD 规范驱动开发
- `spec-kit.md` - spec-kit 工具
- `openspec.md` - openspec 工具

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 故障排除

### 加载缓慢

确保 Vite 开发服务器正在运行，尝试 `npm run dev`。

### 内容不显示

检查 `file/` 目录下的 Markdown 文件是否存在。文件缺失时会显示占位内容。
