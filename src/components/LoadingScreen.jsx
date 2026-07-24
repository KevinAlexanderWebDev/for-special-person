import { useState, useEffect } from "react"

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const duration = 2000
    const interval = 30
    const step = 100 / (duration / interval)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        setTimeout(() => {
          setFading(true)
          setTimeout(onLoaded, 600)
        }, 300)
      }
      setProgress(current)
    }, interval)

    return () => clearInterval(timer)
  }, [onLoaded])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: fading ? 'transparent' : '#000005',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.6s ease-in-out, background 0.6s ease-in-out',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FFD700, #FF8C00, transparent)',
          animation: 'pulse-sun 1.5s ease-in-out infinite',
          marginBottom: 24,
          boxShadow: '0 0 60px rgba(255, 215, 0, 0.3)',
        }}
      />
      <div
        style={{
          width: 200,
          height: 3,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
            borderRadius: 2,
            transition: 'width 0.1s linear',
          }}
        />
      </div>
      <p
        style={{
          color: '#FFD700',
          fontFamily: 'Georgia, serif',
          fontSize: 14,
          marginTop: 16,
          opacity: 0.7,
          letterSpacing: 2,
        }}
      >
        CARGANDO UNIVERSO
      </p>

      <style>{`
        @keyframes pulse-sun {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
