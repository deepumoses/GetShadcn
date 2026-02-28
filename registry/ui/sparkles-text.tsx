"use client"

import React, { useEffect, useState } from "react"
import { motion, useAnimation } from "motion/react"

import { cn } from "@/lib/utils"

interface SparklesTextProps {
  children: React.ReactNode
  className?: string
  sparklesCount?: number
  colors?: {
    first: string
    second: string
  }
}

const DEFAULT_COLORS = {
  first: "#9E7AFF",
  second: "#FE8BBB",
}

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min

export const SparklesText = ({
  children,
  className,
  sparklesCount = 10,
  colors = DEFAULT_COLORS,
  ...props
}: SparklesTextProps) => {
  const [sparkles, setSparkles] = useState<Array<{ id: string; x: number; y: number; size: number; duration: number }>>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: sparklesCount }).map(() => ({
        id: Math.random().toString(36).substring(7),
        x: random(0, 100),
        y: random(0, 100),
        size: random(10, 20),
        duration: random(1000, 2000),
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
  }, [sparklesCount])

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <span className="relative z-10">{children}</span>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={Math.random() > 0.5 ? colors.first : colors.second}
          size={sparkle.size}
          style={{
            top: `${sparkle.y}%`,
            left: `${sparkle.x}%`,
            animationDuration: `${sparkle.duration}ms`,
          }}
        />
      ))}
    </div>
  )
}

const Sparkle = ({ size, color, style }: { size: number; color: string; style: React.CSSProperties }) => {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{
        duration: parseFloat(style.animationDuration as string) / 1000,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        ...style,
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        pointerEvents: "none",
        zIndex: 5,
      }}
    />
  )
}
