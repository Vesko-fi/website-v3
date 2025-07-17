import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface options {
  text: string;
}

const Introduction = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      text: t("serviceTerms.introduction.terms_intro"),
    },
    {
      text: t("serviceTerms.introduction.terms_acceptance"),
    },
    {
      text: t("serviceTerms.introduction.terms_effective_date"),
    },
  ];
  return (
    <Container>
      <Text variant={"heading"}>{t("serviceTerms.introduction.title")}</Text>
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

export { Introduction };
