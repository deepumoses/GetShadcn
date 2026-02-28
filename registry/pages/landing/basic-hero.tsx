"use client"

import React from "react"
import { Button } from "@/components/ui/button"

export default function BasicHeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
                <span>Just shipped v1.0</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Deploy to the cloud with confidence
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white">Get started</Button>
            <Button variant="link" size="lg" className="text-foreground gap-2">
              Learn more <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-xl bg-card/5 p-2 ring-1 ring-inset ring-border lg:rounded-2xl lg:p-4">
              <div className="h-[400px] w-[600px] rounded-md shadow-2xl ring-1 ring-border bg-muted overflow-hidden relative">
                 <div className="absolute top-0 w-full h-8 bg-background border-b flex items-center px-4 space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                 </div>
                 <div className="p-8 pt-12 font-mono text-sm text-muted-foreground">
                    <p><span className="text-green-500">~</span> npx create-react-app my-app</p>
                    <p className="mt-2 text-gray-500">Creating a new React app in /Users/dev/my-app.</p>
                    <p className="mt-2 text-gray-500">Installing packages. This might take a couple of minutes...</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
