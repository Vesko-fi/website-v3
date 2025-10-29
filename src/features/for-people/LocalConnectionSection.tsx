import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Assets } from "@/shared/constants/assets";

const LocalConnectionSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const textRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // 1st section top image floats in from top to bottom
  const imageRightVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  // 1st section bottom image floats in from bottom to top
  const imageLeftVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const mainTextTopVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subTextVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };
  return (
    <Section className='overflow-x-hidden'>
      <Container className='flex flex-col gap-4'>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='flex flex-col gap-2 text-center'
        >
          <motion.div variants={mainTextTopVariants}>
            <h2 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
              {t("forPeople.localConnection.heading")}
            </h2>
          </motion.div>
          <motion.div variants={subTextVariants}>
            <p>{t("forPeople.localConnection.subheading")}</p>
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='mt-5 flex flex-col items-center gap-4 sm:flex-row'
        >
          <motion.div variants={textLeftVariants} className='flex flex-1 flex-col gap-2'>
            <p className='text-sm'>{t("forPeople.localConnection.step1.label")}</p>
            <h3 className='text-xl font-bold md:text-2xl lg:text-4xl'>
              {t("forPeople.localConnection.step1.title")}
            </h3>
            <p>{t("forPeople.localConnection.step1.description")}</p>
          </motion.div>
          <motion.div variants={imageRightVariants} className='flex-1'>
            <Image src={Assets.searchAndFind} alt='search and find' />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='flex flex-col items-center gap-4 sm:flex-row-reverse'
        >
          <motion.div variants={textRightVariants} className='flex flex-1 flex-col gap-2'>
            <p className='text-sm'>{t("forPeople.localConnection.step2.label")}</p>
            <h3 className='text-xl font-bold md:text-2xl lg:text-4xl'>
              {t("forPeople.localConnection.step2.title")}
            </h3>
            <p>{t("forPeople.localConnection.step2.description")}</p>
          </motion.div>
          <motion.div variants={imageLeftVariants} className='flex-1'>
            <Image src={Assets.checkAvailablity} alt='check availability' />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          viewport={{ once: true }}
          initial='hidden'
          whileInView='visible'
          className='flex flex-col items-center gap-4 sm:flex-row'
        >
          <motion.div variants={textLeftVariants} className='flex flex-1 flex-col gap-2'>
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
          </motion.div>
          <motion.div variants={imageRightVariants} className='flex-1'>
            <Image src={Assets.buyAndCollect} alt='buy and collect' />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { LocalConnectionSection };
