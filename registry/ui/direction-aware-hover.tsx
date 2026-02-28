"use client"

import { cn } from "@/lib/utils"
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

interface DirectionAwareHoverProps {
  imageUrl: string
  children: React.ReactNode | string
  childrenClassName?: string
  imageClassName?: string
  className?: string
}

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: DirectionAwareHoverProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left")

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return

    const direction = getDirection(event, ref.current)
    console.log("direction", direction)
    switch (direction) {
      case 0:
        setDirection("top")
        break
      case 1:
        setDirection("right")
        break
      case 2:
        setDirection("bottom")
        break
      case 3:
        setDirection("left")
        break
      default:
        setDirection("left")
        break
    }
  }

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect()
    const x = ev.clientX - left - w / 2
    const y = ev.clientY - top - h / 2
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4
    return d
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative",
        className,
      )}
    >
      <div className="w-full h-full absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10 hidden group-hover/card:block transition-all duration-500" />
        <img
          alt="image"
          className={cn(
            "h-full w-full object-cover scale-[1.15]",
            imageClassName,
          )}
          src={imageUrl}
        />
      </div>
      <div className="w-full h-full absolute inset-0 z-10 flex items-center justify-center">
        <div
          className={cn(
            "text-white absolute transition-all duration-500",
            direction === "top"
              ? "-translate-y-full group-hover/card:translate-y-0"
              : direction === "bottom"
              ? "translate-y-full group-hover/card:translate-y-0"
              : direction === "left"
              ? "-translate-x-full group-hover/card:translate-x-0"
              : direction === "right"
              ? "translate-x-full group-hover/card:translate-x-0"
              : "",
            childrenClassName,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
