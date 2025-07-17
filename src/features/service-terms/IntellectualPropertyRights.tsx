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
      <Text variant='heading'>{t("serviceTerms.intellectualPropertyRights.title")}</Text>

      <ul className='mt-4 list-disc space-y-4 pl-6 text-start text-sm xl:text-base'>
        {points.map((point, index) => (
          <li key={index}>
            {point.title && <strong>{point.title}: </strong>}
            {point.description ?? point.text}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export { IntellectualPropertyRights };
