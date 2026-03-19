# Data Model: 交互式提示词演示网站

**Feature**: 001-llm-slides
**Date**: 2026-03-19

## Entities

### Slide

表示单个幻灯片页面。

```typescript
interface Slide {
  id: number;           // 幻灯片序号 (1-10)
  title: string;       // 标题
  subtitle?: string;    // 副标题（可选）
  content?: string;     // 内容（Markdown 格式）
  contentPath?: string;  // 内容文件路径（./file/*.md）
}
```

### NavigationDirection

表示导航方向。

```typescript
type NavigationDirection = 'left' | 'right';
```

### NavigationEvent

表示导航事件。

```typescript
interface NavigationEvent {
  direction: NavigationDirection;
  fromSlide: number;
  toSlide: number;
}
```

### TouchState

表示触控滑动状态。

```typescript
interface TouchState {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  isSwiping: boolean;
}
```

### SlideContent

表示幻灯片内容（加载后）。

```typescript
interface SlideContent {
  title: string;
  subtitle?: string;
  markdown: string;     // Markdown 格式内容
  isPlaceholder: boolean; // 是否为占位内容
}
```

### LoadingState

表示应用加载状态。

```typescript
type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'loaded'; slides: SlideContent[] }
  | { status: 'error'; message: string };
```

## Validation Rules

1. **Slide ID**: 必须在 1-10 范围内
2. **Navigation**: 首末页禁用对应方向导航
3. **Touch Swipe**: 水平滑动距离 >= 50px 才触发导航
4. **Content Loading**: 文件缺失时显示占位内容并记录警告

## State Transitions

### Navigation State

```
[Idle] --keyboard/touch/click--> [Transitioning]
[Transitioning] --animation complete--> [Idle]
```

### Loading State

```
[Idle] --component mount--> [Loading]
[Loading] --content loaded--> [Loaded]
[Loading] --error--> [Error]
```

## Constants

```typescript
const SLIDE_COUNT = 10;
const SWIPE_THRESHOLD = 50; // px
const ANIMATION_CONFIG = {
  stiffness: 300,
  damping: 30,
};
const STAGGER_DELAY = 0.15; // seconds
```
