import { Rocket, Users, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MaxWidthWrapper from "./MaxWidthWrapper"

const useCases=[
    {
        icon: <Rocket className="h-6 w-6 text-[#99E39E]" />,
        title: "Web3 Startups",
        description: "Seamlessly charge for SaaS tools, APIs, or premium features with automated crypto payments."
    },
    {
        icon: <Users className="h-6 w-6 text-[#99E39E]" />,
        title: "Content Creators",
        description: "Offer paid memberships for newsletters, podcasts, or videos with recurring crypto subscriptions."
    },
    {
        icon: <Briefcase className="h-6 w-6 text-[#99E39E]" />,
        title: "Freelancers",
        description: "Set up automated retainer agreements and receive payments in your preferred cryptocurrency."
    },
]

export default function UseCases() {
  return (
    <MaxWidthWrapper className="mt-24">
        <section className="w-full bg-muted/50 dark:bg-muted/10">
      <div className="">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            
            <h2 className="bg-gradient-to-r from-[#99E39E] to-emerald-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl  text-center">
              Who Uses SubFlow?
            </h2>
            <p className="mx-auto max-w-[700px] text-md text-gray-400">
              Discover how different creators and businesses are leveraging our platform for recurring crypto payments.
            </p>
          </div>
        </div>


        <div className="mx-auto grid gap-6 py-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {
            useCases.map((usecase)=>(
                <Card key={usecase.title} className="relative overflow-hidden border-slate-700">
            <CardHeader className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-[#99E39E]/10 p-3">
                  {usecase.icon}
                </div>
              </div>
              <CardTitle className="text-xl max-md:text-md font-bold text-[#99E39E] dark:text-[#99E39E]">{usecase.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-gray-400 text-sm">{usecase.description}</p>
            </CardContent>
          </Card>
            ))
          }
          
        </div>


        <div className="mx-auto max-w-[800px] space-y-4 text-center text-gray-400">
          <blockquote className="text-sm font-medium italic text-muted-foreground dark:text-muted-foreground/80">
            &quot;SubFlow has revolutionized how we handle subscriptions. The automated crypto payments have made our
            business model much more efficient.&quot;
          </blockquote>
          <div className="text-sm text-muted-foreground">— <span className="text-[#99E39E]">Sarah Chen,</span> Founder of DecentralizedAI</div>
        </div>
      </div>
    </section>
    </MaxWidthWrapper>
  )
}

