import type { LoadingState } from './types/slide'

function App() {
  const loadingState: LoadingState = { status: 'idle' }

  return (
    <div className="fullscreen-container">
      {/* TODO: Implement slide navigation */}
      {/* TODO: Add navigation controls */}
      {/* TODO: Add progress bar */}
      {/* TODO: Add page indicator */}
      <div className="grid-background" style={{ position: 'absolute', inset: 0 }} />
      <div style={{ color: 'var(--text-100)', padding: '20px' }}>
        <h1>交互式提示词演示网站</h1>
        <p>Phase 1 完成 - 项目初始化</p>
        <p>Loading State: {loadingState.status}</p>
      </div>
    </div>
  )
}

export default App
