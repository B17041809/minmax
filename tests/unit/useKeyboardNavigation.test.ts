import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useKeyboardNavigation } from '../../src/hooks/useKeyboardNavigation'

// Mock window.addEventListener
const mockAddEventListener = vi.fn()
const mockRemoveEventListener = vi.fn()

vi.stubGlobal('addEventListener', mockAddEventListener)
vi.stubGlobal('removeEventListener', mockRemoveEventListener)

describe('useKeyboardNavigation', () => {
  const onPrevious = vi.fn()
  const onNext = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should add keydown event listener on mount', () => {
    renderHook(() => useKeyboardNavigation(onPrevious, onNext))
    expect(mockAddEventListener).toHaveBeenCalledWith('keydown', expect.any(Function))
  })

  it('should call onNext when ArrowRight is pressed', () => {
    renderHook(() => useKeyboardNavigation(onPrevious, onNext))

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    act(() => {
      mockAddEventListener.mock.calls[0][1](event)
    })

    expect(onNext).toHaveBeenCalled()
    expect(onPrevious).not.toHaveBeenCalled()
  })

  it('should call onPrevious when ArrowLeft is pressed', () => {
    renderHook(() => useKeyboardNavigation(onPrevious, onNext))

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    act(() => {
      mockAddEventListener.mock.calls[0][1](event)
    })

    expect(onPrevious).toHaveBeenCalled()
    expect(onNext).not.toHaveBeenCalled()
  })

  it('should call onNext when Space is pressed', () => {
    renderHook(() => useKeyboardNavigation(onPrevious, onNext))

    const event = new KeyboardEvent('keydown', { key: ' ' })
    act(() => {
      mockAddEventListener.mock.calls[0][1](event)
    })

    expect(onNext).toHaveBeenCalled()
  })
})
