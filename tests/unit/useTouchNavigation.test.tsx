import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTouchNavigation } from '../../src/hooks/useTouchNavigation'

// Mock Touch class for jsdom environment
class MockTouch {
  identifier: number
  target: EventTarget
  clientX: number
  clientY: number

  constructor(initDict: { identifier: number; target: EventTarget; clientX: number; clientY: number }) {
    this.identifier = initDict.identifier
    this.target = initDict.target
    this.clientX = initDict.clientX
    this.clientY = initDict.clientY
  }
}

// Mock TouchEvent
class MockTouchEvent extends Event {
  touches: MockTouch[]
  changedTouches: MockTouch[]

  constructor(type: string, eventInitDict: { touches?: MockTouch[]; changedTouches?: MockTouch[] }) {
    super(type, { bubbles: true })
    this.touches = eventInitDict.touches || []
    this.changedTouches = eventInitDict.changedTouches || []
  }
}

describe('useTouchNavigation', () => {
  const onSwipeLeft = vi.fn()
  const onSwipeRight = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
    // Make Touch and TouchEvent available globally for the test
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(global as any).Touch = MockTouch
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(global as any).TouchEvent = MockTouchEvent
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should return a container ref', () => {
    const { result } = renderHook(() => useTouchNavigation(onSwipeLeft, onSwipeRight, 50))
    expect(result.current).toBeDefined()
    expect(result.current).toHaveProperty('current')
  })

  // Note: Full touch event testing requires integration testing with a real DOM environment
  // The actual touch swipe functionality is tested via integration tests in the browser
})