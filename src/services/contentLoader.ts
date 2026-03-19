import type { SlideContent } from '../types/slide'

// Vite import.meta.glob for markdown files
const markdownFiles = import.meta.glob('../../file/*.md', {
  query: '?raw',
  import: 'default',
  eager: false,
}) as Record<string, () => Promise<string>>

/**
 * Load slide content from a markdown file
 * Returns placeholder content if file is missing
 */
export async function loadSlideContent(path: string): Promise<SlideContent> {
  // Extract filename from path (e.g., "../../file/openai.md" -> "openai")
  const filename = path.split('/').pop()?.replace('.md', '') || ''
  const key = `../../file/${filename}.md`

  try {
    if (markdownFiles[key]) {
      const content = await markdownFiles[key]()
      return {
        title: filename.toUpperCase(),
        markdown: content,
        isPlaceholder: false,
      }
    } else {
      console.warn(`[contentLoader] File not found: ${path}, showing placeholder`)
      return {
        title: filename.toUpperCase() || '未知',
        markdown: '内容待补充',
        isPlaceholder: true,
      }
    }
  } catch (error) {
    console.warn(`[contentLoader] Error loading ${path}:`, error)
    return {
      title: filename.toUpperCase() || '未知',
      markdown: '内容待补充',
      isPlaceholder: true,
    }
  }
}

/**
 * Load all slides content
 */
export async function loadAllSlides(): Promise<SlideContent[]> {
  const slideFiles = [
    'openai',
    'anthropic',
    'google',
    'llm_compare',
    'claude',
    'sdd',
    'spec-kit',
    'openspec',
  ]

  const slides: SlideContent[] = []

  // First slide is always the intro
  slides.push({
    title: '三大国外LLM',
    markdown: '主讲人：陈晨 时间：2026-03-24',
    isPlaceholder: false,
  })

  // Load content for slides 2-9
  for (const file of slideFiles) {
    const content = await loadSlideContent(`../../file/${file}.md`)
    slides.push(content)
  }

  // Last slide is practical operation
  slides.push({
    title: '实际操作',
    markdown: '接下来是实际操作',
    isPlaceholder: false,
  })

  return slides
}
