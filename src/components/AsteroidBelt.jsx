import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function AsteroidBelt({ innerRadius = 7, outerRadius = 8 }) {
  const ref = useRef()

  const geometry = useMemo(() => {
    const count = 3000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const r = innerRadius + Math.random() * (outerRadius - innerRadius)

      positions[i * 3] = Math.cos(angle) * r + (Math.random() - 0.5) * 0.3
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.2
      positions[i * 3 + 2] = Math.sin(angle) * r + (Math.random() - 0.5) * 0.3
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [innerRadius, outerRadius])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04
    }
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#8B7355"
        size={0.04}
        transparent
        opacity={0.45}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}
