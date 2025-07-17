import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";

interface options {
  text: string;
}

const ServiceDescription = () => {
  const { t } = useTranslation();
  const options: options[] = [
    {
      text: t("serviceTerms.serviceDescription.service_description"),
    },
    {
      text: t("serviceTerms.serviceDescription.service_usage"),
    },
    {
      text: t("serviceTerms.serviceDescription.service_changes"),
    },
  ];
  return (
    <Container>
      <Text variant={"heading"}>{t("serviceTerms.serviceDescription.title")}</Text>
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

export { ServiceDescription };
