"use client"

import { cn } from "@/lib/utils"
import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react"

const TracingBeamContext = createContext<any>(null)

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Simplified tracing beam without heavy scroll logic for now
  // Real implementation requires tracking scroll position and updating SVG path

  return (
    <TracingBeamContext.Provider value={{}}>
      <div
        ref={ref}
        className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
      >
        <div className="absolute -left-4 md:-left-20 top-3 w-[2px] h-full bg-gradient-to-b from-neutral-200 to-neutral-500">
            {/* SVG Path would go here */}
        </div>
        <div className="ml-4 md:ml-0">{children}</div>
      </div>
    </TracingBeamContext.Provider>
  )
}
