"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface TypingAnimationProps {
  children: string
  className?: string
  duration?: number
  delay?: number
  as?: React.ElementType
  startOnView?: boolean
}

export function TypingAnimation({
  children,
  className,
  duration = 100,
  delay = 0,
  as: Component = "div",
  startOnView = true,
  ...props
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setStarted(true)
      }, delay)
      return () => clearTimeout(startTimeout)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStarted(true)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById(`typing-animation-${children}`)
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [delay, startOnView, children])

  useEffect(() => {
    if (!started) return

    let i = 0
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [children, duration, started])

  return (
    <Component
      id={`typing-animation-${children}`}
      className={cn(
        "font-display text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
      {...props}
    >
      {displayedText}
    </Component>
  )
}
