import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlowBackground } from '../../src/components/ui/GlowBackground'

describe('GlowBackground', () => {
  it('renders without crashing', () => {
    render(<GlowBackground />)
    expect(screen.getByTestId('glow-background')).toBeDefined()
  })

  it('applies correct position class for top-left', () => {
    render(<GlowBackground position="top-left" />)
    const glow = screen.getByTestId('glow-background')
    expect(glow.className).toContain('top-left')
  })

  it('applies correct position class for bottom-right', () => {
    render(<GlowBackground position="bottom-right" />)
    const glow = screen.getByTestId('glow-background')
    expect(glow.className).toContain('bottom-right')
  })

  it('renders with custom color', () => {
    render(<GlowBackground color="#ff0000" />)
    const glow = screen.getByTestId('glow-background')
    // Browser converts hex to rgb
    expect(glow.style.background).toContain('rgb(255, 0, 0)')
  })

  it('has correct default styling', () => {
    render(<GlowBackground />)
    const glow = screen.getByTestId('glow-background')
    expect(glow.style.position).toBe('absolute')
    expect(glow.style.borderRadius).toBe('50%')
    expect(glow.style.filter).toBe('blur(100px)')
  })
})
