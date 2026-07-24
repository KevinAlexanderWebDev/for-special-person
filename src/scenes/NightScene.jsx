import { Float } from "@react-three/drei"
import InteractiveElement from "../components/InteractiveElement"
import MainLetter from "../components/MainLetter"
import { memories } from "../data/memories"

export default function NightScene() {
  return (
    <>
      {/* Zona Suelo nocturno */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a3e" />
      </mesh>

      {/* Zona de la Luna */}
      <mesh position={[-6, 6, -5]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial color="#F0E68C" />
      </mesh>
      <pointLight
        position={[-6, 6, -5]}
        intensity={1}
        color="#B0C4DE"
      />

      {/* Aspecto Bruma ambiental */}
      <fog attach="fog" args={["#0a0a1a", 10, 30]} />

      {/* Zona Carta Principal */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <MainLetter position={[0, 0.5, 0]} />
      </Float>

      {/* Zona Recuerdos interactivos (más brillantes de noche) */}
      {memories.map((m) => (
        <Float key={m.id} speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
          <InteractiveElement memory={m} />
        </Float>
      ))}
    </>
  )
}