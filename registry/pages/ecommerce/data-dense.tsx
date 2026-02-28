"use client"

import React, { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function DataDenseList() {
  const [selected, setSelected] = useState<number[]>([])

  const hardware = [
    { id: 101, model: "RTX 4090", vendor: "NVIDIA", memory: "24GB GDDR6X", cores: "16384", tdp: "450W", price: "$1,599", stock: 12, img: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg" },
    { id: 102, model: "RX 7900 XTX", vendor: "AMD", memory: "24GB GDDR6", cores: "6144", tdp: "355W", price: "$999", stock: 0, img: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg" },
    { id: 103, model: "RTX 4080 Super", vendor: "NVIDIA", memory: "16GB GDDR6X", cores: "10240", tdp: "320W", price: "$999", stock: 45, img: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg" },
    { id: 104, model: "RX 7800 XT", vendor: "AMD", memory: "16GB GDDR6", cores: "3840", tdp: "263W", price: "$499", stock: 120, img: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg" },
  ]

  const toggleAll = () => {
    if (selected.length === hardware.length) setSelected([])
    else setSelected(hardware.map(h => h.id))
  }

  const toggleOne = (id: number) => {
    if (selected.includes(id)) setSelected(selected.filter(i => i !== id))
    else setSelected([...selected, id])
  }

  return (
    <div className="bg-background min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">GPU Enterprise Procurement</h1>
            <p className="text-muted-foreground mt-2">Compare technical specifications and check real-time inventory.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
               <Input placeholder="Search SKUs..." className="w-64 pl-9" />
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <Button disabled={selected.length === 0}>Compare Selected ({selected.length})</Button>
          </div>
        </div>

        <div className="border rounded-lg shadow-sm overflow-hidden bg-card">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="w-12 text-center">
                  <Checkbox checked={selected.length === hardware.length} onCheckedChange={toggleAll} />
                </TableHead>
                <TableHead className="w-64">Model</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>VRAM</TableHead>
                <TableHead>CUDA/Stream Cores</TableHead>
                <TableHead>TDP</TableHead>
                <TableHead className="text-right">Unit Price</TableHead>
                <TableHead className="text-center">Availability</TableHead>
                <TableHead className="w-24"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hardware.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/10">
                  <TableCell className="text-center">
                    <Checkbox checked={selected.includes(item.id)} onCheckedChange={() => toggleOne(item.id)} />
                  </TableCell>
                  <TableCell className="font-medium flex items-center gap-3">
                     <HoverCard>
                        <HoverCardTrigger asChild>
                           <span className="underline decoration-muted-foreground underline-offset-4 cursor-help">{item.model}</span>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                           <div className="flex justify-between space-x-4">
                              <div className="w-24 shrink-0">
                                 <AspectRatio ratio={1}>
                                    <img src={item.img} alt={item.model} className="rounded-md object-cover border" />
                                 </AspectRatio>
                              </div>
                              <div className="space-y-1">
                                 <h4 className="text-sm font-semibold">{item.model}</h4>
                                 <p className="text-sm text-muted-foreground">High-performance enterprise accelerator card.</p>
                                 <div className="flex items-center pt-2">
                                    <Badge variant="outline" className="text-xs">SKU: {item.id}</Badge>
                                 </div>
                              </div>
                           </div>
                        </HoverCardContent>
                     </HoverCard>
                  </TableCell>
                  <TableCell>
                     <Badge variant={item.vendor === 'NVIDIA' ? 'default' : 'destructive'} className="bg-opacity-10 hover:bg-opacity-20 text-foreground border-transparent">
                        {item.vendor}
                     </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{item.memory}</TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">{item.cores}</TableCell>
                  <TableCell className="font-mono text-sm">{item.tdp}</TableCell>
                  <TableCell className="text-right font-semibold">{item.price}</TableCell>
                  <TableCell className="text-center">
                    {item.stock > 0 ? (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        In Stock ({item.stock})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                        Backordered
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                     <Button size="sm" variant={item.stock > 0 ? "default" : "secondary"} className="w-full" disabled={item.stock === 0}>
                        Add to Quote
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
