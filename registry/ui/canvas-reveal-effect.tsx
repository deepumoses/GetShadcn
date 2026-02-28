"use client"

import { cn } from "@/lib/utils"
import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react"
import { useMotionValue, motion, useMotionTemplate } from "motion/react"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <DotMatrix
          colors={colors ?? [[0, 255, 255]]}
          dotSize={dotSize ?? 3}
          opacities={
            opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
          }
          shader={`
              float animation_speed_factor = ${animationSpeed.toFixed(1)};
              float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2);
              return vec4(vec3(intro_offset), 1.0);
            `}
          center={["x", "y"]}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      )}
    </div>
  )
}

const DotMatrix = ({
  colors,
  dotSize,
  opacities,
  shader,
  center,
}: {
  colors: number[][]
  dotSize: number
  opacities: number[]
  shader: string
  center: ("x" | "y")[]
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const render = () => {
      // Basic rendering loop placeholder
      // Full shader implementation is complex and requires WebGL
      // This is a simplified 2D canvas fallback for the visual effect
      const width = canvas.width
      const height = canvas.height
      ctx.clearRect(0, 0, width, height)

      const time = performance.now() / 1000

      for(let i = 0; i < 50; i++) {
          const x = Math.random() * width
          const y = Math.random() * height
          const color = colors[Math.floor(Math.random() * colors.length)]

          ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
          ctx.fillRect(x, y, dotSize, dotSize)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="h-full w-full" />
}
