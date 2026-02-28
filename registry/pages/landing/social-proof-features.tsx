"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SocialProofFeatures() {
  const testimonials = [
    {
      body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
      author: {
        name: "Leslie Alexander",
        handle: "@lesliealexander",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Leslie",
      },
    },
    {
      body: "Quia dolorem qui et. Blanditiis praesentium commodi ex facilis incidunt ea perferendis. Omnis quia rerum similique.",
      author: {
        name: "Michael Foster",
        handle: "@michaelfoster",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      },
    },
    {
      body: "Consequatur omnis dicta cumque, inventore a. Eaque animi accusantium sint. Nostrum voluptatum odit.",
      author: {
        name: "Dries Vincent",
        handle: "@driesvincent",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dries",
      },
    },
    {
      body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Voluptates sit et quia.",
      author: {
        name: "Lindsay Walton",
        handle: "@lindsaywalton",
        imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lindsay",
      },
    }
  ]

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by thousands of developers worldwide
          </p>
        </div>

        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-card p-8 text-sm leading-6 shadow-sm ring-1 ring-border">
                  <blockquote className="text-foreground">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Avatar className="h-10 w-10 border bg-muted">
                      <AvatarImage src={testimonial.author.imageUrl} alt={testimonial.author.name} />
                      <AvatarFallback>{testimonial.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                      <div className="text-muted-foreground">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid Below Social Proof */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 border-t pt-24">
           <div className="mx-auto max-w-2xl lg:text-center">
             <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
             <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
               Everything you need to ship your next app
             </p>
             <p className="mt-6 text-lg leading-8 text-muted-foreground">
               Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
             </p>
           </div>

           <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
             <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
               {[
                 {
                   name: "Push to deploy",
                   description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
                   icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M12 3v12"/><path d="m8 11 4 4 4-4"/><path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"/></svg>
                 },
                 {
                   name: "SSL certificates",
                   description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem assumenda veniam cupidatat vel aquis dictas.",
                   icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                 },
                 {
                   name: "Simple queues",
                   description: "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Elit consequat vero ut non deserunt.",
                   icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                 },
                 {
                   name: "Advanced security",
                   description: "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra.",
                   icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                 }
               ].map((feature) => (
                 <div key={feature.name} className="relative pl-16">
                   <dt className="text-base font-semibold leading-7 text-foreground">
                     <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                       {feature.icon}
                     </div>
                     {feature.name}
                   </dt>
                   <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
                 </div>
               ))}
             </dl>
           </div>
        </div>
      </div>
    </div>
  )
}
