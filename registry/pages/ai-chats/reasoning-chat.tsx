"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReasoningToolCallingChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "user",
      content: "Can you analyze the current weather data for New York and compare it to historical averages?"
    },
    {
      id: 2,
      role: "assistant",
      content: "Certainly! I'll first fetch the current weather data for New York, and then query the historical database for comparative analysis.",
      thinking: [
        "Identified entities: 'New York', 'weather data', 'historical averages'.",
        "Required tools: 'get_current_weather(location)', 'get_historical_weather(location, timeframe)'.",
        "Executing get_current_weather('New York')..."
      ],
      tools: [
        { name: "get_current_weather", status: "success", result: "{ temp: 72F, condition: 'Sunny', wind: '5mph' }" },
        { name: "get_historical_weather", status: "loading", result: null }
      ]
    }
  ])

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto w-full bg-background border-x">
      <header className="px-6 py-4 border-b flex justify-between items-center bg-card sticky top-0 z-10">
        <div>
          <h1 className="font-bold text-lg tracking-tight flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-indigo-500"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
             Agent Reasoning UI
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Powered by o1 architecture</p>
        </div>
        <Badge variant="outline" className="text-indigo-500 border-indigo-500/30 bg-indigo-500/10">Active Session</Badge>
      </header>

      <ScrollArea className="flex-1 px-6 py-8">
        <div className="space-y-8 flex flex-col pb-24">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
              >
                <div className={\`max-w-[85%] \${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-2xl px-5 py-3' : 'w-full space-y-4'}\`}>
                  {msg.role === 'user' ? (
                     msg.content
                  ) : (
                    <div className="flex gap-4 w-full">
                       <div className="shrink-0 mt-1">
                          <div className="h-8 w-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-indigo-600 dark:text-indigo-400"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                          </div>
                       </div>

                       <div className="flex-1 space-y-3">
                          {msg.thinking && (
                             <Collapsible className="border rounded-lg bg-muted/30 overflow-hidden">
                                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 hover:bg-muted/50 transition-colors">
                                   <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                                      Reasoning Process
                                   </div>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground"><path d="m6 9 6 6 6-6"/></svg>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 py-3 border-t bg-background/50 space-y-2">
                                   {msg.thinking.map((step, idx) => (
                                      <div key={idx} className="flex gap-3 text-sm text-muted-foreground items-start">
                                         <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-indigo-500">{idx + 1}</span>
                                         <span>{step}</span>
                                      </div>
                                   ))}
                                </CollapsibleContent>
                             </Collapsible>
                          )}

                          {msg.tools && (
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                                {msg.tools.map((tool, idx) => (
                                   <Card key={idx} className="bg-card shadow-sm">
                                      <CardHeader className="p-3 pb-0 flex flex-row items-center justify-between">
                                         <CardTitle className="text-xs font-mono font-medium flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                                            {tool.name}
                                         </CardTitle>
                                         {tool.status === 'success' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                         ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-500 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                                         )}
                                      </CardHeader>
                                      <CardContent className="p-3 pt-2">
                                         {tool.result ? (
                                            <pre className="text-[10px] bg-muted/50 p-2 rounded text-muted-foreground overflow-x-auto">
                                               <code>{tool.result}</code>
                                            </pre>
                                         ) : (
                                            <div className="h-6 flex items-center text-xs text-muted-foreground">Executing...</div>
                                         )}
                                      </CardContent>
                                   </Card>
                                ))}
                             </div>
                          )}

                          <div className="prose dark:prose-invert max-w-none text-sm leading-relaxed mt-4">
                             {msg.content}
                          </div>
                       </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>

      <div className="p-6 bg-background/80 backdrop-blur-xl border-t">
        <div className="relative flex shadow-md rounded-2xl overflow-hidden border-2 focus-within:border-indigo-500 transition-colors bg-card">
          <Textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Give the agent a complex task..."
            className="min-h-[70px] w-full resize-none border-0 shadow-none focus-visible:ring-0 bg-transparent py-4 pl-4 pr-14 text-sm font-medium"
          />
          <Button
            size="icon"
            disabled={!input.trim()}
            className="absolute right-3 bottom-3 rounded-xl h-9 w-9 bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-transform active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
