"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform } from "motion/react"
import { cn } from "@/lib/utils"
import { Maximize2, X } from "lucide-react"

interface BentoCardProps {
  variant?: "glow" | "expansion" | "widget" | "glass" | "tilt"
  className?: string
  children: React.ReactNode
}

function GlowCard({ className, children }: BentoCardProps) {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        cardRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`)
        cardRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`)
      }
    }

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300",
          className
        )}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
}

function ExpansionCard({ className, children }: BentoCardProps) {
    const [isExpanded, setIsExpanded] = React.useState(false)
    return (
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 cursor-pointer",
          isExpanded ? "fixed inset-4 z-50 overflow-y-auto" : "h-full",
          className
        )}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div layoutId="expand-content">
          <div className="flex justify-between items-start mb-4">
            {children}
            {isExpanded ? (
              <X className="w-5 h-5 text-gray-500" />
            ) : (
              <Maximize2 className="w-5 h-5 text-gray-500" />
            )}
          </div>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600"
            >
              <p>Additional detailed content revealed on expansion...</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    )
}

function WidgetCard({ className, children }: BentoCardProps) {
    return (
      <motion.div
        whileHover="hover"
        className={cn(
          "relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6",
          className
        )}
      >
        <div className="mb-4">{children}</div>
        <div className="h-32 flex items-end justify-between gap-1 mt-auto">
          {[40, 70, 50, 90, 60, 80].map((height, i) => (
            <motion.div
              key={i}
              className="w-full bg-primary/20 rounded-t-sm"
              variants={{
                hover: { height: `${height}%`, backgroundColor: "rgb(var(--primary))" },
              }}
              initial={{ height: "20%" }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>
    )
}

function GlassCard({ className, children }: BentoCardProps) {
    return (
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className={cn(
          "backdrop-blur-md bg-white/60 border border-white/20 rounded-xl p-6 shadow-xl",
          className
        )}
      >
        {children}
      </motion.div>
    )
}

function TiltCard({ className, children }: BentoCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useTransform(y, [-100, 100], [10, -10])
    const rotateY = useTransform(x, [-100, 100], [-10, 10])

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set(event.clientX - centerX)
      y.set(event.clientY - centerY)
    }

    return (
      <motion.div
        style={{ rotateX, rotateY, perspective: 1000 }}
        onMouseMove={handleMouse}
        onMouseLeave={() => {
          x.set(0)
          y.set(0)
        }}
        className={cn(
          "rounded-xl border border-gray-200 bg-white p-6 transition-all duration-200 ease-out hover:shadow-2xl",
          className
        )}
      >
        {children}
      </motion.div>
    )
}

export function BentoCard({ variant = "glow", className, children }: BentoCardProps) {
  if (variant === "glow") return <GlowCard className={className}>{children}</GlowCard>
  if (variant === "expansion") return <ExpansionCard className={className}>{children}</ExpansionCard>
  if (variant === "widget") return <WidgetCard className={className}>{children}</WidgetCard>
  if (variant === "glass") return <GlassCard className={className}>{children}</GlassCard>
  if (variant === "tilt") return <TiltCard className={className}>{children}</TiltCard>

  return null
}
