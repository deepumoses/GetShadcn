"use client"

import React, { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function SimpleChecklist() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries for the week", completed: false },
    { id: 2, text: "Finish the quarterly report", completed: true },
    { id: 3, text: "Call the plumber", completed: false }
  ])
  const [newTask, setNewTask] = useState("")

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTask.trim()) return
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
    setNewTask("")
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/20 p-4">
      <Card className="w-full max-w-md shadow-lg border-t-4 border-t-primary">
        <CardHeader className="pb-4 border-b">
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            <span>My Tasks</span>
            <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {tasks.filter(t => t.completed).length} / {tasks.length} Done
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={addTask} className="flex gap-2 mb-6">
            <Input
              placeholder="What needs to be done?"
              value={newTask}
              onChange={e => setNewTask(e.target.value)}
              className="focus-visible:ring-1"
            />
            <Button type="submit">Add</Button>
          </form>

          <div className="space-y-1">
            {tasks.length === 0 ? (
              <p className="text-center text-muted-foreground py-6 text-sm">No tasks remaining. You're all caught up!</p>
            ) : (
              tasks.map(task => (
                <div
                  key={task.id}
                  className={\`group flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors \${task.completed ? 'opacity-60' : ''}\`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="h-5 w-5 rounded-full border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <span className={\`text-sm truncate \${task.completed ? 'line-through text-muted-foreground' : 'font-medium'}\`}>
                      {task.text}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive shrink-0"
                    onClick={() => deleteTask(task.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </Button>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
