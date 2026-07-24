import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

function createNebulaTexture(color1, color2) {
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext("2d")

  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
  gradient.addColorStop(0, color1)
  gradient.addColorStop(0.4, color2)
  gradient.addColorStop(0.7, "rgba(20, 0, 40, 0.3)")
  gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 256)

  for (let i = 0; i < 800; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 256
    const r = Math.random() * 8 + 1
    const alpha = Math.random() * 0.15
    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
    ctx.fill()
  }

  return new THREE.CanvasTexture(canvas)
}

function NebulaSprite({ color1, color2, position, scale: s }) {
  const ref = useRef()

  const texture = useMemo(() => createNebulaTexture(color1, color2), [color1, color2])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.material.rotation += delta * 0.005
    }
  })

  return (
    <sprite ref={ref} position={position} scale={[s, s, 1]}>
      <spriteMaterial
        map={texture}
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.25}
        depthWrite={false}
      />
    </sprite>
  )
}

export default function NebulaClouds() {
  return (
    <group>
      <NebulaSprite color1="#4A0080" color2="#1A0033" position={[-35, 8, -20]} scale={18} />
      <NebulaSprite color1="#003366" color2="#001133" position={[25, -5, -30]} scale={22} />
      <NebulaSprite color1="#8B004B" color2="#2D0018" position={[-20, 12, 25]} scale={15} />
      <NebulaSprite color1="#2E0854" color2="#0D001A" position={[30, -8, 20]} scale={20} />
    </group>
  )
}
