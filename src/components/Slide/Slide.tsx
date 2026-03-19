import { motion } from 'framer-motion'
import type { SlideProps } from '../../types/slide'
import { containerVariants, itemVariants } from './slideVariants'
import { GlowBackground } from '../ui/GlowBackground'
import { GlassCard } from '../ui/GlassCard'

export function Slide({ title, subtitle, content }: SlideProps) {
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
      <div className="flex-1 flex flex-col items-center justify-center gap-8 pb-8 relative z-10">
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
          {content && (
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
      </div>
    </div>
  )
}

// Simple markdown-like formatting (for demo - in production use a proper parser)
function formatContent(content: string): string {
  return content
    .replace(/^# (.+)$/gm, '<h1 style="font-size: 2rem; font-weight: 600; margin-bottom: 1rem;">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem;">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">$1</h3>')
    .replace(/\n\n/g, '</p><p style="margin-bottom: 1rem;">')
    .replace(/^(.+)$/gm, '<p style="margin-bottom: 1rem;">$1</p>')
}
