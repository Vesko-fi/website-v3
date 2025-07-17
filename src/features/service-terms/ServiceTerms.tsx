import { FreeTrialEarlyAccess } from "./FreeTrialEarlyAccess";
import { Introduction } from "./Introduction";
import { PlansAndSubscriptions } from "./PlansAndSubscriptions";
import { ServiceDescription } from "./ServiceDescription";
import { UserDataAndPrivacy } from "./UserDataPrivacy";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

const ServiceTerms = () => {
  return (
    <Section className='scroll-margin-top-[64px] mt-8'>
      <Container className='sbg-teal-50 flex flex-col items-center gap-16 px-8 pb-6'>
        <Introduction />
        <ServiceDescription />
        <FreeTrialEarlyAccess />
        <PlansAndSubscriptions />
        <UserDataAndPrivacy />
      </Container>
    </Section>
  );
};

export default ServiceTerms;
