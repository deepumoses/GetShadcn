"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function AnimatedStreamingChat() {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: "Hi! I am an AI assistant powered by Framer Motion and shadcn/ui. How can I help you explore the universe today?" }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = () => {
    if(!input.trim()) return
    const userMsg = input
    setMessages(prev => [...prev, {role: 'user', content: userMsg}])
    setInput("")
    setIsTyping(true)

    // Simulate network delay then streaming
    setTimeout(() => {
      setIsTyping(false)
      const response = "This is a simulated streamed response showcasing how markdown and typewriter effects handle character-by-character rendering without causing layout shifts or jarring jumps in the UI. We utilize Framer Motion to animate the bubble entrance."
      let currentText = ""
      const interval = setInterval(() => {
        if(currentText.length < response.length) {
          currentText += response[currentText.length]
          setMessages(prev => {
            const newMsgs = [...prev]
            if(newMsgs[newMsgs.length - 1].role === 'assistant') {
              newMsgs[newMsgs.length - 1].content = currentText
            } else {
              newMsgs.push({ role: 'assistant', content: currentText })
            }
            return newMsgs
          })
        } else {
          clearInterval(interval)
        }
      }, 20)
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto w-full border-l border-r bg-background">
      <header className="p-4 border-b flex justify-center items-center backdrop-blur-md sticky top-0 z-10 bg-background/80">
        <h1 className="font-semibold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Nexus AI</h1>
      </header>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-6 flex flex-col pb-20">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
              >
                <div className={\`max-w-[85%] rounded-2xl px-4 py-3 \${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted border shadow-sm'}\`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-muted rounded-2xl px-4 py-3 border shadow-sm flex space-x-2 items-center h-12">
                   <motion.div className="w-2 h-2 rounded-full bg-primary/50" animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                   <motion.div className="w-2 h-2 rounded-full bg-primary/50" animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                   <motion.div className="w-2 h-2 rounded-full bg-primary/50" animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <div className="p-4 bg-background/80 backdrop-blur-md border-t">
        <div className="relative flex items-end shadow-sm rounded-xl overflow-hidden border focus-within:ring-1 focus-within:border-primary">
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Send a message..."
            className="min-h-[60px] w-full resize-none border-0 shadow-none focus-visible:ring-0 rounded-none bg-background pr-12 py-3"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
          <Button
            size="icon"
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 bottom-2 rounded-full h-8 w-8 transition-transform active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Button>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-2">AI can make mistakes. Verify important information.</div>
      </div>
    </div>
  )
}
