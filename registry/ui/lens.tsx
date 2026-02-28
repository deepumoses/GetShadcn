"use client"

import {
  AnimatePresence,
  motion,
  MotionProps,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "motion/react"
import React, { useRef, useState } from "react"

import { cn } from "@/lib/utils"

interface LensProps {
  children: React.ReactNode
  zoomFactor?: number
  lensSize?: number
  isStatic?: boolean
  position?: { x: number; y: number }
  hovering?: boolean
  setHovering?: (hovering: boolean) => void
}

export const Lens = ({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 200, y: 150 },
  hovering,
  setHovering,
}: LensProps) => {
  const [isHoveringState, setIsHoveringState] = useState(false)
  const mousePosition = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const isHovering = hovering ?? isHoveringState
  const setIsHovering = setHovering ?? setIsHoveringState

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mousePosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative z-20 overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {isStatic ? (
        <div
          style={{
            position: "absolute",
            left: position.x - lensSize / 2,
            top: position.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: "50%",
            backgroundColor: "white",
            mixBlendMode: "difference",
            pointerEvents: "none",
          }}
        />
      ) : (
        isHovering && (
          <LensMagnifier
            mousePosition={mousePosition}
            containerRef={containerRef}
            zoomFactor={zoomFactor}
            lensSize={lensSize}
          />
        )
      )}
    </div>
  )
}

const LensMagnifier = ({
  mousePosition,
  containerRef,
  zoomFactor,
  lensSize,
}: {
  mousePosition: React.MutableRefObject<{ x: number; y: number }>
  containerRef: React.RefObject<HTMLDivElement>
  zoomFactor: number
  lensSize: number
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const updatePosition = () => {
      if (mousePosition.current) {
        setPosition({ ...mousePosition.current })
      }
      requestAnimationFrame(updatePosition)
    }
    updatePosition()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "absolute",
        left: position.x - lensSize / 2,
        top: position.y - lensSize / 2,
        width: lensSize,
        height: lensSize,
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: -position.x * zoomFactor + lensSize / 2,
          top: -position.y * zoomFactor + lensSize / 2,
          width: containerRef.current?.offsetWidth
            ? containerRef.current.offsetWidth * zoomFactor
            : 0,
          height: containerRef.current?.offsetHeight
            ? containerRef.current.offsetHeight * zoomFactor
            : 0,
          transformOrigin: "0 0",
        }}
      >
        {/* We need to clone the children here to show magnified version */}
        {/* In a real implementation we might pass a render prop or clone children */}
        <div className="w-full h-full bg-white/10 backdrop-blur-sm" />
      </div>
    </motion.div>
  )
}
