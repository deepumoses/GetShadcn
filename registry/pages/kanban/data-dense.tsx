"use client"

import React, { useState } from "react"
import { DndContext, closestCorners, useSensor, useSensors, PointerSensor } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

const initialData = {
  columns: [
    { id: "lead", title: "New Lead", value: "$45k" },
    { id: "contacted", title: "Contacted", value: "$120k" },
    { id: "qualified", title: "Qualified", value: "$85k" },
    { id: "proposal", title: "Proposal Sent", value: "$300k" },
    { id: "won", title: "Closed Won", value: "$1M+" }
  ],
  deals: [
    { id: "deal-1", title: "Acme Corp Renewals", company: "Acme Corp", value: "$45,000", probability: 20, columnId: "lead", lastContact: "2d ago" },
    { id: "deal-2", title: "Global Tech Expansion", company: "Global Tech", value: "$120,000", probability: 40, columnId: "contacted", lastContact: "1h ago" },
    { id: "deal-3", title: "Stark Industries Integration", company: "Stark Ind.", value: "$85,000", probability: 60, columnId: "qualified", lastContact: "5d ago" },
    { id: "deal-4", title: "Wayne Ent. Enterprise License", company: "Wayne Ent.", value: "$300,000", probability: 80, columnId: "proposal", lastContact: "1d ago" }
  ]
}

function SortableDealCard({ deal }: { deal: any }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: deal.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1
  }

  return (
    <Popover>
       <PopoverTrigger asChild>
          <Card
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={\`cursor-grab active:cursor-grabbing mb-3 bg-card shadow-sm border transition-shadow hover:shadow-md \${isDragging ? 'ring-2 ring-primary border-primary scale-[1.02]' : ''}\`}
          >
            <CardContent className="p-3">
               <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-sm truncate pr-2 text-foreground">{deal.company}</span>
                  <Badge variant="outline" className="text-[10px] font-mono whitespace-nowrap bg-muted/50 h-5 border-muted-foreground/30 px-1.5">{deal.value}</Badge>
               </div>
               <p className="text-xs text-muted-foreground line-clamp-1 mb-3">{deal.title}</p>
               <div className="flex justify-between items-center pt-2 border-t">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <div className="flex items-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              {deal.lastContact}
                           </div>
                        </TooltipTrigger>
                        <TooltipContent>Last Contacted: {deal.lastContact}</TooltipContent>
                     </Tooltip>
                  </TooltipProvider>

                  <div className="flex items-center gap-1.5 text-[10px] font-bold">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={\`h-3 w-3 \${deal.probability > 50 ? 'text-green-500' : 'text-amber-500'}\`}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                     {deal.probability}%
                  </div>
               </div>
            </CardContent>
          </Card>
       </PopoverTrigger>
       <PopoverContent className="w-80 p-4">
          <div className="flex justify-between items-start mb-4 border-b pb-4">
             <div>
                <h4 className="font-bold text-lg">{deal.company}</h4>
                <p className="text-sm text-muted-foreground">{deal.title}</p>
             </div>
             <Badge variant="secondary" className="font-mono text-xs">{deal.value}</Badge>
          </div>
          <div className="space-y-4 text-sm">
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <p className="text-muted-foreground text-xs mb-1">Probability</p>
                   <p className="font-semibold">{deal.probability}% Close Rate</p>
                </div>
                <div>
                   <p className="text-muted-foreground text-xs mb-1">Last Contact</p>
                   <p className="font-semibold">{deal.lastContact}</p>
                </div>
             </div>
             <div className="pt-2">
                <p className="text-muted-foreground text-xs mb-1">Deal Owner</p>
                <div className="flex items-center gap-2 mt-1">
                   <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">JD</div>
                   <span className="font-medium">Jane Doe</span>
                </div>
             </div>
          </div>
       </PopoverContent>
    </Popover>
  )
}

export default function DataDenseAnalyticsBoard() {
  const [deals, setDeals] = useState(initialData.deals)
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (!over) return

    const activeDeal = deals.find(t => t.id === active.id)
    const overId = over.id
    const isOverColumn = initialData.columns.find(c => c.id === overId)

    if (activeDeal) {
       let newColumnId = activeDeal.columnId
       if(isOverColumn) newColumnId = overId
       else {
          const overDeal = deals.find(t => t.id === overId)
          if(overDeal) newColumnId = overDeal.columnId
       }

       if(newColumnId !== activeDeal.columnId) {
          setDeals(prev => prev.map(t => t.id === active.id ? { ...t, columnId: newColumnId } : t))
       }
    }
  }

  return (
    <div className="min-h-screen bg-muted/10 p-6 md:p-10 font-sans">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b pb-6">
        <div>
           <h1 className="text-3xl font-extrabold tracking-tight">Q3 Sales Pipeline</h1>
           <p className="text-sm text-muted-foreground mt-2">Manage opportunities and track projected revenue across stages.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-card p-4 rounded-xl border shadow-sm w-full md:w-auto">
           <div>
              <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Total Pipeline</p>
              <p className="text-xl font-bold font-mono">$1.55M</p>
           </div>
           <div>
              <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Weighted</p>
              <p className="text-xl font-bold font-mono text-primary">$842k</p>
           </div>
           <div>
              <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Win Rate</p>
              <p className="text-xl font-bold font-mono text-green-500">64%</p>
           </div>
           <div>
              <p className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">Active Deals</p>
              <p className="text-xl font-bold font-mono text-indigo-500">24</p>
           </div>
        </div>
      </div>

      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <ScrollArea className="w-full pb-6 whitespace-nowrap">
           <div className="flex gap-5 h-[calc(100vh-280px)] min-w-max">
             {initialData.columns.map(col => {
               const columnDeals = deals.filter(t => t.columnId === col.id)
               const stageValue = columnDeals.reduce((acc, curr) => acc + parseInt(curr.value.replace(/[^0-9]/g, '')), 0)

               return (
                 <div key={col.id} className="w-[320px] shrink-0 flex flex-col h-full bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                   <div className="p-4 border-b bg-muted/30 shrink-0">
                     <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-sm flex items-center gap-2">
                           {col.title}
                           <Badge variant="secondary" className="font-mono text-[10px] h-5 px-1.5">{columnDeals.length}</Badge>
                        </h3>
                     </div>
                     <div className="flex justify-between items-center text-xs text-muted-foreground font-medium">
                        <span>Stage Value</span>
                        <span className="font-mono font-bold text-foreground">${(stageValue/1000).toFixed(0)}k</span>
                     </div>
                   </div>

                   <div className="flex-1 overflow-hidden bg-muted/10 p-3">
                     <SortableContext id={col.id} items={columnDeals.map(t => t.id)} strategy={verticalListSortingStrategy}>
                       <ScrollArea className="h-full pr-3 pb-8">
                         {columnDeals.map(deal => <SortableDealCard key={deal.id} deal={deal} />)}
                       </ScrollArea>
                     </SortableContext>
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
