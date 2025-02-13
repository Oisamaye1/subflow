import { Button } from "@/components/ui/button"
import MaxWidthWrapper from "./MaxWidthWrapper"

export default function CtaSection() {

  return (
    <section className="w-full mt-24 bg-muted/50 dark:bg-muted/10">
      <MaxWidthWrapper>
      <div className="py-16">
          <div className="mb-8 flex flex-col items-center justify-center space-y-4 text-center">
            <Button  className="bg-[#99E39E] text-black hover:bg-[#99E39E]/90 rounded">
              Connect Wallet
            </Button>
            
          </div>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Try <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
                SubFlow
              </span> Today.</h2>
            <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
              Discover how different creators and businesses are leveraging our platform for recurring crypto payments.
            </p>
          </div>
        </div>
        
      </div>
      </MaxWidthWrapper>
    </section>
  )
}

