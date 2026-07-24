import { useState, useCallback } from 'react'
import ThreeCanvas from './components/ThreeCanvas'
import LoadingScreen from './components/LoadingScreen'
import useBackgroundMusic from './hooks/useBackgroundMusic'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)
  const onLoaded = useCallback(() => setLoaded(true), [])
  useBackgroundMusic()

  return (
    <div className='app'>
      {!loaded && <LoadingScreen onLoaded={onLoaded} />}
      <ThreeCanvas />
      <div className='ui-overlay' style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <h1>Pecado Olvidar</h1>
        <p>Haz clic en los planetas para recordar los momentos que nos pegaron como gravedad</p>
      </div>
    </div>
  )
}

export default App
