"use client"

import { useRef, useState, useEffect } from "react"
import {
  TrendingUp,
  Wallet,
  PiggyBank,
  Shield,
  Bell,
  Calendar,
  GitBranch,
  HeartPulse,
  Layers,
  CalendarDays,
  ArrowRight,
} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  {
    icon: TrendingUp,
    title: "Income Volatility Predictor",
    description: "Real-time stability score based on your earning patterns.",
  },
  {
    icon: Wallet,
    title: "Smart Adaptive Budget",
    description: "Expands and contracts dynamically with your income.",
  },
  {
    icon: PiggyBank,
    title: "Buffer Wallet Automation",
    description: "Save more on good weeks; get support on low ones.",
  },
  {
    icon: Shield,
    title: "Expense Guard Mode",
    description: "Intelligent spending restrictions when needed.",
  },
  {
    icon: Bell,
    title: "Predictive Bill Alerts",
    description: "Know affordability early before bills are due.",
  },
  {
    icon: Calendar,
    title: "Gig Income Planner",
    description: "Plan gigs with expected income patterns.",
  },
  {
    icon: GitBranch,
    title: "Auto-Split Buckets",
    description: "Needs / Savings / Investments / Buffer automated.",
  },
  {
    icon: HeartPulse,
    title: "Financial Anxiety Mode",
    description: "Calm insights during uncertain times.",
  },
  {
    icon: Layers,
    title: "Scenario Simulator",
    description: 'Test "What If" financial plans safely.',
  },
  {
    icon: CalendarDays,
    title: "Cash Flow Calendar",
    description: "Visualize income highs and lows clearly.",
  },
]

export function InnovationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  // Update active index based on scroll position
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = 320 + 24 // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, features.length - 1))
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const cardWidth = 320 + 24
    gsap.to(scrollContainerRef.current, {
      scrollLeft: index * cardWidth,
      duration: 0.6,
      ease: "power3.out",
    })
  }

  return (
    <section id="innovation" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div
            className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-accent" />
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Innovation Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                The <span className="gradient-text-accent">"wow"</span> features
              </h2>
              <p className="text-muted-foreground max-w-md">
                Cutting-edge tools designed to transform how you manage money.
              </p>
            </div>

            {/* Progress indicator */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground tabular-nums">
                {String(activeIndex + 1).padStart(2, "0")} / {String(features.length).padStart(2, "0")}
              </span>
              <div className="w-32 h-1 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className={`flex gap-6 overflow-x-auto pb-8 px-6 md:px-[calc((100vw-1280px)/2+24px)] scrollbar-hide snap-x snap-mandatory opacity-0 ${isVisible ? "animate-fade-up delay-200" : ""}`}
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="flex-shrink-0 w-80 snap-start group">
              <div className="h-full p-6 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 hover:bg-secondary/40 transition-all duration-500 relative overflow-hidden">
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Number */}
                  <div className="absolute top-0 right-0 text-5xl font-bold text-border/50 group-hover:text-accent/20 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

                  {/* Learn more link */}
                  <div className="flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-8 bg-accent" : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
