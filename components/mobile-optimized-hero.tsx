"use client"

import { useEffect, useRef, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MobileOptimizedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const isMobile = useIsMobile()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = rect.width + "px"
      canvas.style.height = rect.height + "px"
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Reduced complexity for mobile
    const nodeCount = isMobile ? 30 : 60
    const connectionDistance = isMobile ? 80 : 120
    const width = canvas.width / (window.devicePixelRatio || 1)
    const height = canvas.height / (window.devicePixelRatio || 1)

    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      pulse: number
      pulseSpeed: number
    }[] = []

    // Create simplified nodes for mobile
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
        vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
        radius: isMobile ? 1.5 : 2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.01,
      })
    }

    // Touch handling for mobile
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        setMousePosition({
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    if (isMobile) {
      canvas.addEventListener("touchmove", handleTouch)
      canvas.addEventListener("touchstart", handleTouch)
    } else {
      canvas.addEventListener("mousemove", handleMouseMove)
    }

    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      // Simplified grid for mobile
      if (!isMobile) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)"
        ctx.lineWidth = 0.5
        const gridSize = 40
        for (let x = 0; x < width; x += gridSize) {
          ctx.beginPath()
          ctx.moveTo(x, 0)
          ctx.lineTo(x, height)
          ctx.stroke()
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(width, y)
          ctx.stroke()
        }
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j]
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const strength = 1 - distance / connectionDistance
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${strength * 0.3})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        // Simplified physics for mobile
        node.x += node.vx
        node.y += node.vy
        node.vx *= 0.99
        node.vy *= 0.99

        // Boundary wrapping
        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0

        node.pulse += node.pulseSpeed
        if (node.pulse > Math.PI * 2) node.pulse -= Math.PI * 2

        const pulseScale = 1 + Math.sin(node.pulse) * 0.2

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + Math.sin(node.pulse) * 0.2})`
        ctx.fill()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (isMobile) {
        canvas.removeEventListener("touchmove", handleTouch)
        canvas.removeEventListener("touchstart", handleTouch)
      } else {
        canvas.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [isMobile, mousePosition.x, mousePosition.y])

  return (
    <div className="relative w-full aspect-square max-w-lg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Simplified central core for mobile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Reduced animation complexity for mobile */}
          <div className="absolute inset-0 rounded-full bg-white/5 animate-ping opacity-30"></div>
          {!isMobile && (
            <>
              <div
                className="absolute inset-2 rounded-full bg-white/5 animate-ping opacity-50"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full bg-white/5 animate-ping opacity-70"
                style={{ animationDelay: "1s" }}
              ></div>
            </>
          )}

          <div className="relative h-16 w-16 md:h-24 md:w-24 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
            <div className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <div className="h-4 w-4 md:h-8 md:w-8 rounded-full bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
