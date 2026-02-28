"use client"

import { cn } from "@/lib/utils"

interface AnimatedCircularProgressBarProps {
  max?: number
  min?: number
  value?: number
  gaugePrimaryColor?: string
  gaugeSecondaryColor?: string
  className?: string
}

export function AnimatedCircularProgressBar({
  max = 100,
  min = 0,
  value = 0,
  gaugePrimaryColor = "rgb(79 70 229)",
  gaugeSecondaryColor = "rgba(0, 0, 0, 0.1)",
  className,
}: AnimatedCircularProgressBarProps) {
  const circumference = 2 * Math.PI * 45
  const percent = value / (max - min)
  const offset = circumference - percent * circumference

  return (
    <div
      className={cn("relative size-40 text-2xl font-semibold", className)}
      style={
        {
          "--circle-progress": `${percent * 100}%`,
          "--circle-color": gaugePrimaryColor,
          "--circle-bg": gaugeSecondaryColor,
        } as React.CSSProperties
      }
    >
      <svg
        className="size-full -rotate-90 transform stroke-[4px]"
        viewBox="0 0 100 100"
      >
        <circle
          className="text-[var(--circle-bg)]"
          stroke="currentColor"
          cx="50"
          cy="50"
          r="45"
          fill="none"
        />
        <circle
          className="text-[var(--circle-color)] transition-all duration-500 ease-in-out"
          stroke="currentColor"
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {Math.round(value)}
      </div>
    </div>
  )
}
