"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Heart, MessageCircle, MoreHorizontal, Share, Repeat2 } from "lucide-react"

export default function MediaGalleryPost() {
  const [liked, setLiked] = useState(false)

  const images = [
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80"
  ]

  return (
    <div className="flex justify-center p-4 bg-muted/10 min-h-screen">
      <Card className="w-full max-w-lg p-4 bg-background shadow-sm hover:bg-muted/30 transition-colors border-border/50">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 shrink-0 cursor-pointer">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="font-bold text-sm text-foreground hover:underline cursor-pointer">Sarah Designer</span>
                  <span className="text-xs text-muted-foreground truncate">@sarah_ui</span>
                  <span className="text-xs text-muted-foreground shrink-0">· 5h</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground shrink-0 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-2 text-sm text-foreground leading-relaxed whitespace-pre-wrap">
              Exploring some new layout variations for the upcoming dashboard release. Trying to balance data density with breathing room. Thoughts on the dark mode palette? 🎨✨
            </p>

            {/* Media Grid */}
            <div className="mt-3 grid grid-cols-2 gap-0.5 rounded-2xl overflow-hidden border border-border/50">
               {images.map((img, idx) => (
                  <Dialog key={idx}>
                     <DialogTrigger asChild>
                        <div className="relative group cursor-pointer overflow-hidden aspect-video sm:aspect-[4/3]">
                           <img
                              src={img}
                              alt={\`Gallery image \${idx + 1}\`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                           />
                           <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                     </DialogTrigger>
                     <DialogContent className="max-w-[95vw] sm:max-w-5xl w-full p-0 overflow-hidden bg-black/95 border-none shadow-none h-[90vh]">
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                           <img
                              src={img}
                              alt={\`Expanded gallery image \${idx + 1}\`}
                              className="max-w-full max-h-[85vh] object-contain"
                           />
                        </div>
                     </DialogContent>
                  </Dialog>
               ))}
            </div>

            <div className="flex justify-between items-center mt-3 pt-2 text-muted-foreground max-w-md">
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-blue-500 group px-2">
                <div className="group-hover:bg-blue-500/10 p-1.5 rounded-full transition-colors"><MessageCircle className="h-4 w-4" /></div>
                <span className="text-xs">89</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-green-500 group px-2">
                <div className="group-hover:bg-green-500/10 p-1.5 rounded-full transition-colors"><Repeat2 className="h-4 w-4" /></div>
                <span className="text-xs">45</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={\`h-8 gap-2 group px-2 \${liked ? 'text-pink-500' : 'hover:text-pink-500'}\`}
                onClick={() => setLiked(!liked)}
              >
                <div className="group-hover:bg-pink-500/10 p-1.5 rounded-full transition-colors">
                   <Heart className={\`h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
                </div>
                <span className="text-xs">{liked ? '1,025' : '1,024'}</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 group px-2 hover:text-blue-500">
                <div className="group-hover:bg-blue-500/10 p-1.5 rounded-full transition-colors"><Share className="h-4 w-4" /></div>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
