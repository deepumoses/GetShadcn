"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useRef, useState } from "react"

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const parentRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-[40rem] bg-neutral-950 relative flex items-center w-full justify-center overflow-hidden",
        className,
      )}
    >
      {/* Collision logic would go here, involving particle tracking and boundary checks */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-neutral-800 opacity-20" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
