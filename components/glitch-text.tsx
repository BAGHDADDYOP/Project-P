"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

    const glitch = () => {
      if (Math.random() > 0.95) {
        setIsGlitching(true)

        let iterations = 0
        const maxIterations = 3

        const glitchInterval = setInterval(() => {
          setGlitchText(
            text
              .split("")
              .map((char, index) => {
                if (Math.random() > 0.8) {
                  return glitchChars[Math.floor(Math.random() * glitchChars.length)]
                }
                return char
              })
              .join(""),
          )

          iterations++
          if (iterations >= maxIterations) {
            clearInterval(glitchInterval)
            setGlitchText(text)
            setIsGlitching(false)
          }
        }, 50)
      }
    }

    const interval = setInterval(glitch, 2000)
    return () => clearInterval(interval)
  }, [text])

  return (
    <span
      className={`${className} ${isGlitching ? "animate-pulse" : ""}`}
      style={{
        textShadow: isGlitching ? "2px 0 #ff0000, -2px 0 #00ffff, 0 0 10px rgba(255,255,255,0.5)" : "none",
      }}
    >
      {glitchText}
    </span>
  )
}
