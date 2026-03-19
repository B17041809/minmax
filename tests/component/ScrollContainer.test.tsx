import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollContainer } from '../../src/components/ui/ScrollContainer'

describe('ScrollContainer', () => {
  it('renders children correctly', () => {
    render(
      <ScrollContainer>
        <div data-testid="child">Test Content</div>
      </ScrollContainer>
    )
    expect(screen.getByTestId('child')).toBeDefined()
  })

  it('applies scroll container styles', () => {
    const { container } = render(
      <ScrollContainer>
        <div>Content</div>
      </ScrollContainer>
    )
    const scrollContainer = container.firstChild as HTMLElement
    expect(scrollContainer.style.overflowY).toBe('auto')
    expect(scrollContainer.style.maxHeight).toBe('100%')
  })

  it('respects custom className', () => {
    const { container } = render(
      <ScrollContainer className="custom-class">
        <div>Content</div>
      </ScrollContainer>
    )
    const scrollContainer = container.firstChild as HTMLElement
    expect(scrollContainer.className).toContain('custom-class')
  })
})