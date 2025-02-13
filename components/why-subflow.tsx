import MaxWidthWrapper from "./MaxWidthWrapper";
import SimpleCard from "./simplecard";

const datas = [
    {
    title:"1% Fees",
    description:"Save up to 80% compared to traditional payment processors like Stripe.",
    
},
{
    title:"Multi-Chain Support",
    description:"Accept payments on Ethereum, Polygon, and Solana.",
    
},
{
    title:"No-Code Integration",
    description:"Embed subscription widgets into your website with just a few clicks. ",
    
},
]

export default function WhySubflow(){
    return(
        <section className="mt-24">
            <MaxWidthWrapper className="grid grid-cols-3 gap-4">
                {
                    datas.map((data)=>(
                        <SimpleCard key={data.title} ClassName=" " title={data.title} description={data.description} />
                    ))
                }
                
                
            </MaxWidthWrapper>
        </section>
    )
}