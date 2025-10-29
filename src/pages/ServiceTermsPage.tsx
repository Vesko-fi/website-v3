import { useTranslation } from "react-i18next";

import { ChangesToTerms } from "@/features/service-terms//ChangesToTerms";
import { ContactInformation } from "@/features/service-terms//ContactInformation";
import { DisclaimersAndLiability } from "@/features/service-terms//DisclaimersAndLiability";
import { EarlyAccessBetaDesclaimer } from "@/features/service-terms//EarlyAccessBetaDesclaimer";
import { FeesAndPayments } from "@/features/service-terms//FeesAndPayments";
import { FreeTrialEarlyAccess } from "@/features/service-terms//FreeTrialEarlyAccess";
import { GoverningLaw } from "@/features/service-terms//GoverningLaw";
import { IntellectualPropertyRights } from "@/features/service-terms//IntellectualPropertyRights";
import { Introduction } from "@/features/service-terms//Introduction";
import { PlansAndSubscriptions } from "@/features/service-terms//PlansAndSubscriptions";
import { ServiceDescription } from "@/features/service-terms//ServiceDescription";
import { ThirdPartyServices } from "@/features/service-terms//ThirdPartyServicesIntegration";
import { UserAccountResponsibilities } from "@/features/service-terms//UserAccountResponsibility";
import { UserDataAndPrivacy } from "@/features/service-terms//UserDataPrivacy";
import { CancellationAndTermination } from "@/features/service-terms/CancellationAndTermination";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";

const ServiceTermsPage = () => {
  const { t } = useTranslation();

  return (
    <Section className='scroll-margin-top-[64px] mt-16'>
      <div className='flex flex-col text-justify'>
        <h2 className='pb-16 text-center text-3xl font-bold sm:text-balance lg:text-4xl'>
          {t("serviceTerms.terms_title")}
        </h2>
      </div>
      <Container className='space-y-16 px-8'>
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

export default ServiceTermsPage;
