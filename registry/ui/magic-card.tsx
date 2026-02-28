"use client"

import { useMotionTemplate, useMotionValue, motion } from "motion/react"
import React, { MouseEvent } from "react"

import { cn } from "@/lib/utils"

export interface MagicCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   * */
  children?: React.ReactNode

  /**
   * @default ""
   * @type string
   * @description
   * The class name of the container
   * */
  className?: string

  /**
   * @default "rgba(255,255,255,0.1)"
   * @type string
   * @description
   * The background gradient color
   * */
  gradientColor?: string

  /**
   * @default 200
   * @type number
   * @description
   * The size of the gradient
   * */
  gradientSize?: number

  /**
   * @default 0.8
   * @type number
   * @description
   * The opacity of the gradient
   * */
  gradientOpacity?: number
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  function handleMouseLeave() {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex size-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border text-black dark:text-white",
        className,
      )}
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 100%
            )
          `,
          opacity: gradientOpacity,
        }}
      />
    </div>
  )
}
