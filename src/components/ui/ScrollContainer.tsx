import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

interface ScrollContainerProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  onScrollReset?: () => void
}

export function ScrollContainer({ children, className = '', style, onScrollReset }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    onScrollReset?.()
  }, [onScrollReset])

  return (
    <div
      ref={containerRef}
      className={`scrollbar-thin ${className}`}
      style={{
        overflowY: 'auto',
        maxHeight: '100%',
        scrollbarWidth: 'thin',
        scrollbarColor: 'var(--primary-200) rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}