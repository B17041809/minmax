import { useState, useCallback } from 'react'
import type { NavigationDirection } from '../types/slide'
import { SLIDE_COUNT } from '../types/slide'

export function useSlideNavigation(totalSlides: number = SLIDE_COUNT) {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [direction, setDirection] = useState<NavigationDirection>('right')

  const goToSlide = useCallback((slide: number) => {
    if (slide >= 1 && slide <= totalSlides) {
      setDirection(slide > currentSlide ? 'right' : 'left')
      setCurrentSlide(slide)
    }
  }, [currentSlide, totalSlides])

  const goNext = useCallback(() => {
    if (currentSlide < totalSlides) {
      setDirection('right')
      setCurrentSlide(prev => prev + 1)
    }
  }, [currentSlide, totalSlides])

  const goPrevious = useCallback(() => {
    if (currentSlide > 1) {
      setDirection('left')
      setCurrentSlide(prev => prev - 1)
    }
  }, [currentSlide])

  const canGoNext = currentSlide < totalSlides
  const canGoPrevious = currentSlide > 1

  return {
    currentSlide,
    direction,
    goToSlide,
    goNext,
    goPrevious,
    canGoNext,
    canGoPrevious,
  }
}
