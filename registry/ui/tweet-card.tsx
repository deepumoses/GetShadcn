"use client"

import { cn } from "@/lib/utils"

export const TweetCard = ({
  id,
  className,
}: {
  id: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full max-w-[32rem] flex-col items-start justify-center overflow-hidden rounded-xl border bg-background p-6 shadow-md transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="flex flex-col gap-1">
            <div className="h-4 w-24 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="h-3 w-16 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          </div>
        </div>
        <div className="h-6 w-6 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </div>
      <div className="mt-4 flex w-full flex-col gap-2">
        <div className="h-4 w-full rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="h-4 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="h-4 w-1/2 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      </div>
      <div className="mt-4 h-48 w-full rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
    </div>
  )
}
