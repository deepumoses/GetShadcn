"use client"

import React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export const SidebarTwo = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode
  open?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  animate?: boolean
}) => {
  return (
    <div className={cn("flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden", "h-[60vh]")}>
        {/* Placeholder sidebar structure */}
        <div className="w-64 bg-white dark:bg-neutral-900 h-full border-r border-neutral-200 dark:border-neutral-700 p-4">
            Sidebar Content
        </div>
        <div className="flex-1 p-4">
            {children}
        </div>
    </div>
  )
}

export const SidebarBody = (props: any) => {
  return <>{props.children}</>
}

export const SidebarLink = (props: any) => {
  return <div className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md cursor-pointer">{props.link.label}</div>
}
