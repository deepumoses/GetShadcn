"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"
import { Check, Info } from "lucide-react"

interface PricingPlan {
  name: string
  price: { monthly: number; yearly: number }
  features: string[]
  popular?: boolean
}

interface PricingSectionProps {
  variant?: "toggle-switcher" | "tier-pop" | "comparison-drop" | "currency-slider" | "staggered-entrance"
  plans?: PricingPlan[]
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: { monthly: 15, yearly: 150 },
    features: ["5 Projects", "Basic Analytics", "Community Support"],
  },
  {
    name: "Pro",
    price: { monthly: 45, yearly: 450 },
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Team Access"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    features: ["Custom Solutions", "Dedicated Manager", "SSO Integration", "Audit Logs"],
  },
]

function ToggleSwitcher({ plans }: PricingSectionProps) {
    const [isYearly, setIsYearly] = React.useState(false)

    return (
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
                !isYearly ? "text-gray-900" : "text-gray-500"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "relative z-10 px-6 py-2 text-sm font-medium rounded-full transition-colors",
                isYearly ? "text-gray-900" : "text-gray-500"
              )}
            >
              Yearly
            </button>
            <motion.div
              layoutId="pricing-toggle"
              className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-white rounded-full shadow-sm"
              animate={{ x: isYearly ? "100%" : "0%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans?.map((plan) => (
            <div key={plan.name} className="bg-white border rounded-2xl p-8 relative">
              {plan.popular && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                  Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-gray-500">/{isYearly ? "year" : "month"}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-600">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={cn("w-full py-3 rounded-lg font-medium transition-colors", plan.popular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-gray-100 text-gray-900 hover:bg-gray-200")}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    )
}

function TierPop({ plans }: PricingSectionProps) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {plans?.map((plan) => (
          <motion.div
            key={plan.name}
            whileHover={{ scale: 1.05, borderColor: "rgb(var(--primary))", boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            className="bg-white border rounded-2xl p-8 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">${plan.price.monthly}<span className="text-base font-normal text-gray-500">/mo</span></div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600">
                  <Check className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Choose {plan.name}
            </button>
          </motion.div>
        ))}
      </div>
    )
}

function ComparisonDrop({ plans }: PricingSectionProps) {
    return (
      <div className="py-20 px-4 max-w-4xl mx-auto space-y-4">
        {plans?.map((plan) => (
          <motion.div
            key={plan.name}
            initial={false}
            className="border rounded-xl overflow-hidden bg-white"
          >
            <motion.button
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50"
              onClick={() => { /* Handle expansion logic if needed, simplified here */ }}
            >
              <span className="font-semibold text-lg">{plan.name}</span>
              <div className="flex items-center gap-4">
                <span className="font-bold">${plan.price.monthly}/mo</span>
                <Info className="w-5 h-5 text-gray-400" />
              </div>
            </motion.button>
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-gray-50 px-6 pb-6"
              >
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium mb-3 text-sm text-gray-500 uppercase tracking-wider">Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    )
}

function CurrencySlider() {
    const [users, setUsers] = React.useState(10)

    return (
      <div className="py-20 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Flexible Pricing</h2>
        <div className="bg-white p-8 rounded-2xl border shadow-sm">
          <div className="mb-8">
            <span className="text-5xl font-bold text-primary">${users * 5}</span>
            <span className="text-gray-500 text-lg">/month</span>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>1 User</span>
              <span>100 Users</span>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="mt-4 text-gray-700 font-medium">
              {users} {users === 1 ? "User" : "Users"}
            </div>
          </div>

          <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Start Trial
          </button>
        </div>
      </div>
    )
}

function StaggeredEntrance({ plans }: PricingSectionProps) {
    return (
      <div className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {plans?.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border rounded-2xl p-8 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-6">${plan.price.monthly}<span className="text-sm font-normal text-gray-500">/mo</span></div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-600">
                  <Check className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-2 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    )
}

export function PricingSection({ variant = "toggle-switcher", plans = defaultPlans }: PricingSectionProps) {
  if (variant === "toggle-switcher") return <ToggleSwitcher plans={plans} />
  if (variant === "tier-pop") return <TierPop plans={plans} />
  if (variant === "comparison-drop") return <ComparisonDrop plans={plans} />
  if (variant === "currency-slider") return <CurrencySlider />
  if (variant === "staggered-entrance") return <StaggeredEntrance plans={plans} />

  return null
}
