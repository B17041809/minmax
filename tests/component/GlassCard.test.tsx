import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlassCard } from '../../src/components/ui/GlassCard'

describe('GlassCard', () => {
  it('should render children', () => {
    render(
      <GlassCard>
        <span>Test Content</span>
      </GlassCard>
    )
    expect(screen.getByText('Test Content')).toBeDefined()
  })

  it('should apply glassmorphism styles', () => {
    const { container } = render(
      <GlassCard>
        <span>Test</span>
      </GlassCard>
    )
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('glass-card')
    expect(div.style.background).toContain('rgba')
    expect(div.style.backdropFilter).toContain('blur')
  })

  it('should apply custom className', () => {
    const { container } = render(
      <GlassCard className="custom-class">
        <span>Test</span>
      </GlassCard>
    )
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('custom-class')
    expect(div.className).toContain('glass-card')
  })
})
