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
      <Text variant='heading'>{t("serviceTerms.disclaimersAndLiability.title")}</Text>
      <ul className='mt-4 list-disc space-y-4 pl-6 text-sm xl:text-base'>
        {points.map(({ title, description }, index) => (
          <li key={index}>
            <strong>{title}:</strong> {description}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export { DisclaimersAndLiability };
