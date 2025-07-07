import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Assets } from "@/shared/constants/assets";

const LocalConnectionSection = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            {t("forPeople.localConnection.heading")}
          </h2>
          <p>{t("forPeople.localConnection.subheading")}</p>
        </div>
        <div className='mt-5 flex flex-col items-center gap-4 sm:flex-row'>
          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-sm'>{t("forPeople.localConnection.step1.label")}</p>
            <h3 className='text-xl font-bold md:text-2xl lg:text-4xl'>
              {t("forPeople.localConnection.step1.title")}
            </h3>
            <p>{t("forPeople.localConnection.step1.description")}</p>
          </div>
          <div className='flex-1'>
            <Image src={Assets.searchAndFind} alt='search and find' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 sm:flex-row-reverse'>
          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-sm'>{t("forPeople.localConnection.step2.label")}</p>
            <h3 className='text-xl font-bold md:text-2xl lg:text-4xl'>
              {t("forPeople.localConnection.step2.title")}
            </h3>
            <p>
              <p>{t("forPeople.localConnection.step2.description")}</p>
            </p>
          </div>
          <div className='flex-1'>
            <Image src={Assets.checkAvailablity} alt='check availability' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-4 sm:flex-row'>
          <div className='flex flex-1 flex-col gap-2'>
            <p className='text-sm'>{t("forPeople.localConnection.step3.label")}</p>
            <h3 className='text-xl font-bold md:text-2xl lg:text-4xl'>
              {" "}
              {t("forPeople.localConnection.step3.title")}
            </h3>
            <p>
              <p>{t("forPeople.localConnection.step3.description")}</p>
            </p>
            <h3 className='mt-2 text-xl font-bold md:text-2xl lg:text-4xl'>
              {t("forPeople.localConnection.step3.title2")}
            </h3>
            <p>
              <p>{t("forPeople.localConnection.step3.description2")}</p>
            </p>
          </div>
          <div className='flex-1'>
            <Image src={Assets.buyAndCollect} alt='buy and collect' />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { LocalConnectionSection };
