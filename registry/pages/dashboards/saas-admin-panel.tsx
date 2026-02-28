"use client"

import React, { useState } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

export default function SaasAdminPanel() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  return (
    <div className={\`flex w-full min-h-screen \${dark ? 'dark bg-black text-white' : 'bg-background text-foreground'}\`}>
      <aside className="w-64 border-r dark:border-zinc-800 p-4 space-y-6 flex flex-col hidden md:flex">
        <div className="font-bold text-lg px-2">Admin Panel</div>
        <nav className="space-y-2 flex-1">
          <Button variant="secondary" className="w-full justify-start dark:bg-zinc-800 dark:hover:bg-zinc-700">Dashboard</Button>
          <Button variant="ghost" className="w-full justify-start">Users</Button>
          <Button variant="ghost" className="w-full justify-start">Roles & Permissions</Button>
          <Button variant="ghost" className="w-full justify-start">Audit Logs</Button>
        </nav>
        <div className="flex items-center justify-between px-2 pt-4 border-t dark:border-zinc-800">
           <span className="text-sm">Dark Mode</span>
           <Switch checked={dark} onCheckedChange={setDark} />
        </div>
      </aside>

      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
           <div>
              <h1 className="text-2xl font-bold tracking-tight">System Configuration</h1>
              <p className="text-sm text-muted-foreground">Manage your application settings and parameters.</p>
           </div>

           <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                 <Button variant="outline" role="combobox" aria-expanded={open} className="w-[250px] justify-between dark:border-zinc-800 dark:bg-zinc-900">
                    Search settings...
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4 shrink-0 opacity-50"><polyline points="8 15 12 19 16 15"/><polyline points="16 9 12 5 8 9"/></svg>
                 </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[250px] p-0">
                 <Command>
                    <CommandInput placeholder="Search system settings..." />
                    <CommandEmpty>No setting found.</CommandEmpty>
                    <CommandGroup heading="Settings">
                       <CommandItem>API Keys</CommandItem>
                       <CommandItem>Webhooks</CommandItem>
                       <CommandItem>Security</CommandItem>
                       <CommandItem>Database</CommandItem>
                    </CommandGroup>
                 </Command>
              </PopoverContent>
           </Popover>
        </header>

        <div className="grid gap-6">
           <div className="border rounded-lg dark:border-zinc-800 p-6 space-y-4">
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="font-semibold text-lg">Global Maintenance Mode</h3>
                    <p className="text-sm text-muted-foreground">Disable access to the platform for all users except admins.</p>
                 </div>
                 <Switch />
              </div>
           </div>

           <div className="border rounded-lg dark:border-zinc-800 p-6 space-y-4">
              <div className="flex justify-between items-center">
                 <div>
                    <h3 className="font-semibold text-lg">Server Metrics</h3>
                    <p className="text-sm text-muted-foreground">Current system performance and health.</p>
                 </div>
                 <Badge variant="outline" className="text-green-500 border-green-500/20 bg-green-500/10">All Systems Operational</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                 <div className="p-4 bg-muted/50 rounded-md dark:bg-zinc-900/50">
                    <div className="text-sm text-muted-foreground mb-1">CPU Load</div>
                    <div className="text-2xl font-bold">14.2%</div>
                 </div>
                 <div className="p-4 bg-muted/50 rounded-md dark:bg-zinc-900/50">
                    <div className="text-sm text-muted-foreground mb-1">Memory Usage</div>
                    <div className="text-2xl font-bold">4.2 GB</div>
                 </div>
                 <div className="p-4 bg-muted/50 rounded-md dark:bg-zinc-900/50">
                    <div className="text-sm text-muted-foreground mb-1">Active Connections</div>
                    <div className="text-2xl font-bold">1,245</div>
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
