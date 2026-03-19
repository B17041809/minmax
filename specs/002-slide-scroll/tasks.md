# Tasks: 幻灯片垂直滚动功能

**Input**: Design documents from `/specs/002-slide-scroll/`
**Prerequisites**: plan.md, spec.md

## Phase 1: 用户故事 1 - 长内容滚动查看 (Priority: P1) 🎯 MVP

**目标**: 实现幻灯片内容区域的垂直滚动功能

**独立测试**: 当幻灯片内容超过一屏时，用户可以通过拖动或滚动手势查看完整内容

### 用户故事 1 的测试 ⚠️

- [x] T001 [P] [US1] 在 tests/component/ScrollContainer.test.tsx 中编写 ScrollContainer 组件测试
- [x] T002 [P] [US1] 在 tests/hooks/useScrollReset.test.ts 中编写 useScrollReset Hook 测试

### 用户故事 1 的实现

- [x] T003 [P] [US1] 在 src/components/ui/ScrollContainer.tsx 中创建可滚动容器组件
- [x] T004 [P] [US1] 在 src/hooks/useScrollReset.ts 中创建滚动重置 Hook
- [x] T005 [US1] 在 src/components/Slide/Slide.tsx 中集成 ScrollContainer 组件
- [x] T006 [US1] 在 src/components/Slide/SlideContainer.tsx 中添加切换幻灯片时重置滚动位置的逻辑

**检查点**: 用户可以通过鼠标滚轮和触摸滑动查看长内容

---

## Phase 2: 用户故事 2 - 滚动指示器 (Priority: P2)

**目标**: 为可滚动内容提供视觉滚动反馈

**独立测试**: 当内容可滚动时，显示与整体设计风格一致的滚动条

### 用户故事 2 的实现

- [x] T007 [P] [US2] 在 src/components/ui/ScrollContainer.tsx 中添加滚动条样式（与整体设计风格一致）

**检查点**: 内容可滚动时显示滚动条，不可滚动时不显示

---

## Phase 3: 完善与验证

**目的**: 确保功能完整且质量达标

- [x] T008 运行所有测试，确保 100% 通过率
- [x] T009 运行构建并验证生产包正常工作

---

## 依赖与执行顺序

### 阶段依赖

- **用户故事 1 (Phase 1)**: 无前置依赖，可直接开始
- **用户故事 2 (Phase 2)**: 依赖用户故事 1 的 ScrollContainer 组件
- **完善与验证 (Phase 3)**: 依赖所有用户故事完成

### 并行机会

- T001 和 T002 可以并行执行（不同文件）
- T003 和 T004 可以并行执行（不同文件）
- T003, T004 完成后，T005 可以开始
- T005, T006 完成后，T007 可以开始

---

## 实现策略

### MVP 优先 (用户故事 1)

1. 完成 Phase 1: 滚动功能核心组件
2. 完成 Phase 2: 滚动指示器样式
3. 完成 Phase 3: 测试验证
4. **验证**: 滚动功能正常工作

### 增量交付

1. 完成 ScrollContainer 组件 → 测试通过 → 用户可以滚动查看内容
2. 添加 useScrollReset → 切换幻灯片时滚动位置重置
3. 添加滚动条样式 → 视觉反馈完整

---

## 任务汇总

| 任务ID | 描述 | 阶段 | 并行 | 状态 |
|--------|------|------|------|------|
| T001 | ScrollContainer 组件测试 | US1 | ✓ | ✓ 完成 |
| T002 | useScrollReset Hook 测试 | US1 | ✓ | ✓ 完成 |
| T003 | ScrollContainer 组件 | US1 | ✓ | ✓ 完成 |
| T004 | useScrollReset Hook | US1 | ✓ | ✓ 完成 |
| T005 | 集成到 Slide 组件 | US1 | | ✓ 完成 |
| T006 | 更新 SlideContainer 动画 | US1 | | ✓ 完成 |
| T007 | 滚动条样式 | US2 | ✓ | ✓ 完成 |
| T008 | 运行所有测试 | Polish | | ✓ 完成 |
| T009 | 构建验证 | Polish | | ✓ 完成 |

**总任务数**: 9
**并行任务数**: 5
**串行任务数**: 4
