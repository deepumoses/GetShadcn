"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

interface Toast {
  id: string
  message: string
}

interface GooeyToastProps {
  toasts: Toast[]
  onDismiss: (id: string) => void
  variant?: "gooey-stack" | "swipe-to-dismiss" | "progress-shrink" | "center-pop" | "minimalist-dot"
}

function GooeyStack({ toasts, onDismiss }: GooeyToastProps) {
    return (
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast, index) => (
            <motion.div
              key={toast.id}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                mass: 1,
              }}
              style={{ zIndex: toasts.length - index }}
              className="bg-white border rounded-lg shadow-lg p-4 pointer-events-auto"
            >
              <div className="flex justify-between items-center gap-4">
                <span>{toast.message}</span>
                <button
                  onClick={() => onDismiss(toast.id)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

function SwipeToDismiss({ toasts, onDismiss }: GooeyToastProps) {
    return (
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) {
                  onDismiss(toast.id)
                }
              }}
              className="bg-white border rounded-lg shadow-lg p-4 pointer-events-auto cursor-grab active:cursor-grabbing"
            >
              <span>{toast.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

function ProgressShrink({ toasts, onDismiss }: GooeyToastProps) {
    return (
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white border rounded-lg shadow-lg overflow-hidden pointer-events-auto"
            >
              <div className="p-4 pr-12">
                <span>{toast.message}</span>
                <button
                  onClick={() => onDismiss(toast.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                onAnimationComplete={() => onDismiss(toast.id)}
                className="h-1 bg-primary absolute bottom-0 left-0"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

function CenterPop({ toasts, onDismiss }: GooeyToastProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              className="bg-white border rounded-xl shadow-2xl p-6 pointer-events-auto min-w-[300px] text-center"
            >
              <h3 className="font-semibold mb-2">Notification</h3>
              <p className="text-gray-600 mb-4">{toast.message}</p>
              <button
                onClick={() => onDismiss(toast.id)}
                className="w-full py-2 bg-primary text-primary-foreground rounded-lg"
              >
                Dismiss
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

function MinimalistDot({ toasts }: GooeyToastProps) {
    return (
      <div className="fixed top-4 right-4 flex flex-col gap-2 pointer-events-none items-end">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ width: 12, height: 12, borderRadius: 999 }}
              animate={{ width: "auto", height: "auto", borderRadius: 8 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="bg-primary text-primary-foreground overflow-hidden pointer-events-auto"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-3 px-4 whitespace-nowrap"
              >
                {toast.message}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    )
}

export function GooeyToast({ toasts, onDismiss, variant = "gooey-stack" }: GooeyToastProps) {
  if (variant === "gooey-stack") return <GooeyStack toasts={toasts} onDismiss={onDismiss} />
  if (variant === "swipe-to-dismiss") return <SwipeToDismiss toasts={toasts} onDismiss={onDismiss} />
  if (variant === "progress-shrink") return <ProgressShrink toasts={toasts} onDismiss={onDismiss} />
  if (variant === "center-pop") return <CenterPop toasts={toasts} onDismiss={onDismiss} />
  if (variant === "minimalist-dot") return <MinimalistDot toasts={toasts} onDismiss={onDismiss} />

  return null
}
