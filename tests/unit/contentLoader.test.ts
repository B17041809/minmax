import { describe, it, expect, vi, beforeEach } from 'vitest'
import { loadSlideContent, loadAllSlides } from '../../src/services/contentLoader'

// Mock import.meta.glob
vi.mock('import.meta.glob', () => ({
  default: {
    '../file/openai.md': () => Promise.resolve('# OpenAI\n\nOpenAI content'),
    '../file/anthropic.md': () => Promise.resolve('# Anthropic\n\nAnthropic content'),
    '../file/google.md': () => Promise.resolve('# Google\n\nGoogle content'),
  },
}))

describe('contentLoader', () => {
  describe('loadSlideContent', () => {
    it('should load content from existing file', async () => {
      const content = await loadSlideContent('../file/openai.md')
      expect(content.title).toBe('OPENAI')
      expect(content.markdown).toContain('OpenAI')
      expect(content.isPlaceholder).toBe(false)
    })

    it('should return placeholder for missing file', async () => {
      const content = await loadSlideContent('../file/missing.md')
      expect(content.title).toBe('MISSING')
      expect(content.markdown).toBe('内容待补充')
      expect(content.isPlaceholder).toBe(true)
    })
  })

  describe('loadAllSlides', () => {
    it('should load all slides with correct count', async () => {
      const slides = await loadAllSlides()
      expect(slides.length).toBe(10) // 1 intro + 8 content + 1 practical
    })

    it('should have intro as first slide', async () => {
      const slides = await loadAllSlides()
      expect(slides[0].title).toBe('三大国外LLM')
      expect(slides[0].isPlaceholder).toBe(false)
    })

    it('should have practical slide as last', async () => {
      const slides = await loadAllSlides()
      expect(slides[slides.length - 1].title).toBe('实际操作')
    })
  })
})
