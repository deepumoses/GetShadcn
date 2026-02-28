import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AnimatedGradientTextProps {
  children: ReactNode
  className?: string
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "relative flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:300%_100%] p-[1px]",
        )}
        style={
          {
            "--color-from": colorFrom,
            "--color-to": colorTo,
            "--speed": `${speed}s`,
          } as React.CSSProperties
        }
      />
      <div className="z-10 flex flex-row items-center justify-center gap-1 bg-white dark:bg-black bg-clip-text text-transparent">
         {children}
      </div>
    </div>
  )
}
