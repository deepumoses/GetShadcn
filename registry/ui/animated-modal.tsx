"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  variant?: "scale-up" | "slide-in" | "curtain-reveal"
  className?: string
}

function ScaleUp({ isOpen, onClose, children, className }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={cn("fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl p-6 z-50 min-w-[300px]", className)}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

function SlideIn({ isOpen, onClose, children, className }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-40"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={cn("fixed top-0 right-0 h-full bg-white shadow-2xl p-6 z-50 w-full max-w-md", className)}
                    >
                         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

function CurtainReveal({ isOpen, onClose, children, className }: ModalProps) {
    return (
         <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black origin-top"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className={cn("relative z-10 bg-white rounded-lg p-8 max-w-lg w-full m-4", className)}
                    >
                         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export function AnimatedModal({ isOpen, onClose, children, variant = "scale-up", className }: ModalProps) {
    if (variant === "scale-up") return <ScaleUp isOpen={isOpen} onClose={onClose} className={className}>{children}</ScaleUp>
    if (variant === "slide-in") return <SlideIn isOpen={isOpen} onClose={onClose} className={className}>{children}</SlideIn>
    if (variant === "curtain-reveal") return <CurtainReveal isOpen={isOpen} onClose={onClose} className={className}>{children}</CurtainReveal>

    return null
}
