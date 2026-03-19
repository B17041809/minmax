import { useEffect } from 'react'

export function useKeyboardNavigation(
  onPrevious: () => void,
  onNext: () => void
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          onPrevious()
          break
        case 'ArrowRight':
        case ' ':
          event.preventDefault()
          onNext()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onPrevious, onNext])
}
