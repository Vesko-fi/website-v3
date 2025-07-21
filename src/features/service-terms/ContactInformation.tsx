import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const ContactInformation = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.contactInformation.title")}
      </Text>

      <ul className='my-4 list-disc text-base'>
        <li>{t("serviceTerms.contactInformation.description")}</li>
        <ul className='my-4 list-disc space-y-1 pl-6'>
          <li>{t("serviceTerms.contactInformation.email")}</li>
          <li>{t("serviceTerms.contactInformation.address")}</li>
        </ul>
        <li>{t("serviceTerms.contactInformation.response")}</li>
      </ul>
    </Container>
  );
};

export { ContactInformation };
