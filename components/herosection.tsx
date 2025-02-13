import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import heroimg from "../public/Fast.png"
import Link from "next/link";


export default function Herosection(){
    return(
        <section className="mt-14">
            <MaxWidthWrapper className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-y-20">
                <div className="col-span-1 flex flex-col justify-center gap-4">
                    <h1 className="text-[50px] max-md:text-[35px]">Crypto Subscriptions Made Simple. <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#99E39E] to-[#41B3A3]">
                    Zero Gas Fees.
              </span>  Built for Web3.</h1>
                    <p>SubFlow helps businesses and creators accept recurring payments in crypto with no intermediaries. Start in minutes.</p>
                    <div className="flex gap-5 mt-4">
                        <Link href={"/dashboard"}>
                            <Button className="bg-[#99E39E] rounded hover:bg-[#afe0b2]">Get Started</Button>
                        </Link>
                        <Link href={"#How-it-works"}>
                            <Button className="rounded ring-1 ring-[#99E39E] text-[#99E39E] hover:bg-[#99E39E] hover:text-black">How It Works</Button>
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                    <Image src={heroimg} alt="Hero image" priority width={550} />
                </div>
            </MaxWidthWrapper>
        </section>
    )
}