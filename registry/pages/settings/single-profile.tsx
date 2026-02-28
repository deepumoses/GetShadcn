"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

export default function SinglePageProfile() {
  const [loading, setLoading] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Profile updated", { description: "Your changes have been saved successfully." })
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Profile Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your public profile and account details.</p>
        </div>

        <Separator />

        <form onSubmit={handleSave} className="space-y-8">
          {/* Avatar Section */}
          <div className="flex items-center gap-x-6">
             <Avatar className="h-24 w-24 border bg-muted">
                <AvatarImage src="https://ui.shadcn.com/avatars/02.png" alt="Profile picture" />
                <AvatarFallback>CN</AvatarFallback>
             </Avatar>
             <div>
                <Button type="button" variant="outline" className="text-sm">Change avatar</Button>
                <p className="text-xs text-muted-foreground mt-2">JPG, GIF or PNG. Max size of 800K.</p>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
             <div className="sm:col-span-3">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" defaultValue="Jane" className="mt-2" />
             </div>

             <div className="sm:col-span-3">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" defaultValue="Doe" className="mt-2" />
             </div>

             <div className="sm:col-span-4">
                <Label htmlFor="username">Username</Label>
                <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-border focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary sm:max-w-md">
                   <span className="flex select-none items-center pl-3 text-muted-foreground sm:text-sm">acme.com/</span>
                   <input
                     type="text"
                     name="username"
                     id="username"
                     defaultValue="janedoe"
                     className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-foreground placeholder:text-muted-foreground focus:ring-0 sm:text-sm sm:leading-6"
                   />
                </div>
             </div>

             <div className="col-span-full">
                <Label htmlFor="about">Bio</Label>
                <p className="text-[13px] text-muted-foreground mb-2">Brief description for your profile. URLs are hyperlinked.</p>
                <Textarea
                   id="about"
                   name="about"
                   rows={4}
                   defaultValue="Frontend developer specializing in React and Tailwind CSS. Open-source enthusiast."
                />
             </div>

             <div className="col-span-full">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" defaultValue="jane.doe@example.com" className="mt-2" />
             </div>
          </div>

          <Separator />

          <div className="flex items-center justify-end gap-x-4">
             <Button type="button" variant="ghost">Cancel</Button>
             <Button type="submit" disabled={loading}>
                {loading && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>}
                Save Changes
             </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
