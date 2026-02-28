"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, MoreHorizontal, Share, Repeat2, Play } from "lucide-react"

export default function AnimatedInteractivePost() {
  const [liked, setLiked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex justify-center items-center p-4 bg-[#0A0A0A] min-h-screen text-gray-200">
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
         <Card className="w-full max-w-lg p-5 bg-[#141414] shadow-2xl hover:shadow-indigo-500/10 transition-all border-white/5 rounded-3xl relative overflow-hidden group/card">
           <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

           <div className="flex gap-4 relative z-10">
             <Avatar className="h-12 w-12 shrink-0 cursor-pointer border border-white/10 shadow-sm">
               <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=creator" />
               <AvatarFallback>CR</AvatarFallback>
             </Avatar>

             <div className="flex-1 min-w-0">
               <div className="flex justify-between items-start">
                 <div className="flex flex-col">
                   <div className="flex items-center gap-2 truncate">
                     <span className="font-bold text-sm text-white hover:underline cursor-pointer">Animation Studio</span>
                     <span className="h-3 w-3 rounded-full bg-blue-500 flex items-center justify-center p-[2px]"><svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                     <span className="text-xs text-gray-500 truncate">@motion_labs</span>
                   </div>
                   <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono mt-1">Sponsored Content</span>
                 </div>
                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white shrink-0 -mr-2">
                   <MoreHorizontal className="h-5 w-5" />
                 </Button>
               </div>

               <p className="mt-3 text-sm text-gray-300 leading-relaxed font-medium">
                 Experience the next generation of fluid interfaces. Built with Framer Motion, optimized for performance. Watch the interactive demo below! 🎥✨
               </p>

               {/* 3D Interactive Media Container */}
               <motion.div
                  className="mt-4 rounded-2xl overflow-hidden bg-black border border-white/10 relative cursor-pointer"
                  style={{ perspective: 1000 }}
                  onHoverStart={() => setIsPlaying(true)}
                  onHoverEnd={() => setIsPlaying(false)}
               >
                  <motion.div
                     animate={{ rotateX: isPlaying ? 0 : 5, rotateY: isPlaying ? 0 : -5, scale: isPlaying ? 1.02 : 1 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                     className="w-full aspect-video bg-gradient-to-br from-indigo-900/50 via-purple-900/50 to-black relative flex items-center justify-center overflow-hidden"
                  >
                     <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                        alt="3D abstract background"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                     <AnimatePresence>
                        {!isPlaying && (
                           <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.2 }}
                              className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-10 shadow-2xl"
                           >
                              <Play className="h-6 w-6 text-white ml-1 fill-white" />
                           </motion.div>
                        )}
                     </AnimatePresence>

                     {/* Simulated UI overlay during play */}
                     <AnimatePresence>
                        {isPlaying && (
                           <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md rounded-xl p-3 border border-white/10"
                           >
                              <div className="flex gap-2 items-center">
                                 <div className="w-8 h-8 rounded bg-indigo-500/30 flex items-center justify-center"><div className="w-3 h-3 bg-indigo-400 rounded-sm" /></div>
                                 <div className="flex flex-col">
                                    <div className="h-2 w-16 bg-white/20 rounded-full mb-1" />
                                    <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                                 </div>
                              </div>
                              <div className="h-2 w-24 bg-white/10 rounded-full overflow-hidden"><motion.div animate={{ width: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-indigo-500" /></div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.div>
               </motion.div>

               <div className="flex justify-between items-center mt-4 pt-3 text-gray-500 border-t border-white/5 max-w-md">
                 <Button variant="ghost" size="sm" className="h-9 gap-2 hover:text-blue-400 hover:bg-blue-400/10 rounded-full px-3 transition-colors">
                   <MessageCircle className="h-4 w-4" />
                   <span className="text-xs font-medium">1.2k</span>
                 </Button>
                 <Button variant="ghost" size="sm" className="h-9 gap-2 hover:text-green-400 hover:bg-green-400/10 rounded-full px-3 transition-colors">
                   <Repeat2 className="h-4 w-4" />
                   <span className="text-xs font-medium">4.5k</span>
                 </Button>
                 <Button
                   variant="ghost"
                   size="sm"
                   className={\`h-9 gap-2 rounded-full px-3 transition-colors \${liked ? 'text-pink-500 bg-pink-500/10' : 'hover:text-pink-400 hover:bg-pink-400/10'}\`}
                   onClick={() => setLiked(!liked)}
                 >
                   <motion.div whileTap={{ scale: 0.8 }}>
                      <Heart className={\`h-4 w-4 \${liked ? 'fill-current' : ''}\`} />
                   </motion.div>
                   <span className="text-xs font-medium">{liked ? '28.1k' : '28k'}</span>
                 </Button>
                 <Button variant="ghost" size="sm" className="h-9 hover:text-blue-400 hover:bg-blue-400/10 rounded-full px-3 transition-colors">
                   <Share className="h-4 w-4" />
                 </Button>
               </div>
             </div>
           </div>
         </Card>
      </motion.div>
    </div>
  )
}
