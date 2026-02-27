"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Command, Search, User, Settings, LogOut, ChevronRight, Home, Layout, FileText } from "lucide-react"

interface SidebarProps {
  variant?: "mac-dock" | "glass-rail" | "collapsible-accordion" | "user-profile-pop" | "floating-command"
}

function MacDock() {
    const icons = [Home, Layout, FileText, Settings, User]
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex gap-2">
        {icons.map((Icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.2, y: -10 }}
            className="p-3 bg-white/20 hover:bg-white/40 rounded-xl transition-colors"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.button>
        ))}
      </div>
    )
}

function GlassRail() {
    const items = ["Dashboard", "Projects", "Tasks", "Calendar"]
    return (
      <div className="fixed left-0 top-0 h-full w-20 hover:w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 transition-all duration-300 group overflow-hidden">
        <div className="p-4 flex flex-col gap-6">
          <div className="w-10 h-10 bg-primary rounded-lg shrink-0" />
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <a key={item} href="#" className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <Layout className="w-6 h-6" />
                </div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    )
}

function CollapsibleAccordion() {
    const [openSection, setOpenSection] = React.useState<string | null>("dashboard")

    const sections = [
      { id: "dashboard", title: "Dashboard", items: ["Overview", "Analytics", "Reports"] },
      { id: "users", title: "Users", items: ["List", "Roles", "Permissions"] },
      { id: "settings", title: "Settings", items: ["General", "Security", "Billing"] },
    ]

    return (
      <div className="w-64 bg-white border-r h-full p-4">
        {sections.map((section) => (
          <div key={section.id} className="mb-2">
            <button
              onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
              className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="font-medium">{section.title}</span>
              <ChevronRight className={cn("w-4 h-4 transition-transform", openSection === section.id && "rotate-90")} />
            </button>
            <AnimatePresence>
              {openSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4"
                >
                  <ul className="py-2 space-y-1">
                    {section.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="block p-2 text-sm text-gray-600 hover:text-primary transition-colors">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    )
}

function UserProfilePop() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <img src="https://github.com/shadcn.png" alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="text-left hidden md:block">
            <div className="text-sm font-medium">John Doe</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 10 }}
              className="absolute bottom-full left-0 mb-2 w-64 bg-white border rounded-xl shadow-xl overflow-hidden z-50"
            >
              <div className="p-4 bg-gray-50 border-b">
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-gray-500">john@example.com</div>
              </div>
              <div className="p-2">
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-md text-sm">
                  <User className="w-4 h-4" /> Profile
                </button>
                <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-100 rounded-md text-sm">
                  <Settings className="w-4 h-4" /> Settings
                </button>
                <div className="h-px bg-gray-100 my-1" />
                <button className="flex items-center gap-2 w-full p-2 hover:bg-red-50 text-red-600 rounded-md text-sm">
                  <LogOut className="w-4 h-4" /> Sign out
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
}

function FloatingCommand() {
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setIsOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Command className="w-6 h-6" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden"
              >
                <div className="flex items-center border-b px-4">
                  <Search className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    className="flex-1 py-4 outline-none text-lg"
                    placeholder="Type a command or search..."
                    autoFocus
                  />
                  <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">ESC</div>
                </div>
                <div className="p-2 max-h-96 overflow-y-auto">
                  {["Go to Home", "Search Projects", "Create New Task", "Settings"].map((item) => (
                    <button
                      key={item}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg flex items-center justify-between group"
                    >
                      <span>{item}</span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Enter</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    )
}

export function Sidebar({ variant = "mac-dock" }: SidebarProps) {
  if (variant === "mac-dock") return <MacDock />
  if (variant === "glass-rail") return <GlassRail />
  if (variant === "collapsible-accordion") return <CollapsibleAccordion />
  if (variant === "user-profile-pop") return <UserProfilePop />
  if (variant === "floating-command") return <FloatingCommand />

  return null
}
