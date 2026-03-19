import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useScrollContainer } from '../../src/hooks/useScrollContainer'

describe('useScrollContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns a containerRef and resetScroll function', () => {
    const { result } = renderHook(() => useScrollContainer())
    expect(result.current).toHaveProperty('containerRef')
    expect(result.current).toHaveProperty('resetScroll')
    expect(typeof result.current.resetScroll).toBe('function')
  })

  it('resetScroll sets scrollTop to 0', () => {
    const { result } = renderHook(() => useScrollContainer())

    const mockElement = {
      scrollTop: 100,
    } as HTMLDivElement

    act(() => {
      // Access the ref's current value through the hook
      result.current.containerRef.current = mockElement
      result.current.resetScroll()
    })

    expect(mockElement.scrollTop).toBe(0)
  })

  it('resetScroll does nothing if ref is null', () => {
    const { result } = renderHook(() => useScrollContainer())

    act(() => {
      result.current.containerRef.current = null
      // Should not throw
      result.current.resetScroll()
    })

    // No assertion needed - should not throw
    expect(true).toBe(true)
  })
})
