"use client"

import React, { useState } from "react"
import { DndContext, closestCorners, useSensor, useSensors, PointerSensor } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const initialData = {
  columns: [
    { id: "backlog", title: "Backlog", color: "bg-slate-500" },
    { id: "todo", title: "To Do", color: "bg-blue-500" },
    { id: "in-progress", title: "In Progress", color: "bg-amber-500" },
    { id: "review", title: "Code Review", color: "bg-purple-500" },
    { id: "done", title: "Done", color: "bg-green-500" }
  ],
  tasks: [
    { id: "ENG-101", title: "Implement Auth Middleware", type: "feature", points: 5, assignee: "Alex", columnId: "todo" },
    { id: "ENG-102", title: "Fix Header Hydration Error", type: "bug", points: 3, assignee: "Sam", columnId: "in-progress" },
    { id: "ENG-103", title: "Setup CI/CD Pipeline", type: "chore", points: 8, assignee: "Jordan", columnId: "review" },
    { id: "ENG-104", title: "Update Dependencies", type: "chore", points: 1, assignee: "Alex", columnId: "backlog" }
  ]
}

function SortableTicket({ task }: { task: any }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={\`cursor-grab active:cursor-grabbing mb-4 shadow-sm border bg-card hover:border-primary/50 transition-colors \${isDragging ? 'ring-2 ring-primary border-primary scale-105 shadow-xl' : ''}\`}
    >
      <CardContent className="p-4 space-y-3">
         <div className="flex justify-between items-start">
            <Badge variant="outline" className="text-xs font-mono text-muted-foreground bg-muted/50 border-0">{task.id}</Badge>
            <Badge variant={task.type === 'bug' ? 'destructive' : task.type === 'feature' ? 'default' : 'secondary'} className="text-[10px] h-5 capitalize">
               {task.type}
            </Badge>
         </div>
         <p className="font-semibold text-sm leading-tight text-foreground">{task.title}</p>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
         <div className="flex -space-x-2">
            <Avatar className="h-6 w-6 border-2 border-background ring-1 ring-border/50">
               <AvatarImage src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${task.assignee}\`} />
               <AvatarFallback>{task.assignee[0]}</AvatarFallback>
            </Avatar>
         </div>
         <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-muted-foreground ring-1 ring-border">
            {task.points}
         </div>
      </CardFooter>
    </Card>
  )
}

export default function AgileScrumBoard() {
  const [tasks, setTasks] = useState(initialData.tasks)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return

    const activeTask = tasks.find(t => t.id === active.id)
    const overId = over.id
    const isOverColumn = initialData.columns.find(c => c.id === overId)

    if (activeTask) {
       let newColumnId = activeTask.columnId
       if(isOverColumn) newColumnId = overId
       else {
          const overTask = tasks.find(t => t.id === overId)
          if(overTask) newColumnId = overTask.columnId
       }

       if(newColumnId !== activeTask.columnId) {
          setTasks(prev => prev.map(t => t.id === active.id ? { ...t, columnId: newColumnId } : t))
       }
    }
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
           <h1 className="text-2xl font-bold tracking-tight">Sprint 42: Foundation</h1>
           <p className="text-sm text-muted-foreground mt-1">April 1st - April 14th</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="flex -space-x-2 mr-2">
              {['Alex','Sam','Jordan'].map(name => (
                 <Avatar key={name} className="h-8 w-8 border-2 border-background ring-1 ring-border">
                    <AvatarImage src={\`https://api.dicebear.com/7.x/avataaars/svg?seed=\${name}\`} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                 </Avatar>
              ))}
           </div>
           <Button variant="outline" size="sm">Complete Sprint</Button>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <ScrollArea className="w-full pb-4 whitespace-nowrap">
           <div className="flex gap-4 h-[calc(100vh-200px)] min-w-max pb-4">
             {initialData.columns.map(col => {
               const columnTasks = tasks.filter(t => t.columnId === col.id)
               const totalPoints = columnTasks.reduce((sum, t) => sum + t.points, 0)

               return (
                 <div key={col.id} className="w-[300px] shrink-0 bg-muted/30 rounded-lg flex flex-col border border-border overflow-hidden">
                   <div className="p-3 border-b bg-card shrink-0 shadow-sm flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className={\`w-3 h-3 rounded-full \${col.color}\`} />
                        <h3 className="font-semibold text-sm">{col.title}</h3>
                        <Badge variant="secondary" className="ml-1 text-[10px] font-mono h-5 px-1.5">{columnTasks.length}</Badge>
                     </div>
                     <span className="text-xs font-mono text-muted-foreground">{totalPoints} pts</span>
                   </div>

                   <div className="flex-1 overflow-hidden">
                     <SortableContext id={col.id} items={columnTasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                       <ScrollArea className="h-full p-3 bg-muted/10">
                         {columnTasks.map(task => <SortableTicket key={task.id} task={task} />)}
                       </ScrollArea>
                     </SortableContext>
                   </div>
                   <div className="p-2 bg-card border-t shrink-0">
                      <Button variant="ghost" className="w-full h-8 justify-start text-xs text-muted-foreground hover:text-foreground">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-3 w-3"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                         Create issue
                      </Button>
                   </div>
                 </div>
               )
             })}
           </div>
        </ScrollArea>
      </DndContext>
    </div>
  )
}
