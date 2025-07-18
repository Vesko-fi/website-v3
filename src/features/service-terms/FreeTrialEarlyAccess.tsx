import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface options {
  text: string;
}
const FreeTrialEarlyAccess = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_1"),
    },
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_2"),
    },
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_3"),
    },
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_4"),
    },
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_5"),
    },
    {
      text: t("serviceTerms.trialAndAccess.free_trial_point_6"),
    },
  ];
  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.trialAndAccess.title")}
      </Text>
      <div className='my-4'>
        <ul className='list-disc text-start'>
          {options.map((option, index) => {
            return (
              <div key={index} className='my-2'>
                <li className='text-sm xl:text-base'>{t(option.text)}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export { FreeTrialEarlyAccess };
