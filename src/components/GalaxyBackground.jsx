import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function GalaxyBackground() {
  const ref = useRef()

  const geometry = useMemo(() => {
    const count = 10000
    const arms = 4
    const radius = 40
    const spread = 12
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const arm = i % arms
      const t = Math.random()
      const r = t * radius
      const angle = t * Math.PI * 6 + (arm / arms) * Math.PI * 2
      const scatter = (1 - t * 0.5) * spread * (Math.random() - 0.5)

      positions[i * 3] = Math.cos(angle) * r + scatter
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3 * (1 - t * 0.8)
      positions[i * 3 + 2] = Math.sin(angle) * r + scatter

      const brightness = 0.2 + Math.random() * 0.8 * (1 - t * 0.3)
      const hueShift = Math.random() * 0.3
      colors[i * 3] = brightness * (0.5 + hueShift)
      colors[i * 3 + 1] = brightness * (0.3 + hueShift * 0.5)
      colors[i * 3 + 2] = brightness

      sizes[i] = 0.05 + Math.random() * 0.15 * (1 - t * 0.5)
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
