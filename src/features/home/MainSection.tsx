import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ScrollIndicator } from "@/shared/components/common/ScollIndicator";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const MainSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } },
  };

  const [dynamicMargins, setDynamicMargins] = useState({ mt: 0 });

  useEffect(() => {
    function updateMargins() {
      const isMobile = window.innerWidth < 640;
      const vh = window.innerHeight;
      setDynamicMargins({
        mt: isMobile ? Math.min(20, vh * 0.01) : 0,
      });
    }
    updateMargins();
    window.addEventListener("resize", updateMargins);
    return () => window.removeEventListener("resize", updateMargins);
  }, []);

  return (
    <Section
      className='relative h-[102vh] min-h-screen bg-cover'
      style={{
        backgroundImage: `url(${Assets.heroStockholm})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 h-[102vh] bg-gradient-to-t from-black/50 via-black/40 to-transparent'
      />

      <div className='relative z-30 flex h-[90vh] flex-col items-start justify-center px-4 py-12 sm:justify-center sm:px-6 sm:py-16 lg:px-4 lg:py-20'>
        <Container className='flex w-full justify-center px-6'>
          <div className='relative w-full py-4'>
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              <motion.div
                variants={titleVariants}
                className='block w-full items-center justify-start sm:flex'
              >
                <Text
                  as='h2'
                  variant='heading'
                  className='px-2 text-center text-5xl leading-tight font-medium text-white sm:text-center xl:text-7xl'
                >
                  {t("home.main.title")}
                </Text>
              </motion.div>

              <div className='flex w-full flex-col items-center gap-6 py-6 sm:flex-row sm:items-start sm:gap-4 md:py-0'>
                <div className='flex-shrink-0'>
                  <img
                    src={Assets.logoLightIcon}
                    alt=''
                    className='mx-4 w-24 sm:mx-0 sm:w-32 md:w-40'
                  />
                </div>

                <motion.div
                  variants={subtitleVariants}
                  className='text-center text-2xl font-normal text-white sm:pt-0 sm:text-start sm:text-balance md:text-4xl'
                  style={{
                    marginTop: dynamicMargins.mt > 0 ? `${dynamicMargins.mt}px` : "1rem",
                    marginBottom: 0,
                  }}
                >
                  {t("home.main.subtitle")}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Container>
        <ScrollIndicator text={t("forOfflineVendor.hero.scrollToExplore")} />
      </div>
    </Section>
  );
};

export { MainSection };
