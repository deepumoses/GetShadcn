"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal } from "lucide-react"

export default function TextBasedProfileUpdate() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(128)

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <div className="flex justify-center p-4 bg-muted/10 min-h-screen">
      <Card className="w-full max-w-lg p-4 bg-background shadow-sm hover:bg-muted/30 transition-colors border-border/50">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10 shrink-0 cursor-pointer">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=jules" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-1.5 truncate">
                <span className="font-bold text-sm text-foreground hover:underline cursor-pointer">Jules Engineer</span>
                <span className="text-xs text-muted-foreground truncate">@jules_dev</span>
                <span className="text-xs text-muted-foreground shrink-0">· 2h</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-foreground shrink-0 -mr-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Follow @jules_dev</DropdownMenuItem>
                  <DropdownMenuItem>Mute</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Block</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Report post</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <p className="mt-1 text-sm text-foreground leading-relaxed whitespace-pre-wrap">
              Just wrapped up a massive refactor of our frontend architecture! Transitioning to a headless UI approach with Tailwind has drastically improved our velocity. 🚀
              <br/><br/>
              Next up: Implementing optimistic updates for the new Kanban module. Have any favorite state management patterns for this? Let me know below! 👇
              <br/><br/>
              <span className="text-primary cursor-pointer hover:underline">#webdev</span> <span className="text-primary cursor-pointer hover:underline">#react</span> <span className="text-primary cursor-pointer hover:underline">#architecture</span>
            </p>

            <div className="flex justify-between items-center mt-3 pt-2 text-muted-foreground max-w-md">
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-blue-500 group px-2">
                <div className="group-hover:bg-blue-500/10 p-1.5 rounded-full transition-colors"><MessageCircle className="h-4 w-4" /></div>
                <span className="text-xs">24</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-8 gap-2 hover:text-green-500 group px-2">
                <div className="group-hover:bg-green-500/10 p-1.5 rounded-full transition-colors"><Repeat2 className="h-4 w-4" /></div>
                <span className="text-xs">12</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={\`h-8 gap-2 group px-2 \${liked ? 'text-pink-500' : 'hover:text-pink-500'}\`}
                onClick={handleLike}
              >
                <div className="group-hover:bg-pink-500/10 p-1.5 rounded-full transition-colors">
                   <Heart className={\`h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
                </div>
                <span className="text-xs">{likes}</span>
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
