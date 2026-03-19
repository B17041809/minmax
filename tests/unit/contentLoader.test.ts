import { describe, it, expect } from 'vitest'
import { loadSlideContent } from '../../src/services/contentLoader'

describe('contentLoader', () => {
  describe('loadSlideContent', () => {
    it('should return placeholder for missing file', async () => {
      const content = await loadSlideContent('../file/missing.md')
      expect(content.title).toBe('MISSING')
      expect(content.markdown).toBe('内容待补充')
      expect(content.isPlaceholder).toBe(true)
    })
  })
})
