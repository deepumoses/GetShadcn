"use client"

import { useMotionValue, useSpring } from "motion/react"
import { MouseEvent, useRef } from "react"

export function useMagnetic(options: { damp?: number; stiffness?: number } = {}) {
  const { damp = 30, stiffness = 400 } = options

  const ref = useRef<HTMLButtonElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness, damping: damp, mass: 1 })
  const mouseY = useSpring(y, { stiffness, damping: damp, mass: 1 })

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()

    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)

    x.set(middleX)
    y.set(middleY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return { ref, x: mouseX, y: mouseY, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave }
}
