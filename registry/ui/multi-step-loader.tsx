"use client"

import React, { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "motion/react"
import { cn } from "@/lib/utils"

export const MultiStepLoader = ({
  loadingStates,
  loading,
  duration = 2000,
  loop = true,
}: {
  loadingStates: {
    text: string
  }[]
  loading?: boolean
  duration?: number
  loop?: boolean
}) => {
  const [currentState, setCurrentState] = React.useState(0)

  useEffect(() => {
    if (!loading) {
      setCurrentState(0)
      return
    }
    const timeout = setTimeout(() => {
      setCurrentState((prevState) =>
        loop
          ? prevState === loadingStates.length - 1
            ? 0
            : prevState + 1
          : Math.min(prevState + 1, loadingStates.length - 1)
      )
    }, duration)

    return () => clearTimeout(timeout)
  }, [currentState, loading, loop, loadingStates.length, duration])

  return (
    <div className="w-full h-full fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-2xl">
      <div className="h-96 relative">
        <div className="h-full flex flex-col justify-center items-start">
            {loadingStates.map((state, index) => (
                <div key={index} className="flex gap-2 items-center my-2">
                    <div className={cn("w-4 h-4 rounded-full border border-neutral-500", index === currentState && "bg-black dark:bg-white")}></div>
                    <span className={cn("text-neutral-500", index === currentState && "text-black dark:text-white font-bold")}>
                        {state.text}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
