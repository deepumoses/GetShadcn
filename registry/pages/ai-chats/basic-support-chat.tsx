"use client"

import React, { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

export default function BasicSupportChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" }
  ])

  const handleSend = () => {
    if (!input.trim()) return
    const newMsg = { id: Date.now(), text: input, sender: "user" }
    setMessages(prev => [...prev, newMsg])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Thanks for reaching out! A support agent will be with you shortly.", sender: "bot" }])
    }, 1000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted/20 p-4">
      <Card className="w-full max-w-md h-[600px] flex flex-col shadow-xl border-t-4 border-t-primary">
        <div className="p-4 border-b bg-card flex items-center space-x-3 rounded-t-xl">
          <Avatar>
            <AvatarImage src="https://ui.shadcn.com/avatars/04.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-lg leading-none">Support Assistant</h2>
            <p className="text-sm text-muted-foreground mt-1">Typically replies in a few minutes</p>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 flex flex-col">
            {messages.map(msg => (
              <div key={msg.id} className={\`flex \${msg.sender === 'user' ? 'justify-end' : 'justify-start'}\`}>
                <div className={\`max-w-[80%] rounded-2xl p-3 \${msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'}\`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t bg-card">
          <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex space-x-2">
            <Input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full focus-visible:ring-1"
            />
            <Button type="submit" size="icon" className="rounded-full shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
