"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AnimatedHero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] selection:bg-indigo-500/30">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] bg-indigo-600/20 mix-blend-screen"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] bg-purple-600/20 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
          New: AI Workflow Automation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6"
        >
          Build software
          <br />
          <span className="italic font-serif font-medium text-indigo-400">faster than ever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 leading-relaxed"
        >
          Empower your engineering teams with AI-driven development. Automate boilerplate, instantly review code, and deploy to production without fear.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <Button size="lg" className="h-14 px-8 text-base font-semibold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105">
            Start Building Free
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-md transition-all">
            Book a Demo
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-full mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
          <div className="rounded-xl border border-white/10 bg-[#111] p-2 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="flex items-center px-4 py-3 border-b border-white/5 gap-2 bg-[#1A1A1A]">
               <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
               </div>
               <div className="mx-auto bg-[#222] rounded-md px-32 py-1 text-xs text-gray-500 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  acme.com
               </div>
            </div>
            <div className="aspect-[16/9] w-full bg-[#0A0A0A] p-8 flex items-center justify-center">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="w-64 h-64 border border-indigo-500/30 rounded-full flex items-center justify-center relative"
               >
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                     className="w-full h-full border-t-2 border-indigo-500 rounded-full absolute"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-indigo-400"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
