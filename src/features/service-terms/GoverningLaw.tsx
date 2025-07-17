import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const GoverningLaw = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text variant='heading'>{t("serviceTerms.governingLaw.title")}</Text>

      <ul className='my-4 list-disc space-y-4 pl-6 text-start text-sm xl:text-base'>
        <li>{t("serviceTerms.governingLaw.law")}</li>
        <li>{t("serviceTerms.governingLaw.consumerRights")}</li>
        <li>
          <strong>{t("serviceTerms.governingLaw.jurisdiction.title")}: </strong>
          {t("serviceTerms.governingLaw.jurisdiction.text")}
        </li>
        <li>{t("serviceTerms.governingLaw.disputeResolution")}</li>
      </ul>
    </Container>
  );
};

export { GoverningLaw };
