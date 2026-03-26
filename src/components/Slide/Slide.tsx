import { motion } from 'framer-motion'
import type { SlideProps } from '../../types/slide'
import { containerVariants, itemVariants } from './slideVariants'
import { GlowBackground } from '../ui/GlowBackground'
import { GlassCard } from '../ui/GlassCard'
import { ScrollContainer } from '../ui/ScrollContainer'
import { useScrollContainer } from '../../hooks/useScrollContainer'

export function Slide({ title, subtitle, content }: SlideProps) {
  const { resetScroll } = useScrollContainer()

  return (
    <div
      className="h-full flex flex-col"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {/* Glow backgrounds */}
      <GlowBackground position="top-left" color="var(--primary-200)" />
      <GlowBackground position="bottom-right" color="var(--accent-200)" />

      {/* Content */}
      <ScrollContainer onScrollReset={resetScroll} className="flex-1 flex flex-col items-center pt-8 pb-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-8 w-full max-w-4xl px-8"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: 'var(--text-100)',
                marginBottom: subtitle ? '0.5rem' : 0,
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--text-200)',
                }}
              >
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Content Card */}
          {content && content.trim() && (
            <motion.div variants={itemVariants} className="w-full">
              <GlassCard>
                <div
                  style={{
                    color: 'var(--text-100)',
                    lineHeight: 1.8,
                    fontSize: '1.125rem',
                  }}
                  dangerouslySetInnerHTML={{ __html: formatContent(content) }}
                />
              </GlassCard>
            </motion.div>
          )}
        </motion.div>
      </ScrollContainer>
    </div>
  )
}

// Simple markdown-like formatting (for demo - in production use a proper parser)
function formatContent(content: string): string {
  // First, extract and convert tables to HTML
  let result = content

  // Check if content is plain text (no markdown formatting)
  const isPlainText = !content.includes('|') && !content.includes('#') && !content.includes('**')

  // Match markdown tables
  const tableRegex = /\|(.+)\|[\r\n]+\|[-\s|]+\|[\r\n]+((?:\|.+\|[\r\n]*)+)/g
  result = result.replace(tableRegex, (_, headerRow, bodyRows) => {
    const headers = headerRow.split('|').map((h: string) => h.trim()).filter(Boolean)
    const rows = bodyRows.trim().split('\n').map((row: string) =>
      row.split('|').map((cell: string) => cell.trim()).filter(Boolean)
    )

    const headerHtml = headers.map((h: string) => `<th style="padding: 0.75rem; text-align: left; border-bottom: 2px solid var(--primary-200);">${h}</th>`).join('')
    const bodyHtml = rows.map((row: string[]) =>
      `<tr>${row.map((cell: string) => `<td style="padding: 0.75rem; border-bottom: 1px solid var(--bg-200);">${cell}</td>`).join('')}</tr>`
    ).join('')

    return `<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;"><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`
  })

  // Then process other markdown elements
  return result
    .replace(/&/g, '&amp;')
    .replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 700;">$1</strong>')
    .replace(/^# (.+)$/gm, '<h1 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem;">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem;">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">$1</h3>')
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0;" />')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--primary-300); text-decoration: underline;">$1</a>')
    .replace(/\n\n/g, '</p><p style="margin-bottom: 1rem;">')
    .replace(/^(.+)$/gm, isPlainText
      ? '<p style="margin-bottom: 0; text-align: center; font-weight: 600; font-size: 1.25rem;">$1</p>'
      : '<p style="margin-bottom: 1rem;">$1</p>'
    )
}
