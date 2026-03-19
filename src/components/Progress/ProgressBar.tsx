import type { ProgressBarProps } from '../../types/slide'

export function ProgressBar({ currentSlide, totalSlides }: ProgressBarProps) {
  const percentage = (currentSlide / totalSlides) * 100

  return (
    <div
      data-testid="progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        background: 'var(--bg-300)',
        zIndex: 200,
      }}
    >
      <div
        data-testid="progress-fill"
        style={{
          height: '100%',
          width: `${percentage}%`,
          background: 'var(--primary-100)',
          transition: 'width 0.3s ease',
        }}
      />
    </div>
  )
}
