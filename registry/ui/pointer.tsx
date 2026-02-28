"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"

interface PointerProps {
  children: React.ReactNode
  className?: string
  title?: string
}

export const Pointer = ({ children, className, title }: PointerProps) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [isInside, setIsInside] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect())
    }
  }, [])

  return (
    <div
      onMouseMove={(e) => {
        if (rect) {
          const scrollX = window.scrollX
          const scrollY = window.scrollY
          x.set(e.clientX - rect.left + scrollX)
          y.set(e.clientY - rect.top + scrollY)
        }
      }}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
      ref={ref}
      className={cn("relative cursor-none", className)}
    >
      <AnimatePresence>
        {isInside && (
          <motion.div
            className="pointer-events-none absolute z-50 rounded-full bg-blue-500 px-2 py-1 text-xs text-white opacity-0"
            style={{
              x: x,
              y: y,
              pointerEvents: "none",
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 16 16"
              className="absolute -left-4 -top-4 h-6 w-6 -rotate-[70deg] transform stroke-blue-600 text-blue-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
            </svg>
            <div className="relative ml-2 rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
              {title || "Pointer"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  )
}
