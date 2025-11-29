"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles, Shield, Zap, Target } from "lucide-react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const stats = [
  { value: 150, suffix: "M+", label: "Target Users" },
  { value: 24, suffix: "/7", label: "AI Support" },
  { value: 99, suffix: "%", label: "Accuracy" },
  { value: 100, suffix: "ms", label: "Response Time" },
]

const solutionPoints = [
  { icon: Sparkles, text: "AI-powered predictions" },
  { icon: Shield, text: "Secure & private" },
  { icon: Zap, text: "Real-time insights" },
  { icon: Target, text: "Goal tracking" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return

    stats.forEach((stat, index) => {
      gsap.to(
        { value: 0 },
        {
          value: stat.value,
          duration: 2,
          delay: index * 0.1,
          ease: "power2.out",
          onUpdate: function () {
            setCounters((prev) => {
              const newCounters = [...prev]
              newCounters[index] = Math.round(this.targets()[0].value)
              return newCounters
            })
          },
        },
      )
    })

    // Animate visual elements
    if (visualRef.current) {
      const elements = visualRef.current.querySelectorAll(".solution-card")
      gsap.fromTo(
        elements,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        },
      )
    }
  }, [isVisible])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.02] to-background" />

      {/* Blue accent glow for "solution" theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">The Solution</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            About <span className="gradient-text-accent">WealthWise</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Built for real people with real income challenges. Our AI adapts to your unique financial patterns and helps
            you build lasting stability.
          </p>
        </div>

        <div ref={visualRef} className={`mb-16 opacity-0 ${isVisible ? "animate-fade-up delay-200" : ""}`}>
          

          <div className="relative max-w-3xl mx-auto">
            {/* Solution points - no connecting line */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
              {solutionPoints.map((point) => (
                <div
                  key={point.text}
                  className="solution-card flex flex-col items-center text-center group"
                  style={{ opacity: 0 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats with animated counters and blue glow */}
        <div
          ref={statsRef}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="relative group p-8 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <p
                  className="text-4xl md:text-5xl font-semibold text-accent mb-2 tabular-nums"
                  style={{ textShadow: "0 0 40px rgba(34, 211, 238, 0.3)" }}
                >
                  {counters[index]}
                  {stat.suffix}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info cards */}
        <div className={`grid md:grid-cols-2 gap-6 mt-12 opacity-0 ${isVisible ? "animate-fade-up delay-400" : ""}`}>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
            <h3 className="text-xl font-semibold mb-3">Built for Variable Income</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a freelancer, gig worker, or student with irregular earnings, WealthWise adapts to your
              unique cash flow patterns.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-secondary/30 border border-border">
            <h3 className="text-xl font-semibold mb-3">Powered by Advanced AI</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our machine learning models analyze your spending habits and income patterns to provide personalized,
              actionable financial guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
