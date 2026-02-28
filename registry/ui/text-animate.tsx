"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react"
import React from "react"

type AnimationType = "text" | "word" | "character" | "line"

interface TextAnimateProps extends MotionProps {
  /**
   * The text content to animate
   */
  children: string
  /**
   * The class name to be applied to the component
   */
  className?: string
  /**
   * The class name to be applied to the segment
   */
  segmentClassName?: string
  /**
   * The delay before the animation starts
   */
  delay?: number
  /**
   * The duration of the animation
   */
  duration?: number
  /**
   * Custom motion variants for the animation
   */
  variants?: Variants
  /**
   * The element type to render
   */
  as?: React.ElementType
  /**
   * How to split the text ("text", "word", "character")
   */
  by?: AnimationType
  /**
   * Whether to start animation when component enters viewport
   */
  startOnView?: boolean
  /**
   * Whether to animate only once
   */
  once?: boolean
  /**
   * The animation preset to use
   */
  animation?: "blurIn" | "blurInUp" | "blurInDown" | "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleUp" | "scaleDown"
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

export function TextAnimate({
  children,
  delay = 0,
  duration = 0.3,
  className,
  segmentClassName,
  variants,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion.create(Component)

  let segments: string[] = []
  switch (by) {
    case "word":
      segments = children.split(" ")
      break
    case "character":
      segments = children.split("")
      break
    case "line":
      segments = children.split("\n")
      break
    case "text":
    default:
      segments = [children]
      break
  }

  const getVariants = (): Variants => {
    if (variants) return variants

    const baseVariants = { ...defaultItemVariants }

    switch (animation) {
      case "blurIn":
        baseVariants.hidden = { opacity: 0, filter: "blur(10px)" }
        baseVariants.show = { opacity: 1, filter: "blur(0px)", transition: { duration } }
        baseVariants.exit = { opacity: 0, filter: "blur(10px)", transition: { duration } }
        break
      case "blurInUp":
        baseVariants.hidden = { opacity: 0, filter: "blur(10px)", y: 20 }
        baseVariants.show = { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, filter: "blur(10px)", y: 20, transition: { duration } }
        break
      case "blurInDown":
        baseVariants.hidden = { opacity: 0, filter: "blur(10px)", y: -20 }
        baseVariants.show = { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, filter: "blur(10px)", y: -20, transition: { duration } }
        break
      case "slideUp":
        baseVariants.hidden = { opacity: 0, y: 20 }
        baseVariants.show = { opacity: 1, y: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, y: 20, transition: { duration } }
        break
      case "slideDown":
        baseVariants.hidden = { opacity: 0, y: -20 }
        baseVariants.show = { opacity: 1, y: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, y: -20, transition: { duration } }
        break
      case "slideLeft":
        baseVariants.hidden = { opacity: 0, x: 20 }
        baseVariants.show = { opacity: 1, x: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, x: 20, transition: { duration } }
        break
      case "slideRight":
        baseVariants.hidden = { opacity: 0, x: -20 }
        baseVariants.show = { opacity: 1, x: 0, transition: { duration } }
        baseVariants.exit = { opacity: 0, x: -20, transition: { duration } }
        break
      case "scaleUp":
        baseVariants.hidden = { opacity: 0, scale: 0.5 }
        baseVariants.show = { opacity: 1, scale: 1, transition: { duration } }
        baseVariants.exit = { opacity: 0, scale: 0.5, transition: { duration } }
        break
      case "scaleDown":
        baseVariants.hidden = { opacity: 0, scale: 1.5 }
        baseVariants.show = { opacity: 1, scale: 1, transition: { duration } }
        baseVariants.exit = { opacity: 0, scale: 1.5, transition: { duration } }
        break
      case "fadeIn":
      default:
        baseVariants.hidden = { opacity: 0 }
        baseVariants.show = { opacity: 1, transition: { duration } }
        baseVariants.exit = { opacity: 0, transition: { duration } }
        break
    }

    return baseVariants
  }

  const finalVariants = getVariants()
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <MotionComponent
        className={cn("inline-block", className)}
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        exit="exit"
        viewport={{ once }}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${i}-${segment}`}
            className={cn("inline-block", segment === " " ? "w-[0.3em]" : "", segmentClassName)}
            variants={finalVariants}
          >
            {segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  )
}
