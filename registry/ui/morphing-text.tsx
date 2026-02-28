"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

interface MorphingTextProps {
  className?: string
  texts: string[]
}

export function MorphingText({ className, texts }: MorphingTextProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 2000)
    return () => clearInterval(intervalId)
  }, [texts])

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center text-center",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[index]}
          initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-4xl font-bold"
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
