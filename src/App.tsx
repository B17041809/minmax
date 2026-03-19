import { useState, useEffect } from 'react'
import type { LoadingState, SlideContent } from './types/slide'
import { loadAllSlides } from './services/contentLoader'
import { LoadingSpinner } from './components/Loading/LoadingSpinner'

function App() {
  const [loadingState, setLoadingState] = useState<LoadingState>({ status: 'idle' })
  const [slides, setSlides] = useState<SlideContent[]>([])

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

      {loadingState.status === 'loaded' && (
        <div style={{ color: 'var(--text-100)', padding: '20px' }}>
          <h1>交互式提示词演示网站</h1>
          <p>Phase 2 完成 - 基础组件就绪</p>
          <p>已加载 {slides.length} 页幻灯片</p>
        </div>
      )}

      {/* TODO: Implement slide navigation (Phase 3) */}
      {/* TODO: Add navigation controls (Phase 4) */}
      {/* TODO: Add progress bar (Phase 6) */}
      {/* TODO: Add page indicator (Phase 6) */}
    </div>
  )
}

export default App
