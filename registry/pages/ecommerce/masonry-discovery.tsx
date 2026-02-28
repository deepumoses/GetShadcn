"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1515347619362-6729dc28fb21?w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80", aspect: "aspect-[4/3]" },
  { id: 3, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", aspect: "aspect-square" },
  { id: 4, src: "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=800&q=80", aspect: "aspect-[4/5]" },
  { id: 5, src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", aspect: "aspect-[16/9]" },
  { id: 6, src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80", aspect: "aspect-square" },
  { id: 7, src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 8, src: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=800&q=80", aspect: "aspect-[4/3]" },
]

export default function MasonryDiscovery() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  return (
    <div className="bg-background min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h1 className="text-4xl font-extrabold tracking-tight text-foreground uppercase tracking-widest">Spring Collection</h1>
           <p className="mt-4 text-muted-foreground text-lg italic font-serif">A visual exploration of form and texture.</p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence>
             {images.map((img) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: img.id * 0.05 }}
                  className="break-inside-avoid relative group"
                >
                   <Dialog>
                      <DialogTrigger asChild>
                         <div
                           className={\`w-full bg-muted rounded-xl overflow-hidden cursor-pointer \${img.aspect} relative\`}
                           onClick={() => setSelectedImage(img)}
                         >
                            <img
                              src={img.src}
                              alt={\`Collection image \${img.id}\`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                               <Button variant="outline" className="text-white border-white bg-white/20 hover:bg-white/40 hover:text-white backdrop-blur-md rounded-full px-8 uppercase tracking-widest text-xs h-12">View Look</Button>
                            </div>
                         </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                         <div className="relative w-full h-[80vh] flex items-center justify-center">
                            <img
                              src={selectedImage?.src}
                              alt="Expanded view"
                              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                            <div className="absolute bottom-6 right-6 flex gap-3">
                               <Button size="icon" variant="secondary" className="rounded-full shadow-lg bg-white/90 text-black hover:bg-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                               </Button>
                               <Button className="rounded-full shadow-lg px-8 uppercase tracking-widest text-xs font-bold">Shop this look - $299</Button>
                            </div>
                         </div>
                      </DialogContent>
                   </Dialog>
                </motion.div>
             ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center">
           <Button variant="outline" size="lg" className="rounded-full px-12 h-14 uppercase tracking-widest text-xs border-2">Load More</Button>
        </div>
      </div>
    </div>
  )
}
