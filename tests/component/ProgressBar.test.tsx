import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressBar } from '../../src/components/Progress/ProgressBar'

describe('ProgressBar', () => {
  it('renders without crashing', () => {
    render(<ProgressBar currentSlide={1} totalSlides={10} />)
    expect(screen.getByTestId('progress-bar')).toBeDefined()
  })

  it('displays correct progress percentage', () => {
    render(<ProgressBar currentSlide={5} totalSlides={10} />)
    const progressFill = screen.getByTestId('progress-fill')
    expect(progressFill.style.width).toBe('50%')
  })

  it('shows 10% at first slide', () => {
    render(<ProgressBar currentSlide={1} totalSlides={10} />)
    const progressFill = screen.getByTestId('progress-fill')
    expect(progressFill.style.width).toBe('10%')
  })

  it('shows 100% at last slide', () => {
    render(<ProgressBar currentSlide={10} totalSlides={10} />)
    const progressFill = screen.getByTestId('progress-fill')
    expect(progressFill.style.width).toBe('100%')
  })
})
