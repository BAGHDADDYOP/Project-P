"use client"

import { useEffect, useRef } from "react"

export default function EnhancedBackground() {
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

    // Particle system for background
    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      life: number
    }[] = []

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 1000 + 500,
      }
    }

    // Initialize particles
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle())
    }

    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)"
      ctx.lineWidth = 1

      const gridSize = 50
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]

        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        if (
          particle.life <= 0 ||
          particle.x < 0 ||
          particle.x > canvas.width ||
          particle.y < 0 ||
          particle.y > canvas.height
        ) {
          particles[i] = createParticle()
          continue
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * (particle.life / 1000)})`
        ctx.fill()
      }

      // Draw scanning lines
      const scanY = (Math.sin(time * 0.5) * 0.5 + 0.5) * canvas.height
      const gradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      gradient.addColorStop(0, "rgba(100, 200, 255, 0)")
      gradient.addColorStop(0.5, "rgba(100, 200, 255, 0.1)")
      gradient.addColorStop(1, "rgba(100, 200, 255, 0)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, scanY - 50, canvas.width, 100)

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
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)" }}
    />
  )
}
