"use client"

import { cn } from "@/lib/utils"
import React from "react"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 bg-neutral-950",
        className,
      )}
    >
      <div className="absolute inset-0 bg-neutral-950 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <div className="absolute inset-0 bg-neutral-950 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* Beams implementation usually involves multiple SVGs or div layers with animations */}
          <div className="absolute h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
        </div>
      </div>
    </div>
  )
}
