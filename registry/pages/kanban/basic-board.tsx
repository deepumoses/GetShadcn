"use client"

import React, { useState } from "react"
import { DndContext, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors, DragOverlay } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const initialData = {
  columns: [
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" }
  ],
  tasks: [
    { id: "task-1", title: "Setup Project", columnId: "todo" },
    { id: "task-2", title: "Install Dependencies", columnId: "todo" },
    { id: "task-3", title: "Configure ESLint", columnId: "in-progress" },
    { id: "task-4", title: "Initialize Git", columnId: "done" }
  ]
}

function SortableTask({ task }: { task: any }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={\`cursor-grab active:cursor-grabbing mb-3 bg-card shadow-sm border \${isDragging ? 'ring-2 ring-primary border-primary' : ''}\`}
    >
      <CardContent className="p-4 flex items-center justify-between text-sm font-medium">
        {task.title}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground cursor-grab"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
      </CardContent>
    </Card>
  )
}

export default function BasicKanbanBoard() {
  const [tasks, setTasks] = useState(initialData.tasks)
  const [activeId, setActiveId] = useState<string | null>(null)

  const sensors = useSensors(useSensor(PointerSensor), useSensor(KeyboardSensor))

  const handleDragStart = (event: any) => setActiveId(event.active.id)

  const handleDragEnd = (event: any) => {
    setActiveId(null)
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    setTasks((items) => {
      const activeItem = items.find(t => t.id === activeId)
      const overItem = items.find(t => t.id === overId)
      const overColumnId = initialData.columns.find(c => c.id === overId) ? overId : overItem?.columnId

      if (!activeItem || !overColumnId) return items

      if (activeItem.columnId !== overColumnId) {
        return items.map(t => t.id === activeId ? { ...t, columnId: overColumnId } : t)
      }

      return items
    })
  }

  return (
    <div className="min-h-screen bg-muted/20 p-8 font-sans">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Basic Tracking Board</h1>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex gap-6 h-[calc(100vh-150px)]">
          {initialData.columns.map(col => {
            const columnTasks = tasks.filter(t => t.columnId === col.id)
            return (
              <div key={col.id} className="w-[320px] shrink-0 bg-muted/40 rounded-xl flex flex-col border border-border/50">
                <div className="p-4 flex justify-between items-center border-b bg-card rounded-t-xl shrink-0">
                  <h3 className="font-semibold">{col.title}</h3>
                  <span className="bg-muted px-2 py-0.5 rounded text-xs font-bold text-muted-foreground">{columnTasks.length}</span>
                </div>

                <SortableContext id={col.id} items={columnTasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                  <ScrollArea className="flex-1 p-3">
                    {columnTasks.map(task => <SortableTask key={task.id} task={task} />)}
                  </ScrollArea>
                </SortableContext>
              </div>
            )
          })}
        </div>
      </DndContext>
    </div>
  )
}
