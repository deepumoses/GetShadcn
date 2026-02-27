"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

interface TabProps {
  id: string
  label: string
}

interface SharedTabsProps {
  tabs: TabProps[]
  variant?: "shared-pill" | "underline-slide" | "flipping-content" | "staggered-links" | "vertical-dock"
  activeTab: string
  onTabChange: (id: string) => void
  children?: React.ReactNode
}

function SharedPill({ tabs, activeTab, onTabChange }: SharedTabsProps) {
    return (
      <div className="flex gap-4 p-2 bg-gray-100 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="pill-tab"
                className="absolute inset-0 bg-white rounded-md shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    )
}

function UnderlineSlide({ tabs, activeTab, onTabChange }: SharedTabsProps) {
    return (
      <div className="flex gap-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative pb-3 text-sm font-medium transition-colors hover:text-primary",
              activeTab === tab.id ? "text-primary" : "text-gray-500"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline-tab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </div>
    )
}

function FlippingContent({ tabs, activeTab, onTabChange, children }: SharedTabsProps) {
    return (
      <div className="w-full">
        <div className="flex gap-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-gray-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 border rounded-md"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    )
}

function StaggeredLinks({ tabs, activeTab, onTabChange }: SharedTabsProps) {
    return (
      <nav className="flex flex-col gap-2">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "text-left px-4 py-2 rounded-md transition-colors",
              activeTab === tab.id ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
            )}
          >
            {tab.label}
          </motion.button>
        ))}
      </nav>
    )
}

function VerticalDock({ tabs, activeTab, onTabChange }: SharedTabsProps) {
    return (
      <div className="flex flex-col gap-4 w-16 bg-gray-900/5 p-2 rounded-2xl items-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            whileHover={{ scale: 1.2 }}
            className={cn(
              "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
              activeTab === tab.id ? "bg-primary text-white" : "bg-white hover:bg-gray-50"
            )}
          >
            {tab.label.charAt(0)}
          </motion.button>
        ))}
      </div>
    )
}

export function SharedTabs({
  tabs,
  variant = "shared-pill",
  activeTab,
  onTabChange,
  children,
}: SharedTabsProps) {
  if (variant === "shared-pill") return <SharedPill tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
  if (variant === "underline-slide") return <UnderlineSlide tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
  if (variant === "flipping-content") return <FlippingContent tabs={tabs} activeTab={activeTab} onTabChange={onTabChange}>{children}</FlippingContent>
  if (variant === "staggered-links") return <StaggeredLinks tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
  if (variant === "vertical-dock") return <VerticalDock tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />

  return null
}
