import { useState, useEffect } from 'react'
import type { LoadingState, SlideContent } from './types/slide'
import { loadAllSlides } from './services/contentLoader'
import { LoadingSpinner } from './components/Loading/LoadingSpinner'
import { SlideContainer } from './components/Slide/SlideContainer'
import { Slide } from './components/Slide/Slide'
import { useSlideNavigation } from './hooks/useSlideNavigation'

function App() {
  const [loadingState, setLoadingState] = useState<LoadingState>({ status: 'idle' })
  const [slides, setSlides] = useState<SlideContent[]>([])
  const { currentSlide, direction } = useSlideNavigation()

  useEffect(() => {
    setLoadingState({ status: 'loading' })

    loadAllSlides()
      .then((loadedSlides) => {
        setSlides(loadedSlides)
        setLoadingState({ status: 'loaded', slides: loadedSlides })
      })
      .catch((error) => {
        setLoadingState({ status: 'error', message: String(error) })
      })
  }, [])

  return (
    <div className="fullscreen-container">
      <div className="grid-background" style={{ position: 'absolute', inset: 0 }} />

      {loadingState.status === 'loading' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-100)',
            zIndex: 100,
          }}
        >
          <LoadingSpinner message="正在加载演示内容..." />
        </div>
      )}

      {loadingState.status === 'idle' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-100)',
          }}
        >
          <p>准备中...</p>
        </div>
      )}

      {loadingState.status === 'error' && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-100)',
          }}
        >
          <p>加载错误: {loadingState.message}</p>
        </div>
      )}

      {loadingState.status === 'loaded' && slides.length > 0 && (
        <SlideContainer currentSlide={currentSlide} direction={direction}>
          <Slide
            id={currentSlide}
            title={slides[currentSlide - 1]?.title || '未知'}
            content={slides[currentSlide - 1]?.markdown || ''}
          />
        </SlideContainer>
      )}

      {/* TODO: Add navigation controls (Phase 4) */}
      {/* TODO: Add progress bar (Phase 6) */}
      {/* TODO: Add page indicator (Phase 6) */}
    </div>
  )
}

export default App
