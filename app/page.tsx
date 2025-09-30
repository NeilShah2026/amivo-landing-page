"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <main className="min-h-screen flex flex-col px-6 sm:px-8 lg:px-12 py-8 sm:py-10 relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[15%] -right-40 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] -left-40 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />
      </div>

      <header className="max-w-[1400px] mx-auto w-full flex items-center justify-between mb-12 sm:mb-16 lg:mb-20">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-sm">
            <span className="text-accent-foreground text-base font-semibold tracking-tight">A</span>
          </div>
          <span className="text-xl sm:text-2xl font-serif tracking-tight text-foreground">Amivo</span>
        </div>
        <div className="text-sm text-muted-foreground tracking-wide">Boston, MA</div>
      </header>

      <div className="flex-1 flex items-center justify-center py-4 sm:py-8">
        <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-12 sm:gap-16 lg:gap-20 items-center">
          <div className="space-y-8 sm:space-y-10 text-center lg:text-left">
            <div className="space-y-5 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-balance leading-[1.1] text-foreground">
                Connections that matter, over coffee.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                Amivo makes it easy to meet new people for authentic, face-to-face conversations. No feeds, no noise —
                just meaningful connections that support your professional growth and community.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start pt-2">
              {submitted ? (
                <div className="text-accent text-base font-medium py-7 px-10">Thanks! We'll be in touch soon.</div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-6 py-4 rounded-full border border-border/60 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-200 text-base"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="text-base px-10 py-7 h-auto font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl shadow-lg whitespace-nowrap"
                  >
                    Join Waitlist
                  </Button>
                </form>
              )}
            </div>

            <p className="text-sm text-muted-foreground pt-6 sm:pt-8 tracking-wide">
              Launching first in Boston. Be one of the first to join.
            </p>
          </div>

          <div className="space-y-7 sm:space-y-8 max-w-lg mx-auto lg:mx-0 w-full">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-accent text-center lg:text-left">
              How It Works
            </h2>

            <div className="space-y-7 sm:space-y-8">
              <div className="flex gap-4 sm:gap-5 items-start group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <span className="text-base sm:text-lg font-semibold text-accent">1</span>
                </div>
                <div className="space-y-2 pt-1 sm:pt-1.5">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                    Tell us about yourself
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Set up your profile with your background, goals, and availability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5 items-start group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <span className="text-base sm:text-lg font-semibold text-accent">2</span>
                </div>
                <div className="space-y-2 pt-1 sm:pt-1.5">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">
                    Get matched intentionally
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We connect you with someone nearby who shares your interests or complements your expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5 items-start group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-accent/15 group-hover:scale-105">
                  <span className="text-base sm:text-lg font-semibold text-accent">3</span>
                </div>
                <div className="space-y-2 pt-1 sm:pt-1.5">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">Meet over coffee</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Pick a time, meet in person, and have a real conversation that helps you grow.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm italic pt-6 sm:pt-8 text-center lg:text-left leading-relaxed">
              Simple, warm, and human — because real networking happens face to face.
            </p>
          </div>
        </div>
      </div>

      <footer className="max-w-[1400px] mx-auto w-full pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-border/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="tracking-wide">© 2025 Amivo. All rights reserved.</p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-foreground transition-colors duration-200 tracking-wide">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors duration-200 tracking-wide">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
