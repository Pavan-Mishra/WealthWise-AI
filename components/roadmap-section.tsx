"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Clock, Sparkles } from "lucide-react"

const roadmapItems = [
  { title: "AI Coach", status: "completed", description: "Personalized financial guidance" },
  { title: "Dashboard", status: "completed", description: "Real-time financial overview" },
  { title: "Chat Assistant", status: "completed", description: "24/7 conversational support" },
  { title: "Spending Alerts", status: "completed", description: "Proactive notifications" },
  { title: "Volatility Score", status: "coming", description: "Income stability metrics" },
  { title: "Scenario Simulator", status: "coming", description: "What-if planning tools" },
  { title: "Guard Mode", status: "coming", description: "Smart spending limits" },
  { title: "Insights 2.0", status: "coming", description: "Advanced analytics" },
  { title: "Auto-Fill Buffer", status: "coming", description: "Automated savings" },
]

export function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [visibleNodes, setVisibleNodes] = useState<number[]>([])
  const [lineHeight, setLineHeight] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          roadmapItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleNodes((prev) => [...prev, index])
              setLineHeight(((index + 1) / roadmapItems.length) * 100)
            }, index * 150)
          })
        }
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="roadmap" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-24 space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass">
            
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Product Roadmap</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Journey</span>
            <span className="text-foreground"> Forward</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Track our progress as we build the future of personal finance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Main glowing line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 overflow-hidden">
            <div className="absolute inset-0 bg-secondary rounded-full" />
            <div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-primary rounded-full transition-all duration-1000 ease-out"
              style={{ height: `${lineHeight}%` }}
            />
            {/* Traveling light beam */}
            {isVisible && (
              <div
                className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-primary to-transparent opacity-60"
                style={{
                  animation: "line-grow 3s ease-out infinite",
                  top: "-20px",
                }}
              />
            )}
          </div>

          {/* Timeline items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex items-center gap-8 md:gap-0 transition-all duration-700 ${
                  visibleNodes.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  {/* Pulse ring */}
                  {visibleNodes.includes(index) && (
                    <div
                      className={`absolute inset-0 rounded-full ${
                        item.status === "completed" ? "bg-green-400/30" : "bg-primary/30"
                      }`}
                      style={{ animation: "pulse-ring 2s ease-out infinite" }}
                    />
                  )}

                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      visibleNodes.includes(index) ? "scale-100" : "scale-0"
                    } ${
                      item.status === "completed"
                        ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/40"
                        : "bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40"
                    }`}
                  >
                    {item.status === "completed" ? (
                      <Check className="w-6 h-6 text-white" />
                    ) : (
                      <Clock className="w-6 h-6 text-white" />
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`group p-6 rounded-2xl glass transition-all duration-500 hover:-translate-y-1 ${
                      item.status === "completed" ? "hover:border-green-500/40" : "hover:border-primary/40"
                    }`}
                  >
                    {/* Neon border on hover */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${item.status === "completed" ? "via-green-400" : "via-primary"} to-transparent`}
                      />
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 ${
                        item.status === "completed" ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {item.status === "completed" ? "Completed" : "Coming Soon"}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
