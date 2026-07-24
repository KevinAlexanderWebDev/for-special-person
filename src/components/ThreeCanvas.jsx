import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import SolarSystemScene from "../scenes/SolarSystemScene"

export default function ThreeCanvas() {
    return (
        <Canvas
            camera={{ position: [0, 12, 26], fov: 50 }}
            style={{ height: '100dvh', width: '100vw', background: '#000005' }}
            gl={{ antialias: true }}
            onCreated={({ gl }) => {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            }}>
            
            <SolarSystemScene />

            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableDamping={true}
                dampingFactor={0.08}
                maxDistance={50}
                minDistance={3}
                rotateSpeed={0.5}
                zoomSpeed={0.8}
                target={[0, 0, 0]} />
        </Canvas>
    )
}
