"use client"

import { cn } from "@/lib/utils"
import React, {
  useEffect,
  useState,
} from "react"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [currentWord, setCurrentWord] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < words.length) {
        setCurrentWord((prev) => prev + words.charAt(i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [words])

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className=" dark:text-white text-black text-2xl leading-snug tracking-wide">
          {currentWord}
        </div>
      </div>
    </div>
  )
}
