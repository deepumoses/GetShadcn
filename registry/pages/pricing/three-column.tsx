"use client"

import React, { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function ThreeColumnSaaS() {
  const [isAnnual, setIsAnnual] = useState(true)

  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      href: "#",
      priceMonthly: 15,
      priceAnnual: 12,
      description: "Perfect for small teams and startups looking to get off the ground quickly.",
      features: ['5 Users', '10GB Storage', 'Basic Support', 'Email Integration'],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Business",
      id: "tier-business",
      href: "#",
      priceMonthly: 49,
      priceAnnual: 39,
      description: "Comprehensive features for growing businesses that need more power.",
      features: ['Unlimited Users', '100GB Storage', 'Priority Support', 'Custom Integrations', 'Advanced Analytics'],
      cta: "Upgrade to Business",
      popular: true
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Dedicated support and infrastructure for large-scale operations.",
      features: ['Unlimited Everything', 'Dedicated Success Manager', 'SSO Authentication', 'Custom SLA', 'On-premise Deployment Options'],
      cta: "Contact Sales",
      popular: false
    },
  ]

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Pricing plans for teams of all sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
        </p>

        <div className="mt-16 flex justify-center items-center gap-3">
           <Label htmlFor="billing" className={\`text-sm \${!isAnnual ? 'font-bold' : 'text-muted-foreground'}\`}>Monthly billing</Label>
           <Switch id="billing" checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-indigo-600" />
           <Label htmlFor="billing" className={\`text-sm \${isAnnual ? 'font-bold' : 'text-muted-foreground'}\`}>Annual billing <Badge variant="secondary" className="ml-2 text-[10px] text-green-600 bg-green-100 dark:bg-green-900/30">Save 20%</Badge></Label>
        </div>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <Card key={tier.id} className={\`relative flex flex-col justify-between p-8 \${tier.popular ? 'ring-2 ring-indigo-600 shadow-xl scale-[1.02]' : 'ring-1 ring-border'}\`}>
              <CardHeader className="p-0 mb-6">
                <div className="flex justify-between items-center gap-x-4">
                  <CardTitle className={\`text-lg font-semibold leading-8 \${tier.popular ? 'text-indigo-600' : 'text-foreground'}\`}>
                    {tier.name}
                  </CardTitle>
                  {tier.popular && (
                    <Badge variant="default" className="bg-indigo-600 hover:bg-indigo-500 rounded-full px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </Badge>
                  )}
                </div>
                <CardDescription className="mt-4 text-sm leading-6 text-muted-foreground">
                  {tier.description}
                </CardDescription>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                     ${isAnnual ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                </div>
                <Button
                   variant={tier.popular ? "default" : "outline"}
                   className={\`mt-6 w-full \${tier.popular ? 'bg-indigo-600 hover:bg-indigo-500' : ''}\`}
                >
                   {tier.cta}
                </Button>
              </CardHeader>

              <Separator className="my-6" />

              <CardContent className="p-0">
                <ul role="list" className="space-y-3 text-sm leading-6 text-muted-foreground">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
