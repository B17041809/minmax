import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SlideContainer } from '../../src/components/Slide/SlideContainer'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  motion: {
    div: ({ children }: { children: React.ReactNode }) => children,
  },
}))

describe('SlideContainer', () => {
  it('should render children', () => {
    render(
      <SlideContainer currentSlide={1} direction="right">
        <div data-testid="test-child">Test Content</div>
      </SlideContainer>
    )
    expect(screen.getByTestId('test-child')).toBeDefined()
  })

  it('should receive currentSlide prop', () => {
    render(
      <SlideContainer currentSlide={5} direction="right">
        <div>Slide Content</div>
      </SlideContainer>
    )
    expect(screen.getByText('Slide Content')).toBeDefined()
  })
})
