"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
] as const

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineFillRef = useRef<HTMLDivElement>(null)
  const beamRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const timeline = timelineRef.current
    const lineFill = lineFillRef.current
    if (!section || !timeline || !lineFill) return

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(section.querySelectorAll(".roadmap-reveal, .roadmap-node, .roadmap-card"), {
        clearProps: "all",
        opacity: 1,
        y: 0,
        scale: 1,
      })
      gsap.set(lineFill, { scaleY: 1 })
      gsap.set(section.querySelectorAll(".roadmap-check-path"), { strokeDashoffset: 0 })
    })

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          section.querySelectorAll(".roadmap-header > *"),
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        )

        gsap.fromTo(
          lineFill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timeline,
              start: "top 70%",
              end: "bottom 35%",
              scrub: 0.65,
            },
          },
        )

        if (beamRef.current) {
          gsap.to(beamRef.current, {
            top: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timeline,
              start: "top 70%",
              end: "bottom 35%",
              scrub: 0.65,
            },
          })
        }

        const items = gsap.utils.toArray<HTMLElement>(".roadmap-item", timeline)

        items.forEach((item) => {
          const node = item.querySelector<HTMLElement>(".roadmap-node")
          const card = item.querySelector<HTMLElement>(".roadmap-card")
          const checkPath = item.querySelector<SVGPathElement>(".roadmap-check-path")
          const ring = item.querySelector<SVGCircleElement>(".roadmap-progress-ring")
          const isCompleted = item.dataset.status === "completed"

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          })

          tl.fromTo(
            item,
            { opacity: 0 },
            { opacity: 1, duration: 0.2, ease: "power1.out" },
            0,
          )

          if (node) {
            tl.fromTo(
              node,
              { scale: 0, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.6)" },
              0,
            )
          }

          if (card) {
            const fromX = item.dataset.side === "left" ? -28 : 28
            tl.fromTo(
              card,
              { opacity: 0, y: 36, x: fromX },
              { opacity: 1, y: 0, x: 0, duration: 0.7, ease: "power3.out" },
              0.08,
            )
          }

          if (isCompleted && checkPath) {
            const length = checkPath.getTotalLength()
            gsap.set(checkPath, {
              strokeDasharray: length,
              strokeDashoffset: length,
              opacity: 1,
            })
            tl.to(
              checkPath,
              { strokeDashoffset: 0, duration: 0.55, ease: "power2.out" },
              0.28,
            )
            if (node) {
              tl.to(
                node,
                {
                  boxShadow: "0 0 0 0 rgba(52, 211, 153, 0), 0 10px 28px rgba(16, 185, 129, 0.45)",
                  duration: 0.35,
                  ease: "power2.out",
                },
                0.28,
              ).to(
                node,
                {
                  boxShadow: "0 0 0 10px rgba(52, 211, 153, 0), 0 10px 28px rgba(16, 185, 129, 0.35)",
                  duration: 0.7,
                  ease: "power2.out",
                },
                0.55,
              )
            }
          }

          if (!isCompleted && ring) {
            gsap.set(ring, { strokeDasharray: "18 46", strokeDashoffset: 0 })
            tl.fromTo(ring, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0.25)
            gsap.to(ring, {
              strokeDashoffset: -64,
              duration: 2.4,
              ease: "none",
              repeat: -1,
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                toggleActions: "play pause resume pause",
              },
            })
          }
        })
      }, section)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="roadmap" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="roadmap-header text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass opacity-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <p className="text-sm font-medium text-accent uppercase tracking-wider">Product Roadmap</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold opacity-0">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Journey</span>
            <span className="text-foreground"> Forward</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto opacity-0">
            Track our progress as we build the future of personal finance.
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Track + animated progress line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <div className="absolute inset-0 bg-border/70" />
            <div
              ref={lineFillRef}
              className="absolute top-0 left-0 right-0 h-full origin-top rounded-full bg-gradient-to-b from-emerald-400 via-accent to-primary"
              style={{ transform: "scaleY(0)" }}
            />
            <div
              ref={beamRef}
              className="absolute left-1/2 -translate-x-1/2 w-3 h-16 -top-8 rounded-full bg-gradient-to-b from-transparent via-white/70 to-transparent blur-[2px] opacity-70 pointer-events-none"
            />
          </div>

          <div className="space-y-14">
            {roadmapItems.map((item, index) => {
              const isCompleted = item.status === "completed"
              const side = index % 2 === 0 ? "left" : "right"

              return (
                <div
                  key={item.title}
                  className="roadmap-item relative flex items-center gap-8 md:gap-0 opacity-0"
                  data-status={item.status}
                  data-side={side}
                >
                  {/* Milestone node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`roadmap-node relative w-12 h-12 rounded-full flex items-center justify-center opacity-0 scale-0 ${
                        isCompleted
                          ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-lg shadow-green-500/40"
                          : "bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/40"
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <span
                            className="absolute inset-[-6px] rounded-full border border-emerald-400/40 roadmap-success-pulse"
                            aria-hidden
                          />
                          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden>
                            <path
                              className="roadmap-check-path"
                              d="M5 13l4 4L19 7"
                              stroke="white"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ opacity: 0 }}
                            />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span
                            className="absolute inset-[-8px] rounded-full bg-primary/25 roadmap-progress-pulse"
                            aria-hidden
                          />
                          <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full -rotate-90" aria-hidden>
                            <circle
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="rgba(255,255,255,0.18)"
                              strokeWidth="2"
                            />
                            <circle
                              className="roadmap-progress-ring"
                              cx="18"
                              cy="18"
                              r="15"
                              fill="none"
                              stroke="rgba(255,255,255,0.9)"
                              strokeWidth="2.25"
                              strokeLinecap="round"
                              style={{ opacity: 0, transformOrigin: "18px 18px" }}
                            />
                          </svg>
                          <span className="relative w-2 h-2 rounded-full bg-white" />
                        </>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${
                      side === "left" ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div
                      className={`roadmap-card group relative p-6 rounded-2xl glass opacity-0 transition-transform duration-500 hover:-translate-y-1 ${
                        isCompleted ? "hover:border-green-500/40" : "hover:border-primary/40"
                      }`}
                    >
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                            isCompleted ? "via-green-400" : "via-primary"
                          } to-transparent`}
                        />
                      </div>

                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-3 ${
                          isCompleted ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"
                        }`}
                      >
                        {isCompleted ? (
                          "Completed"
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            In Progress
                          </>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
