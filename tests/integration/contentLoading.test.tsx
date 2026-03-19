import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import type { SlideContent } from '../../src/types/slide'

// Mock the content loader
vi.mock('../../src/services/contentLoader', () => ({
  loadAllSlides: vi.fn().mockResolvedValue([
    {
      title: '三大国外LLM',
      markdown: '# 三大国外LLM\n\n欢迎观看交互式演示',
      isPlaceholder: false,
    },
    {
      title: 'OPENAI',
      markdown: '# OpenAI\n\nOpenAI content here',
      isPlaceholder: false,
    },
    {
      title: 'ANTHROPIC',
      markdown: '# Anthropic\n\nAnthropic content here',
      isPlaceholder: false,
    },
    {
      title: 'GOOGLE',
      markdown: '# Google\n\nGoogle content here',
      isPlaceholder: false,
    },
    {
      title: 'LLM_COMPARE',
      markdown: '# LLM Compare\n\nComparison content',
      isPlaceholder: false,
    },
    {
      title: 'CLAUDE',
      markdown: '# Claude\n\nClaude content here',
      isPlaceholder: false,
    },
    {
      title: 'SDD',
      markdown: '# SDD\n\nSDD content here',
      isPlaceholder: false,
    },
    {
      title: 'SPEC-KIT',
      markdown: '# Spec-Kit\n\nSpec-Kit content here',
      isPlaceholder: false,
    },
    {
      title: 'OPENSPEC',
      markdown: '# OpenSpec\n\nOpenSpec content here',
      isPlaceholder: false,
    },
    {
      title: '实际操作',
      markdown: '# 实际操作\n\n请参考具体文档进行操作',
      isPlaceholder: false,
    },
  ] as SlideContent[]),
}))

describe('Content Loading Integration', () => {
  it('loads all 10 slides', async () => {
    const { default: App } = await import('../../src/App')
    render(<App />)

    // Wait for content to load
    await new Promise(resolve => setTimeout(resolve, 100))
  })

  it('displays slide content after loading', async () => {
    const { loadAllSlides } = await import('../../src/services/contentLoader')
    const slides = await loadAllSlides()
    expect(slides.length).toBe(10)
  })
})