"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Heart, MessageCircle, MoreHorizontal, Share, Repeat2 } from "lucide-react"

export default function LinkResourceShare() {
  const [liked, setLiked] = useState(false)

  return (
    <div className="flex justify-center p-4 bg-muted/10 min-h-screen">
      <Card className="w-full max-w-lg p-4 bg-background shadow-sm hover:bg-muted/30 transition-colors border-border/50">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 shrink-0 cursor-pointer">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=mike" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-bold text-sm text-foreground hover:underline cursor-pointer">Mike Tech</span>
                <span className="text-xs text-muted-foreground truncate">@mike_writes</span>
                <span className="text-xs text-muted-foreground shrink-0">· 12h</span>
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground shrink-0 -mr-2">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <p className="mt-1 text-sm text-foreground leading-relaxed">
              If you haven't read this comprehensive guide on React Server Components yet, you're missing out. It completely changed my mental model of the App Router. Highly recommended! 📖💡
            </p>

            {/* Link Preview Card */}
            <a href="#" className="block mt-3 group/link">
               <div className="rounded-2xl border border-border/50 overflow-hidden bg-card transition-colors group-hover/link:bg-muted/50">
                  <AspectRatio ratio={16/9} className="bg-muted">
                     <img
                        src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
                        alt="Article preview"
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </AspectRatio>
                  <div className="p-3">
                     <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wider font-semibold">nextjs.org</div>
                     <h4 className="text-sm font-bold text-foreground line-clamp-1 mb-1 group-hover/link:underline">Understanding React Server Components</h4>
                     <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">A deep dive into how Server Components work, their architecture, and when to use them versus Client Components for optimal performance.</p>
                  </div>
               </div>
            </a>

            <div className="flex justify-between items-center mt-3 pt-2 text-muted-foreground max-w-md">
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-blue-500 group px-2">
                <div className="group-hover:bg-blue-500/10 p-1.5 rounded-full transition-colors"><MessageCircle className="h-4 w-4" /></div>
                <span className="text-xs">15</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-green-500 group px-2">
                <div className="group-hover:bg-green-500/10 p-1.5 rounded-full transition-colors"><Repeat2 className="h-4 w-4" /></div>
                <span className="text-xs">5</span>
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
                <span className="text-xs">{liked ? '232' : '231'}</span>
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
