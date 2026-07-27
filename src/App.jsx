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
        <p>Haz clic en los planetas si deseas no olvidarnos. Cada órbita, cada constelación y estela, cada planeta y estrella muestran lo inmenso del cosmos tal como lo es mi amor infinito por ti.</p>
      </div>
    </div>
  )
}

export default App
