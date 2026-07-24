import { useRef, useState, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useCursor } from "@react-three/drei"
import MemoryPopup from "./MemoryPopup"
import { generateRockyTexture, generateGasGiantTexture, generateIceTexture } from "../utils/planetTextures"

export default function Planet({
  memory,
  orbitRadius,
  orbitSpeed,
  size = 0.5,
  color,
  hasRing = false,
  startAngle = 0,
  type = "rocky",
}) {
  const groupRef = useRef()
  const meshRef = useRef()
  const angleRef = useRef(startAngle)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  useCursor(hovered)

  const texture = useMemo(() => {
    switch (type) {
      case "gasGiant": return generateGasGiantTexture()
      case "ice": return generateIceTexture()
      default: return generateRockyTexture(color)
    }
  }, [type, color])

  const materialProps = useMemo(() => {
    switch (type) {
      case "gasGiant":
        return { roughness: 0.3, metalness: 0.05, emissiveIntensity: 0.2 }
      case "ice":
        return { roughness: 0.15, metalness: 0.4, emissiveIntensity: 0.25 }
      default:
        return { roughness: 0.7, metalness: 0.05, emissiveIntensity: 0.1 }
    }
  }, [type])

  useFrame((_, delta) => {
    if (!clicked) {
      angleRef.current += orbitSpeed * delta
      const x = Math.cos(angleRef.current) * orbitRadius
      const z = Math.sin(angleRef.current) * orbitRadius
      groupRef.current.position.set(x, 0, z)
    }
    meshRef.current.rotation.y += delta * 0.5
  })

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

  const currentSize = hovered ? size * 1.15 : size

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[currentSize, 48, 48]} />
        <meshStandardMaterial
          map={texture}
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : materialProps.emissiveIntensity}
          roughness={materialProps.roughness}
          metalness={materialProps.metalness}
        />
      </mesh>

      {hasRing && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[size * 1.5, size * 2.5, 64]} />
          <meshBasicMaterial
            color={color}
            side={2}
            transparent
            opacity={0.25}
          />
        </mesh>
      )}

      {type === "gasGiant" && (
        <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
          <ringGeometry args={[size * 1.6, size * 2.8, 64]} />
          <meshBasicMaterial
            color="#C8A96E"
            side={2}
            transparent
            opacity={0.15}
          />
        </mesh>
      )}

      <pointLight
        color={color}
        intensity={hovered ? 0.6 : 0.15}
        distance={4}
      />

      {type === "ice" && (
        <pointLight color="#B0E0FF" intensity={0.2} distance={3} />
      )}

      {clicked && <MemoryPopup memory={memory} onClose={() => setClicked(false)} />}
    </group>
  )
}
