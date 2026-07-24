import { useEffect, useState } from "react";
import { useTimeOfDay } from "../hooks/useTimeOfDay";

export default function TransitionOverlay() {
    const isDay = useTimeOfDay()
    const [prevIsDay, setPrevIsDay] = useState(isDay)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        if (isDay !== prevIsDay) {
            setFading(true)
            const timer = setTimeout(() => {
                setPrevIsDay(isDay)
                setFading(false)
            }, 1000) 
            return () => clearTimeout(timer)
        }
    }, [isDay, prevIsDay])

    return (
        <div 
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 10,
                pointerEvents: 'none',
                background: fading ? '#000' : 'transparent',
                opacity: fading ? 0.8 : 0,
                transition: 'opacity 1s ease-in-out, background 1s ease-in-out',
            }} 
        />
    )
}