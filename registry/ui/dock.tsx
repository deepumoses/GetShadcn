"use client"

import { cn } from "@/lib/utils"
import {
  AnimatePresence,
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react"
import Link from "next/link"
import React, { useRef, useState } from "react"

export const Dock = React.forwardRef<
  HTMLDivElement,
  {
    className?: string
    children: React.ReactNode
  }
>(({ className, children }, ref) => {
  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 max-w-full items-end gap-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 border px-4 pb-3",
        className,
      )}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-ignore
            mouseX,
          })
        }
        return child
      })}
    </motion.div>
  )
})
Dock.displayName = "Dock"

export const DockIcon = ({
  size,
  magnification = 60,
  distance = 140,
  mouseX,
  className,
  children,
  ...props
}: {
  size?: number
  magnification?: number
  distance?: number
  mouseX?: MotionValue
  className?: string
  children?: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mouseX || useMotionValue(Infinity), (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  )

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800",
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
