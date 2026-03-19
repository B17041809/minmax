export interface Slide {
  id: number
  title: string
  subtitle?: string
  content?: string
  contentPath?: string
}

export type NavigationDirection = 'left' | 'right'

export interface NavigationEvent {
  direction: NavigationDirection
  fromSlide: number
  toSlide: number
}

export interface TouchState {
  startX: number
  startY: number
  currentX: number
  currentY: number
  isSwiping: boolean
}

export interface SlideContent {
  title: string
  subtitle?: string
  markdown: string
  isPlaceholder: boolean
}

export type LoadingState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'loaded'; slides: SlideContent[] }
  | { status: 'error'; message: string }

export interface SlideContainerProps {
  currentSlide: number
  direction: NavigationDirection
  children: React.ReactNode
}

export interface SlideProps {
  id: number
  title: string
  subtitle?: string
  content?: string
}

export interface NavigationControlsProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (slide: number) => void
  onPrevious: () => void
  onNext: () => void
}

export interface ProgressBarProps {
  currentSlide: number
  totalSlides: number
}

export interface PageIndicatorProps {
  currentSlide: number
  totalSlides: number
}

export interface GlassCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface GlowBackgroundProps {
  color?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export interface LoadingSpinnerProps {
  message?: string
}

export const SLIDE_COUNT = 10
export const SWIPE_THRESHOLD = 50
export const ANIMATION_CONFIG = {
  stiffness: 300,
  damping: 30,
}
export const STAGGER_DELAY = 0.15
