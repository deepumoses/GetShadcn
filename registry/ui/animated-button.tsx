"use client"

import * as React from "react"
import { motion, AnimatePresence, HTMLMotionProps, Easing } from "motion/react"
import { cn } from "@/lib/utils"
import { useMagnetic } from "@/registry/hooks/use-magnetic"
import { Loader2, ArrowRight } from "lucide-react"

// Use HTMLMotionProps instead of React.ButtonHTMLAttributes to avoid conflicts with onDrag
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "magnetic" | "shine" | "loading-morph" | "expandable-icon" | "3d-press" | "default"
  children: React.ReactNode
  isLoading?: boolean
}

// Sub-component for Magnetic Button to encapsulate hook logic safely
const MagneticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  const { ref: magneticRef, x, y, onMouseMove, onMouseLeave } = useMagnetic({ damp: 30, stiffness: 400 })

  // Merge refs if needed
  React.useImperativeHandle(ref, () => magneticRef.current as HTMLButtonElement)

  return (
    <motion.button
      ref={magneticRef}
      className={cn(
        "relative px-6 py-2 bg-primary text-primary-foreground rounded-md",
        className
      )}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </motion.button>
  )
})
MagneticButton.displayName = "MagneticButton"

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, isLoading, ...props }, ref) => {

    const shineVariants = {
      hover: {
        x: ["-100%", "200%"],
        transition: {
          duration: 0.6,
          ease: "linear" as Easing,
          repeat: Infinity,
          repeatDelay: 1,
        },
      },
    }

    const expandableIconVariants = {
      initial: { width: 0, opacity: 0 },
      hover: { width: "auto", opacity: 1, transition: { duration: 0.2 } },
    }

    const threeDPressVariants = {
      tap: { y: 2, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    }

    const loadingMorphVariants = {
      initial: { width: "auto", borderRadius: "0.5rem" },
      loading: {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        transition: { duration: 0.3 },
      },
    }

    if (variant === "magnetic") {
      return <MagneticButton ref={ref} className={className} {...props}>{children}</MagneticButton>
    }

    if (variant === "shine") {
      return (
        <motion.button
          ref={ref as React.Ref<HTMLButtonElement>} // motion.button accepts ref
          className={cn(
            "relative overflow-hidden px-6 py-2 bg-primary text-primary-foreground rounded-md",
            className
          )}
          initial="initial"
          whileHover="hover"
          {...props}
        >
          <motion.div
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
            variants={shineVariants}
          />
          {children}
        </motion.button>
      )
    }

    if (variant === "loading-morph") {
      return (
        <motion.button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(
            "flex items-center justify-center bg-primary text-primary-foreground overflow-hidden",
            isLoading ? "p-0" : "px-6 py-2",
            className
          )}
          variants={loadingMorphVariants}
          animate={isLoading ? "loading" : "initial"}
          {...props}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Loader2 className="w-5 h-5 animate-spin" />
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      )
    }

    if (variant === "expandable-icon") {
      return (
        <motion.button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(
            "group flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-md",
            className
          )}
          whileHover="hover"
          {...props}
        >
          {children}
          <motion.span
            variants={expandableIconVariants}
            className="overflow-hidden flex items-center"
          >
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.span>
        </motion.button>
      )
    }

    if (variant === "3d-press") {
      return (
        <motion.button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cn(
            "px-6 py-2 bg-primary text-primary-foreground rounded-md shadow-[0_4px_0_rgb(0,0,0)] active:shadow-none transition-shadow",
            className
          )}
          whileTap="tap"
          variants={threeDPressVariants}
          {...props}
        >
          {children}
        </motion.button>
      )
    }

    // Default variant - still use motion.button or fallback to regular button
    // But since ButtonProps extends HTMLMotionProps, we should probably stick to motion.button for consistency
    // However, if we want to fallback to a simpler button, we need to be careful with props spreading
    // Let's stick to motion.button to avoid prop type mismatch issues
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(
          "px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button }
