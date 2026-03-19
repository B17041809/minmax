import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { NavigationControls } from '../../src/components/Navigation/NavigationControls'

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  ChevronLeft: () => <span data-testid="chevron-left">ChevronLeft</span>,
  ChevronRight: () => <span data-testid="chevron-right">ChevronRight</span>,
}))

describe('NavigationControls', () => {
  const onNavigate = vi.fn()
  const onPrevious = vi.fn()
  const onNext = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render navigation controls', () => {
    render(
      <NavigationControls
        currentSlide={1}
        totalSlides={10}
        onNavigate={onNavigate}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    )
    expect(screen.getByTestId('chevron-left')).toBeDefined()
    expect(screen.getByTestId('chevron-right')).toBeDefined()
  })

  it('should call onPrevious when left arrow is clicked', () => {
    render(
      <NavigationControls
        currentSlide={2}
        totalSlides={10}
        onNavigate={onNavigate}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    )
    fireEvent.click(screen.getByTestId('chevron-left'))
    expect(onPrevious).toHaveBeenCalled()
  })

  it('should call onNext when right arrow is clicked', () => {
    render(
      <NavigationControls
        currentSlide={1}
        totalSlides={10}
        onNavigate={onNavigate}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    )
    fireEvent.click(screen.getByTestId('chevron-right'))
    expect(onNext).toHaveBeenCalled()
  })

  it('should render dot indicators', () => {
    render(
      <NavigationControls
        currentSlide={5}
        totalSlides={10}
        onNavigate={onNavigate}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    )
    // Should have 10 dot indicators
    const dots = document.querySelectorAll('.dot-indicator')
    expect(dots.length).toBe(10)
  })
})
