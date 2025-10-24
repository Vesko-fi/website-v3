import { BenefitsSection } from "@/features/for-offline-vendor/BenefitsSection";
import { HeroSection } from "@/features/for-offline-vendor/HeroSection";
import { HowVeskosWorkSection } from "@/features/for-offline-vendor/HowVeskosWorkSection";
import { OmniStoreBenefitSection } from "@/features/for-offline-vendor/OmniStoreBenefitSection";
import { OrderSection } from "@/features/for-offline-vendor/OrderSection";
import { POSSection } from "@/features/for-offline-vendor/POSSection";
import { WhatIsOmniStoreSection } from "@/features/for-offline-vendor/WhatIsOmniStoreSection";
import { WhySection } from "@/features/for-offline-vendor/WhySection";
import { CTASection } from "@/shared/components/vendor/CTASection";
import { FeaturesSection } from "@/shared/components/vendor/FeaturesSection";

const ForOfflineVendorPage = () => {
  return (
    <div className='relative -top-14.5 overflow-x-hidden'>
      <HeroSection />
      <OmniStoreBenefitSection />
      <WhatIsOmniStoreSection />
      <WhySection />
      <BenefitsSection />
      <HowVeskosWorkSection />
      <FeaturesSection />
      <OrderSection />
      <POSSection />
      <CTASection />
    </div>
  );
};

export default ForOfflineVendorPage;
