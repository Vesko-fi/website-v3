import { CoreValues } from "@/features/for-people/CoreValues";
import { HeroSection } from "@/features/for-people/HeroSection";
import { LocalConnectionSection } from "@/features/for-people/LocalConnectionSection";
import { RealMeetDigitalSection } from "@/features/for-people/RealMeetDigitalSection";
import { VeskoIsSection } from "@/features/for-people/VeskoIsSection";
import { WhatIsVeskoSection } from "@/features/for-people/WhatIsVeskoSection";
import { CTASection } from "@/shared/components/common/CTASection";

const ForPeoplePage = () => {
  return (
    <div className='relative -top-14.5'>
      <HeroSection />
      <WhatIsVeskoSection />
      <VeskoIsSection />
      <CoreValues />
      <LocalConnectionSection />
      <RealMeetDigitalSection />
      <CTASection />
    </div>
  );
};

export default ForPeoplePage;
