"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

const sidebarNavItems = [
  { title: "Profile", href: "#", isActive: false },
  { title: "Account", href: "#", isActive: false },
  { title: "Appearance", href: "#", isActive: true },
  { title: "Notifications", href: "#", isActive: false },
  { title: "Display", href: "#", isActive: false },
]

export default function SidebarSplitLayout() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [reducedMotion, setReducedMotion] = useState(false)

  const handleSave = () => {
    toast.success("Preferences saved", { description: "Your appearance settings have been updated." })
  }

  return (
    <div className="space-y-6 p-10 pb-16 block max-w-5xl mx-auto min-h-screen bg-background text-foreground">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/4">
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {sidebarNavItems.map((item) => (
              <Button
                key={item.title}
                variant={item.isActive ? "secondary" : "ghost"}
                className={\`justify-start \${item.isActive ? "bg-muted hover:bg-muted" : "hover:bg-transparent hover:underline"}\`}
              >
                {item.title}
              </Button>
            ))}
          </nav>
        </aside>

        <div className="flex-1 lg:max-w-2xl">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Appearance</h3>
              <p className="text-sm text-muted-foreground">Customize the appearance of the app. Automatically switch between day and night themes.</p>
            </div>
            <Separator />

            <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-8">
               <div className="space-y-4">
                  <Label>Theme</Label>
                  <p className="text-[13px] text-muted-foreground">Select the theme for the dashboard.</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {/* Light Theme */}
                     <Label className="cursor-pointer">
                        <input type="radio" className="peer sr-only" name="theme" value="light" checked={theme === 'light'} onChange={() => setTheme('light')} />
                        <div className="rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary">
                           <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                              <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                                 <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                                 <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                              </div>
                           </div>
                           <span className="block mt-4 text-center font-medium">Light</span>
                        </div>
                     </Label>

                     {/* Dark Theme */}
                     <Label className="cursor-pointer">
                        <input type="radio" className="peer sr-only" name="theme" value="dark" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
                        <div className="rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary">
                           <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                              <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                                 <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                                 <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                              </div>
                           </div>
                           <span className="block mt-4 text-center font-medium">Dark</span>
                        </div>
                     </Label>

                     {/* System Theme */}
                     <Label className="cursor-pointer">
                        <input type="radio" className="peer sr-only" name="theme" value="system" checked={theme === 'system'} onChange={() => setTheme('system')} />
                        <div className="rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary">
                           <div className="flex h-full w-full items-center justify-center bg-muted/50 rounded-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-muted-foreground"><rect width="18" height="14" x="3" y="4" rx="2"/><path d="M12 22v-4"/><path d="M8 22h8"/></svg>
                           </div>
                           <span className="block mt-4 text-center font-medium">System</span>
                        </div>
                     </Label>
                  </div>
               </div>

               <Separator />

               <div className="space-y-4">
                  <div>
                     <Label className="text-base">Custom Font</Label>
                     <p className="text-[13px] text-muted-foreground">Select your preferred typography stack.</p>
                  </div>
                  <Input defaultValue="Inter, sans-serif" className="max-w-[400px]" />
               </div>

               <Separator />

               <div className="space-y-4">
                  <div>
                     <Label className="text-base flex items-center gap-2">Reduced Motion <span className="px-1.5 py-0.5 rounded-sm bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">Beta</span></Label>
                     <p className="text-[13px] text-muted-foreground">Minimize decorative animations across the application.</p>
                  </div>
                  <Switch checked={reducedMotion} onCheckedChange={setReducedMotion} />
               </div>

               <div className="pt-4">
                  <Button type="submit">Update preferences</Button>
               </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
