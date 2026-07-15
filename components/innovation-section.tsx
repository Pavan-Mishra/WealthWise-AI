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
  X,
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
    details:
      "Tracks week-to-week income swings and turns them into a clear stability score. Spot risky periods early, plan quieter weeks ahead of time, and avoid surprise shortfalls before they hit your wallet.",
  },
  {
    icon: Wallet,
    title: "Smart Adaptive Budget",
    description: "Expands and contracts dynamically with your income.",
    details:
      "Your budget flexes with every payday—tightening when earnings dip and loosening when they rise. No rigid monthly limits; categories stay realistic so you can spend confidently without constantly rewriting the plan.",
  },
  {
    icon: PiggyBank,
    title: "Buffer Wallet Automation",
    description: "Save more on good weeks; get support on low ones.",
    details:
      "Extra cash on strong weeks is tucked into a buffer automatically. On lean weeks, that cushion tops up essentials so daily life stays steady—without manual transfers or second-guessing what to save.",
  },
  {
    icon: Shield,
    title: "Expense Guard Mode",
    description: "Intelligent spending restrictions when needed.",
    details:
      "When cash is tight, Guard Mode gently limits non-essential spending and flags risky purchases. You choose the guardrails; the app helps you stick to them until your balance and buffer recover.",
  },
  {
    icon: Bell,
    title: "Predictive Bill Alerts",
    description: "Know affordability early before bills are due.",
    details:
      "Get alerts days ahead if an upcoming bill may not fit your projected balance. Adjust timing, cut a discretionary expense, or tap your buffer early—before a due date becomes a crisis.",
  },
  {
    icon: Calendar,
    title: "Gig Income Planner",
    description: "Plan gigs with expected income patterns.",
    details:
      "Map gigs against expected pay and busy seasons so you know which opportunities actually cover your goals. Compare short runs vs. longer bookings and stack work when it matters most.",
  },
  {
    icon: GitBranch,
    title: "Auto-Split Buckets",
    description: "Needs / Savings / Investments / Buffer automated.",
    details:
      "Incoming money is split into Needs, Savings, Investments, and Buffer the moment it arrives. Rules adapt to income size so every deposit advances your plan without spreadsheets or late-night sorting.",
  },
  {
    icon: HeartPulse,
    title: "Financial Anxiety Mode",
    description: "Calm insights during uncertain times.",
    details:
      "When stress spikes, switch to calmer views: fewer numbers, clearer next steps, and gentle reassurance. Focus on what is actually under control so money decisions feel lighter—not louder.",
  },
  {
    icon: Layers,
    title: "Scenario Simulator",
    description: 'Test "What If" financial plans safely.',
    details:
      "Model what-ifs like lost gigs, higher rent, or a new savings goal before you commit. See projected cash flow side by side so you choose the path that keeps you resilient—not just optimistic.",
  },
  {
    icon: CalendarDays,
    title: "Cash Flow Calendar",
    description: "Visualize income highs and lows clearly.",
    details:
      "A day-by-day calendar shows pay-ins, bills, and expected dips in one view. Plan big purchases around green days, prepare for lean stretches, and never get blindsided by the timing of your money.",
  },
]

export function InnovationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const cardWidth = 320 + 24
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(Math.min(newIndex, features.length - 1))
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (expandedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedIndex(null)
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node
      const panel = document.querySelector(`[data-feature-panel="${expandedIndex}"]`)
      const trigger = document.querySelector(`[data-feature-trigger="${expandedIndex}"]`)
      if (panel?.contains(target) || trigger?.contains(target)) return
      setExpandedIndex(null)
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [expandedIndex])

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return
    const cardWidth = 320 + 24
    gsap.to(scrollContainerRef.current, {
      scrollLeft: index * cardWidth,
      duration: 0.6,
      ease: "power3.out",
    })
  }

  const toggleDetails = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="innovation" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10">
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
          {features.map((feature, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div key={feature.title} className="flex-shrink-0 w-80 snap-start group">
                <div className="relative h-full min-h-[280px] p-6 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 hover:bg-secondary/40 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className={`relative transition-all duration-300 ease-out ${
                      isExpanded ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
                    }`}
                  >
                    <div className="absolute top-0 right-0 text-5xl font-bold text-border/50 group-hover:text-accent/20 transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{feature.description}</p>

                    <button
                      type="button"
                      data-feature-trigger={index}
                      onClick={() => toggleDetails(index)}
                      aria-expanded={isExpanded}
                      className="flex items-center gap-2 text-sm text-accent opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-300 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 focus-visible:translate-y-0"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div
                    data-feature-panel={index}
                    className={`absolute inset-0 p-6 flex flex-col transition-all duration-300 ease-out ${
                      isExpanded
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="absolute inset-0 bg-secondary/95 backdrop-blur-sm" />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                            <feature.icon className="w-4 h-4 text-accent" />
                          </div>
                          <h3 className="text-base font-semibold text-foreground leading-snug">{feature.title}</h3>
                        </div>
                        <button
                          type="button"
                          onClick={() => setExpandedIndex(null)}
                          className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-background/60 transition-colors"
                          aria-label={`Close ${feature.title} details`}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="relative text-sm text-muted-foreground leading-relaxed flex-1">
                        {feature.details}
                      </p>
                      <button
                        type="button"
                        data-feature-trigger={index}
                        onClick={() => toggleDetails(index)}
                        className="relative mt-4 inline-flex items-center gap-2 text-sm text-accent self-start"
                      >
                        <span>Show less</span>
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

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
