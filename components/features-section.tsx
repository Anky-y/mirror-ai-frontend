import { Card, CardContent } from "@/components/ui/card"
import { Clock, Globe, Bell, Zap } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "AI-Powered Scheduling",
    description: "Smart algorithms automatically find the best meeting times for all participants across time zones.",
  },
  {
    icon: Globe,
    title: "Time Zone Detection",
    description: "Automatically detects and converts time zones to prevent scheduling conflicts and confusion.",
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Intelligent reminder system that adapts to user preferences and reduces no-shows by 80%.",
  },
  {
    icon: Zap,
    title: "Integration Ready",
    description: "Seamlessly connects with your existing calendar, CRM, and communication tools.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Powerful Features</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to automate your appointment scheduling
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                  <feature.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
