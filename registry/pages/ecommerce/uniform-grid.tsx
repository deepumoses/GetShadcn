"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const products = [
  { id: 1, name: "Earthen Bottle", href: "#", price: "$48", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg", imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper." },
  { id: 2, name: "Nomad Tumbler", href: "#", price: "$35", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg", imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top." },
  { id: 3, name: "Focus Paper Refill", href: "#", price: "$89", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg", imageAlt: "Person using a pen to cross a task off a productivity paper card." },
  { id: 4, name: "Machined Mechanical Pencil", href: "#", price: "$35", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg", imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top." },
  { id: 5, name: "Earthen Bottle", href: "#", price: "$48", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg", imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper." },
  { id: 6, name: "Nomad Tumbler", href: "#", price: "$35", imageSrc: "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg", imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top." },
]

export default function UniformGridView() {
  const [sort, setSort] = useState("recommended")

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <h2 className="text-2xl font-bold tracking-tight text-foreground">Workspace Essentials</h2>
           <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">Sort by</span>
              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                </SelectContent>
              </Select>
           </div>
        </div>

        <ScrollArea className="w-full whitespace-nowrap md:hidden mb-6">
           <div className="flex w-max space-x-4 pb-4">
             {["All", "Drinkware", "Stationery", "Desk Accessories", "Bags"].map((cat) => (
                <Button key={cat} variant={cat === "All" ? "default" : "outline"} className="rounded-full">
                   {cat}
                </Button>
             ))}
           </div>
           <ScrollBar orientation="horizontal" className="invisible" />
        </ScrollArea>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} className="group relative border-none shadow-none bg-transparent overflow-hidden">
               <CardContent className="p-0">
                  <AspectRatio ratio={3 / 4} className="bg-muted rounded-lg overflow-hidden relative">
                     <img
                       src={product.imageSrc}
                       alt={product.imageAlt}
                       className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
                     />
                     {product.id === 1 && (
                        <Badge className="absolute top-3 left-3 bg-black/80 text-white border-0 hover:bg-black/90">Best Seller</Badge>
                     )}
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button variant="secondary" className="translate-y-4 group-hover:translate-y-0 transition-all duration-300">Quick View</Button>
                     </div>
                  </AspectRatio>
                  <div className="mt-4 flex justify-between items-start">
                     <div>
                        <h3 className="text-sm font-medium text-foreground">
                           <a href={product.href}>
                              <span aria-hidden="true" className="absolute inset-0 z-10" />
                              {product.name}
                           </a>
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">{product.id % 2 === 0 ? 'Black' : 'Natural'}</p>
                     </div>
                     <p className="text-sm font-semibold text-foreground">{product.price}</p>
                  </div>
               </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
