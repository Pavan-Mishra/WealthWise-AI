"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Github, ArrowRight } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section ref={sectionRef} className="relative py-32 bg-secondary/20">
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center space-y-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
            Ready to explore the future of money?
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Join the revolution in personal finance. WealthWise AI is here to transform how you manage irregular income.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary/50 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              View Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
