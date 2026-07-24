import { useState } from "react";
import { useCursor, Html } from "@react-three/drei";

export default function InteractiveElement({ memory }) {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)
    useCursor(hovered)

    return (
    <group position={memory.position}>
      <mesh
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[hovered ? 0.4 : 0.3, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? '#FFFFFF' : memory.color}
          emissive={memory.color}
          emissiveIntensity={hovered ? 0.8 : 0.3}
        />
      </mesh>

      {clicked && (
        <Html position={[0, 1.2, 0]} center>
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.85)',
              color: '#fff',
              padding: '16px 24px',
              borderRadius: 12,
              maxWidth: 280,
              textAlign: 'center',
              fontFamily: 'Georgia, serif',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <h3 style={{ color: memory.color, margin: '0 0 4px', fontSize: 18 }}>
              {memory.title}
            </h3>
            <p style={{ margin: '0 0 8px', fontSize: 13, opacity: 0.7 }}>
              {memory.date}
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
              {memory.message}
            </p>
          </div>
        </Html>
      )}

      {/* Son particulas brillantes */}
      <pointLight
        color={memory.color}
        intensity={hovered ? 0.5 : 0.15}
        distance={2}
      />
    </group>
  )
}