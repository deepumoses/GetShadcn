"use client"

import React, { CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[--color-1] via-[--color-5] to-[--color-1] bg-[length:200%_100%] px-8 font-medium text-white transition-colors [animation-duration:2s] [animation-iteration-count:infinite] [animation-name:rainbow] [animation-timing-function:linear] hover:bg-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}
