"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, Variants } from "motion/react"

import { cn } from "@/lib/utils"

interface HyperTextProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
  startOnView?: boolean
  animateOnHover?: boolean
  characterSet?: string[]
}

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
)

const getRandomInt = (max: number) => Math.floor(Math.random() * max)

export function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET as string[],
  ...props
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState(children.split(""))
  const [isAnimating, setIsAnimating] = useState(false)
  const iterationCount = useRef(0)
  const elementRef = useRef<HTMLElement>(null)

  const handleAnimation = () => {
    if (isAnimating) return

    setIsAnimating(true)
    iterationCount.current = 0

    const maxIterations = children.length
    const intervalDuration = duration / maxIterations

    const interval = setInterval(() => {
      setDisplayText((currentText) =>
        currentText.map((letter, i) => {
          if (letter === " ") return letter
          if (i < iterationCount.current) {
            return children[i]
          }
          return characterSet[getRandomInt(characterSet.length)]
        }),
      )

      if (iterationCount.current >= maxIterations) {
        clearInterval(interval)
        setIsAnimating(false)
      }

      iterationCount.current += 0.1
    }, intervalDuration)
  }

  // Trigger animation on view
  useEffect(() => {
    if (!startOnView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(handleAnimation, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, startOnView])

  return (
    <Component
      ref={elementRef}
      className={cn("overflow-hidden py-2 text-4xl font-bold", className)}
      onMouseEnter={animateOnHover ? handleAnimation : undefined}
      {...props}
    >
      <AnimatePresence>
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn("inline-block", letter === " " ? "w-3" : "")}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </Component>
  )
}
