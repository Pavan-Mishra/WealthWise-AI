"use client"

import { useEffect, useState, useRef } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("magnetic-button")
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter, true)
    document.addEventListener("mouseleave", handleMouseLeave, true)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter, true)
      document.removeEventListener("mouseleave", handleMouseLeave, true)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isVisible])

  // Smooth follow for outer ring
  useEffect(() => {
    let animationId: number
    let ringX = position.x
    let ringY = position.y

    const animate = () => {
      ringX += (position.x - ringX) * 0.15
      ringY += (position.y - ringY) * 0.15

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [position])

  if (typeof window === "undefined") return null

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "w-16 h-16 border-primary bg-primary/10" : "w-10 h-10 border-primary/50"} ${
          isClicking ? "scale-90" : "scale-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isHovering ? "w-2 h-2" : "w-1.5 h-1.5"} ${isClicking ? "scale-150 bg-accent" : "scale-100"}`}
        style={{
          left: position.x,
          top: position.y,
          boxShadow: "0 0 10px rgba(34, 211, 238, 0.8), 0 0 20px rgba(34, 211, 238, 0.4)",
        }}
      />
      {/* Click ripple */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-primary animate-pulse-ring"
          style={{
            left: position.x,
            top: position.y,
          }}
        />
      )}
    </>
  )
}
