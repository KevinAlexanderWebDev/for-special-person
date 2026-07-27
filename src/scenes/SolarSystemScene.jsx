import { Stars } from "@react-three/drei"
import Planet from "../components/Planet"
import OrbitRing from "../components/OrbitRing"
import Sun from "../components/Sun"
import GalaxyBackground from "../components/GalaxyBackground"
import AsteroidBelt from "../components/AsteroidBelt"
import NebulaClouds from "../components/NebulaClouds"
import { memories } from "../data/memories"

const planetConfig = [
  { memoryId: 0, orbitRadius: 4, orbitSpeed: 0.3, size: 0.5, hasRing: false, startAngle: 0, type: "rocky" },
  { memoryId: 1, orbitRadius: 6, orbitSpeed: 0.2, size: 0.65, hasRing: true, startAngle: 2, type: "gasGiant" },
  { memoryId: 2, orbitRadius: 8, orbitSpeed: 0.15, size: 0.55, hasRing: false, startAngle: 4, type: "ice" },
  { memoryId: 3, orbitRadius: 10, orbitSpeed: 0.10, size: 0.55, hasRing: false, startAngle: 4, type: "ice" },
  { memoryId: 4, orbitRadius: 12, orbitSpeed: 0.09, size: 0.35, hasRing: true, startAngle: 6, type: "ice" },
  { memoryId: 5, orbitRadius: 14, orbitSpeed: 0.08, size: 0.25, hasRing: false, startAngle: 8, type: "rocky" },
  { memoryId: 6, orbitRadius: 16, orbitSpeed: 0.06, size: 0.85, hasRing: false, startAngle: 10, type: "gasGiant" },
  { memoryId: 7, orbitRadius: 18, orbitSpeed: 0.04, size: 0.45, hasRing: true, startAngle: 12, type: "rocky" },
  { memoryId: 8, orbitRadius: 20, orbitSpeed: 0.02, size: 0.32, hasRing: false, startAngle: 14, type: "ice" },
  { memoryId: 9, orbitRadius: 22, orbitSpeed: 0.008, size: 0.20, hasRing: true, startAngle: 16, type: "rocky" },
  { memoryId: 10, orbitRadius: 24, orbitSpeed: 0.001, size: 0.35, hasRing: true, startAngle: 18, type: "rocky" },
  { memoryId: 11, orbitRadius: 26, orbitSpeed: 0.00099, size: 0.69, hasRing: false, startAngle: 20, type: "gasGiant" },
]

export default function SolarSystemScene() {
  return (
    <>
      <GalaxyBackground />
      <NebulaClouds />
      <Stars radius={30} depth={20} count={1500} />

      {planetConfig.map((cfg) => (
        <OrbitRing key={cfg.memoryId} radius={cfg.orbitRadius} color="#ffffff" />
      ))}

      <AsteroidBelt innerRadius={10} outerRadius={12} />

      <Sun />

      {planetConfig.map((cfg) => (
        <Planet
          key={cfg.memoryId}
          memory={memories[cfg.memoryId]}
          orbitRadius={cfg.orbitRadius}
          orbitSpeed={cfg.orbitSpeed}
          size={cfg.size}
          color={memories[cfg.memoryId].color}
          hasRing={cfg.hasRing}
          startAngle={cfg.startAngle}
          type={cfg.type}
        />
      ))}

      <ambientLight intensity={0.1} />
    </>
  )
}
