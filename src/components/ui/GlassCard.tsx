import type { GlassCardProps } from '../../types/slide'

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  )
}
