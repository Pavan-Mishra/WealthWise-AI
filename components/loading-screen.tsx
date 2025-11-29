"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [shouldRender, setShouldRender] = useState(true)

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 2
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isLoading])

  useEffect(() => {
    if (!isLoading && progress >= 100) {
      const timer = setTimeout(() => setShouldRender(false), 700)
      return () => clearTimeout(timer)
    }
  }, [isLoading, progress])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ${
        !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Minimalist logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center">
            <span className="text-2xl font-semibold text-background">W</span>
          </div>
          {/* Simple pulsing ring */}
          <div className="absolute -inset-3 border border-border rounded-3xl animate-pulse" />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground">WealthWise</h1>
        </div>

        {/* Clean progress bar */}
        <div className="w-48 space-y-3">
          <div className="h-0.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
