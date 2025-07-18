import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Section {
  content: React.ReactNode;
}

const UserDataAndPrivacy = () => {
  const { t } = useTranslation();

  const sections: Section[] = [
    { content: t("serviceTerms.privacy.point_1") },
    { content: t("serviceTerms.privacy.point_2") },
    {
      content: (
        <>
          {t("serviceTerms.privacy.point_3")}
          <ul className='mt-2 list-disc space-y-2 pl-8'>
            <li>
              <strong>{t("serviceTerms.privacy.point_3_nshift_title")}:</strong>
              {t("serviceTerms.privacy.point_3_nshift_description")}
            </li>
            <li>
              <strong>{t("serviceTerms.privacy.point_3_stripe_title")}:</strong>
              {t("serviceTerms.privacy.point_3_stripe_description")}
            </li>
          </ul>
        </>
      ),
    },
    { content: t("serviceTerms.privacy.point_4") },
    { content: t("serviceTerms.privacy.point_5") },
    { content: t("serviceTerms.privacy.point_6") },
    { content: t("serviceTerms.privacy.point_7") },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.privacy.title")}
      </Text>
      <ul className='my-4 list-disc space-y-4 text-start'>
        {sections.map((section, index) => (
          <li key={index}>{section.content}</li>
        ))}
      </ul>
    </Container>
  );
};

export { UserDataAndPrivacy };
