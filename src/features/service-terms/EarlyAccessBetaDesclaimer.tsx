import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Option {
  text: string;
}

const EarlyAccessBetaDesclaimer = () => {
  const { t } = useTranslation();

  const options: Option[] = [
    {
      text: t("serviceTerms.earlyAccessDisclaimer.point_1"),
    },
    {
      text: t("serviceTerms.earlyAccessDisclaimer.point_2"),
    },
    {
      text: t("serviceTerms.earlyAccessDisclaimer.point_3"),
    },
    {
      text: t("serviceTerms.earlyAccessDisclaimer.point_4"),
    },
    {
      text: t("serviceTerms.earlyAccessDisclaimer.point_5"),
    },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.earlyAccessDisclaimer.title")}
      </Text>
      <ul className='my-4 list-disc space-y-4 text-start'>
        {options.map((option, index) => (
          <div key={index} className='my-2'>
            <li className='text-sm xl:text-base'>{option.text}</li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export { EarlyAccessBetaDesclaimer };
