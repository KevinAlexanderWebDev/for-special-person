import { useState, useEffect } from "react";
import dayjs from "dayjs";

export const useTimeOfDay = () => {
    const [isDay, setIsDay] = useState(true)
    useEffect(() => {
        const updateDayNight = () => {
            const hour = dayjs().hour()
            setIsDay(hour >= 6 && hour < 18) 
        }  
        
        updateDayNight()
        const interval = setInterval(updateDayNight, 60000)
        return () => clearInterval(interval)
    }, [])
    return isDay
}