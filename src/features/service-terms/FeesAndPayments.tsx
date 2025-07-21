import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface FeeSection {
  title: string;
  description: string;
}

const FeesAndPayments = () => {
  const { t } = useTranslation();

  const sections: FeeSection[] = [
    {
      title: t("serviceTerms.feesAndPayments.trial.title"),
      description: t("serviceTerms.feesAndPayments.trial.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.subscriptionFees.title"),
      description: t("serviceTerms.feesAndPayments.subscriptionFees.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.paymentMethod.title"),
      description: t("serviceTerms.feesAndPayments.paymentMethod.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.billingCycle.title"),
      description: t("serviceTerms.feesAndPayments.billingCycle.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.taxes.title"),
      description: t("serviceTerms.feesAndPayments.taxes.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.prorations.title"),
      description: t("serviceTerms.feesAndPayments.prorations.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.failedPayments.title"),
      description: t("serviceTerms.feesAndPayments.failedPayments.description"),
    },
    {
      title: t("serviceTerms.feesAndPayments.priceChanges.title"),
      description: t("serviceTerms.feesAndPayments.priceChanges.description"),
    },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.feesAndPayments.title")}
      </Text>
      <div className='my-4 space-y-6'>
        {sections.map((section, index) => (
          <div key={index} className='flex gap-4'>
            <ul className='list-disc text-base'>
              <li>
                <strong>{section.title}</strong>: {section.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { FeesAndPayments };
