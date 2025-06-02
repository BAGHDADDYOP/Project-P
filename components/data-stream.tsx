"use client"

import { useEffect, useRef } from "react"

export default function DataStream() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createDataLine = () => {
      const line = document.createElement("div")
      line.className = "absolute text-xs font-mono text-green-400/30 whitespace-nowrap"

      const dataTypes = [
        "INTEL_FEED_001: THREAT_LEVEL_ALPHA",
        "NETWORK_SCAN: 192.168.1.0/24",
        "CRYPTO_HASH: 0x7f4a2b8c9d1e3f6a",
        "SIGNAL_INTERCEPT: FREQ_2.4GHz",
        "PATTERN_MATCH: 94.7% CONFIDENCE",
        "GEOLOC_DATA: 40.7128°N 74.0060°W",
        "BIOMETRIC_ID: RETINAL_SCAN_COMPLETE",
        "QUANTUM_KEY: ENTANGLEMENT_VERIFIED",
      ]

      line.textContent = dataTypes[Math.floor(Math.random() * dataTypes.length)]
      line.style.right = "-100%"
      line.style.top = Math.random() * 100 + "%"
      line.style.animationDuration = Math.random() * 10 + 5 + "s"
      line.style.animation = "slideLeft linear forwards"

      container.appendChild(line)

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line)
        }
      }, 15000)
    }

    const interval = setInterval(createDataLine, 500)

    // Add CSS animation
    const style = document.createElement("style")
    style.textContent = `
      @keyframes slideLeft {
        from { right: -100%; }
        to { right: 100%; }
      }
    `
    document.head.appendChild(style)

    return () => {
      clearInterval(interval)
      document.head.removeChild(style)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" />
}
