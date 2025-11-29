"use client"

import { useEffect, useRef, useState } from "react"
import { Github, ArrowRight, Play } from "lucide-react"
import gsap from "gsap"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // GSAP text reveal animation
    if (textRef.current) {
      const words = textRef.current.querySelectorAll(".hero-word")
      gsap.fromTo(
        words,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.2,
        },
      )
    }

    // Visual elements animation
    if (visualRef.current) {
      const elements = visualRef.current.querySelectorAll(".visual-element")
      gsap.fromTo(
        elements,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.5,
        },
      )
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Minimal gradient background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-accent/[0.03] to-transparent" />

      {/* Floating orbs - very subtle */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/[0.03] rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/30 mb-8 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm text-muted-foreground">Introducing WealthWise AI</span>
          </div>

          {/* Main headline with GSAP animation */}
          <div ref={textRef} className="overflow-hidden mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
              <span className="hero-word inline-block">Financial</span>{" "}
              <span className="hero-word inline-block gradient-text-accent">freedom</span>
              <br />
              <span className="hero-word inline-block">for</span>{" "}
              <span className="hero-word inline-block">irregular</span>{" "}
              <span className="hero-word inline-block">income.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 opacity-0 ${isVisible ? "animate-fade-up delay-300" : ""}`}
          >
            AI-powered money management that adapts to your cash flow. Built for freelancers, gig workers, and anyone
            with variable income.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-20 opacity-0 ${isVisible ? "animate-fade-up delay-400" : ""}`}
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-border hover:border-accent/50 hover:bg-accent/5 transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Play className="w-3 h-3 text-accent fill-accent" />
              </div>
              Watch demo
            </button>
          </div>

          {/* Visual showcase */}
          <div ref={visualRef} className="relative">
            {/* Main app preview */}
            <div className="visual-element relative mx-auto max-w-4xl">
              {/* Browser frame */}
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-accent/5">
                {/* Browser header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-background/50 text-xs text-muted-foreground">
                      wealthwise.ai
                    </div>
                  </div>
                </div>

                {/* App content */}
                <div className="p-6 md:p-8 bg-gradient-to-b from-background to-card/50">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Balance card */}
                    <div className="md:col-span-2 p-6 rounded-xl bg-secondary/30 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-4xl md:text-5xl font-semibold">₹1,24,560</span>
                        <span className="text-sm text-accent font-medium">+12.5%</span>
                      </div>
                      {/* Mini chart */}
                      <div className="flex items-end gap-1 h-16 mt-4">
                        {[35, 50, 40, 65, 55, 80, 70, 90, 75, 85, 95, 88].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent/50 transition-all duration-300 hover:from-accent hover:to-accent/70"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Quick stats */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">Income</p>
                        <p className="text-xl font-semibold">₹45,000</p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                        <p className="text-xs text-muted-foreground mb-1">Expenses</p>
                        <p className="text-xl font-semibold">₹28,340</p>
                      </div>
                      <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs">✨</span>
                          <span className="text-xs text-accent font-medium">AI Insight</span>
                        </div>
                        <p className="text-xs text-muted-foreground">Save ₹5,000 this week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 ${isVisible ? "animate-fade-in delay-700" : ""}`}
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-accent rounded-full animate-scroll-hint" />
          </div>
        </div>
      </div>
    </section>
  )
}
