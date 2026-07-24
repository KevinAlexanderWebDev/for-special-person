import ThreeCanvas from './components/ThreeCanvas'
import TransitionOverlay from './components/TransitionOverlay'
import './App.css'

function App() {
  return (
    <div className='app'>
      <ThreeCanvas />
      <TransitionOverlay />
      <div className='ui-overlay'>
        <h1>Pecado Olvidar</h1>
        <p>Haz clic en cualquier elemento para que recuerdes</p>
      </div>
    </div>
  )
}

export default App
