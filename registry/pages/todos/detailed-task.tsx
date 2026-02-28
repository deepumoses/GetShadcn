"use client"

import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DetailedTaskLayout() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design System Implementation",
      description: "Finalize the color tokens and typography scale for the new web portal.",
      assignee: "Alex",
      dueDate: "Tomorrow",
      priority: "high",
      completed: false
    },
    {
      id: 2,
      title: "API Endpoint Testing",
      description: "Run unit tests and integration tests on the new authentication endpoints.",
      assignee: "Sam",
      dueDate: "Today",
      priority: "medium",
      completed: false
    }
  ])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="flex justify-between items-end border-b pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Active Sprints</h1>
            <p className="text-muted-foreground mt-2">Manage your team's workload and project milestones.</p>
          </div>
          <Button>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
             Create Task
          </Button>
        </header>

        <div className="space-y-4">
          {tasks.map(task => (
             <Card key={task.id} className={\`overflow-hidden transition-all \${task.completed ? 'opacity-60 bg-muted/50' : 'hover:shadow-md'}\`}>
                <div className="flex p-4 items-start gap-4">
                   <div className="pt-1">
                      <Checkbox
                        className="h-5 w-5 rounded-md"
                        checked={task.completed}
                        onCheckedChange={() => setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t))}
                      />
                   </div>

                   <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                         <h3 className={\`font-semibold text-lg \${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}\`}>
                            {task.title}
                         </h3>
                         <div className="flex items-center gap-3">
                            <Badge variant={task.priority === 'high' ? 'destructive' : 'secondary'} className="capitalize text-xs">
                               {task.priority} Priority
                            </Badge>
                            <span className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                               {task.dueDate}
                            </span>
                         </div>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2 pr-20">{task.description}</p>
                   </div>

                   <div className="shrink-0 flex items-center gap-4 pl-4 border-l border-border/50 h-12 ml-4">
                      <HoverCard>
                         <HoverCardTrigger asChild>
                            <Avatar className="h-8 w-8 cursor-pointer border ring-2 ring-background">
                               <AvatarImage src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${task.assignee}\`} />
                               <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                            </Avatar>
                         </HoverCardTrigger>
                         <HoverCardContent className="w-80">
                            <div className="flex justify-between space-x-4">
                               <Avatar>
                                  <AvatarImage src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${task.assignee}\`} />
                                  <AvatarFallback>{task.assignee[0]}</AvatarFallback>
                               </Avatar>
                               <div className="space-y-1">
                                  <h4 className="text-sm font-semibold">@{task.assignee.toLowerCase()}</h4>
                                  <p className="text-sm text-muted-foreground">Senior Frontend Engineer handling critical UI tasks.</p>
                                  <div className="flex items-center pt-2">
                                     <span className="text-xs text-muted-foreground">Joined December 2021</span>
                                  </div>
                               </div>
                            </div>
                         </HoverCardContent>
                      </HoverCard>

                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                      </Button>
                   </div>
                </div>
             </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
