import CtaSection from "@/components/cta-section";
import FeaturesSection from "@/components/features";
import Herosection from "@/components/herosection";
import HowItWorks from "@/components/how-it-works";
import PricingSection from "@/components/pricing";
import WhoBenefits from "@/components/who-benefits";
import WhySubflow from "@/components/why-subflow";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <WhySubflow />
      <HowItWorks />
      <WhoBenefits />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}


