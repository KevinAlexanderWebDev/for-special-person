export default function OrbitRing({ radius, color = "#ffffff" }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.03, radius + 0.03, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} side={2} />
    </mesh>
  )
}
