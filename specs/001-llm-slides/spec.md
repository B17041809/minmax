# Feature Specification: 交互式提示词演示网站

**Feature Branch**: `001-llm-slides`
**Created**: 2026-03-19
**Status**: Draft
**Input**: 用户需求文档 (@提示词.md)

## Clarifications

### Session 2026-03-19

- Q: 内容文件缺失处理方式（./file/*.md 不存在或为空）→ A: 显示占位内容（如"内容待补充"）并在控制台记录警告
- Q: 初始加载状态显示什么 → A: 显示加载动画（spinner 或骨架屏），加载完成后切换到内容
- Q: 键盘快捷键与其他应用冲突处理 → A: 保持当前设计，在 README 中说明快捷键用途
- Q: 网络异常和离线状态处理 → A: 不做任何特殊处理，显示浏览器默认错误

## User Scenarios & Testing *(mandatory)*

### User Story 1 - 全屏幻灯片演示 (Priority: P1)

作为观众，我希望在一个全屏的交互式网页中按照顺序查看演示内容，以便获得类似 PPT 演示的沉浸式体验。

**Why this priority**: 这是核心功能，整个项目就是为了实现这个体验。

**Independent Test**: 可以通过键盘左右键或触控滑动完整浏览所有 10 页幻灯片，每页内容正确显示。

**Acceptance Scenarios**:

1. **Given** 用户打开网站，**When** 首屏加载完成，**Then** 显示第 1 页幻灯片内容
2. **Given** 用户在第 1 页，**When** 按下右箭头键，**Then** 切换到第 2 页，动画从右侧滑入
3. **Given** 用户在第 10 页，**When** 按下右箭头键，**Then** 停留在第 10 页（已禁用）
4. **Given** 用户在第 2 页，**When** 按下左箭头键，**Then** 切换到第 1 页，动画从左侧滑入
5. **Given** 用户在第 1 页，**When** 按下左箭头键，**Then** 停留在第 1 页（已禁用）

---

### User Story 2 - 多方式导航 (Priority: P1)

作为观众，我希望通过键盘、触控和点击导航控件三种方式切换幻灯片，以便在不同设备和使用场景下都能方便地浏览。

**Why this priority**: 导航是核心交互，必须支持所有主流交互方式。

**Independent Test**: 同一页面可以通过键盘、触控滑动、底部导航栏按钮三种方式切换。

**Acceptance Scenarios**:

1. **Given** 用户在移动设备上，**When** 手指向左滑动超过 50px，**Then** 切换到下一页
2. **Given** 用户在移动设备上，**When** 手指向右滑动超过 50px，**Then** 切换到上一页
3. **Given** 用户点击底部圆点指示器的第 5 个点，**Then** 直接跳转到第 5 页
4. **Given** 用户按下空格键，**Then** 切换到下一页（相当于右箭头）
5. **Given** 当前页面不是首页也不是末页，**Then** 左右箭头按钮都可用

---

### User Story 3 - 视觉体验 (Priority: P2)

作为观众，我希望看到精美的视觉设计，包括毛玻璃卡片、光晕背景和网格底纹，以获得现代感十足的演示体验。

**Why this priority**: 视觉效果影响用户第一印象和观看体验。

**Independent Test**: 每页都包含毛玻璃卡片和光晕背景装饰，视觉风格一致。

**Acceptance Scenarios**:

1. **Given** 用户查看任意页面，**When** 页面加载，**Then** 显示毛玻璃效果的内容卡片
2. **Given** 用户查看任意页面，**When** 页面加载，**Then** 显示半透明的光晕背景装饰
3. **Given** 用户查看任意页面，**Then** 背景显示 40px 间距的网格线

---

### User Story 4 - 进度指示 (Priority: P2)

作为观众，我希望看到当前的播放进度，以便知道自己处于整个演示的哪个位置。

**Why this priority**: 帮助观众了解演示的整体进度。

**Independent Test**: 进度条宽度随页码变化，圆点指示器高亮当前页。

**Acceptance Scenarios**:

1. **Given** 用户在第 3 页共 10 页，**When** 查看进度条，**Then** 进度条宽度为 30%
2. **Given** 用户在第 5 页，**Then** 底部圆点指示器中第 5 个高亮显示（拉长的胶囊形状）
3. **Given** 用户在第 3 页，**Then** 右上角显示 "03 / 10"

---

### User Story 5 - 页面内容展示 (Priority: P1)

作为观众，我希望每页展示关于 LLM 提供商或 SDD 方法论的详细内容，以便学习和了解这些知识。

**Why this priority**: 内容是演示的核心目的。

**Independent Test**: 10 页内容分别展示：介绍、三大 LLM 提供商、选型决策表、Claude 使用、SDD、spec-kit、openspec、实际操作。

**Acceptance Scenarios**:

1. **Given** 用户在第 1 页，**Then** 显示"三大国外LLM"标题和介绍内容
2. **Given** 用户在第 2 页，**Then** 显示 OpenAI 相关内容（来自 ./file/openai.md）
3. **Given** 用户在第 3 页，**Then** 显示 Anthropic 相关内容（来自 ./file/Anthropic.md）
4. **Given** 用户在第 4 页，**Then** 显示 Google 相关内容（来自 ./file/google.md）
5. **Given** 用户在第 5 页，**Then** 显示选型决策表内容（来自 ./file/LLM_compare.md）
6. **Given** 用户在第 6 页，**Then** 显示 Claude 使用内容（来自 ./file/claude.md）
7. **Given** 用户在第 7 页，**Then** 显示 SDD 规范驱动开发内容（来自 ./file/SDD.md）
8. **Given** 用户在第 8 页，**Then** 显示 spec-kit 内容（来自 ./file/spec-kit.md）
9. **Given** 用户在第 9 页，**Then** 显示 openspec 内容（来自 ./file/openspec.md）
10. **Given** 用户在第 10 页，**Then** 显示实际操作内容

---

### Edge Cases

- 当内容文件（./file/*.md）缺失或为空时：显示占位内容（"内容待补充"）并在控制台记录警告
- 当网站加载过程中：显示加载动画（spinner 或骨架屏），加载完成后切换到内容
- 当键盘快捷键与其他应用冲突：在 README 中说明快捷键用途，大多数演示网站均采用相同设计
- 当网络异常或离线状态：不做特殊处理，显示浏览器默认错误
- 当页面内容过长时的处理方式：使用 flex 布局垂直居中，避免大片空白
- 当用户快速连续切换页面时的处理方式：使用 AnimatePresence 队列管理动画
- 当浏览器不支持某些 CSS 特性时的降级处理：使用 CSS 变量和 fallback
- 当触控滑动距离小于 50px 时的处理：不触发翻页，保持在当前页

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: 系统 MUST 支持全屏左右切页的幻灯片展示效果
- **FR-002**: 系统 MUST 支持键盘导航（← → 和空格键）
- **FR-003**: 系统 MUST 支持触控滑动导航（touchstart/touchmove/touchend，阈值 50px）
- **FR-004**: 系统 MUST 支持底部导航栏（箭头按钮 + 圆点指示器）
- **FR-005**: 系统 MUST 支持顶部进度条（显示当前页/总页数百分比）
- **FR-006**: 系统 MUST 支持右上角页码显示（格式：01 / 10）
- **FR-007**: 系统 MUST 使用 Framer Motion 实现页面切换动画（slide 效果 + spring 弹簧）
- **FR-008**: 系统 MUST 使用毛玻璃卡片效果（glass-card）
- **FR-009**: 系统 MUST 使用光晕背景装饰（glow-bg）
- **FR-010**: 系统 MUST 使用网格底纹背景（40px 间距 linear-gradient）
- **FR-011**: 系统 MUST 在首末页禁用对应的翻页按钮
- **FR-012**: 系统 MUST 尊重用户的 prefers-reduced-motion 设置
- **FR-013**: 系统 MUST 使用 CSS 变量统一配色（--primary-*, --accent-*, --text-*, --bg-*）
- **FR-014**: 系统 MUST 使用 Tailwind CSS v4 实现所有样式
- **FR-015**: 系统 MUST 使用 Framer Motion 实现子元素依次入场动画（staggerChildren: 0.15）

### Content Requirements

- **FR-016**: 第 1 页显示"三大国外LLM"标题和介绍
- **FR-017**: 第 2-4 页分别显示 OpenAI、Anthropic、Google 内容（引用 ./file/*.md）
- **FR-018**: 第 5 页显示 LLM 选型决策表
- **FR-019**: 第 6-9 页分别显示 Claude 使用、SDD、spec-kit、openspec 内容
- **FR-020**: 第 10 页显示实际操作内容
- **FR-021**: 当内容文件缺失时，显示占位内容并在控制台记录警告
- **FR-022**: 网站加载时显示加载动画（spinner 或骨架屏），加载完成后切换到内容

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 用户可以在 3 秒内完成所有 10 页的连续切换浏览
- **SC-002**: 页面切换动画流畅度达到 60fps
- **SC-003**: 首次加载时间不超过 3 秒（基于 Vite 优化构建）
- **SC-004**: 所有 10 页内容正确渲染，无内容丢失或错位
- **SC-005**: 键盘、触控、点击三种导航方式均响应准确
- **SC-006**: 进度条准确反映当前位置（误差 < 1%）
- **SC-007**: 首末页翻页按钮正确禁用
