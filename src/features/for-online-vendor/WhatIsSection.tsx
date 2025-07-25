import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const WhatIsSection = () => {
  const { t } = useTranslation();

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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className='bg-white'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-50' />
        <div className='absolute right-10 bottom-20 h-24 w-24 rounded-full bg-purple-50' />
        <div className='absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-green-50' />
      </div>

      <Container className='relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='grid items-center gap-12 lg:grid-cols-2'
        >
          {/* Text Content */}
          <motion.div variants={textVariants} className='space-y-8'>
            {/* Headline */}
            <div>
              <Text
                as='h2'
                variant='heading'
                className='mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
              >
                {t("forOnlineVendor.whatIs.title")}
              </Text>
            </div>

            {/* Subheader */}
            <div>
              <Text className='text-base leading-relaxed text-gray-600'>
                {t("forOnlineVendor.whatIs.subtitle")}
              </Text>
            </div>
            {/* Key Features */}
            <div className='space-y-4'>
              <div className='flex items-start gap-3'>
                <div className='mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600'>
                  <i className={`${RemixIcons.integration} text-xs text-white`} />
                </div>
                <Text className='text-gray-700'>
                  {t("forOnlineVendor.whatIs.features.integratedProfile")}
                </Text>
              </div>
              <div className='flex items-start gap-3'>
                <div className='mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600'>
                  <i className={`${RemixIcons.customers} text-xs text-white`} />
                </div>
                <Text className='text-gray-700'>
                  {t("forOnlineVendor.whatIs.features.meaningfulConnections")}
                </Text>
              </div>
              <div className='flex items-start gap-3'>
                <div className='mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-purple-600'>
                  <i className={`${RemixIcons.growth} text-xs text-white`} />
                </div>
                <Text className='text-gray-700'>
                  {t("forOnlineVendor.whatIs.features.socialPresence")}
                </Text>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className='relative flex justify-center lg:justify-end'
          >
            {/* Main Image */}
            <motion.div
              className='relative overflow-hidden rounded-2xl shadow-2xl'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={Assets.storeDashboard}
                alt='Vendor profile and store interface showing integrated social commerce features'
                className='h-[500px] w-[400px] object-cover'
              />

              {/* Overlay gradient */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
              {/* Floating elements */}
              <motion.div
                variants={floatingVariants}
                animate='animate'
                className='absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm'
              />
              <motion.div
                variants={floatingVariants}
                animate='animate'
                transition={{ delay: 1 }}
                className='absolute bottom-4 left-4 h-6 w-6 rounded-full bg-white/20 backdrop-blur-sm'
              />
              <motion.div
                variants={floatingVariants}
                animate='animate'
                transition={{ delay: 2 }}
                className='absolute top-1/2 -right-6 h-4 w-4 rounded-full bg-blue-400/30'
              />
            </motion.div>

            {/* Background decorative elements */}
            <div className='absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-30' />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhatIsSection };
