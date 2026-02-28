"use client"

import React, { useState } from "react"
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function CollapsibleDashboard() {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex w-full h-screen bg-background overflow-hidden">
          <Sidebar className={\`border-r transition-all duration-300 \${collapsed ? 'w-16' : 'w-64'}\`}>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton isActive className="justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                          {!collapsed && <span className="ml-2">Home</span>}
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      {collapsed && <TooltipContent side="right">Home</TooltipContent>}
                    </Tooltip>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton className="justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                          {!collapsed && <span className="ml-2">Settings</span>}
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      {collapsed && <TooltipContent side="right">Settings</TooltipContent>}
                    </Tooltip>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <div className="absolute bottom-4 left-0 w-full flex justify-center">
              <Button variant="ghost" size="icon" onClick={() => setCollapsed(!collapsed)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`h-4 w-4 transition-transform \${collapsed ? 'rotate-180' : ''}\`}><path d="m15 18-6-6 6-6"/></svg>
              </Button>
            </div>
          </Sidebar>

          <main className="flex-1 p-8 overflow-auto">
            <div className="flex justify-between mb-8 md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64">
                   <div className="flex flex-col space-y-4">
                     <span className="font-bold text-lg mb-4">Minimal SaaS</span>
                     <Button variant="ghost" className="justify-start">Home</Button>
                     <Button variant="ghost" className="justify-start">Analytics</Button>
                     <Button variant="ghost" className="justify-start">Settings</Button>
                   </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
               <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Focus Workspace</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-48 rounded-xl bg-muted/50 border flex items-center justify-center text-muted-foreground">Widget A</div>
                  <div className="h-48 rounded-xl bg-muted/50 border flex items-center justify-center text-muted-foreground">Widget B</div>
                  <div className="h-48 rounded-xl bg-muted/50 border md:col-span-2 flex items-center justify-center text-muted-foreground">Main Content</div>
               </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  )
}
