"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { USPSection } from "@/components/usp-section"
import { InnovationSection } from "@/components/innovation-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { ProblemSection } from "@/components/problem-section"
import { CTASection } from "@/components/cta-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Short loading animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <main
        className={`min-h-screen bg-background text-foreground overflow-x-hidden ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}`}
      >
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <AboutSection />
        <USPSection />
        <InnovationSection />
        <RoadmapSection />
        <CTASection />
        <TeamSection />
        <Footer />
      </main>
    </>
  )
}
