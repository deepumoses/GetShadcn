"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function WaitlistHero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    toast.success("Joined waitlist!", { description: \`\${email} has been added to the queue.\` })
    setEmail("")
  }

  return (
    <div className="bg-background relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
             <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-border hover:ring-foreground/50 transition-colors">
                Announcing our next generation platform.{' '}
                <a href="#" className="font-semibold text-primary">
                   <span className="absolute inset-0" aria-hidden="true" />
                   Read more <span aria-hidden="true">&rarr;</span>
                </a>
             </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">developer tools</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get early access to the most powerful suite of development tools ever created. Join thousands of other developers on the waitlist today.
          </p>
          <div className="mt-10 max-w-md mx-auto relative border rounded-2xl p-6 bg-card shadow-sm">
             <h3 className="text-left font-semibold text-lg mb-2 text-foreground">Secure your spot</h3>
             <p className="text-left text-sm text-muted-foreground mb-4">Currently <span className="font-bold text-foreground">14,204</span> people ahead of you.</p>
             <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="text-left">
                   <Label htmlFor="email" className="sr-only">Email address</Label>
                   <Input
                     id="email"
                     type="email"
                     placeholder="Enter your email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                     className="h-12 w-full min-w-0"
                   />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 shadow-md">Join Waitlist</Button>
             </form>
             <p className="text-xs text-muted-foreground mt-4 text-center">We care about your data in our privacy policy.</p>
          </div>

          <div className="mt-14 flex items-center justify-center gap-x-8 text-muted-foreground grayscale opacity-50">
             {/* Simple Logo placeholders */}
             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="currentColor"><text x="10" y="20" font-family="sans-serif" font-weight="bold" font-size="20">Acme Corp</text></svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="currentColor"><text x="10" y="20" font-family="sans-serif" font-weight="bold" font-size="20">Global Inc</text></svg>
             <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" viewBox="0 0 100 30" fill="currentColor"><text x="10" y="20" font-family="sans-serif" font-weight="bold" font-size="20">TechFlow</text></svg>
          </div>
        </div>
      </div>
    </div>
  )
}
