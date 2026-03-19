# minmax Constitution

## Core Principles

### I. 测试优先 (Test-First)

每个阶段（Phase）都必须包含测试，并且测试必须通过才能进入下一阶段。禁止跳过测试或留下失败的测试。

**规则**：
- 阶段开始时先编写测试
- 测试必须失败后再实现功能
- 所有测试通过后才能宣告阶段完成
- 禁止提交失败测试或跳过测试

**理由**：确保每个阶段的质量，防止缺陷累积。

### II. 组件驱动开发 (Component-Driven Development)

使用 React 组件化开发，组件必须具备原子性、可复用性和独立可测试性。

**规则**：
- UI 组件必须独立于业务逻辑
- 组件必须有 Props 类型定义
- 组件必须能独立渲染和测试
- 使用 Lucide React 作为图标库

**理由**：组件化确保 UI 一致性和代码可维护性。

### III. 动画与交互规范 (Animation & Interaction)

使用 Framer Motion 实现动画效果，必须尊重用户的 `prefers-reduced-motion` 设置。

**规则**：
- 所有动画必须使用 Framer Motion 实现
- 动画必须可配置时长和缓动曲线
- 必须支持禁用动画的偏好设置
- 避免过度动画影响性能

**理由**：Framer Motion 是 React 生态中性能最优的动画库之一。

### IV. 样式隔离与一致性 (Style Isolation)

使用 Tailwind CSS v4 实现样式，遵循 Utility-First 原则，避免内联样式和 CSS 污染。

**规则**：
- 使用 Tailwind CSS 类名进行样式定义
- 禁止使用内联 `style` 属性（动态值除外）
- 组件样式必须自包含
- 使用 Tailwind 配置文件管理主题变量

**理由**：Tailwind CSS v4 提供一致的样式系统和支持动态主题。

### V. 构建与部署 (Build & Deployment)

使用 Vite 作为构建工具，输出优化的生产构建产物。

**规则**：
- 开发环境使用 `npm run dev`
- 生产构建使用 `npm run build`
- 构建产物必须通过性能审计
- 预览构建产物使用 `npm run preview`

**理由**：Vite 提供快速的开发体验和优化的生产构建。

## 技术栈规范

### 技术选型

- **框架**：React 18+
- **构建工具**：Vite 5+
- **样式**：Tailwind CSS v4
- **动画**：Framer Motion 11+
- **图标**：Lucide React
- **语言**：TypeScript 5+
- **包管理器**：npm

### 项目结构

```
src/
├── components/       # React 组件
├── hooks/           # 自定义 Hooks
├── pages/           # 页面组件
├── services/        # 业务逻辑服务
├── stores/          # 状态管理
├── types/           # TypeScript 类型定义
├── utils/           # 工具函数
└── App.tsx          # 应用入口
```

### 测试要求

每个阶段必须包含以下测试类型：

- **单元测试**：使用 Vitest + React Testing Library
- **组件测试**：测试组件渲染和交互
- **集成测试**：测试组件间交互
- **E2E 测试**（可选）：使用 Playwright

测试覆盖率目标：关键路径达到 80%+

## 文档与协作规范

### 文档语言

- 文档使用中文编写（技术术语除外）
- 代码注释使用中文或英文（根据团队偏好）
- README 文件使用中文
- 接口文档使用中文描述

### 提交规范

- 提交信息使用中文描述
- 遵循 Conventional Commits 格式
- 每个提交应原子化（单一目的）
- 提交前运行测试和 lint

### 分支命名

- 功能分支：`feature/功能名称`
- 修复分支：`fix/问题描述`
- 阶段分支：`phase/阶段名称`

## Governance

### 宪法优先级

本宪法文件优先于其他所有实践规范。当本宪法与其他规范冲突时，以本宪法为准。

### 修正程序

1. 提出修正案并说明理由
2. 在团队内讨论并达成共识
3. 更新版本号（遵循语义化版本）
4. 更新 `LAST_AMENDED_DATE`
5. 更新相关依赖模板

### 版本策略

- **MAJOR**：向后不兼容的原则移除或重新定义
- **MINOR**：新增原则或实质性扩展指导
- **PATCH**：澄清、措辞、拼写修正

### 合规检查

所有 PR 和审查必须验证：
1. 阶段测试是否全部通过
2. 是否遵循组件驱动开发原则
3. 是否使用指定的技术栈
4. 文档是否使用中文编写

**Version**: 1.0.0 | **Ratified**: 2026-03-19 | **Last Amended**: 2026-03-19
