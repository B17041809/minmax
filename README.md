# 交互式幻灯片演示

基于 React + Vite + TypeScript 构建的交互式幻灯片演示应用，支持多种导航方式和流畅的动画效果。

## 功能特点

- **10 页幻灯片内容**：介绍三大国外 LLM 提供商（OpenAI、Anthropic、Google）、选型决策表、Claude 使用、SDD 方法论、spec-kit、openspec 等
- **多种导航方式**：
  - 键盘导航：← → 方向键 或 空格键
  - 触控导航：左右滑动
  - 点击导航：底部导航控件
- **流畅动画**：基于 Framer Motion 的平滑过渡动画
- **视觉效果**：毛玻璃卡片、光晕背景、网格背景

## 技术栈

- React 19 + Vite 5 + TypeScript
- Tailwind CSS v4
- Framer Motion 11（动画）
- Lucide React（图标）
- Vitest（测试）

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 运行测试

```bash
npm test
```

### 代码检查

```bash
npm run lint
```

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| ← ArrowLeft | 上一页 |
| → ArrowRight | 下一页 |
| 空格 Space | 下一页 |

## 导航控件

- **左右箭头按钮**：跳转到上一页/下一页
- **圆点指示器**：点击直接跳转到指定页面
- **进度条**：顶部显示当前进度
- **页码显示**：右上角显示 "当前页 / 总页数"

## 项目结构

```
src/
├── components/
│   ├── Loading/          # 加载状态组件
│   ├── Navigation/       # 导航控件
│   ├── Progress/         # 进度指示器
│   ├── Slide/            # 幻灯片组件
│   └── ui/              # 通用 UI 组件
├── hooks/                # React Hooks
├── services/             # 服务层
├── types/                # TypeScript 类型定义
└── App.tsx              # 应用入口
```

## 内容文件

幻灯片内容存储在 `file/` 目录下，使用 Markdown 格式：

- `openai.md` - OpenAI 介绍
- `anthropic.md` - Anthropic 介绍
- `google.md` - Google 介绍
- `llm_compare.md` - LLM 选型决策表
- `claude.md` - Claude 使用指南
- `sdd.md` - SDD 方法论
- `spec-kit.md` - spec-kit 工具介绍
- `openspec.md` - openspec 工具介绍

## 无障碍支持

- 支持 `prefers-reduced-motion` 偏好设置，减少动画效果
- 使用语义化 HTML 和 ARIA 属性
- 支持键盘导航

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT
