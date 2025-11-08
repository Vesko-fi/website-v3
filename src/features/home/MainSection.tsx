import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ScrollIndicator } from "@/shared/components/common/ScollIndicator";
import { Container } from "@/shared/components/ui/container";
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
        mt: isMobile ? Math.min(20, vh * 0.03) : 0,
      });
    }
    updateMargins();
    window.addEventListener("resize", updateMargins);
    return () => window.removeEventListener("resize", updateMargins);
  }, []);

  return (
    <div className='relative max-w-full'>
      {/* Background gradient */}
      <div className='to-accent-700 absolute inset-0 z-0 bg-gradient-to-b from-[#0EA67D]' />

      <div className='absolute inset-0 z-10 h-[102vh] overflow-hidden'>
        <img
          src={Assets.heroStockholm}
          alt=''
          className='h-full w-full object-cover'
          fetchPriority='high'
        />
      </div>
      <div className='absolute inset-0 z-20 h-[102vh] rounded-2xl bg-gradient-to-br from-black/30 via-black/30 to-black/20' />
      {/* Content container */}
      <div className='relative z-20 flex min-h-screen flex-col items-start justify-center px-4 sm:justify-center sm:px-6 lg:px-4'>
        <Container className='flex w-full justify-center px-6'>
          <div className='relative w-full py-4'>
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              {/* Title */}
              <motion.div
                variants={titleVariants}
                className='block w-full items-center justify-start sm:flex'
              >
                <Text
                  as='h2'
                  variant='heading'
                  className='px-2 pt-4 text-center text-5xl leading-tight font-medium text-white sm:pt-0 sm:text-center xl:text-7xl'
                >
                  {t("home.main.title")}
                </Text>
              </motion.div>
              <div className='flex w-full flex-col items-center gap-8 py-6 sm:flex sm:flex-row sm:items-start md:py-0'>
                <div>
                  <img src={Assets.logoLightIcon} alt='' className='mx-4 w-24 sm:w-40' />
                </div>
                <motion.div
                  variants={subtitleVariants}
                  className='text-center text-xl font-normal text-white sm:text-start sm:text-2xl sm:text-balance md:text-4xl'
                  style={{
                    marginTop: dynamicMargins.mt > 0 ? `${dynamicMargins.mt}px` : "1rem",
                    marginBottom: 0,
                  }}
                >
                  {t("home.main.subtitle")}
                </motion.div>
              </div>

              {/* Subtitle */}
            </motion.div>
          </div>
          <ScrollIndicator text={t("forOfflineVendor.hero.scrollToExplore")} />
        </Container>
      </div>
      {/* Background texture overlay */}
    </div>
  );
};

export { MainSection };
