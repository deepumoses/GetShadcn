"use client"

import * as React from "react"
import { motion, useInView, Variants } from "motion/react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children?: React.ReactNode
  className?: string
  variant?: "fade-in" | "staggered-list" | "text-highlight"
}

function FadeIn({ children, className }: ScrollRevealProps) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function StaggeredList({ children, className }: ScrollRevealProps) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn("space-y-4", className)}
        >
            {React.Children.map(children, (child) => (
                <motion.li variants={itemVariants}>
                    {child}
                </motion.li>
            ))}
        </motion.ul>
    )
}

function TextHighlight({ children, className }: ScrollRevealProps) {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref} className={cn("relative inline-block px-1 mx-1", className)}>
            <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="absolute inset-0 bg-yellow-200 -z-10 origin-left skew-y-1"
            />
            {children}
        </span>
    )
}

export function ScrollReveal({ children, className, variant = "fade-in" }: ScrollRevealProps) {
    if (variant === "fade-in") return <FadeIn className={className}>{children}</FadeIn>
    if (variant === "staggered-list") return <StaggeredList className={className}>{children}</StaggeredList>
    if (variant === "text-highlight") return <TextHighlight className={className}>{children}</TextHighlight>

    return null
}
