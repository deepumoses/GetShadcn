"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Moon, Sun, Eye, EyeOff } from "lucide-react"

interface AnimatedInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "otp-glow" | "otp-shake" | "otp-slide" | "password-dot" | "underline-draw" | "theme-morph" | "theme-grid"
  value?: string // Make optional to match InputHTMLAttributes
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // Make optional
  error?: boolean
  maxLength?: number
  onComplete?: (value: string) => void
}

function OtpGlow({ value = "", onChange, error, maxLength = 6, onComplete, ...props }: AnimatedInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  return (
      <div className="flex gap-2">
        {Array.from({ length: maxLength }).map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "w-10 h-12 border-2 rounded-md flex items-center justify-center text-xl font-bold transition-colors",
              value.length === i ? "border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" : "border-gray-200",
              error ? "border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" : ""
            )}
            animate={value.length === i ? { scale: 1.1 } : { scale: 1 }}
          >
            {value[i] || ""}
          </motion.div>
        ))}
        <input
          ref={inputRef}
          className="sr-only"
          value={value}
          onChange={(e) => {
            if (e.target.value.length <= maxLength) {
              onChange?.(e)
              if (e.target.value.length === maxLength) onComplete?.(e.target.value)
            }
          }}
          {...props}
        />
      </div>
  )
}

function OtpShake({ value = "", error, maxLength = 6 }: AnimatedInputProps) {
    return (
      <motion.div
        className="flex gap-2"
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {Array.from({ length: maxLength }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-10 h-12 border rounded-md flex items-center justify-center text-xl font-bold",
              error ? "border-red-500 text-red-500" : "border-gray-200"
            )}
          >
            {value[i] || ""}
          </div>
        ))}
      </motion.div>
    )
}

function OtpSlide({ value = "", maxLength = 6 }: AnimatedInputProps) {
    return (
      <div className="flex gap-2 overflow-hidden h-14">
        {Array.from({ length: maxLength }).map((_, i) => (
          <div
            key={i}
            className="w-10 h-12 border rounded-md flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence mode="popLayout">
              {value[i] && (
                <motion.span
                  key={value[i]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-xl font-bold"
                >
                  {value[i]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    )
}

function PasswordDot({ value = "", onChange, ...props }: AnimatedInputProps) {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative w-full max-w-sm">
        <div className="relative flex items-center border rounded-md px-3 py-2 bg-white">
          <div className="flex-1 flex gap-1 h-6 items-center">
            {value.split("").map((char, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={cn(
                  "w-2 h-2 rounded-full bg-black transition-all",
                  showPassword ? "w-auto h-auto rounded-none bg-transparent" : ""
                )}
              >
                {showPassword ? char : ""}
              </motion.div>
            ))}
            {value.length === 0 && <span className="text-gray-400">Password</span>}
          </div>
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <input
          type="text" // Always text to handle masking manually
          className="absolute inset-0 opacity-0 cursor-text"
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
    )
}

function UnderlineDraw({ value = "", onChange, ...props }: AnimatedInputProps) {
    const [focused, setFocused] = React.useState(false)

    return (
      <div className="relative w-full max-w-sm">
        <input
          className="w-full bg-transparent border-b border-gray-200 py-2 outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          onChange={onChange}
          placeholder="Type something..."
          {...props}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    )
}

function ThemeMorph() {
    const [isDark, setIsDark] = React.useState(false)

    return (
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </button>
    )
}

function ThemeGrid() {
    const [isDark, setIsDark] = React.useState(false)

    return (
      <div className="relative overflow-hidden w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer" onClick={() => setIsDark(!isDark)}>
         <motion.div
          className="absolute inset-0 bg-black"
          initial={{ clipPath: "circle(0% at 50% 50%)" }}
          animate={{ clipPath: isDark ? "circle(150% at 50% 50%)" : "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.5 }}
        />
        <div className="relative z-10 text-current mix-blend-difference">
           {isDark ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5" />}
        </div>
      </div>
    )
}

export function AnimatedInput({ variant = "otp-glow", ...props }: AnimatedInputProps) {
  if (variant === "otp-glow") return <OtpGlow variant={variant} {...props} />
  if (variant === "otp-shake") return <OtpShake variant={variant} {...props} />
  if (variant === "otp-slide") return <OtpSlide variant={variant} {...props} />
  if (variant === "password-dot") return <PasswordDot variant={variant} {...props} />
  if (variant === "underline-draw") return <UnderlineDraw variant={variant} {...props} />
  if (variant === "theme-morph") return <ThemeMorph />
  if (variant === "theme-grid") return <ThemeGrid />

  return null
}
