"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

export default function MultiSectionMenu() {
  const [openSection, setOpenSection] = useState("organization")

  return (
    <div className="flex w-full min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-72 border-r bg-muted/10 hidden md:flex flex-col">
        <div className="p-4 border-b">
           <Command className="border rounded-lg bg-background shadow-sm">
             <CommandInput placeholder="Search settings..." />
             <CommandList>
               <CommandEmpty>No results found.</CommandEmpty>
               <CommandGroup heading="Suggestions">
                 <CommandItem>Profile Settings</CommandItem>
                 <CommandItem>Billing Information</CommandItem>
                 <CommandItem>API Keys</CommandItem>
               </CommandGroup>
             </CommandList>
           </Command>
        </div>

        <div className="flex-1 overflow-auto py-4">
           <div className="px-4 space-y-2">
              <Collapsible open={openSection === "organization"} onOpenChange={() => setOpenSection("organization")} className="space-y-1">
                 <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between font-semibold hover:bg-muted/50">
                       Organization
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`h-4 w-4 transition-transform \${openSection === 'organization' ? 'rotate-90' : ''}\`}><polyline points="9 18 15 12 9 6"/></svg>
                    </Button>
                 </CollapsibleTrigger>
                 <CollapsibleContent className="space-y-1 pl-4 pb-2">
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">General Information</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">Members & Roles</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8 flex justify-between">
                       Pending Invites
                       <Badge variant="secondary" className="h-5 px-1.5 text-[10px]">3</Badge>
                    </Button>
                 </CollapsibleContent>
              </Collapsible>

              <Collapsible open={openSection === "security"} onOpenChange={() => setOpenSection("security")} className="space-y-1">
                 <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between font-semibold hover:bg-muted/50">
                       Security
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`h-4 w-4 transition-transform \${openSection === 'security' ? 'rotate-90' : ''}\`}><polyline points="9 18 15 12 9 6"/></svg>
                    </Button>
                 </CollapsibleTrigger>
                 <CollapsibleContent className="space-y-1 pl-4 pb-2">
                    <Button variant="secondary" className="w-full justify-start text-sm font-medium h-8 bg-muted/50">Authentication</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">Audit Logs</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">Session Management</Button>
                 </CollapsibleContent>
              </Collapsible>

              <Collapsible open={openSection === "developer"} onOpenChange={() => setOpenSection("developer")} className="space-y-1">
                 <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between font-semibold hover:bg-muted/50">
                       Developer
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`h-4 w-4 transition-transform \${openSection === 'developer' ? 'rotate-90' : ''}\`}><polyline points="9 18 15 12 9 6"/></svg>
                    </Button>
                 </CollapsibleTrigger>
                 <CollapsibleContent className="space-y-1 pl-4 pb-2">
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">API Keys</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">Webhooks</Button>
                    <Button variant="ghost" className="w-full justify-start text-sm text-muted-foreground h-8">OAuth Apps</Button>
                 </CollapsibleContent>
              </Collapsible>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
         <header className="h-14 border-b flex items-center px-6 shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Breadcrumb>
               <BreadcrumbList>
                  <BreadcrumbItem>
                     <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <BreadcrumbLink href="#">Security</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                     <span className="font-semibold text-foreground">Authentication</span>
                  </BreadcrumbItem>
               </BreadcrumbList>
            </Breadcrumb>
         </header>

         <div className="flex-1 overflow-auto p-6 md:p-10 lg:px-12 xl:px-20 max-w-4xl">
            <div className="space-y-1 mb-8">
               <h1 className="text-3xl font-extrabold tracking-tight">Authentication</h1>
               <p className="text-muted-foreground text-lg">Manage how your team accesses the platform securely.</p>
            </div>

            <div className="space-y-8">
               <section>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Two-Factor Authentication (2FA)</h3>
                  <div className="flex items-center justify-between p-4 border rounded-xl bg-card shadow-sm">
                     <div className="space-y-1 pr-6">
                        <Label className="text-base font-semibold text-foreground">Enforce 2FA Organization-wide</Label>
                        <p className="text-sm text-muted-foreground">Require all members to set up two-factor authentication before they can access company resources.</p>
                     </div>
                     <Switch defaultChecked />
                  </div>
               </section>

               <section>
                  <h3 className="text-lg font-semibold mb-4 border-b pb-2">Single Sign-On (SSO)</h3>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-4 border rounded-xl bg-card shadow-sm">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-lg bg-[#F1F3F4] flex items-center justify-center p-2">
                              <svg viewBox="0 0 48 48" className="h-full w-full"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
                           </div>
                           <div>
                              <Label className="text-base font-semibold">Google Workspace</Label>
                              <p className="text-sm text-muted-foreground mt-0.5">Authenticate via Google accounts.</p>
                           </div>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                     </div>

                     <div className="flex items-center justify-between p-4 border rounded-xl bg-card shadow-sm opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
                        <div className="flex items-center gap-4">
                           <div className="h-10 w-10 rounded-lg bg-[#0078D4] flex items-center justify-center p-2 text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="h-full w-full fill-current"><path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/></svg>
                           </div>
                           <div>
                              <Label className="text-base font-semibold">Microsoft Entra ID</Label>
                              <p className="text-sm text-muted-foreground mt-0.5">Requires Enterprise License</p>
                           </div>
                        </div>
                        <Button variant="ghost" size="sm" disabled>Upgrade</Button>
                     </div>
                  </div>
               </section>

               <div className="flex justify-end pt-4 border-t mt-12">
                  <Button size="lg" className="px-8 shadow-sm">Save Security Preferences</Button>
               </div>
            </div>
         </div>
      </main>
    </div>
  )
}
