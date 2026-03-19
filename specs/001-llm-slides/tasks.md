# 任务清单: 交互式提示词演示网站

**输入**: 设计文档来自 `/specs/001-llm-slides/`
**前置条件**: plan.md (必需), spec.md (必需，用于用户故事), research.md, data-model.md, contracts/
**测试**: 测试任务基于宪法测试优先原则，每个阶段必须包含测试

**组织方式**: 任务按用户故事分组，以实现每个故事的独立实现和测试

## 格式: `[ID] [P?] [Story] 描述`

- **[P]**: 可并行运行（不同文件，无依赖）
- **[Story]**: 此任务所属的用户故事（如 US1、US2、US3）
- 描述中需包含具体文件路径

---

## 阶段 1: 初始化 (共享基础设施)

**目的**: 项目初始化和基本结构

- [ ] T001 使用命令创建 Vite + React + TypeScript 项目: `npm create vite@latest . -- --template react-ts`
- [ ] T002 [P] 安装依赖: `npm install framer-motion lucide-react tailwindcss @tailwindcss/vite`
- [ ] T003 [P] 安装开发依赖: `npm install -D vitest @testing-library/react @testing-library/user-event jsdom`
- [ ] T004 在 vite.config.ts 中配置 Tailwind CSS v4，使用 @tailwindcss/vite 插件
- [ ] T005 [P] 在 src/styles/globals.css 中创建全局 CSS 变量 (--primary-*、--accent-*、--text-*、--bg-*)
- [ ] T006 在 src/styles/globals.css 中使用 linear-gradient 创建网格背景图案
- [ ] T007 在 vite.config.ts 和 tsconfig.json 中配置 vitest
- [ ] T008 [P] 创建目录结构: src/components/、src/hooks/、src/pages/、src/services/、src/types/、src/styles/、tests/
- [ ] T009 创建 src/main.tsx 作为 React DOM 入口点
- [ ] T010 创建 src/App.tsx 作为主应用组件

---

## 阶段 2: 基础 (阻塞前置条件)

**目的**: 在任何用户故事实现之前必须完成的核心基础设施

**⚠️ 关键**: 在此阶段完成之前，不能开始任何用户故事工作

- [ ] T011 [P] 在 src/types/slide.ts 中创建 TypeScript 类型 (Slide、NavigationDirection、TouchState、SlideContent、LoadingState、SlideContainerProps 等)
- [ ] T012 [P] 在 src/types/slide.ts 中创建常量 (SLIDE_COUNT=10、SWIPE_THRESHOLD=50、ANIMATION_CONFIG、STAGGER_DELAY=0.15)
- [ ] T013 在 src/services/contentLoader.ts 中创建内容加载服务，使用 Vite import.meta.glob 加载 markdown 文件
- [ ] T014 [P] 在 src/components/ui/GlassCard.tsx 中创建毛玻璃卡片组件，使用 backdrop-filter blur
- [ ] T015 [P] 在 src/components/ui/GlowBackground.tsx 中创建光晕背景组件，使用 blur filter
- [ ] T016 在 src/components/Loading/LoadingSpinner.tsx 中创建加载动画组件，使用 Lucide Loader2 图标
- [ ] T017 在 App.tsx 中使用 LoadingState 类型创建加载状态管理
- [ ] T018 在 tests/unit/contentLoader.test.ts 中编写 contentLoader 单元测试
- [ ] T019 在 tests/component/GlassCard.test.tsx 中编写 GlassCard 组件测试

**检查点**: 基础准备就绪 - 用户故事可以并行开始实现

---

## 阶段 3: 用户故事 1 - 全屏幻灯片演示 (优先级: P1) 🎯 MVP

**目标**: 实现全屏左右切页的幻灯片展示效果

**独立测试**: 可以通过键盘左右键完整浏览所有 10 页幻灯片，每页内容正确显示

### 用户故事 1 的测试 ⚠️

> **注意**: 先编写测试，确保测试失败后再实现功能**

- [ ] T020 [P] 在 tests/integration/slideNavigation.test.tsx 中编写幻灯片导航集成测试
- [ ] T021 [P] 在 tests/component/SlideContainer.test.tsx 中编写 SlideContainer 组件测试

### 用户故事 1 的实现

- [ ] T022 [P] 在 src/hooks/useSlideNavigation.ts 中创建幻灯片导航 Hook
- [ ] T023 [P] 在 src/components/Slide/SlideContainer.tsx 中创建幻灯片容器组件，使用 AnimatePresence
- [ ] T024 [P] 在 src/components/Slide/Slide.tsx 中创建幻灯片组件，使用绝对定位
- [ ] T025 在 src/components/Slide/slideVariants.ts 中创建幻灯片动画变体
- [ ] T026 实现幻灯片方向管理（左右进入/退出动画）
- [ ] T027 [P] 在 src/components/ui/TitleArea.tsx 中创建标题区域组件
- [ ] T028 [P] 在 src/components/ui/ConclusionBanner.tsx 中创建结论横幅组件
- [ ] T029 在 App.tsx 中集成 SlideContainer 和 useSlideNavigation
- [ ] T030 测试所有 10 页幻灯片的切换动画

**检查点**: 此时，用户故事 1 应该可以完全独立运行和测试

---

## 阶段 4: 用户故事 2 - 多方式导航 (优先级: P1)

**目标**: 支持键盘、触控和点击三种导航方式切换幻灯片

**独立测试**: 同一页面可以通过键盘、触控滑动、底部导航栏按钮三种方式切换

### 用户故事 2 的测试 ⚠️

- [ ] T031 [P] 在 tests/unit/useKeyboardNavigation.test.ts 中编写 useKeyboardNavigation 单元测试
- [ ] T032 [P] 在 tests/unit/useTouchNavigation.test.ts 中编写 useTouchNavigation 单元测试
- [ ] T033 [P] 在 tests/component/NavigationControls.test.tsx 中编写 NavigationControls 组件测试

### 用户故事 2 的实现

- [ ] T034 [P] 在 src/hooks/useKeyboardNavigation.ts 中创建键盘导航 Hook（ArrowLeft、ArrowRight、Space）
- [ ] T035 [P] 在 src/hooks/useTouchNavigation.ts 中创建触控导航 Hook（touchstart/touchmove/touchend，50px 阈值）
- [ ] T036 [P] 在 src/components/Navigation/NavigationControls.tsx 中创建导航控制组件
- [ ] T037 [P] 在 src/components/Navigation/ArrowButton.tsx 中创建箭头按钮组件，使用 Lucide ChevronLeft/ChevronRight
- [ ] T038 [P] 在 src/components/Navigation/DotIndicator.tsx 中创建圆点指示器组件，支持高亮时拉长形状
- [ ] T039 在 NavigationControls 中实现首页/末页箭头禁用逻辑
- [ ] T040 在 App.tsx 中集成键盘和触控导航 Hook 与 useSlideNavigation
- [ ] T041 测试三种导航方式均正常工作

**检查点**: 此时，用户故事 1 和 2 均应独立正常工作

---

## 阶段 5: 用户故事 3 - 视觉体验 (优先级: P2)

**目标**: 实现毛玻璃卡片、光晕背景和网格底纹等视觉效果

**独立测试**: 每页都包含毛玻璃卡片和光晕背景装饰，视觉风格一致

### 用户故事 3 的测试 ⚠️

- [ ] T042 [P] 在 tests/component/GlowBackground.test.tsx 中编写 GlowBackground 组件测试

### 用户故事 3 的实现

- [ ] T043 [P] 在 Slide 组件中将 GlassCard 应用到所有内容卡片
- [ ] T044 [P] 在 Slide 组件中添加 GlowBackground 装饰（绝对定位）
- [ ] T045 验证网格背景在所有页面上正确显示
- [ ] T046 在 Slide 组件中为幻灯片内容添加 staggerChildren 动画（0.15s 延迟）
- [ ] T047 测试视觉效果在所有幻灯片上正确渲染

**检查点**: 所有幻灯片的视觉效果完成

---

## 阶段 6: 用户故事 4 - 进度指示 (优先级: P2)

**目标**: 显示顶部进度条和右上角页码

**独立测试**: 进度条宽度随页码变化，圆点指示器高亮当前页

### 用户故事 4 的测试 ⚠️

- [ ] T048 [P] 在 tests/component/ProgressBar.test.tsx 中编写 ProgressBar 组件测试
- [ ] T049 [P] 在 tests/component/PageIndicator.test.tsx 中编写 PageIndicator 组件测试

### 用户故事 4 的实现

- [ ] T050 [P] 在 src/components/Progress/ProgressBar.tsx 中创建进度条组件（宽度 = currentSlide/totalSlides * 100%）
- [ ] T051 [P] 在 src/components/Progress/PageIndicator.tsx 中创建页码显示组件（格式: "01 / 10"）
- [ ] T052 在 App.tsx 中集成 ProgressBar 和 PageIndicator
- [ ] T053 测试进度条宽度计算和页码格式

**检查点**: 所有进度指示器正常工作

---

## 阶段 7: 用户故事 5 - 页面内容展示 (优先级: P1)

**目标**: 加载并展示 10 页内容

**独立测试**: 10 页内容分别展示：介绍、三大 LLM 提供商、选型决策表、Claude 使用、SDD、spec-kit、openspec、实际操作

### 用户故事 5 的测试 ⚠️

- [ ] T054 [P] 在 tests/integration/contentLoading.test.tsx 中编写内容加载集成测试
- [ ] T055 [P] 在 tests/component/Slide.test.tsx 中编写带内容的 Slide 组件测试

### 用户故事 5 的实现

- [ ] T056 [P] 创建 file/ 目录及占位 markdown 文件（openai.md、anthropic.md、google.md、llm_compare.md、claude.md、sdd.md、spec-kit.md、openspec.md）
- [ ] T057 [P] 在 contentLoader.ts 中使用 import.meta.glob 实现内容加载
- [ ] T058 [P] 在 Slide 组件中实现 markdown 渲染（使用 dangerouslySetInnerHTML 或 markdown 解析器）
- [ ] T059 实现文件缺失时的占位内容显示（FR-021）
- [ ] T060 在 App.tsx 中连接内容加载与幻灯片渲染
- [ ] T061 测试所有 10 页正确显示内容

**检查点**: 所有 10 页幻灯片正确显示内容

---

## 阶段 8: 完善与跨领域问题

**目的**: 影响多个用户故事的改进

- [ ] T062 [P] 在所有动画中添加 prefers-reduced-motion 支持（FR-012）
- [ ] T063 [P] 在初始内容加载期间添加加载动画（FR-022）
- [ ] T064 [P] 使用中文更新 README.md，包含使用说明
- [ ] T065 [P] 在 README 中添加键盘快捷键文档
- [ ] T066 运行所有测试，确保 100% 通过率
- [ ] T067 运行构建并验证生产包正常工作
- [ ] T068 运行 npm run preview 并在浏览器中验证
- [ ] T069 性能检查：验证 60fps 动画

---

## 依赖与执行顺序

### 阶段依赖

- **初始化 (阶段 1)**: 无依赖 - 可以立即开始
- **基础 (阶段 2)**: 依赖初始化完成 - 阻塞所有用户故事
- **用户故事 (阶段 3-7)**: 全部依赖基础阶段完成
  - 用户故事可以并行进行（如果有人力）
  - 或按优先级顺序执行（P1 → P2 → P3）
- **完善 (最后阶段)**: 依赖所有用户故事完成

### 用户故事依赖

- **用户故事 1 (P1)**: 可以在基础阶段（阶段 2）后开始 - 不依赖其他故事
- **用户故事 2 (P1)**: 可以在基础阶段（阶段 2）后开始 - 不依赖其他故事
- **用户故事 3 (P2)**: 可以在基础阶段（阶段 2）后开始 - 不依赖其他故事
- **用户故事 4 (P2)**: 可以在基础阶段（阶段 2）后开始 - 不依赖其他故事
- **用户故事 5 (P1)**: 可以在基础阶段（阶段 2）后开始 - 不依赖其他故事

### 每个用户故事内部

- 测试（如果有）必须先编写且失败后才能实现
- 类型和样式优先于组件
- Hook 优先于使用它们的组件
- 完成当前故事后再进入下一个优先级

### 并行机会

- 所有标记 [P] 的初始化任务可以并行运行
- 所有标记 [P] 的基础任务可以并行运行（在阶段 2 内）
- 基础阶段完成后，所有用户故事可以并行开始（如果团队能力允许）
- 用户故事中所有标记 [P] 的测试可以并行运行
- 故事内的组件可以并行创建

---

## 并行示例: 用户故事 1 + 用户故事 2 (P1 故事)

```bash
# 基础阶段完成后，两个 P1 故事可以并行运行：
# 任务: 创建 useSlideNavigation Hook (T022)
# 任务: 创建 useKeyboardNavigation Hook (T034)
# 任务: 创建 useTouchNavigation Hook (T035)

# 然后并行创建组件：
# 任务: 创建 SlideContainer (T023)
# 任务: 创建 NavigationControls (T036)

# 然后集成：
# 任务: 在 App.tsx 中集成幻灯片导航 (T029)
# 任务: 在 App.tsx 中集成键盘/触控导航 (T040)
```

---

## 实施策略

### MVP 优先（仅用户故事 1）

1. 完成阶段 1: 初始化
2. 完成阶段 2: 基础（关键 - 阻塞所有故事）
3. 完成阶段 3: 用户故事 1 (P1)
4. **停止并验证**: 独立测试用户故事 1 (T020, T021)
5. 如果准备就绪则部署/演示

### 增量交付

1. 完成初始化 + 基础 → 基础准备就绪
2. 添加用户故事 1 → 独立测试 → 部署/演示 (MVP!)
3. 添加用户故事 2 → 独立测试 → 部署/演示
4. 添加用户故事 3 → 独立测试 → 部署/演示
5. 添加用户故事 4 → 独立测试 → 部署/演示
6. 添加用户故事 5 → 独立测试 → 部署/演示
7. 完善 → 最终发布

### 团队并行策略

多个开发人员时：

1. 团队共同完成初始化 + 基础
2. 基础完成后：
   - 开发人员 A: 用户故事 1（幻灯片显示）
   - 开发人员 B: 用户故事 2（导航）
   - 开发人员 C: 用户故事 3（视觉效果）
3. 故事独立完成和集成

---

## 注意事项

- [P] 任务 = 不同文件，无依赖
- [Story] 标签将任务映射到特定用户故事以便追踪
- 每个用户故事应该可以独立完成和测试
- 在实现前验证测试失败
- 每项任务或逻辑组完成后提交
- 在任何检查点停止以独立验证故事
- 避免：模糊任务、同一文件冲突、破坏独立性的跨故事依赖
- 所有测试必须在进入下一阶段前通过（宪法 I. 测试优先）
