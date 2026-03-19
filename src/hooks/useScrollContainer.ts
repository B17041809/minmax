import { useCallback, useRef } from 'react'

export function useScrollContainer() {
  const containerRef = useRef<HTMLDivElement>(null)

  const resetScroll = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0
    }
  }, [])

  return {
    containerRef,
    resetScroll,
  }
}
