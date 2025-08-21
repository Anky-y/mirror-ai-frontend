"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            AI-Powered
            <span className="text-primary"> Appointment </span>
            Scheduling
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Transform your business with intelligent appointment scheduling. Our AI assistant handles bookings,
            reschedules, and customer communications 24/7, so you can focus on what matters most.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={scrollToDemo}>
              Try the Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-r from-primary/5 to-accent/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
