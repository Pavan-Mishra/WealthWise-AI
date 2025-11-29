"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: 150, suffix: "M+", label: "People with irregular income" },
  { value: 90, suffix: "M+", label: "Freelancers nationwide" },
  { value: 0, suffix: "", label: "Apps built for unstable earners", displayText: "Zero" },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>([0, 0, 0])
  const hasAnimated = useRef(false)

  const animateCounter = useCallback((index: number, target: number, duration = 2) => {
    const start = 0
    const startTime = performance.now()

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(start + (target - start) * easeOutQuart)

      setCounts((prev) => {
        const newCounts = [...prev]
        newCounts[index] = currentValue
        return newCounts
      })

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true

          stats.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(index, stat.value, 2.5)
            }, index * 300)
          })
        }
      },
      { threshold: 0.3 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [animateCounter])

  useEffect(() => {
    if (!isVisible) return

    numbersRef.current.forEach((el, index) => {
      if (!el) return

      gsap.fromTo(
        el,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "back.out(1.7)",
        },
      )
    })
  }, [isVisible])

  return (
    <section id="problem" ref={sectionRef} className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Stats */}
          <div className={`space-y-12 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
            <p className="text-sm font-medium text-red-500 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              The Problem
            </p>

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${index * 100 + 100}ms` }}
              >
                <p
                  ref={(el) => {
                    numbersRef.current[index] = el
                  }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2 number-glow tabular-nums"
                  style={{ opacity: 0 }}
                >
                  {stat.displayText ? (
                    <span className="text-red-500">{stat.displayText}</span>
                  ) : (
                    <>
                      <span className="text-red-500">{counts[index]}</span>
                      <span className="text-red-400">{stat.suffix}</span>
                    </>
                  )}
                </p>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Right - Description */}
          <div className={`space-y-8 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`}>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-balance">
              Traditional tools assume <span className="text-red-500">stable salaries</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Traditional financial tools assume stable salaries, leaving{" "}
              <span className="text-red-400 font-medium">millions without clarity or control</span>. WealthWise AI
              finally solves the financial instability problem by adapting to your unique income patterns.
            </p>

            

            

            <div className="flex items-center gap-4 pt-4">
              <div className="flex-1 h-1 rounded-full bg-red-500/30 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-red-500 rounded-full" />
              </div>
              <span className="text-xs text-muted-foreground">→</span>
              <div className="flex-1 h-1 rounded-full bg-accent/30 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-full bg-accent rounded-full" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Current State</span>
              <span>With WealthWise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
