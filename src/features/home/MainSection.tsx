import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const MainSection = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const [dynamicMargins, setDynamicMargins] = useState({ mt: 0, mb: 0 });

  useEffect(() => {
    function updateMargins() {
      const isMobile = window.innerWidth < 640;
      const vh = window.innerHeight;
      const extra = Math.max(0, vh - 600);
      setDynamicMargins({
        mt: isMobile ? Math.min(20, vh * 0.03) : 0,
        mb: isMobile ? Math.min(30, extra / 4) : 0,
      });
    }
    updateMargins();
    window.addEventListener("resize", updateMargins);
    return () => window.removeEventListener("resize", updateMargins);
  }, []);

  return (
    <div className='relative mt-20 w-full sm:mt-0'>
      {/* Background gradient */}
      <div className='to-accent-700 absolute inset-0 z-0 bg-gradient-to-b from-[#0EA67D]' />

      {/* Mobile background image */}
      <div
        className='absolute inset-0 z-10 bg-contain bg-top bg-no-repeat sm:hidden'
        style={{ backgroundImage: `url(${Assets.homepageMainimage2})` }}
      />

      {/* Desktop background image */}
      <div
        className='absolute inset-0 z-10 hidden bg-cover bg-center bg-no-repeat sm:block'
        style={{
          backgroundImage: `url(${Assets.homepageMainimage})`,
          backgroundSize: "auto 100%",
        }}
      />

      {/* Content container */}
      <div className='relative z-20 flex min-h-[calc(100vh-80px)] flex-col items-start justify-center px-4 py-18 sm:min-h-[calc(100vh-40px)] sm:justify-start sm:px-6 sm:py-14 lg:px-8'>
        <Container className='mt-8 w-full'>
          <div className='relative py-4 md:w-[540px] lg:w-[680px]'>
            <div className='xl:from-accent-400/10 absolute inset-0 rounded-2xl xl:bg-gradient-to-br xl:to-black/20' />

            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='flex flex-col items-center pt-20 sm:items-start sm:p-2 sm:pt-4'
            >
              {/* Title */}
              <motion.div variants={titleVariants} className='w-full'>
                <Text
                  as='h1'
                  variant='heading'
                  className='text-center text-5xl leading-tight font-medium text-white sm:text-left md:text-5xl xl:text-6xl'
                >
                  {t("home.main.title")}
                </Text>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                variants={subtitleVariants}
                className='w-full text-center text-lg font-semibold text-balance text-white sm:w-96 sm:text-left md:text-xl lg:w-full lg:text-center'
                style={{
                  marginTop: dynamicMargins.mt > 0 ? `${dynamicMargins.mt}px` : "1rem",
                  marginBottom: dynamicMargins.mb > 0 ? `${dynamicMargins.mb}px` : "2rem",
                }}
              >
                {t("home.main.subtitle")}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Background texture overlay */}
      <div className='pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20' />
    </div>
  );
};

export { MainSection };
