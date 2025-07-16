import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const WhatIsOmniStoreSection = () => {
  const { t } = useTranslation();

  const highlights = [
    "scalableAndReady",
    "realTimeInventory",
    "betterExperience",
    "freeMarketplace",
  ];
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <Section>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex w-full flex-col items-center justify-between gap-8 lg:py-24 xl:flex-row xl:gap-12'
        >
          <motion.div variants={textVariants} className='flex flex-1 flex-col items-start gap-4'>
            {/* Headline */}
            <div>
              <Text
                as='h2'
                variant='heading'
                className='mb-2 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl'
              >
                {t("forOfflineVendor.whatIsOmniStore.title")}
              </Text>
            </div>

            {/* Subheader */}
            <div>
              <Text as='h4' className='text-base'>
                {t("forOfflineVendor.whatIsOmniStore.subTitle")}
              </Text>
            </div>
            <div>
              <Text as='h4' className='text-base'>
                {t("forOfflineVendor.whatIsOmniStore.description")}
              </Text>
            </div>

            {/* Key Features */}
            <div className='mt-5 space-y-4'>
              {highlights.map((key) => (
                <div key={key} className='flex items-center gap-3'>
                  <div className='mt-1 h-2 w-2 rounded-full bg-blue-500' />
                  <Text className='text-gray-700'>
                    {t(`forOfflineVendor.whatIsOmniStore.highlights.${key}`)}
                  </Text>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className='relative flex items-center justify-center'
          >
            <Image
              src={Assets.omniFeature}
              alt='Omni store representative image'
              className=''
              loading='lazy'
            />
            <Image
              src={Assets.mobileOnboard}
              alt='Omni store representative in mobile'
              className='absolute -bottom-5 left-0 w-24 rounded-md sm:w-32 md:-left-5 md:w-40 lg:w-48'
              loading='lazy'
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhatIsOmniStoreSection };
