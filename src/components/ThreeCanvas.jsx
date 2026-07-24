import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useTimeOfDay } from "../hooks/useTimeOfDay"
import NightScene from '../scenes/NightScene'
import DayScene from '../scenes/DayScene'

export default function ThreeCanvas() {
    const isDay = useTimeOfDay()
    return (
        <Canvas
            camera={{ position: [0,2,10], fov: 60 }}
            style={{ height: '100vh', background: 'transparent' }}>
            
            <ambientLight intensity={isDay ? 0.5 : 0.2} />
            <directionalLight 
                position={[10,10,5]}
                intensity={isDay ? 1 : 0.3}
                castShadow />
            {isDay ? <DayScene /> : <NightScene />}
            {!isDay && <Stars radius={100} depth={50} count={5000} />}
            
            <OrbitControls
                enableZoom={true}
                enablePan={false}
                maxPolarAngle={Math.PI / 2} />
        </Canvas>
    ) 
}