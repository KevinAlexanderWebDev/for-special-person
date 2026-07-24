import { Float } from "@react-three/drei";
import InteractiveElement from "../components/InteractiveElement";
import MainLetter from "../components/MainLetter";
import { memories } from "../data/memories";

export default function DayScene() {
    return (
        <>
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#90D5A8" />
            </mesh>

            <mesh position={[8, 8, -5]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#FFD700" />
            </mesh>
            <pointLight position={[8, 8, -5]} intensity={2} color="#FFD700" />

            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <MainLetter position={[0, 0.5, 0]} />
            </Float>

            {memories.map((m) => (
                <Float key={m.id} speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
                    <InteractiveElement memory={m} />
                </Float>
            ))}
        </>
    )
}