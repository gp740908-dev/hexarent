import HeroSection from "@/components/sections/HeroSection";
import EquipmentShowcase from "@/components/sections/EquipmentShowcase";
import StatsSection from "@/components/sections/StatsSection";
import FeaturedEquipment from "@/components/sections/FeaturedEquipment";
import HowItWorks from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EquipmentShowcase />
      <StatsSection />
      <FeaturedEquipment />
      <HowItWorks />
      <CTASection />
    </>
  );
}
