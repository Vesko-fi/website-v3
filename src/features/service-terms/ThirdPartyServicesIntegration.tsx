import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Section {
  text: string;
}

const ThirdPartyServices = () => {
  const { t } = useTranslation();

  const sections: Section[] = [
    { text: "serviceTerms.thirdPartyServices.paragraph_1" },
    { text: "serviceTerms.thirdPartyServices.paragraph_2" },
    { text: "serviceTerms.thirdPartyServices.paragraph_3" },
    { text: "serviceTerms.thirdPartyServices.paragraph_4" },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.thirdPartyServices.title")}
      </Text>
      <ul className='my-4 list-disc space-y-4 text-start'>
        {sections.map((section, index) => (
          <div key={index} className='my-2'>
            <li className='text-sm xl:text-base'>{t(section.text)}</li>
          </div>
        ))}
      </ul>
    </Container>
  );
};

export { ThirdPartyServices };
