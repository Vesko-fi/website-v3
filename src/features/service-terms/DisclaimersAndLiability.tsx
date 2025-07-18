import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const DisclaimersAndLiability = () => {
  const { t } = useTranslation();

  const points = [
    {
      title: t("serviceTerms.disclaimersAndLiability.noWarranties.title"),
      description: t("serviceTerms.disclaimersAndLiability.noWarranties.description"),
    },
    {
      title: t("serviceTerms.disclaimersAndLiability.betaPhase.title"),
      description: t("serviceTerms.disclaimersAndLiability.betaPhase.description"),
    },
    {
      title: t("serviceTerms.disclaimersAndLiability.limitationOfLiability.title"),
      description: t("serviceTerms.disclaimersAndLiability.limitationOfLiability.description"),
    },
    {
      title: t("serviceTerms.disclaimersAndLiability.cumulativeLiability.title"),
      description: t("serviceTerms.disclaimersAndLiability.cumulativeLiability.description"),
    },
    {
      title: t("serviceTerms.disclaimersAndLiability.exceptions.title"),
      description: t("serviceTerms.disclaimersAndLiability.exceptions.description"),
    },
    {
      title: t("serviceTerms.disclaimersAndLiability.claimTimeLimit.title"),
      description: t("serviceTerms.disclaimersAndLiability.claimTimeLimit.description"),
    },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.disclaimersAndLiability.title")}
      </Text>
      <div className='my-4 space-y-6'>
        {points.map((point, index) => (
          <div key={index} className='flex gap-4'>
            <ul className='list-disc text-base'>
              <li>
                <strong>{point.title}</strong>: {point.description}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { DisclaimersAndLiability };
