"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export default function TaskOperationsDashboard() {
  return (
    <SidebarProvider>
      <div className="flex w-full h-screen bg-background">
        <Sidebar className="w-64 border-r">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Projects</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Team</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Calendar</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Operations Dashboard</h1>
            <div className="flex gap-4">
               <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
            </div>
          </div>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Projects</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
               <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[1,2,3,4,5,6].map(i => (
                    <Card key={i}>
                       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-base font-semibold">Project Alpha {i}</CardTitle>
                          <DropdownMenu>
                             <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                             </DropdownMenuTrigger>
                             <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit Project</DropdownMenuItem>
                                <DropdownMenuItem>Mark as Complete</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                             </DropdownMenuContent>
                          </DropdownMenu>
                       </CardHeader>
                       <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">Design system implementation for client {i}.</p>
                          <div className="flex items-center justify-between text-sm mb-2">
                             <span className="text-muted-foreground">Progress</span>
                             <span>{i * 15}%</span>
                          </div>
                          <Progress value={i * 15} className="h-2 mb-4" />
                          <div className="flex items-center justify-between">
                             <div className="flex -space-x-2">
                                <Avatar className="h-6 w-6 border-2 border-background"><AvatarFallback>A</AvatarFallback></Avatar>
                                <Avatar className="h-6 w-6 border-2 border-background"><AvatarFallback>B</AvatarFallback></Avatar>
                                <Avatar className="h-6 w-6 border-2 border-background"><AvatarFallback>C</AvatarFallback></Avatar>
                             </div>
                             <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                                {i % 2 === 0 ? "On Track" : "At Risk"}
                             </Badge>
                          </div>
                       </CardContent>
                    </Card>
                  ))}
               </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </SidebarProvider>
  )
}
