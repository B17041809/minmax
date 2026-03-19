import { useState, useEffect, useRef } from 'react'
import type { LoadingState, SlideContent } from './types/slide'
import { loadAllSlides } from './services/contentLoader'
import { LoadingSpinner } from './components/Loading/LoadingSpinner'
import { SlideContainer } from './components/Slide/SlideContainer'
import { Slide } from './components/Slide/Slide'
import { NavigationControls } from './components/Navigation/NavigationControls'
import { ProgressBar } from './components/Progress/ProgressBar'
import { PageIndicator } from './components/Progress/PageIndicator'
import { useSlideNavigation } from './hooks/useSlideNavigation'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'
import { useTouchNavigation } from './hooks/useTouchNavigation'

function App() {
  const [loadingState, setLoadingState] = useState<LoadingState>({ status: 'idle' })
  const [slides, setSlides] = useState<SlideContent[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const {
    currentSlide,
    direction,
    goToSlide,
    goNext,
    goPrevious,
  } = useSlideNavigation()

  // 键盘导航
  useKeyboardNavigation(goPrevious, goNext)

  // 触控导航
  useTouchNavigation(goNext, goPrevious)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <div ref={containerRef} className="fullscreen-container">
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
        <>
          <ProgressBar currentSlide={currentSlide} totalSlides={slides.length} />
          <PageIndicator currentSlide={currentSlide} totalSlides={slides.length} />
          <SlideContainer currentSlide={currentSlide} direction={direction}>
            <Slide
              title={slides[currentSlide - 1]?.title || '未知'}
              content={slides[currentSlide - 1]?.markdown || ''}
            />
          </SlideContainer>
          <NavigationControls
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onNavigate={goToSlide}
            onPrevious={goPrevious}
            onNext={goNext}
          />
        </>
      )}
    </div>
  )
}

export default App
