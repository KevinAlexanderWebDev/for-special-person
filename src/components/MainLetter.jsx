import { useState } from "react";
import { Text, useCursor, Html } from "@react-three/drei";

export default function MainLetter({position}) {
    const [hovered, setHovered] = useState(false)
    const [opened, setOpened] = useState(false)
    useCursor(hovered || opened) 
    return (
        <group position={position}>
            <mesh onClick={() => setOpened(!opened)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}>
                <boxGeometry args={[opened ? 2 : 1.2, opened ? 0.05 : 0.08, opened ? 1.5 : 0.8]} />    
                <meshStandardMaterial color={opened ? '#FFF8E7' : '#F5E6CA'}
                emissive={opened ? '#FFF8DC' : '#000000'}
                emissiveIntensity={opened ? 0.3 : 0} />
            </mesh>
            {opened && (
                <Html position={[0, 0.3, 0]} center>
                    <div style={{background: 'linear-gradient(135deg, #FFF8E7, #F5E6CA)', color: '#3D2B1F', padding: '24px 32px', borderRadius: 4, maxWidth: 360, textAlign: 'center', fontFamily: 'Georgia, serif', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', lineHeight: 1.6,}}>
                        <h2 style={{margin: '0 0 12px', fontSize: 22, letterSpacing: 2}}>
                            Pecado Olvidar
                        </h2>
                        <p style={{ margin: '0 0 8px', fontSize: 14 }}>
                            Algunas personas llegan a nuestra vida para enseñarnos algo,
                            y aunque el camino se separe, lo vivido queda para siempre.
                        </p>
                        <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', opacity: 0.7 }}>
                            Gracias por 2023. Por el 26 de mayo. Por todo.
                        </p>
                        <div
                            style={{
                            marginTop: 16,
                            fontSize: 28,
                            opacity: 0.3,
                            }}>
                            ✦
                        </div>
                    </div>
                </Html>
            )}
        </group>
    )
}