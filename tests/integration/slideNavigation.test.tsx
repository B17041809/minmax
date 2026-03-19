import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { useState } from 'react'
import { SlideContainer } from '../../src/components/Slide/SlideContainer'
import type { NavigationDirection } from '../../src/types/slide'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => children,
  },
}))

const TestWrapper = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [direction, setDirection] = useState<NavigationDirection>('right')

  return (
    <div>
      <SlideContainer currentSlide={currentSlide} direction={direction}>
        <div data-testid="slide-content">Slide {currentSlide}</div>
      </SlideContainer>
      <button onClick={() => { setDirection('right'); setCurrentSlide(2) }}>Next</button>
      <button onClick={() => { setDirection('left'); setCurrentSlide(1) }}>Prev</button>
    </div>
  )
}

describe('slideNavigation', () => {
  it('should render slide content', () => {
    render(<TestWrapper />)
    expect(screen.getByTestId('slide-content')).toBeDefined()
    expect(screen.getByText('Slide 1')).toBeDefined()
  })

  it('should navigate to next slide', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByText('Next'))
    expect(screen.getByText('Slide 2')).toBeDefined()
  })

  it('should navigate to previous slide', () => {
    render(<TestWrapper />)
    fireEvent.click(screen.getByText('Next'))
    fireEvent.click(screen.getByText('Prev'))
    expect(screen.getByText('Slide 1')).toBeDefined()
  })
})
