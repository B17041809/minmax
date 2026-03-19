import { AnimatePresence, motion } from 'framer-motion'
import type { SlideContainerProps } from '../../types/slide'
import { slideVariants } from './slideVariants'

export function SlideContainer({ currentSlide, direction, children }: SlideContainerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
      }}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
