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
      <Text variant={"heading"}>{t("serviceTerms.earlyAccessDisclaimer.title")}</Text>
      <div className='my-4'>
        <ul className='list-disc text-start'>
          {options.map((option, index) => (
            <div key={index} className='my-2'>
              <li className='text-sm xl:text-base'>{option.text}</li>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export { EarlyAccessBetaDesclaimer };
