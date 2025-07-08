import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const VeskoIsSection: React.FC = () => {
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

  const textVariants = {
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

  // 1st section top image floats in from top to bottom
  const imageTopVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  // 1st section bottom image floats in from bottom to top
  const imageBottomVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // 2nd section animations
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.6,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
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
  const mainTextRightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
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

  // Split the main text for the second section
  const mainText = t("forPeople.veskoIs.secondSection.mainText");
  // Default split: 'Looks familiar by' => ['Looks familiar by', 'design']
  const [mainTextTop, mainTextRight] =
    mainText.split(/\sby\s|\sdesign$/i).length === 2
      ? [mainText.replace(/ design$/i, ""), "design"]
      : [mainText, ""];

  return (
    <>
      <Section>
        <Container className='overflow-hidden rounded-3xl bg-white'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            className='grid items-center lg:grid-cols-2'
          >
            <motion.div variants={textVariants} className='p-8 text-right'>
              <Text as='h2' className='text-4xl italic md:text-5xl xl:text-7xl'>
                {t("forPeople.veskoIs.firstSection.top.line1")}
              </Text>
              <Text as='h2' className='text-4xl italic md:text-5xl xl:text-7xl' color='accent'>
                {t("forPeople.veskoIs.firstSection.top.line2")}
              </Text>
            </motion.div>
            <motion.div variants={imageTopVariants}>
              <Image
                src={Assets.differentKindOfSocialMedia}
                alt={t("forPeople.veskoIs.firstSection.top.line2")}
                className='h-full w-full'
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            className='grid items-center lg:grid-cols-2'
          >
            <motion.div variants={imageBottomVariants} className='order-2 lg:order-1'>
              <Image
                src={Assets.youFeelFree}
                alt={t("forPeople.veskoIs.firstSection.bottom.line2")}
                className='h-full w-full'
              />
            </motion.div>
            <motion.div variants={textVariants} className='p-8 lg:order-2'>
              <Text as='h2' className='text-4xl italic md:text-5xl xl:text-7xl'>
                {t("forPeople.veskoIs.firstSection.bottom.line1")}
              </Text>
              <Text as='h2' className='text-4xl italic md:text-5xl xl:text-7xl' color='accent'>
                {t("forPeople.veskoIs.firstSection.bottom.line2")}
              </Text>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section
        className='relative flex min-h-screen w-full items-center justify-center bg-cover bg-center'
        style={{ backgroundImage: `url(${Assets.youFeelFree})` }}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-15%" }}
          variants={overlayVariants}
          className='absolute inset-0 bg-black'
          style={{ zIndex: 1 }}
        />
        <Container className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-2'>
          {/* <div className='relative flex w-full flex-col items-center md:items-center md:justify-center md:gap-8'> */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            variants={mainTextTopVariants}
            className='text-center md:static md:-top-12 md:left-1/2 md:mb-0 md:block md:w-auto md:translate-x-0 md:justify-center md:text-right'
            style={{ pointerEvents: "none" }}
          >
            <Text
              className='text-center text-white italic drop-shadow-lg md:text-right'
              color='primaryLight'
            >
              {/* Mobile: Show complete text, Desktop: Show split text */}
              <span className='mr-20 text-4xl md:inline md:text-5xl xl:text-6xl'>{mainText}</span>
            </Text>
          </motion.div>
          {/* Phone mockup/image pops/zooms in from center */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            variants={phoneVariants}
            className='flex w-full items-center justify-center md:w-auto'
          >
            <Image
              src={Assets.familiarDesign}
              alt={t("forPeople.veskoIs.secondSection.mainText")}
              className='mr-20 w-full max-w-xs object-contain drop-shadow-2xl md:max-w-md'
            />
          </motion.div>
          {/* </div> */}
          {/* Sub text floats in from bottom */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            variants={subTextVariants}
            className='text-center'
          >
            <Text
              className='max-w-4xl text-center text-xl text-white italic lg:text-3xl'
              color='primaryLight'
            >
              {t("forPeople.veskoIs.secondSection.subText")}
            </Text>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export { VeskoIsSection };
