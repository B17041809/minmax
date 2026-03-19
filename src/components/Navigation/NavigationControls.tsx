import type { NavigationControlsProps } from '../../types/slide'
import { ArrowButton } from './ArrowButton'
import { DotIndicator } from './DotIndicator'

export function NavigationControls({
  currentSlide,
  totalSlides,
  onNavigate,
  onPrevious,
  onNext,
}: NavigationControlsProps) {
  const canGoPrevious = currentSlide > 1
  const canGoNext = currentSlide < totalSlides

  return (
    <div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-50"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}
    >
      {/* Previous Button */}
      <ArrowButton
        direction="left"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      />

      {/* Dot Indicators */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {Array.from({ length: totalSlides }, (_, i) => (
          <DotIndicator
            key={i}
            index={i + 1}
            isActive={i + 1 === currentSlide}
            onClick={() => onNavigate(i + 1)}
          />
        ))}
      </div>

      {/* Next Button */}
      <ArrowButton
        direction="right"
        onClick={onNext}
        disabled={!canGoNext}
      />
    </div>
  )
}
