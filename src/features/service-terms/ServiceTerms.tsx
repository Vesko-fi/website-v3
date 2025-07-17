import { CancellationAndTermination } from "./CancellationAndTermination";
import { ChangesToTerms } from "./ChangesToTerms";
import { ContactInformation } from "./ContactInformation";
import { DisclaimersAndLiability } from "./DisclaimersAndLiability";
import { EarlyAccessBetaDesclaimer } from "./EarlyAccessBetaDesclaimer";
import { FeesAndPayments } from "./FeesAndPayments";
import { FreeTrialEarlyAccess } from "./FreeTrialEarlyAccess";
import { GoverningLaw } from "./GoverningLaw";
import { IntellectualPropertyRights } from "./IntellectualPropertyRights";
import { Introduction } from "./Introduction";
import { PlansAndSubscriptions } from "./PlansAndSubscriptions";
import { ServiceDescription } from "./ServiceDescription";
import { ThirdPartyServices } from "./ThirdPartyServicesIntegration";
import { UserAccountResponsibilities } from "./UserAccountResponsibility";
import { UserDataAndPrivacy } from "./UserDataPrivacy";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

const ServiceTerms = () => {
  return (
    <Section className='scroll-margin-top-[64px] mt-24'>
      <Container className='sbg-teal-50 flex flex-col items-center gap-16 px-8 pb-6'>
        <Introduction />
        <ServiceDescription />
        <FreeTrialEarlyAccess />
        <PlansAndSubscriptions />
        <UserDataAndPrivacy />
        <ThirdPartyServices />
        <UserAccountResponsibilities />
        <EarlyAccessBetaDesclaimer />
        <FeesAndPayments />
        <CancellationAndTermination />
        <IntellectualPropertyRights />
        <DisclaimersAndLiability />
        <GoverningLaw />
        <ChangesToTerms />
        <ContactInformation />
      </Container>
    </Section>
  );
};

export default ServiceTerms;
