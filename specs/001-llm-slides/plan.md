# Implementation Plan: 交互式提示词演示网站

**Branch**: `001-llm-slides` | **Date**: 2026-03-19 | **Spec**: /home/xk/code/SDD/minmax/specs/001-llm-slides/spec.md
**Input**: Feature specification from `/specs/001-llm-slides/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

构建一个全屏左右切页的交互式演示网站（类似 PPT），展示 LLM 提供商和 SDD 方法论内容。支持键盘、触控和点击三种导航方式，采用 React + Vite + Tailwind CSS v4 + Framer Motion 技术栈，实现毛玻璃卡片、光晕背景和网格底纹等视觉效果。

## Technical Context

**Language/Version**: TypeScript 5+ (React 19 + Vite)
**Primary Dependencies**: React 18+, Vite 5+, Tailwind CSS v4, Framer Motion 11+, Lucide React
**Storage**: N/A (前端仅，静态内容通过 import 引用)
**Testing**: Vitest + React Testing Library
**Target Platform**: 现代浏览器 (Chrome, Firefox, Safari, Edge 最新版本)
**Project Type**: Web 应用 (单页应用，前端仅)
**Performance Goals**: 60fps 动画流畅度，首次加载 <3秒
**Constraints**: 移动端响应式，支持 prefers-reduced-motion
**Scale/Scope**: 10 页幻灯片，单用户使用

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| 宪法原则 | 检查项 | 状态 |
|---------|--------|------|
| I. 测试优先 | 每个阶段包含测试，测试通过后才能进入下一阶段 | ✅ 必须执行 |
| II. 组件驱动开发 | React 组件化，Props 类型定义，独立可测试 | ✅ 必须执行 |
| III. 动画与交互规范 | Framer Motion 实现动画，支持 prefers-reduced-motion | ✅ 必须执行 |
| IV. 样式隔离与一致性 | Tailwind CSS v4 Utility-First，禁止内联样式 | ✅ 必须执行 |
| V. 构建与部署 | Vite 构建，npm scripts | ✅ 必须执行 |

**结论**: 无违规项，所有宪法要求均符合项目技术栈。

## Project Structure

### Documentation (this feature)

```text
specs/001-llm-slides/
├── plan.md              # This file (/speckit.plan command output)
├── spec.md              # Feature specification
├── research.md          # Phase 0 output (research findings)
├── data-model.md        # Phase 1 output (entity definitions)
├── quickstart.md        # Phase 1 output (run instructions)
├── contracts/           # Phase 1 output (UI contracts)
│   └── slide-contracts.md
└── checklists/          # Quality checklists
    └── requirements.md
```

### Source Code (repository root)

```text
src/
├── components/          # React 组件
│   ├── Slide/          # 单页幻灯片组件
│   ├── Navigation/      # 导航组件（箭头、圆点指示器）
│   ├── Progress/        # 进度条组件
│   ├── PageIndicator/   # 页码显示组件
│   ├── Loading/         # 加载动画组件
│   └── ui/              # 基础 UI 组件（毛玻璃卡片、光晕背景等）
├── hooks/              # 自定义 Hooks
│   ├── useSlideNavigation.ts
│   ├── useKeyboardNavigation.ts
│   └── useTouchNavigation.ts
├── pages/              # 页面组件（入口）
├── services/           # 业务逻辑
│   └── contentLoader.ts
├── types/              # TypeScript 类型定义
│   └── slide.ts
├── styles/             # 样式文件
│   └── globals.css
├── App.tsx             # 应用入口
└── main.tsx            # React DOM 入口

tests/
├── unit/               # 单元测试
├── component/          # 组件测试
└── integration/        # 集成测试

file/                   # 内容文件 (markdown)
├── openai.md
├── anthropic.md
├── google.md
├── llm_compare.md
├── claude.md
├── sdd.md
├── spec-kit.md
└── openspec.md

public/                 # 静态资源
```

**Structure Decision**: 使用单项目结构，前端 React 应用，内容通过 static import 引用。无需 backend 或 mobile 组件。

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| 无 | - | - |

**复杂度评估**: 项目为纯前端应用，技术栈简单清晰，无复杂度违规。
