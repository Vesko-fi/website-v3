import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text variant='heading'>{t("serviceTerms.contactInformation.title")}</Text>

      <ul className='mt-4 list-disc space-y-4 pl-6 text-start text-sm xl:text-base'>
        <li>{t("serviceTerms.contactInformation.description")}</li>
        <ul className='list-disc space-y-4 pl-6'>
          <li>{t("serviceTerms.contactInformation.email")}</li>
          <li>{t("serviceTerms.contactInformation.address")}</li>
        </ul>
        <li>{t("serviceTerms.contactInformation.response")}</li>
      </ul>
    </Container>
  );
};

export { ContactInformation };
