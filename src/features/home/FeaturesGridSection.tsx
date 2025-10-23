import { useTranslation } from "react-i18next";

import i18n, { type SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { FeatureCard } from "@/shared/components/common/FeatureCard";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons, type RemixIconName } from "@/shared/constants/icons";
import { fadeInUp, useGSAP } from "@/shared/hooks/useGSAP";

const FeaturesGridSection = () => {
  const { t } = useTranslation();
  const sectionRef = useGSAP<HTMLDivElement>();
  const paymentLogisticPath = getLocalizedPath(
    "paymentLogistic",
    i18n.language as SupportedLanguages
  );

  return (
    <Section ref={sectionRef} className='relative py-32' aria-labelledby='features-heading'>
      <Container>
        <div
          className='mb-16 text-center'
          id='features-heading'
          data-gsap={JSON.stringify(fadeInUp)}
        >
          <Text variant='heading' className='mb-5 text-center md:mb-8' as='h2'>
            {t("home.featuresGrid.heading")}
          </Text>
          <Text
            variant='subheading'
            className='mb-5 text-center text-lg md:mb-8 md:text-2xl lg:text-3xl'
            as='h2'
            color={"secondary"}
          >
            {t("home.featuresGrid.subtitle")}
          </Text>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          <FeatureCard
            title={t("home.featuresGrid.payment.title")}
            description={t("home.featuresGrid.payment.description")}
            icon={RemixIcons.securePayment as RemixIconName}
            buttonText={t("home.featuresGrid.payment.buttonText")}
            buttonLink={paymentLogisticPath}
            index={0}
          />
          <FeatureCard
            title={t("home.featuresGrid.logistics.title")}
            description={t("home.featuresGrid.logistics.description")}
            icon={RemixIcons.truck as RemixIconName}
            buttonText={t("home.featuresGrid.logistics.buttonText")}
            buttonLink={paymentLogisticPath}
            index={1}
          />
        </div>
      </Container>
    </Section>
  );
};

export { FeaturesGridSection };
