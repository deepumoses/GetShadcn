"use client"

import * as React from "react"
import { motion, Reorder, useDragControls } from "motion/react"
import { cn } from "@/lib/utils"
import { GripVertical } from "lucide-react"

interface Item {
  id: string
  label: string
}

interface DragDropListProps {
  items: Item[]
  onReorder: (newOrder: Item[]) => void
  className?: string
}

export function DragDropList({ items, onReorder, className }: DragDropListProps) {
  return (
    <Reorder.Group
      axis="y"
      values={items}
      onReorder={onReorder}
      className={cn("space-y-2 p-4 bg-gray-50 rounded-xl w-full max-w-md", className)}
    >
      {items.map((item) => (
        <Reorder.Item
          key={item.id}
          value={item}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
          whileDrag={{
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          }}
        >
          <span className="font-medium text-gray-700">{item.label}</span>
          <GripVertical className="w-5 h-5 text-gray-400" />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
