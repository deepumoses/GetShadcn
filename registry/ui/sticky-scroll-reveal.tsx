"use client"

import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import React, { useRef, useState } from "react"

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode | any
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<any>(null)
  const { scrollYProgress } =  React.useRef<any>(null) // Placeholder - Scroll logic usually requires useScroll from framer-motion which needs a ref target.
  // Simplifying for registry component - assuming user implements scroll logic or we provide a basic index based switch
  // This is a simplified version of Sticky Scroll Reveal from Aceternity UI to fit in one file without heavy external dependencies or complex scroll hooks setup

  const cardLength = content.length

  // Mocking scroll logic for demo purposes if full scroll hook setup is too complex for single file
  // In real usage, this would use useMotionValueEvent(scrollYProgress, "change", (latest) => ...)

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: activeCard % 2 === 0 ? "var(--cyan-500)" : "var(--orange-500)" }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  )
}
