import { useEffect, useRef, useCallback } from 'react'
import { SWIPE_THRESHOLD } from '../types/slide'

export function useTouchNavigation(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold: number = SWIPE_THRESHOLD
) {
  const touchStartX = useRef<number>(0)
  const touchStartY = useRef<number>(0)
  const containerRef = useRef<HTMLElement | null>(null)

  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
    touchStartY.current = event.touches[0].clientY
  }, [])

  const handleTouchMove = useCallback((event: TouchEvent) => {
    // Prevent scrolling when swiping horizontally
    const deltaX = event.touches[0].clientX - touchStartX.current
    const deltaY = event.touches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault()
    }
  }, [])

  const handleTouchEnd = useCallback((event: TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current

    if (Math.abs(deltaX) >= threshold) {
      if (deltaX < 0) {
        // Swiped left, go to next
        onSwipeLeft()
      } else {
        // Swiped right, go to previous
        onSwipeRight()
      }
    }
  }, [onSwipeLeft, onSwipeRight, threshold])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [handleTouchStart, handleTouchMove, handleTouchEnd])

  return containerRef
}
