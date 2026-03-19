import { motion } from 'framer-motion'
import { GlassCard } from './GlassCard'
import { itemVariants } from '../Slide/slideVariants'

interface ConclusionBannerProps {
  text: string
}

export function ConclusionBanner({ text }: ConclusionBannerProps) {
  return (
    <motion.div variants={itemVariants} className="w-full max-w-2xl">
      <GlassCard
        style={{
          background: 'linear-gradient(135deg, var(--primary-100), var(--primary-200))',
          border: 'none',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1.25rem',
            fontWeight: 600,
            color: 'white',
            margin: 0,
          }}
        >
          {text}
        </p>
      </GlassCard>
    </motion.div>
  )
}
