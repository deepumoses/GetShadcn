"use client"

import { cn } from "@/lib/utils"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import React from "react"

interface HighlighterProps {
  children: React.ReactNode
  className?: string
  refresh?: boolean
  delay?: number
  duration?: number
}

export function Highlighter({
  children,
  className,
  refresh = false,
  delay = 0,
  duration = 0.5,
}: HighlighterProps) {
  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    setKey((prev) => prev + 1)
  }, [refresh])

  return (
    <motion.span
      key={key}
      className={cn("relative inline-block px-1", className)}
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      style={{
        backgroundImage: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 88%",
      }}
    >
      <span className="relative z-10">{children}</span>
    </motion.span>
  )
}
