"use client"

import { Banknote, BarChart3, Globe2, Shield } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import feature from "../public/feature.svg"
import Image from "next/image"

const features = [
  {
    icon: Banknote,
    title: "Gasless Payments",
    description: "Powered by Superfluid's Layer 2 streams",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track revenue, churn rates, and customer activity",
  },
  {
    icon: Globe2,
    title: "Global Accessibility",
    description: "Accept payments from anyone, anywhere, with no borders",
  },
  {
    icon: Shield,
    title: "Secure & Transparent",
    description: "Built on blockchain for tamper-proof records",
  },
]

export default function FeaturesSection() {
  return (
    
    <section className="relative mt-24  overflow-hidden py-20 max-lg:py-0">

      {/* Hexagon grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-rule='evenodd' stroke='%2399E39E' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <MaxWidthWrapper>
      <div className="relative mx-auto ">
        <div className="mb-20 text-center">
          <h2 className="bg-gradient-to-r from-[#99E39E] to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Features that make SubFlow unique
          </h2>
          <p className="mt-4 text-lg text-emerald-200/60">Experience the future of subscription management</p>
        </div>

        <div className="grid relative gap-2 grid-cols-5 max-lg:grid-cols-1">
            <Carousel
                opts={{
                    align: "start",
                }}
                orientation="vertical"
                className="col-span-2 max-md:col-span-1"
                >
                <CarouselContent className="-mt-1 h-[500px] px-3 max-md:h-[250px]">
                    {features.map((feature) => (
                    <CarouselItem key={feature.title} className="pt-1 md:basis-1/2">
                        <div className="mt-4">
                        <Card className="border-slate-700">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <div className="mb-4 rounded-full border border-[#99E39E]/20 bg-black/50 p-4">
                                    <feature.icon className="h-8 w-8 text-[#99E39E]" />
                                </div>
                                    <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                                    <p className="text-sm text-emerald-200/60">{feature.description}</p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-[#99E39E] hover:bg-[#99E39E]" />
                <CarouselNext className="text-[#99E39E] hover:bg-[#99E39E]" />
            </Carousel>

            <div className="lg:relative col-span-3 max-md:col-span-1 flex justify-center items-center">
                <Image src={feature} priority alt="feature" className="lg:absolute object-cover" layout="responsive"/>
            </div>
        </div>
        </div>

        
      
      </MaxWidthWrapper>

      
    </section>
  )
}

