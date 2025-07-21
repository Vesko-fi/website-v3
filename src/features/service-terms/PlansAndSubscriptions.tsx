import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Option {
  content: React.ReactNode;
}

const PlansAndSubscriptions = () => {
  const { t } = useTranslation();

  const options: Option[] = [
    { content: t("serviceTerms.plansAndSubscriptions.subscription_point_1") },
    { content: t("serviceTerms.plansAndSubscriptions.subscription_point_2") },
    {
      content: (
        <>
          {t("serviceTerms.plansAndSubscriptions.subscription_point_3")}
          <ul className='mt-4 list-disc space-y-4 pl-8'>
            <li>{t("serviceTerms.plansAndSubscriptions.subscription_point_3_a")}</li>
            <li>{t("serviceTerms.plansAndSubscriptions.subscription_point_3_b")}</li>
          </ul>
        </>
      ),
    },
    { content: t("serviceTerms.plansAndSubscriptions.subscription_point_4") },
    { content: t("serviceTerms.plansAndSubscriptions.subscription_point_5") },
    { content: t("serviceTerms.plansAndSubscriptions.subscription_point_6") },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.plansAndSubscriptions.title")}
      </Text>
      <ul className='my-4 list-disc space-y-4 text-start'>
        {options.map((option, index) => (
          <li key={index}>{option.content}</li>
        ))}
      </ul>
    </Container>
  );
};

export { PlansAndSubscriptions };
