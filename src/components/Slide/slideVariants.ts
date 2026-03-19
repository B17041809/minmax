import type { Variants } from 'framer-motion'

// Check if user prefers reduced motion
const getPrefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const prefersReducedMotion = getPrefersReducedMotion()

export const slideVariants: Variants = prefersReducedMotion
  ? {
      enter: { opacity: 0 },
      center: { opacity: 1 },
      exit: { opacity: 0 },
    }
  : {
      enter: (direction: 'left' | 'right') => ({
        x: direction === 'right' ? '100%' : '-100%',
        opacity: 0,
        scale: 0.95,
      }),
      center: {
        x: 0,
        opacity: 1,
        scale: 1,
      },
      exit: (direction: 'left' | 'right') => ({
        x: direction === 'left' ? '100%' : '-100%',
        opacity: 0,
        scale: 0.95,
      }),
    }

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.15,
    },
  },
}

export const itemVariants = prefersReducedMotion
  ? {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    }
  : {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }
