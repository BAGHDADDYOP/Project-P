"use client"

import { useEffect, useRef } from "react"

export default function VideoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Matrix-style data rain
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?"
    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    let time = 0

    const animate = () => {
      time += 0.01

      // Semi-transparent black background for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // White text
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = `${fontSize}px 'Helvetica Neue', Helvetica, Arial, sans-serif`

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      // Add scanning lines
      const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * canvas.height
      ctx.fillStyle = "rgba(255, 255, 255, 0.02)"
      ctx.fillRect(0, scanY - 2, canvas.width, 4)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
      style={{ background: "black" }}
    />
  )
}
