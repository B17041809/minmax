import { Loader2 } from 'lucide-react'
import type { LoadingSpinnerProps } from '../../types/slide'

const getPrefersReducedMotion = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false
  }
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const prefersReducedMotion = getPrefersReducedMotion()

export function LoadingSpinner({ message = '加载中...' }: LoadingSpinnerProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        color: 'var(--text-100)',
      }}
    >
      <Loader2
        size={48}
        style={{
          animation: prefersReducedMotion ? 'none' : 'spin 1s linear infinite',
          color: 'var(--primary-100)',
        }}
      />
      <span style={{ fontSize: '16px' }}>{message}</span>
      {!prefersReducedMotion && (
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      )}
    </div>
  )
}
