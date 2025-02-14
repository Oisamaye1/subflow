import CtaSection from "@/components/cta-section";
import FeaturesSection from "@/components/features";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import HowItWorks from "@/components/how-it-works";
import Navbar from "@/components/navbar";
import PricingSection from "@/components/pricing";
import WhoBenefits from "@/components/who-benefits";
import WhySubflow from "@/components/why-subflow";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Herosection />
      <WhySubflow />
      <HowItWorks />
      <WhoBenefits />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
}


