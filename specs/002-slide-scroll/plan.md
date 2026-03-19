# Implementation Plan: 幻灯片垂直滚动功能

**Branch**: `002-slide-scroll` | **Date**: 2026-03-19 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/002-slide-scroll/spec.md`

## Summary

为幻灯片内容区域添加垂直滚动支持，使用户可以查看超出页面高度的长内容。实现方式为修改 Slide 组件的容器结构，添加 CSS `overflow-y: auto` 滚动支持。

## Technical Context

**Language/Version**: TypeScript 5+ (来自现有项目)
**Primary Dependencies**: React, Framer Motion, Tailwind CSS v4 (来自现有项目)
**Storage**: N/A (纯前端功能)
**Testing**: Vitest + React Testing Library (来自现有项目)
**Target Platform**: Web Browser (桌面/移动端)
**Project Type**: Web Application (交互式幻灯片)
**Performance Goals**: 滚动响应延迟 ≤100ms (来自规格说明 SC-002)
**Constraints**: 支持 prefers-reduced-motion (来自宪法)
**Scale/Scope**: 10 页幻灯片，每页内容可滚动

## Constitution Check

| 检查项 | 状态 | 说明 |
|--------|------|------|
| 测试优先 | ✓ PASS | 每个阶段包含测试，测试通过后才能完成 |
| 组件驱动开发 | ✓ PASS | ScrollContainer 作为独立可复用组件 |
| 动画与交互 | ✓ PASS | 尊重 prefers-reduced-motion 设置 |
| 样式隔离 | ✓ PASS | 使用 Tailwind CSS 类名 |
| 构建与部署 | ✓ PASS | 使用 npm run build |

**无违规项**

## Project Structure

### Documentation (this feature)

```text
specs/002-slide-scroll/
├── plan.md              # 本文件
├── spec.md              # 功能规格说明
├── research.md          # 不需要 (无技术未知项)
├── data-model.md        # 不需要 (无复杂数据模型)
├── quickstart.md        # 不需要 (无外部依赖)
├── contracts/          # 不需要 (纯前端功能)
└── tasks.md            # 任务列表 (/speckit.tasks 输出)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Slide/
│   │   └── Slide.tsx           # 修改：添加滚动容器
│   └── ui/
│       └── ScrollContainer.tsx  # 新增：可滚动容器组件
├── hooks/
│   └── useScrollReset.ts       # 新增：切换幻灯片时重置滚动位置
tests/
├── component/
│   └── ScrollContainer.test.tsx # 新增：滚动容器测试
└── hooks/
    └── useScrollReset.test.ts  # 新增：滚动重置 Hook 测试
```

**Structure Decision**: 基于现有 `src/components/` 结构，新增 `ScrollContainer` 组件和 `useScrollReset` Hook。

## Complexity Tracking

无违规项。

## Phase 1: 实施计划

### 任务分解

| 任务ID | 描述 | 文件路径 | 依赖 |
|--------|------|----------|------|
| T001 | 创建 ScrollContainer 组件 | src/components/ui/ScrollContainer.tsx | 无 |
| T002 | 编写 ScrollContainer 测试 | tests/component/ScrollContainer.test.tsx | T001 |
| T003 | 创建 useScrollReset Hook | src/hooks/useScrollReset.ts | 无 |
| T004 | 编写 useScrollReset 测试 | tests/hooks/useScrollReset.test.ts | T003 |
| T005 | 修改 Slide 组件集成滚动 | src/components/Slide/Slide.tsx | T001 |
| T006 | 更新幻灯片容器过渡动画 | src/components/Slide/SlideContainer.tsx | T003 |
| T007 | 运行所有测试确保通过 | 全部 | T002, T004, T005, T006 |
| T008 | 构建验证 | npm run build | T007 |

### 执行顺序

1. 阶段 1：滚动容器组件开发 (T001, T002)
2. 阶段 2：滚动重置 Hook (T003, T004)
3. 阶段 3：集成到 Slide 组件 (T005, T006)
4. 阶段 4：验证 (T007, T008)

## Phase 2: 验证清单

- [ ] T001 ScrollContainer 组件创建完成
- [ ] T002 滚动容器测试通过
- [ ] T003 useScrollReset Hook 创建完成
- [ ] T004 滚动重置测试通过
- [ ] T005 Slide 组件修改完成
- [ ] T006 过渡动画更新完成
- [ ] T007 所有测试通过
- [ ] T008 构建成功
