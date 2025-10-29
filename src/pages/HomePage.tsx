import { EcommerceSolution } from "@/features/home/EcommerceSolution";
import { FeaturesGridSection } from "@/features/home/FeaturesGridSection";
import { FeaturesSection } from "@/features/home/FeaturesSection";
import { HeroSection } from "@/features/home/HeroSection";
import { MainSection } from "@/features/home/MainSection";
import { MiddleHeroSection } from "@/features/home/MiddleHeroSection";
import { SocializeSection } from "@/features/home/SocializeSection";
import { UnboxingVideo } from "@/features/home/UnboxingVideo";
import { VeskoSection } from "@/features/home/VeskoSection";
import { CTASection } from "@/shared/components/common/CTASection";

const HomePage = () => {
  return (
    <div className='relative -top-14.5'>
      <MainSection />
      <HeroSection />
      <FeaturesSection />
      <MiddleHeroSection />
      <VeskoSection />
      <SocializeSection />
      <EcommerceSolution />
      <FeaturesGridSection />
      <UnboxingVideo />
      <CTASection />
    </div>
  );
};

export default HomePage;
