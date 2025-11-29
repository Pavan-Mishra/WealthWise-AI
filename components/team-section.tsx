"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter, Code, Server, Shield } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const teamMembers = [
  {
    name: "Pavan Mishra",
    role: "App Developer",
    initials: "PM",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: ["React Native", "Flutter", "UI/UX"],
    bio: "Building beautiful mobile experiences",
  },
  {
    name: "Ojas Lad",
    role: "Backend Lead",
    initials: "OL",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    skills: ["Node.js", "Python", "AWS"],
    bio: "Architecting scalable systems",
  },
  {
    name: "Vishal Patkal",
    role: "Security & Compliance",
    initials: "VP",
    icon: Shield,
    color: "from-violet-500 to-purple-500",
    skills: ["Cybersecurity", "Compliance", "Audit"],
    bio: "Keeping your data safe",
  },
]

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          rotateX: -15,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
        },
      )
    })
  }, [isVisible])

  const handleCardHover = (index: number, isEntering: boolean) => {
    const card = cardsRef.current[index]
    if (!card) return

    setHoveredIndex(isEntering ? index : null)

    if (isEntering) {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out",
      })

      // Animate other cards to shrink slightly
      cardsRef.current.forEach((otherCard, i) => {
        if (i !== index && otherCard) {
          gsap.to(otherCard, {
            scale: 0.98,
            opacity: 0.7,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      })

      // Reset other cards
      cardsRef.current.forEach((otherCard, i) => {
        if (i !== index && otherCard) {
          gsap.to(otherCard, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })
    }
  }

  return (
    <section id="team" ref={sectionRef} className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 opacity-0 ${isVisible ? "animate-fade-up" : ""}`}>
          <p className="text-sm font-medium text-accent uppercase tracking-wider">Our Team</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Meet the builders</h2>
          <p className="text-muted-foreground max-w-md mx-auto">The passionate team behind WealthWise AI</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="group relative"
              style={{ opacity: 0, transformStyle: "preserve-3d" }}
              onMouseEnter={() => handleCardHover(index, true)}
              onMouseLeave={() => handleCardHover(index, false)}
            >
              {/* Card container */}
              <div className="relative h-[400px] w-full">
                {/* Front of card */}
                <div
                  className={`absolute inset-0 p-8 rounded-2xl bg-secondary/30 border border-border transition-all duration-500 ${hoveredIndex === index ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    {/* Avatar with gradient ring */}
                    <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-[2px] mb-6`}>
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-2xl font-semibold gradient-text-accent">{member.initials}</span>
                      </div>
                      {/* Rotating ring on hover */}
                      <div
                        className="absolute inset-[-4px] rounded-full border-2 border-transparent border-t-accent opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-300"
                        style={{ animationDuration: "3s" }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-accent mb-4">{member.role}</p>

                    {/* Role icon */}
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <member.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Back of card (revealed on hover) */}
                <div
                  className={`absolute inset-0 p-8 rounded-2xl bg-gradient-to-br ${member.color} border border-white/10 transition-all duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                  <div className="h-full flex flex-col justify-between text-white">
                    {/* Top section */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-lg font-semibold">{member.initials}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{member.name}</h3>
                          <p className="text-sm text-white/70">{member.role}</p>
                        </div>
                      </div>

                      <p className="text-white/80 mb-6">{member.bio}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/20 text-white">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3">
                      {[Github, Linkedin, Twitter].map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
