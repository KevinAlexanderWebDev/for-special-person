import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, useCursor } from "@react-three/drei"

export default function Sun() {
  const meshRef = useRef()
  const glowRef = useRef()
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  useCursor(hovered || clicked)

  useEffect(() => {
    if (!clicked) return
    const handleOutside = () => setClicked(false)
    const timer = setTimeout(() => {
      document.addEventListener('click', handleOutside)
      document.addEventListener('touchstart', handleOutside)
    }, 200)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('click', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
    }
  }, [clicked])

  useFrame((_, delta) => {
    const pulse = 1 + Math.sin(Date.now() * 0.001) * 0.04
    meshRef.current.scale.setScalar(pulse)
    glowRef.current.intensity = 3 + Math.sin(Date.now() * 0.002) * 0.5
  })

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1.1, 48, 48]} />
        <meshBasicMaterial color="#FFD700" />
      </mesh>

      <pointLight
        ref={glowRef}
        position={[0, 0, 0]}
        intensity={3}
        color="#FFD700"
        distance={25}
      />

      <pointLight position={[0, 0, 0]} intensity={1} color="#FFA500" distance={15} />

      {clicked && (
        <Html position={[0, 2.5, 0]} center>
          <div style={{ position: 'relative' }}>
            <div
              onClick={() => setClicked(false)}
              onTouchEnd={() => setClicked(false)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9998,
                cursor: 'default',
              }}
            />
            <div
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              style={{ position: 'relative', zIndex: 9999 }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg, #FFF8E7, #F5E6CA)',
                  color: '#3D2B1F',
                  padding: '24px 32px',
                  borderRadius: 4,
                  width: 460,
                  maxWidth: 560,
                  textAlign: 'center',
                  fontFamily: 'Georgia, serif',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  lineHeight: 1.6,
                }}
              >
                <h2 style={{ margin: '0 0 12px', fontSize: 22, letterSpacing: 2 }}>
                  Pecado Olvidar
                </h2>
                <p style={{ margin: '0 0 8px', fontSize: 14 }}>
                  Algunas personas llegan a nuestra vida para enseñarnos algo,
                  y aunque el camino se separe, lo vivido queda para siempre. Tu jamás serás algo de lo cual me arrepienta, no me enseñaste a vivir, me enseñaste a amar.
                </p>
                <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', opacity: 0.7 }}>
                  Gracias por 2023. Por el 2024, 2025 y, Por todo. NO ME OLVIDES NUNCA, ¿OK?.
                </p>
                <div style={{ marginTop: 16, fontSize: 28, opacity: 0.3 }}>✦</div>
              </div>
            </div>
          </div>
        </Html>
      )}
    </group>
  )
}
