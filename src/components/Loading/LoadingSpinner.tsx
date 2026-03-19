import { Loader2 } from 'lucide-react'
import type { LoadingSpinnerProps } from '../../types/slide'

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
          animation: 'spin 1s linear infinite',
          color: 'var(--primary-100)',
        }}
      />
      <span style={{ fontSize: '16px' }}>{message}</span>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  )
}
