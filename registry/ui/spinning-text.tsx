"use client"

import { cn } from "@/lib/utils"
import { motion, Transition, Variants } from "motion/react"
import React, { CSSProperties } from "react"

interface SpinningTextProps {
  children: string | string[]
  style?: CSSProperties
  duration?: number
  className?: string
  reverse?: boolean
  radius?: number
  transition?: Transition
  variants?: {
    container?: Variants
    item?: Variants
  }
}

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
}

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
}

export function SpinningText({
  children,
  style,
  duration = 10,
  className,
  reverse = false,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  const letters = typeof children === "string" ? children.split("") : children
  const totalLetters = letters.length

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration,
  }

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  }

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  }

  return (
    <motion.div
      className={cn("relative", className)}
      style={{
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition}
    >
      {letters.map((letter, index) => (
        <motion.span
          aria-hidden="true"
          key={`${index}-${letter}`}
          variants={itemVariants}
          className="absolute left-1/2 top-1/2 inline-block"
          style={{
            transform: `translate(-50%, -50%) rotate(${
              (index * 360) / totalLetters
            }deg) translateY(-${radius}rem)`,
            transformOrigin: "center",
          }}
        >
          {letter}
        </motion.span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.div>
  )
}
