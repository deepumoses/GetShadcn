"use client"

import React from "react"
import { Check, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SingleColumnEnterprise() {
  const tiers = [
    { name: "Starter", price: "$49/mo" },
    { name: "Professional", price: "$199/mo" },
    { name: "Enterprise", price: "Custom" }
  ]

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Projects", tooltip: "Active project count", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Users", tooltip: "Seats per organization", starter: "3", pro: "15", enterprise: "Unlimited" },
        { name: "API Access", tooltip: "REST and GraphQL endpoints", starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        { name: "SSO (SAML)", tooltip: "Single Sign-On integration", starter: false, pro: false, enterprise: true },
        { name: "Audit Logs", tooltip: "Detailed activity tracking", starter: false, pro: true, enterprise: true },
        { name: "Data Residency", tooltip: "Choose EU or US servers", starter: false, pro: false, enterprise: "Included" }
      ]
    },
    {
      category: "Support",
      items: [
        { name: "SLA", tooltip: "Service Level Agreement", starter: false, pro: "99.9%", enterprise: "99.99% custom" },
        { name: "Support Tier", tooltip: "Response time guarantee", starter: "Community", pro: "24h Email", enterprise: "1h Phone/Slack" },
        { name: "Success Manager", tooltip: "Dedicated account rep", starter: false, pro: false, enterprise: true }
      ]
    }
  ]

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">Compare Plans</h2>
          <p className="mt-4 text-lg text-muted-foreground">Find the perfect blend of features and scalability for your organization.</p>
        </div>

        {/* Mobile View (Cards) */}
        <div className="md:hidden space-y-8">
           {tiers.map((tier, idx) => (
              <div key={tier.name} className="border p-6 rounded-xl bg-card shadow-sm">
                 <h3 className="text-xl font-bold">{tier.name}</h3>
                 <p className="text-3xl font-bold mt-2">{tier.price}</p>
                 <Button className="w-full mt-6" variant={idx === 1 ? 'default' : 'outline'}>Select {tier.name}</Button>

                 <div className="mt-8 space-y-6">
                    {features.map(group => (
                       <div key={group.category}>
                          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide border-b pb-2 mb-4">{group.category}</h4>
                          <ul className="space-y-3 text-sm">
                             {group.items.map(item => (
                                <li key={item.name} className="flex justify-between">
                                   <span className="text-muted-foreground">{item.name}</span>
                                   <span className="font-medium flex items-center">
                                      {item[tier.name.toLowerCase() as keyof typeof item] === true ? (
                                         <Check className="h-4 w-4 text-primary" />
                                      ) : item[tier.name.toLowerCase() as keyof typeof item] === false ? (
                                         <Minus className="h-4 w-4 text-muted-foreground/50" />
                                      ) : (
                                         item[tier.name.toLowerCase() as keyof typeof item] as React.ReactNode
                                      )}
                                   </span>
                                </li>
                             ))}
                          </ul>
                       </div>
                    ))}
                 </div>
              </div>
           ))}
        </div>

        {/* Desktop View (Table) */}
        <div className="hidden md:block shadow-sm ring-1 ring-border sm:rounded-lg overflow-hidden">
          <TooltipProvider>
            <Table>
              <TableHeader className="bg-muted/50 sticky top-0 z-10">
                <TableRow>
                  <TableHead className="w-1/4 pt-8 pb-6 px-6 font-semibold text-foreground text-left align-bottom text-lg">Features</TableHead>
                  {tiers.map((tier, idx) => (
                    <TableHead key={tier.name} className="w-1/4 pt-8 pb-6 px-6 text-center align-top border-l border-border/50">
                      <div className="text-xl font-bold text-foreground mb-2">{tier.name}</div>
                      <div className="text-3xl font-bold text-foreground mb-6">{tier.price}</div>
                      <Button className="w-full max-w-[200px]" variant={idx === 1 ? 'default' : 'outline'}>
                         {idx === 2 ? 'Contact Sales' : 'Get Started'}
                      </Button>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((group) => (
                  <React.Fragment key={group.category}>
                    <TableRow className="bg-muted/30">
                      <TableCell colSpan={4} className="py-4 px-6 font-semibold text-foreground border-y text-base">{group.category}</TableCell>
                    </TableRow>
                    {group.items.map((item) => (
                      <TableRow key={item.name} className="hover:bg-muted/10 transition-colors">
                        <TableCell className="py-4 px-6 text-sm font-medium text-foreground">
                          <Tooltip>
                            <TooltipTrigger className="border-b border-dashed border-muted-foreground/50 cursor-help">
                              {item.name}
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                        {['starter', 'pro', 'enterprise'].map((tier) => (
                          <TableCell key={tier} className="py-4 px-6 text-center border-l border-border/50 text-sm">
                            {item[tier as keyof typeof item] === true ? (
                              <Check className="mx-auto h-5 w-5 text-primary" />
                            ) : item[tier as keyof typeof item] === false ? (
                              <Minus className="mx-auto h-5 w-5 text-muted-foreground/40" />
                            ) : (
                              <span className="font-medium text-muted-foreground">{item[tier as keyof typeof item] as React.ReactNode}</span>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
