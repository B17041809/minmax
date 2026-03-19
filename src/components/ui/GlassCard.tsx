import type { GlassCardProps } from '../../types/slide'

export function GlassCard({ children, className = '', style }: GlassCardProps) {
  return (
    <div
      className={`glass-card ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '2px solid rgba(1, 155, 152, 0.4)',
        borderRadius: '20px',
        padding: '32px',
        boxShadow: '0 12px 48px rgba(1, 155, 152, 0.15), 0 4px 16px rgba(0, 0, 0, 0.08)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
