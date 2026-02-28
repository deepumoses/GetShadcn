"use client"

import React, { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function TwoColumnPricing() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-24 bg-background px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Simple, transparent pricing
        </p>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
          Choose the plan that fits your needs. No hidden fees or surprise charges.
        </p>

        <div className="flex items-center justify-center gap-3 pt-8">
          <Label htmlFor="billing" className={\`text-sm \${!isAnnual ? 'font-bold' : 'text-muted-foreground'}\`}>Monthly</Label>
          <Switch id="billing" checked={isAnnual} onCheckedChange={setIsAnnual} />
          <Label htmlFor="billing" className={\`text-sm \${isAnnual ? 'font-bold' : 'text-muted-foreground'}\`}>Annually <span className="text-green-500 font-normal ml-1">(Save 20%)</span></Label>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
        {/* Free Tier */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Hobby</CardTitle>
            <CardDescription className="text-sm mt-2 text-muted-foreground">For individuals just getting started.</CardDescription>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">$0</span>
              <span className="text-sm font-semibold leading-6 text-muted-foreground">/ forever</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
              {['1 User', 'Up to 5 projects', 'Basic analytics', 'Community support'].map(feature => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full h-12">Get Started for Free</Button>
          </CardFooter>
        </Card>

        {/* Pro Tier */}
        <Card className="flex flex-col justify-between border-primary ring-2 ring-primary shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-center">
               <CardTitle className="text-2xl font-semibold text-primary">Pro</CardTitle>
               <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold leading-5 text-primary">Most Popular</span>
            </div>
            <CardDescription className="text-sm mt-2 text-muted-foreground">For professionals and growing teams.</CardDescription>
            <div className="mt-6 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-foreground">${isAnnual ? '24' : '30'}</span>
              <span className="text-sm font-semibold leading-6 text-muted-foreground">/ month</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm leading-6 text-muted-foreground">
              {['Unlimited users', 'Unlimited projects', 'Advanced custom analytics', '24/7 Priority support', 'Custom domain mapping'].map(feature => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full h-12">Upgrade to Pro</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
