"use client"

import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { ArrowRight, Check, Play, Loader2 } from "lucide-react"

interface HeroRevealProps {
  variant?: "text-mask" | "parallax" | "waitlist-morph" | "video-split" | "typewriter-ai"
  className?: string
  title?: string
  subtitle?: string
}

function TextMaskReveal({ className, title = "Building the future", subtitle = "Experience the next generation of web interfaces." }: HeroRevealProps) {
    const words = title.split(" ")
    return (
      <div className={cn("relative h-[50vh] flex flex-col items-center justify-center overflow-hidden", className)}>
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-xl text-gray-600 text-center max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    )
}

function ParallaxLayers({ className }: HeroRevealProps) {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 200])
    const y2 = useTransform(scrollY, [0, 500], [0, -100])
    const opacity = useTransform(scrollY, [0, 300], [1, 0])

    return (
      <div className={cn("relative h-[80vh] overflow-hidden", className)}>
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-500">
            PARALLAX
          </h1>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
    )
}

function WaitlistMorph({ className }: HeroRevealProps) {
    const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")
    const [email, setEmail] = React.useState("")

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setStatus("loading")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
    }

    return (
      <div className={cn("flex flex-col items-center justify-center py-20", className)}>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Join the waitlist</h2>
          <p className="text-gray-500">Be the first to know when we launch.</p>
        </div>

        <form onSubmit={handleSubmit} className="relative">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 text-green-600 bg-green-50 px-6 py-3 rounded-full font-medium"
              >
                <Check className="w-5 h-5" />
                <span>You're on the list!</span>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative flex items-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="pl-4 pr-12 py-3 w-80 rounded-full border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1 p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    )
}

function VideoSplit({ className }: HeroRevealProps) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div className={cn("relative h-screen overflow-hidden bg-black text-white", className)}>
        <motion.div
          className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-20 bg-black"
          animate={{ x: isOpen ? "-100%" : "0%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className="text-6xl md:text-9xl font-bold mb-8">SHOWREEL</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-4 text-xl group w-fit"
          >
            <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-white" />
            </div>
            <span>Watch Video</span>
          </button>
        </motion.div>

        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-60"
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_24fps.mp4"
          />
          <button
            onClick={() => setIsOpen(false)}
            className={cn(
              "absolute top-8 right-8 z-20 text-white/50 hover:text-white transition-colors",
              !isOpen && "hidden"
            )}
          >
            Close
          </button>
        </div>
      </div>
    )
}

function TypewriterAi({ className }: HeroRevealProps) {
    const [displayedText, setDisplayedText] = React.useState("")
    const fullText = "Analyzing your request... Generating optimized layout... Integrating components... Done."

    React.useEffect(() => {
      let i = 0
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(i))
          i++
        } else {
          clearInterval(timer)
        }
      }, 50)
      return () => clearInterval(timer)
    }, [])

    return (
      <div className={cn("font-mono p-8 bg-gray-950 text-green-400 rounded-lg shadow-2xl min-h-[200px]", className)}>
        <div className="flex items-center gap-2 mb-4 border-b border-green-400/20 pb-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-lg">
          {"> "}
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 bg-green-400 ml-1 align-middle"
          />
        </p>
      </div>
    )
}

export function HeroReveal({
  variant = "text-mask",
  className,
  title,
  subtitle,
}: HeroRevealProps) {
  if (variant === "text-mask") return <TextMaskReveal className={className} title={title} subtitle={subtitle} />
  if (variant === "parallax") return <ParallaxLayers className={className} />
  if (variant === "waitlist-morph") return <WaitlistMorph className={className} />
  if (variant === "video-split") return <VideoSplit className={className} />
  if (variant === "typewriter-ai") return <TypewriterAi className={className} />

  return null
}
