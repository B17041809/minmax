interface DotIndicatorProps {
  index: number
  isActive: boolean
  onClick: () => void
}

export function DotIndicator({ index, isActive, onClick }: DotIndicatorProps) {
  return (
    <button
      className="dot-indicator"
      onClick={onClick}
      style={{
        width: isActive ? '24px' : '10px',
        height: '10px',
        borderRadius: '5px',
        border: 'none',
        background: isActive ? 'var(--primary-100)' : 'var(--bg-300)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        padding: 0,
      }}
      aria-label={`跳转到第 ${index} 页`}
      aria-current={isActive ? 'true' : undefined}
    />
  )
}
