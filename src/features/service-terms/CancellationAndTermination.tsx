import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

const CancellationAndTermination = () => {
  const { t } = useTranslation();

  const options = [
    { text: t("serviceTerms.cancellationAndTermination.point_1") },
    { text: t("serviceTerms.cancellationAndTermination.point_2") },
    { text: t("serviceTerms.cancellationAndTermination.point_3") },
  ];

  const terminationBullets = [
    t("serviceTerms.cancellationAndTermination.point_4_bullet_1"),
    t("serviceTerms.cancellationAndTermination.point_4_bullet_2"),
    t("serviceTerms.cancellationAndTermination.point_4_bullet_3"),
  ];

  const finalPoints = [
    t("serviceTerms.cancellationAndTermination.point_5"),
    t("serviceTerms.cancellationAndTermination.point_6"),
    t("serviceTerms.cancellationAndTermination.point_7"),
  ];

  return (
    <Container>
      <Text variant={"heading"} className='text-xl lg:text-2xl xl:text-3xl'>
        {t("serviceTerms.cancellationAndTermination.title")}
      </Text>

      <div className='my-4'>
        <ul className='list-disc text-start'>
          {options.map((option, idx) => (
            <li key={idx} className='my-2 text-sm xl:text-base'>
              {option.text}
            </li>
          ))}
        </ul>
      </div>

      <span className='my-2 text-sm xl:text-base'>
        {" "}
        {t("serviceTerms.cancellationAndTermination.point_4_title")},
      </span>
      <span className='my-2 text-sm xl:text-base'>
        {" "}
        {t("serviceTerms.cancellationAndTermination.point_4_description")}
      </span>

      <ul className='list-disc text-start'>
        {terminationBullets.map((bullet, idx) => (
          <li key={idx} className='my-1 text-sm xl:text-base'>
            {bullet}
          </li>
        ))}
      </ul>

      <div className='my-4'>
        <ul className='list-disc pl-6 text-start'>
          {finalPoints.map((point, idx) => (
            <li key={idx} className='my-2 text-sm xl:text-base'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export { CancellationAndTermination };
