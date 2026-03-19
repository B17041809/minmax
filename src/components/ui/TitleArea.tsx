import { motion } from 'framer-motion'
import { itemVariants } from '../Slide/slideVariants'

interface TitleAreaProps {
  title: string
  subtitle?: string
}

export function TitleArea({ title, subtitle }: TitleAreaProps) {
  return (
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
  )
}
