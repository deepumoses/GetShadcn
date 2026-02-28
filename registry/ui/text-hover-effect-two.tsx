"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const TextHoverEffectTwo = ({
  text,
  duration,
}: {
  text: string
  duration?: number
  automatic?: boolean
}) => {
  return (
    <div className={cn("text-center")}>
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 opacity-20 hover:opacity-100 transition-opacity duration-500">
            {text}
        </h1>
    </div>
  )
}
