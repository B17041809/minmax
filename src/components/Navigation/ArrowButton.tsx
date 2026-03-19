import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ArrowButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  disabled?: boolean
}

export function ArrowButton({ direction, onClick, disabled = false }: ArrowButtonProps) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: 'none',
        background: disabled ? 'var(--bg-300)' : 'rgba(255, 255, 255, 0.8)',
        color: disabled ? 'var(--bg-300)' : 'var(--text-100)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      aria-label={direction === 'left' ? '上一页' : '下一页'}
    >
      <Icon size={24} />
    </button>
  )
}
