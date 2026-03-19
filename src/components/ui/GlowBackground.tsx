import type { GlowBackgroundProps } from '../../types/slide'

const positionStyles = {
  'top-left': { top: '-20%', left: '-20%' },
  'top-right': { top: '-20%', right: '-20%' },
  'bottom-left': { bottom: '-20%', left: '-20%' },
  'bottom-right': { bottom: '-20%', right: '-20%' },
}

export function GlowBackground({
  color = 'var(--primary-200)',
  position = 'top-left',
}: GlowBackgroundProps) {
  return (
    <div
      className="glow-background"
      style={{
        position: 'absolute',
        width: '60vw',
        height: '60vw',
        maxWidth: '600px',
        maxHeight: '600px',
        borderRadius: '50%',
        background: color,
        filter: 'blur(100px)',
        opacity: 0.5,
        ...positionStyles[position],
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
