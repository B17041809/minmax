import type { PageIndicatorProps } from '../../types/slide'

export function PageIndicator({ currentSlide, totalSlides }: PageIndicatorProps) {
  const currentFormatted = String(currentSlide).padStart(2, '0')
  const totalFormatted = String(totalSlides).padStart(2, '0')

  return (
    <div
      data-testid="page-indicator"
      style={{
        position: 'fixed',
        top: '16px',
        right: '24px',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--text-200)',
        zIndex: 200,
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {currentFormatted} / {totalFormatted}
    </div>
  )
}
