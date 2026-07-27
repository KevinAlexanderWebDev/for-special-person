import { useEffect, useRef } from "react"
import { Howl } from "howler"

export default function useBackgroundMusic(src = "assets/audio/audio1975.mp3") {
  const howlRef = useRef(null)

  useEffect(() => {
    howlRef.current = new Howl({
      src: [src],
      loop: true,
      volume: 0.3,
      autoplay: false,
      html5: true,
    })

    const handleInteraction = () => {
      if (howlRef.current && !howlRef.current.playing()) {
        howlRef.current.play()
      }
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
    }

    document.addEventListener("click", handleInteraction)
    document.addEventListener("touchstart", handleInteraction)

    return () => {
      if (howlRef.current) {
        howlRef.current.unload()
      }
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
    }
  }, [src])

  return howlRef
}
