import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Section {
  content: React.ReactNode;
}

const UserAccountResponsibilities = () => {
  const { t } = useTranslation();

  const sections: Section[] = [
    {
      content: (
        <>
          <ul className='mt-2 list-disc space-y-2'>
            <li>
              <strong>
                {t("serviceTerms.userAccountResponsibilities.account_registration.title")}
              </strong>
              : {t("serviceTerms.userAccountResponsibilities.account_registration.description")}
            </li>
            <li>
              <strong>
                {t("serviceTerms.userAccountResponsibilities.account_security.title")}
              </strong>
              : {t("serviceTerms.userAccountResponsibilities.account_security.description")}
            </li>
            <li>
              <strong>{t("serviceTerms.userAccountResponsibilities.lawful_use.title")}</strong>:{" "}
              {t("serviceTerms.userAccountResponsibilities.lawful_use.description")}
              <ul className='mt-2 list-disc space-y-2 pl-8'>
                <li>{t("serviceTerms.userAccountResponsibilities.lawful_use.point1")}</li>
                <li>{t("serviceTerms.userAccountResponsibilities.lawful_use.point2")}</li>
                <li>{t("serviceTerms.userAccountResponsibilities.lawful_use.point3")}</li>
                <li>{t("serviceTerms.userAccountResponsibilities.lawful_use.point4")}</li>
              </ul>
            </li>
            <li>
              {t(
                "serviceTerms.userAccountResponsibilities.user_content_responsibility.description"
              )}
            </li>
            <li>
              <strong>{t("serviceTerms.userAccountResponsibilities.user_conduct.title")}</strong>:{" "}
              {t("serviceTerms.userAccountResponsibilities.user_conduct.description")}
            </li>
            <li>
              {t(
                "serviceTerms.userAccountResponsibilities.terms_violation_consequences.description"
              )}
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.userAccountResponsibilities.user_accounts.title")}
      </Text>
      <ul className='my-4 list-disc space-y-4 text-start'>
        {sections.map((section, index) => (
          <li key={index} className='text-sm xl:text-base'>
            {section.content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export { UserAccountResponsibilities };
