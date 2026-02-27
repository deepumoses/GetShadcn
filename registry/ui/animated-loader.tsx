"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  variant?: "circular-spin" | "bouncing-dots" | "progress-bar" | "skeleton"
  className?: string
  color?: string
}

function CircularSpin({ className, color = "currentColor" }: LoaderProps) {
    return (
        <motion.div
            className={cn("w-10 h-10 border-4 border-gray-200 border-t-primary rounded-full", className)}
            style={{ borderTopColor: color !== "currentColor" ? color : undefined }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
    )
}

function BouncingDots({ className, color = "currentColor" }: LoaderProps) {
    return (
        <div className={cn("flex gap-2", className)}>
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-3 h-3 bg-primary rounded-full"
                    style={{ backgroundColor: color !== "currentColor" ? color : undefined }}
                    animate={{ y: [-5, 5, -5] }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    )
}

function ProgressBar({ className, color = "currentColor" }: LoaderProps) {
    return (
        <div className={cn("w-full h-2 bg-gray-100 rounded-full overflow-hidden", className)}>
            <motion.div
                className="h-full bg-primary"
                style={{ backgroundColor: color !== "currentColor" ? color : undefined }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    )
}

function Skeleton({ className }: LoaderProps) {
    return (
        <div className={cn("w-full h-24 bg-gray-100 rounded-md overflow-hidden relative", className)}>
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}

export function AnimatedLoader({ variant = "circular-spin", className, color }: LoaderProps) {
    if (variant === "circular-spin") return <CircularSpin className={className} color={color} />
    if (variant === "bouncing-dots") return <BouncingDots className={className} color={color} />
    if (variant === "progress-bar") return <ProgressBar className={className} color={color} />
    if (variant === "skeleton") return <Skeleton className={className} color={color} />
    return null
}
