# Slide UI Contracts

**Feature**: 001-llm-slides
**Date**: 2026-03-19

## Component Contracts

### SlideContainer

幻灯片容器组件，负责页面切换动画。

**Props**:
```typescript
interface SlideContainerProps {
  currentSlide: number;
  direction: NavigationDirection;
  children: React.ReactNode;
}
```

**Behavior**:
- 使用 `AnimatePresence` 管理子组件的进入/退出动画
- `currentSlide` 变化时触发滑动动画
- `direction` 决定滑入/滑出方向

**Contract**:
- 动画时长: ~300ms (spring 动画)
- 动画曲线: `stiffness: 300, damping: 30`

### Slide

单个幻灯片页面组件。

**Props**:
```typescript
interface SlideProps {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
}
```

**Contract**:
- 绝对定位 `absolute inset-0`
- 使用 flexbox 垂直居中内容
- 子元素入场动画 stagger 延迟 0.15s

### NavigationControls

底部导航控件（箭头按钮 + 圆点指示器）。

**Props**:
```typescript
interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (slide: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}
```

**Contract**:
- 左箭头: 首页时 `disabled={true}`
- 右箭头: 末页时 `disabled={true}`
- 圆点指示器: 当前页高亮（拉长胶囊形状）

### ProgressBar

顶部进度条。

**Props**:
```typescript
interface ProgressBarProps {
  currentSlide: number;
  totalSlides: number;
}
```

**Contract**:
- 宽度: `(currentSlide / totalSlides) * 100%`
- 高度: 2-4px
- 位置: 固定在顶部

### PageIndicator

右上角页码显示。

**Props**:
```typescript
interface PageIndicatorProps {
  currentSlide: number;
  totalSlides: number;
}
```

**Contract**:
- 格式: `01 / 10`
- 使用等宽字体

### GlassCard

毛玻璃效果卡片。

**Props**:
```typescript
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}
```

**Contract**:
- `background: rgba(255,255,255,0.7)`
- `backdrop-filter: blur(12px)`
- 半透明边框

### GlowBackground

光晕背景装饰。

**Props**:
```typescript
interface GlowBackgroundProps {
  color?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

**Contract**:
- 大圆形色块 `filter: blur(100px)`
- 半透明

### LoadingSpinner

加载动画。

**Props**:
```typescript
interface LoadingSpinnerProps {
  message?: string;
}
```

**Contract**:
- 显示加载消息（可选）
- 使用 Lucide React 的 Loader2 图标

## Hook Contracts

### useSlideNavigation

管理幻灯片导航状态。

```typescript
function useSlideNavigation(totalSlides: number): {
  currentSlide: number;
  direction: NavigationDirection;
  goToSlide: (slide: number) => void;
  goNext: () => void;
  goPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
};
```

### useKeyboardNavigation

监听键盘事件。

```typescript
function useKeyboardNavigation(onPrevious: () => void, onNext: () => void): void;
```

**Keyboard Events**:
- `ArrowLeft`: 上一页
- `ArrowRight`: 下一页
- `Space`: 下一页

### useTouchNavigation

监听触控滑动事件。

```typescript
function useTouchNavigation(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold?: number
): React.RefObject<HTMLElement>;
```

**Touch Events**:
- `touchstart`: 记录起始位置
- `touchmove`: 检测滑动方向
- `touchend`: 触发导航（阈值 50px）

## Content Loading Contract

### contentLoader

加载幻灯片内容。

```typescript
async function loadSlideContent(path: string): Promise<SlideContent>;
```

**Contract**:
- 文件存在: 返回解析后的 Markdown 内容
- 文件不存在: 返回占位内容 `{ isPlaceholder: true }`，并记录控制台警告
