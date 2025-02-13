import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import MaxWidthWrapper from "./MaxWidthWrapper"

export default function PricingSection() {
  return (
    <section className="mt-24">
        <MaxWidthWrapper className="">
        <div className="w-full bg-background">
      <div className="">
        <h2 className="bg-gradient-to-r from-[#99E39E] to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl mb-12 text-center">
        Pricing
          </h2>
        <div className="grid gap-6 grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="relative border-[#99E39E] ">
            <CardHeader className="space-y-2">
              <h3 className="text-2xl max-md:text-xl font-bold text-[#99E39E]">Free Tier</h3>
              <p className="text-2xl font-bold">$0</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm max-md:text-xs">
                {["1 active subscription", "Basic analytics", "No-code widget"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-sm max-md:text-xs text-[#99E39E]" />
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard" className="w-full">
                <Button
                  className="w-full bg-card hover:bg-[#99E39E] hover:text-black text-[#99E39E] border border-[#99E39E] rounded"
                  variant="outline"
                >
                  Get Started
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Pro Tier */}
          <Card className="relative overflow-hidden bg-[#99E39E] border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-[#99E39E]/20 via-background/0 to-background pointer-events-none" />
            
            <CardHeader className="space-y-2 relative">
              <div className="absolute -top-8 -right-8 size-16 rounded-full bg-[#99E39E]" />
              <h3 className="text-2xl font-bold text-black">Pro Tier</h3>
              <p className="text-2xl font-bold text-white">$49/month</p>
            </CardHeader>
            <CardContent className="space-y-4 relative">
              <ul className="space-y-2 text-sm max-md:text-xs text-black">
                {["Unlimited subscriptions", "Advanced analytics", "Priority support", "Multi-chain support"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-sm max-md:text-xs text-black" />
                      <span>{feature}</span>
                    </li>
                  ),
                )}
              </ul>
            </CardContent>
            <CardFooter className="relative">
              <Link href="/dashboard" className="w-full">
                <Button className="w-full relative group overflow-hidden text-white hover:bg-none hover:text-black bg-black border border-black rounded">
                  <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(153,227,158,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
                  <span className="relative inline-flex items-center  gap-2">
                    Get Started
                    <div className="size-1 rounded-full bg-[#99E39E] group-hover:shadow-[0_0_8px_#99E39E] transition-shadow" />
                  </span>
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
    </MaxWidthWrapper>
    </section>
    
  )
}

