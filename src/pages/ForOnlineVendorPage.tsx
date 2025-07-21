import { HeroSection } from "@/features/for-online-vendor/HeroSection";
import { HowVeskosWorkSection } from "@/features/for-online-vendor/HowVeskosWorkSection";
import { OrderSection } from "@/features/for-online-vendor/OrderSection";
import { StartupsSection } from "@/features/for-online-vendor/StartupsSection";
import { ValueProbSection } from "@/features/for-online-vendor/ValueProbSection";
import { WhatIsSection } from "@/features/for-online-vendor/WhatIsSection";
import { CTASection } from "@/shared/components/vendor/CTASection";
import { FeaturesSection } from "@/shared/components/vendor/FeaturesSection";

const ForOnlineVendorPage = () => {
  return (
    <div className='relative -top-18 overflow-x-hidden'>
      <HeroSection />
      <ValueProbSection />
      <WhatIsSection />
      <HowVeskosWorkSection />
      <FeaturesSection />
      <OrderSection />
      <StartupsSection />
      <CTASection />
    </div>
  );
};

export default ForOnlineVendorPage;
