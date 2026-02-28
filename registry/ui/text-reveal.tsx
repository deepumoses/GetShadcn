"use client"

import { FC, ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

interface TextRevealProps {
  children: ReactNode
  className?: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <div
      ref={targetRef}
      className={cn(
        "relative z-0 h-[200vh] w-full",
        className,
      )}
    >
      <div className={cn("sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]")}>
        <motion.p
          style={{ opacity }}
          className={"flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"}
        >
          {children}
        </motion.p>
      </div>
    </div>
  )
}
