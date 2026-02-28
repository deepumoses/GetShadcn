"use client"

import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function CategorizedFilteredList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review PR #104", category: "Engineering", status: "active" },
    { id: 2, title: "Update Database Schema", category: "Engineering", status: "completed" },
    { id: 3, title: "Draft Q3 Marketing Email", category: "Marketing", status: "active" },
    { id: 4, title: "Schedule social posts for next week", category: "Marketing", status: "active" },
    { id: 5, title: "Weekly Sync with Design", category: "Management", status: "active" },
    { id: 6, title: "Approve budget for SaaS tools", category: "Management", status: "completed" }
  ])

  const categories = Array.from(new Set(tasks.map(t => t.category)))
  const completedCount = tasks.filter(t => t.status === 'completed').length
  const progressPercent = Math.round((completedCount / tasks.length) * 100) || 0

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: t.status === 'active' ? 'completed' : 'active' } : t))
  }

  return (
    <div className="min-h-screen bg-muted/10 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b pb-6">
          <div className="w-full md:w-auto">
            <h1 className="text-3xl font-extrabold tracking-tight">Project Tasks</h1>
            <p className="text-muted-foreground mt-1">Categorized tracking across departments.</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            <div className="flex justify-between text-sm text-muted-foreground">
               <span>Overall Progress</span>
               <span className="font-semibold">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2 w-full" />
          </div>
        </header>

        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
             <TabsList className="bg-muted p-1 rounded-lg">
                <TabsTrigger value="all" className="rounded-md">All Tasks</TabsTrigger>
                <TabsTrigger value="active" className="rounded-md">Active</TabsTrigger>
                <TabsTrigger value="completed" className="rounded-md">Completed</TabsTrigger>
             </TabsList>

             <div className="relative w-64 hidden md:block">
                <Input placeholder="Search tasks..." className="pl-9 rounded-xl bg-background border-muted" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
             </div>
          </div>

          <TabsContent value="all" className="space-y-4">
             <Accordion type="multiple" defaultValue={categories} className="w-full space-y-4">
                {categories.map(category => {
                   const categoryTasks = tasks.filter(t => t.category === category)
                   const doneCount = categoryTasks.filter(t => t.status === 'completed').length

                   return (
                      <AccordionItem key={category} value={category} className="border bg-card rounded-xl shadow-sm px-6 data-[state=open]:pb-4">
                         <AccordionTrigger className="hover:no-underline py-4 group">
                            <div className="flex items-center justify-between w-full pr-4">
                               <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                                     {category[0]}
                                  </div>
                                  <span className="font-semibold text-lg">{category}</span>
                               </div>
                               <span className="text-sm text-muted-foreground bg-muted/50 px-2 py-1 rounded font-medium group-hover:bg-muted transition-colors">
                                  {doneCount}/{categoryTasks.length} Done
                               </span>
                            </div>
                         </AccordionTrigger>
                         <AccordionContent className="pt-2">
                            <div className="space-y-1 mt-2">
                               {categoryTasks.map(task => (
                                  <div key={task.id} className="group flex items-center justify-between py-2 px-3 hover:bg-muted/40 rounded-lg transition-colors cursor-pointer" onClick={() => toggleTask(task.id)}>
                                     <div className="flex items-center gap-3">
                                        <Checkbox
                                          checked={task.status === 'completed'}
                                          className="h-4 w-4 border-2 rounded-sm data-[state=checked]:bg-primary"
                                        />
                                        <span className={\`text-sm font-medium \${task.status === 'completed' ? 'line-through text-muted-foreground' : 'text-foreground'}\`}>
                                           {task.title}
                                        </span>
                                     </div>
                                  </div>
                               ))}
                            </div>
                            <Button variant="ghost" className="w-full justify-start mt-3 text-sm text-muted-foreground hover:text-foreground">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                               Add task to {category}
                            </Button>
                         </AccordionContent>
                      </AccordionItem>
                   )
                })}
             </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
