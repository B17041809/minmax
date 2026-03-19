# Research: 交互式提示词演示网站

**Feature**: 001-llm-slides
**Date**: 2026-03-19
**Status**: Complete

## Technical Decisions

### 1. 页面切换动画方案

**Decision**: 使用 Framer Motion 的 `AnimatePresence` + `motion.div` 实现左右滑动切换

**Rationale**:
- Framer Motion 是 React 生态中最成熟的动画库
- `AnimatePresence` 支持退出动画，配合 `mode="wait"` 实现顺序切换
- spring 弹簧动画 (`stiffness: 300, damping: 30`) 提供自然流畅的交互体验
- 原生支持 `prefers-reduced-motion` 媒体查询

**Alternatives considered**:
- CSS transitions: 需要手动管理 DOM 和状态，复杂度高
- React Spring: 功能类似但 API 不如 Framer Motion 直观
- GSAP: 功能强大但包体积较大，对于简单幻灯片过度设计

### 2. 触控滑动检测方案

**Decision**: 使用 touch 事件 (touchstart/touchmove/touchend) 检测滑动方向和距离

**Rationale**:
- 50px 阈值是经过验证的合理值，区分滑动和点击
- 仅需监听原生 touch 事件，无需额外依赖
- 结合 AnimatePresence 确保动画队列正确

**Alternatives considered**:
- 使用 hammer.js: 增加额外依赖，对于简单手势检测过度
- 使用 pointer events: 兼容性不如 touch events

### 3. 内容加载方案

**Decision**: 使用 Vite 的 `import.meta.glob` 动态导入 markdown 文件

**Rationale**:
- Vite 原生支持，无需额外配置
- 支持 markdown 文件的直接导入
- 构建时自动优化

**Alternatives considered**:
- fetch API 运行时请求: 增加网络依赖和错误处理复杂度
- 静态字符串内联: 不利于内容维护

### 4. 样式方案

**Decision**: Tailwind CSS v4 + CSS 变量实现主题和视觉效果

**Rationale**:
- Tailwind CSS v4 通过 `@tailwindcss/vite` 插件集成
- CSS 变量 (`--primary-*`, `--accent-*`, `--text-*`, `--bg-*`) 实现一键换肤
- `backdrop-filter: blur()` 实现毛玻璃效果
- `filter: blur(100px)` 实现光晕背景

**Alternatives considered**:
- CSS Modules: 缺少主题变量支持
- Styled Components: 需要运行时样式处理，性能较差

### 5. 项目初始化方案

**Decision**: 使用 Vite 创建 React + TypeScript 项目

**Rationale**:
- Vite 提供极速开发体验 (HMR)
- 原生支持 TypeScript
- 优化生产构建
- 符合宪法 V. 构建与部署 要求

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3 | UI 框架 |
| react-dom | ^18.3 | React DOM 渲染 |
| framer-motion | ^11.x | 动画和过渡 |
| lucide-react | ^0.x | 图标库 |
| tailwindcss | ^4.0 | 样式框架 |
| @tailwindcss/vite | ^4.0 | Vite 插件 |
| vite | ^5.x | 构建工具 |
| typescript | ^5.x | 类型系统 |
| vitest | ^1.x | 单元测试 |
| @testing-library/react | ^14.x | 组件测试 |

## File Structure Rationale

```
src/
├── components/    # UI 组件（可复用）
├── hooks/         # 业务逻辑 Hooks（可测试）
├── pages/         # 页面入口
├── services/     # 内容加载等公共服务
├── types/         # TypeScript 类型定义
└── styles/       # 全局样式
```

- **components/**: 原子化组件，每个组件独立可测试
- **hooks/**: 封装导航逻辑，便于单元测试
- **services/**: 抽离内容加载等公共服务
- **types/**: 集中管理类型定义，确保一致性

## Key Implementation Notes

1. **动画性能**: 使用 `transform` 和 `opacity` 属性进行动画，避免 layout thrashing
2. **无障碍**: 监听 `prefers-reduced-motion`，在用户禁用动画时提供静态版本
3. **移动端**: 使用 `touch-action: pan-y` 避免触摸时页面滚动与幻灯片切换冲突
4. **键盘导航**: 使用 `useEffect` 监听 `keydown` 事件，正确处理焦点管理
