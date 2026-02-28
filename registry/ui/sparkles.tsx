"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

export const SparklesCore = (props: {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
}) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    particleDensity,
    particleColor,
  } = props

  return (
    <div className={cn("opacity-0", className)} id={id}>
        {/* Placeholder for canvas based particle system */}
        <div className="w-full h-full bg-transparent"></div>
    </div>
  )
}
