"use client"

import React, { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export default function DeveloperDarkModeChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "I am a code assistant. Paste your error logs or architecture questions here.",
      code: \`const initializeApp = async () => {\\n  console.log("System Ready");\\n  await connectDB();\\n}\`
    }
  ])

  return (
    <TooltipProvider>
      <div className="flex w-full h-screen bg-[#0E1117] text-gray-300 font-mono text-sm border-x border-gray-800">
        <div className="flex flex-col flex-1 max-w-5xl mx-auto h-full relative">

          <header className="flex justify-between items-center p-4 border-b border-gray-800 shrink-0">
            <div className="flex items-center space-x-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-500"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              <span className="font-semibold tracking-tight">Terminal AI</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="px-2 py-1 rounded bg-gray-800 text-gray-400 border border-gray-700">Model: GPT-4 Turbo</span>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-800 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              </Button>
            </div>
          </header>

          <ScrollArea className="flex-1 p-6">
            <div className="space-y-8">
              {messages.map((msg) => (
                <div key={msg.id} className="group flex gap-4">
                  <div className="w-8 shrink-0 flex justify-center pt-1">
                    {msg.role === 'assistant' ? (
                      <div className="h-6 w-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>
                      </div>
                    ) : (
                      <div className="h-6 w-6 rounded bg-gray-800 text-gray-400 flex items-center justify-center border border-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-4 pt-1">
                    <p className="leading-relaxed text-gray-300">{msg.content}</p>

                    {msg.code && (
                      <div className="mt-4 rounded-lg overflow-hidden border border-gray-800 bg-[#161B22]">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#0D1117] border-b border-gray-800">
                          <span className="text-xs text-gray-400 font-sans">typescript</span>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-gray-800 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left" className="bg-gray-800 border-gray-700 text-gray-200">Copy code</TooltipContent>
                          </Tooltip>
                        </div>
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-[#E6EDF3] leading-relaxed">{msg.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="p-4 shrink-0 bg-[#0E1117]">
            <div className="relative flex rounded-xl border border-gray-700 bg-[#161B22] shadow-sm focus-within:ring-1 focus-within:ring-blue-500 transition-shadow">
              <Textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a coding question..."
                className="min-h-[80px] w-full resize-none border-0 shadow-none focus-visible:ring-0 rounded-xl bg-transparent text-gray-300 p-4 font-mono text-sm"
              />
              <div className="absolute right-3 bottom-3 flex items-center space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-300 hover:bg-gray-800">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Attach file</TooltipContent>
                </Tooltip>
                <Button
                  size="icon"
                  disabled={!input.trim()}
                  className="h-8 w-8 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-2 text-xs text-gray-500">
              <span>Press Shift + Enter for new line</span>
              <span>Terms & Privacy</span>
            </div>
          </div>

        </div>
      </div>
    </TooltipProvider>
  )
}
