import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface Point {
  title?: string;
  description?: string;
  text?: string;
}
const IntellectualPropertyRights = () => {
  const { t } = useTranslation();

  const points: Point[] = [
    {
      title: t("serviceTerms.intellectualPropertyRights.point_1_title"),
      description: t("serviceTerms.intellectualPropertyRights.point_1_description"),
    },
    {
      text: t("serviceTerms.intellectualPropertyRights.point_2"),
    },
    {
      text: t("serviceTerms.intellectualPropertyRights.point_3"),
    },
    {
      text: t("serviceTerms.intellectualPropertyRights.point_4"),
    },
    {
      title: t("serviceTerms.intellectualPropertyRights.point_5_title"),
      description: t("serviceTerms.intellectualPropertyRights.point_5_description"),
    },
    {
      text: t("serviceTerms.intellectualPropertyRights.point_6"),
    },
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.intellectualPropertyRights.title")}
      </Text>

      <div className='my-4 space-y-6'>
        {points.map((point, index) => (
          <div key={index} className='flex gap-4'>
            <ul className='list-disc text-base'>
              <li>
                {point.title && <strong>{point.title}: </strong>}
                {point.description ?? point.text}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export { IntellectualPropertyRights };
