"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionValue } from "motion/react"
import React, { useState, useEffect } from "react"

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: number[]
  title?: string
  description?: string
  className?: string
}) => {
  return (
    <div className={cn("sticky top-0 h-screen w-full overflow-hidden", className)}>
        {/* Simplified SVG path drawing effect */}
      <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col items-center justify-center relative z-10 h-full">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                {title || "Gemini Effect"}
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                {description || "Scroll to see the effect"}
            </p>
        </div>
    </div>
  )
}
