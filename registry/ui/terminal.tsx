"use client"

import {
  motion,
  MotionProps,
  HTMLMotionProps,
} from "motion/react"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface TerminalProps {
  children: React.ReactNode
  className?: string
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "z-0 h-full w-full rounded-xl border bg-neutral-950 text-white shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
        <div className="flex flex-col gap-1 font-mono text-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

interface AnimatedSpanProps extends MotionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSpanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay / 1000, ease: "easeIn" }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface TypingAnimationProps extends MotionProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
}

export function TerminalTypingAnimation({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}: TypingAnimationProps) {
  if (Component !== "span") {
    return (
      <motion.div
        className={cn("font-mono text-sm font-normal tracking-tight", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0, delay: delay / 1000 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.span
      className={cn("font-mono text-sm font-normal tracking-tight", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0, delay: delay / 1000 }}
      {...props}
    >
      {children}
    </motion.span>
  )
}
