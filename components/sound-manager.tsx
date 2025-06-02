"use client"

import { useEffect, useRef } from "react"

export default function SoundManager() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize Web Audio API
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    const playSound = (frequency: number, duration: number, type: OscillatorType = "sine") => {
      if (!audioContextRef.current) return

      const oscillator = audioContextRef.current.createOscillator()
      const gainNode = audioContextRef.current.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContextRef.current.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContextRef.current.currentTime)
      oscillator.type = type

      gainNode.gain.setValueAtTime(0, audioContextRef.current.currentTime)
      gainNode.gain.linearRampToValueAtTime(0.1, audioContextRef.current.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + duration)

      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + duration)
    }

    // Button hover sound
    const handleButtonHover = () => playSound(800, 0.1, "square")

    // Button click sound
    const handleButtonClick = () => playSound(1000, 0.15, "square")

    // Link hover sound
    const handleLinkHover = () => playSound(600, 0.08, "sine")

    // Add event listeners
    const buttons = document.querySelectorAll("button")
    const links = document.querySelectorAll("a")

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleButtonHover)
      button.addEventListener("click", handleButtonClick)
    })

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover)
    })

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleButtonHover)
        button.removeEventListener("click", handleButtonClick)
      })

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
      })
    }
  }, [])

  return null
}
