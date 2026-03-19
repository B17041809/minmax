import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageIndicator } from '../../src/components/Progress/PageIndicator'

describe('PageIndicator', () => {
  it('renders without crashing', () => {
    render(<PageIndicator currentSlide={1} totalSlides={10} />)
    expect(screen.getByTestId('page-indicator')).toBeDefined()
  })

  it('displays correct page format', () => {
    render(<PageIndicator currentSlide={1} totalSlides={10} />)
    expect(screen.getByText('01 / 10')).toBeDefined()
  })

  it('displays correct format for middle pages', () => {
    render(<PageIndicator currentSlide={5} totalSlides={10} />)
    expect(screen.getByText('05 / 10')).toBeDefined()
  })

  it('displays correct format for last page', () => {
    render(<PageIndicator currentSlide={10} totalSlides={10} />)
    expect(screen.getByText('10 / 10')).toBeDefined()
  })
})
