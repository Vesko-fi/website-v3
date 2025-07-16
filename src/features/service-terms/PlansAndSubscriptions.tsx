import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Option {
  text: string;
}

const PlansAndSubscriptions = () => {
  const { t } = useTranslation();

  const options: Option[] = [
    { text: t("serviceTerms.plansAndSubscriptions.subscription_point_1") },
    { text: t("serviceTerms.plansAndSubscriptions.subscription_point_2") },
    {
      text: (
        <>
          {t("serviceTerms.plansAndSubscriptions.subscription_point_3")}
          <ul className='mt-2 list-disc space-y-2 pl-8'>
            <li>{t("serviceTerms.plansAndSubscriptions.subscription_point_3_a")}</li>
            <li>{t("serviceTerms.plansAndSubscriptions.subscription_point_3_b")}</li>
          </ul>
        </>
      ) as unknown as string,
    },
    { text: t("serviceTerms.plansAndSubscriptions.subscription_point_4") },
    { text: t("serviceTerms.plansAndSubscriptions.subscription_point_5") },
    { text: t("serviceTerms.plansAndSubscriptions.subscription_point_6") },
  ];

  return (
    <Container>
      <Text variant={"heading"}>{t("serviceTerms.plansAndSubscriptions.title")}</Text>
      <div className='my-4'>
        <ul className='list-disc text-start'>
          {options.map((option, index) => {
            return (
              <div key={index} className='my-2'>
                <li key={index}>{option.text}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export { PlansAndSubscriptions };
