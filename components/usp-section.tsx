"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, MessageCircle, LayoutDashboard, AlertTriangle, Target, Gamepad2 } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    icon: Brain,
    title: "AI Financial Coach",
    description: "Personalized, pattern-based guidance that adapts to your unique financial situation.",
  },
  {
    icon: MessageCircle,
    title: "Chat-Based Assistance",
    description: "24/7 conversational finance help whenever you need support or advice.",
  },
  {
    icon: LayoutDashboard,
    title: "Smart Insights Dashboard",
    description: "Clear spending and forecast view with actionable intelligence.",
  },
  {
    icon: AlertTriangle,
    title: "Proactive Warnings",
    description: "Get alerts before financial issues start, not after.",
  },
  {
    icon: Target,
    title: "Goal Automation",
    description: "Auto-saving and adaptive planning that works with your income flow.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Savings",
    description: "Fun challenges, streaks, and rewards to keep you motivated.",
  },
]

export function USPSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      // Staggered entrance animation
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out",
        },
      )

      // Magnetic hover effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const deltaX = (x - centerX) / centerX
        const deltaY = (y - centerY) / centerY

        gsap.to(card, {
          x: deltaX * 5,
          y: deltaY * 5,
          rotateX: -deltaY * 3,
          rotateY: deltaX * 3,
          duration: 0.3,
          ease: "power2.out",
        })

        // Update CSS variable for glow effect
        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        })
      }

      card.addEventListener("mousemove", handleMouseMove)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mousemove", handleMouseMove)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [isVisible])

  return (
    <section id="features" ref={sectionRef} className="relative py-32 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Core Features</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Powered by intelligent features
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Six core capabilities designed to transform how you manage irregular income.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group p-6 rounded-2xl bg-background border border-border feature-card-glow cursor-pointer"
              style={{ transformStyle: "preserve-3d", opacity: 0 }}
            >
              {/* Icon container with scale effect */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title with underline animation */}
              <h3 className="text-lg font-semibold text-foreground mb-2 relative inline-block">
                {feature.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-300" />
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Subtle arrow indicator */}
              <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
