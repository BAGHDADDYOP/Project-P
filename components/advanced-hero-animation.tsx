"use client"

import { useEffect, useRef, useState } from "react"

export default function AdvancedHeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
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

    // Enhanced animation parameters
    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      type: "primary" | "secondary" | "tertiary"
      pulse: number
      pulseSpeed: number
      connections: number[]
      energy: number
    }[] = []

    const nodeCount = 80
    const connectionDistance = 150
    const width = canvas.width / (window.devicePixelRatio || 1)
    const height = canvas.height / (window.devicePixelRatio || 1)
    const mouseInfluenceRadius = 120

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Create enhanced nodes
    for (let i = 0; i < nodeCount; i++) {
      const type = Math.random() > 0.7 ? "primary" : Math.random() > 0.5 ? "secondary" : "tertiary"
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: type === "primary" ? 3 : type === "secondary" ? 2 : 1.5,
        type,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        connections: [],
        energy: Math.random(),
      })
    }

    // Create connection matrix
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[j].x - nodes[i].x
        const dy = nodes[j].y - nodes[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < connectionDistance && Math.random() > 0.7) {
          nodes[i].connections.push(j)
        }
      }
    }

    let time = 0

    // Enhanced animation loop
    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      // Draw background grid with subtle animation
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + Math.sin(time) * 0.01})`
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

      // Draw enhanced connections with energy flow
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        for (const connectionIndex of node.connections) {
          const otherNode = nodes[connectionIndex]
          const dx = otherNode.x - node.x
          const dy = otherNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Calculate connection strength
            const strength = 1 - distance / connectionDistance
            const energyFlow = (Math.sin(time * 2 + distance * 0.01) + 1) * 0.5

            // Draw main connection
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)

            if (node.type === "primary" && otherNode.type === "primary") {
              const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y)
              gradient.addColorStop(0, `rgba(255, 255, 255, ${strength * 0.6})`)
              gradient.addColorStop(0.5, `rgba(100, 200, 255, ${strength * 0.8})`)
              gradient.addColorStop(1, `rgba(255, 255, 255, ${strength * 0.6})`)
              ctx.strokeStyle = gradient
              ctx.lineWidth = 1.5
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${strength * 0.3})`
              ctx.lineWidth = 0.8
            }

            ctx.stroke()

            // Draw energy flow particles
            if (energyFlow > 0.7 && strength > 0.5) {
              const particleX = node.x + dx * energyFlow
              const particleY = node.y + dy * energyFlow

              ctx.beginPath()
              ctx.arc(particleX, particleY, 1, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(100, 200, 255, ${strength})`
              ctx.fill()
            }
          }
        }
      }

      // Update and draw enhanced nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Mouse influence with enhanced effects
        const dx = mousePosition.x - node.x
        const dy = mousePosition.y - node.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)

        if (distToMouse < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - distToMouse) / mouseInfluenceRadius
          node.vx += (dx / distToMouse) * force * 0.1
          node.vy += (dy / distToMouse) * force * 0.1
          node.energy = Math.min(1, node.energy + force * 0.02)
        } else {
          node.energy *= 0.98
        }

        // Update position with enhanced physics
        node.x += node.vx
        node.y += node.vy

        // Apply friction
        node.vx *= 0.995
        node.vy *= 0.995

        // Boundary collision with wrapping
        if (node.x < 0) node.x = width
        if (node.x > width) node.x = 0
        if (node.y < 0) node.y = height
        if (node.y > height) node.y = 0

        // Update pulse
        node.pulse += node.pulseSpeed
        if (node.pulse > Math.PI * 2) node.pulse -= Math.PI * 2

        // Calculate enhanced visual effects
        const pulseScale = 1 + Math.sin(node.pulse) * 0.3 * (node.energy + 0.5)
        const glowIntensity = node.energy * 0.5 + 0.3

        // Draw node glow
        if (node.type === "primary") {
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * pulseScale * 4)
          glowGradient.addColorStop(0, `rgba(100, 200, 255, ${glowIntensity})`)
          glowGradient.addColorStop(0.5, `rgba(100, 200, 255, ${glowIntensity * 0.3})`)
          glowGradient.addColorStop(1, "rgba(100, 200, 255, 0)")

          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * pulseScale * 4, 0, Math.PI * 2)
          ctx.fillStyle = glowGradient
          ctx.fill()
        }

        // Draw main node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * pulseScale, 0, Math.PI * 2)

        if (node.type === "primary") {
          const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * pulseScale)
          nodeGradient.addColorStop(0, `rgba(255, 255, 255, ${0.9 + node.energy * 0.1})`)
          nodeGradient.addColorStop(1, `rgba(100, 200, 255, ${0.7 + node.energy * 0.3})`)
          ctx.fillStyle = nodeGradient
        } else if (node.type === "secondary") {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + node.energy * 0.2})`
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + node.energy * 0.1})`
        }

        ctx.fill()

        // Draw node ring for primary nodes
        if (node.type === "primary") {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * pulseScale * 1.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(100, 200, 255, ${0.4 + node.energy * 0.3})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <div className="relative w-full aspect-square max-w-lg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

      {/* Central core with enhanced effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer pulsing rings */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-ping opacity-30"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-400/30 animate-ping opacity-50"
            style={{ animationDuration: "2s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-300/40 to-cyan-300/40 animate-ping opacity-70"
            style={{ animationDuration: "1.5s", animationDelay: "1s" }}
          ></div>

          {/* Main core */}
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-500/20 flex items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 flex items-center justify-center border border-blue-400/30">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-300/40 to-cyan-300/40 border border-blue-300/50"></div>
            </div>
          </div>

          {/* Rotating orbital rings */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full -translate-x-1/2"></div>
          </div>
          <div
            className="absolute inset-2 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          >
            <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-blue-300 rounded-full -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-cyan-300 rounded-full -translate-x-1/2"></div>
            <div className="absolute left-0 top-1/2 w-0.5 h-0.5 bg-blue-300 rounded-full -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-0.5 h-0.5 bg-cyan-300 rounded-full -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
