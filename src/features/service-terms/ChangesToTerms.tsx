import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const ChangesToTerms = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.changesToTerms.title")}
      </Text>
      <ul className='my-4 list-disc space-y-6 text-base'>
        <li>{t("serviceTerms.changesToTerms.notice")}</li>
        <li>{t("serviceTerms.changesToTerms.optOut")}</li>
        <li>{t("serviceTerms.changesToTerms.lastUpdated")}</li>
      </ul>
    </Container>
  );
};

export { ChangesToTerms };
