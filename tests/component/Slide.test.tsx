import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Slide } from '../../src/components/Slide/Slide'

describe('Slide', () => {
  it('renders title correctly', () => {
    render(<Slide title="测试标题" content="# 测试内容" />)
    expect(screen.getByText('测试标题')).toBeDefined()
  })

  it('renders content with markdown formatting', () => {
    render(<Slide title="测试" content="# 标题\n\n这是段落内容" />)
    expect(screen.getByText(/这是段落内容/)).toBeDefined()
  })

  it('renders without content', () => {
    render(<Slide title="仅标题" />)
    expect(screen.getByText('仅标题')).toBeDefined()
  })

  it('renders with subtitle', () => {
    render(<Slide title="主标题" subtitle="副标题" content="内容" />)
    expect(screen.getByText('主标题')).toBeDefined()
    expect(screen.getByText('副标题')).toBeDefined()
  })
})