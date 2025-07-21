import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface LawSection {
  title?: string;
  text: string;
}

const GoverningLaw = () => {
  const { t } = useTranslation();

  const sections: LawSection[] = [
    { text: t("serviceTerms.governingLaw.law") },
    { text: t("serviceTerms.governingLaw.consumerRights") },
    {
      title: t("serviceTerms.governingLaw.jurisdiction.title"),
      text: t("serviceTerms.governingLaw.jurisdiction.text"),
    },
    { text: t("serviceTerms.governingLaw.disputeResolution") },
  ];

  return (
    <Container>
      <Text variant='heading' className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.governingLaw.title")}
      </Text>
      <div className='my-4 space-y-6'>
        {sections.map((section, index) => (
          <div key={index} className='flex gap-4'>
            <ul className='list-disc text-base'>
              <li key={index}>
                {section.title && <strong>{section.title}: </strong>}
                {section.text}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { GoverningLaw };
