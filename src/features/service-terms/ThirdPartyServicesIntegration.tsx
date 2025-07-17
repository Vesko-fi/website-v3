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
      <Text variant='heading'>{t("serviceTerms.thirdPartyServices.title")}</Text>
      <div className='my-4'>
        <ul className='list-disc text-start'>
          {sections.map((section, index) => (
            <div key={index} className='my-2'>
              <li className='text-sm xl:text-base'>{t(section.text)}</li>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export { ThirdPartyServices };
