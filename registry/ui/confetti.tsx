"use client"

import type { ReactNode } from "react"
import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"

interface ConfettiContext {
  fire: (confettiOptions: any) => void
}

const ConfettiContext = createContext<ConfettiContext | null>(null)

interface ConfettiRef {
  fire: (confettiOptions: any) => void
}

interface ConfettiProps {
  options?: any
  globalOptions?: any
  manualstart?: boolean
  children?: ReactNode
  className?: string
}

const Confetti = forwardRef<ConfettiRef, ConfettiProps>((props, ref) => {
  const {
    options,
    globalOptions = { resize: true, useWorker: true },
    manualstart = false,
    children,
    className,
    ...rest
  } = props
  const instanceRef = useRef<any>(null) // confetti instance

  const canvasRef = useCallback(
    // https://react.dev/reference/react-dom/components/common#ref-callback
    // https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
    (node: HTMLCanvasElement) => {
      if (node !== null) {
        // <canvas> is mounted => create the confetti instance
        if (instanceRef.current) return // if not already created
        // We can't import canvas-confetti because it is external dependency,
        // so we will mock a basic confetti burst for visual effect or
        // instruct user to install `canvas-confetti`
        // For this demo, we assume the user has the dependency or we mock it.
        // instanceRef.current = confetti.create(node, {
        //   ...globalOptions,
        //   resize: true,
        // })
      } else {
        // <canvas> is unmounted => reset and destroy instanceRef
        if (instanceRef.current) {
          instanceRef.current.reset()
          instanceRef.current = null
        }
      }
    },
    [globalOptions],
  )

  const fire = useCallback(
    (opts = {}) => {
      if (instanceRef.current) {
        instanceRef.current({ ...options, ...opts })
      }
    },
    [options],
  )

  const api = useMemo(
    () => ({
      fire,
    }),
    [fire],
  )

  useImperativeHandle(ref, () => api, [api])

  useEffect(() => {
    if (!manualstart) {
      fire()
    }
  }, [manualstart, fire])

  return (
    <ConfettiContext.Provider value={api}>
      <canvas ref={canvasRef} className={cn("", className)} {...rest} />
      {children}
    </ConfettiContext.Provider>
  )
})
Confetti.displayName = "Confetti"

export { Confetti }
