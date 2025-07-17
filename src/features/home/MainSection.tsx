import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const MainSection = () => {
  const { t } = useTranslation();

  // Animation variants (same as before)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const floatingElementVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className='bg-accent-700 relative mt-20 h-screen w-full overflow-hidden sm:mt-0'>
      <div
        className='absolute inset-0 z-10 bg-contain bg-top bg-no-repeat sm:hidden'
        style={{ backgroundImage: `url(${Assets.homepageMainimage2})` }}
      />
      <div
        className='absolute inset-0 z-10 hidden bg-contain bg-top bg-no-repeat sm:block'
        style={{ backgroundImage: `url(${Assets.homepageMainimage})` }}
      />

      {/* 2. Floating elements/overlays (if any) */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent'
      />

      // {/* Floating background elements 
      {/* <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          className='bg-accent-400/30 absolute top-20 left-10 h-3 w-3 rounded-full'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute top-40 right-20 h-4 w-4 rounded-full bg-red-400/30'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='absolute bottom-40 left-1/4 h-2 w-2 rounded-full bg-purple-400/30'
        />
        <motion.div
          variants={floatingElementVariants}
          animate='animate'
          transition={{ delay: 0.5 }}
          className='absolute right-1/3 bottom-20 h-3 w-3 rounded-full bg-green-400/30'
        />
        
      </div>  
     
     */}
      <div className='relative z-40 flex min-h-screen flex-col items-start justify-end px-4 py-8 pb-16 sm:justify-start sm:px-6 sm:pb-0 lg:px-8'>
        <Container className='relative z-10 w-full'>
          <div className='relative overflow-hidden py-8 md:w-[540px] xl:py-0'>
            <div className='xl:from-accent-400/10 absolute inset-0 rounded-2xl xl:bg-gradient-to-br xl:to-black/20' />
            <div className='bg-accent-600/20 absolute -top-2 -right-4 h-4 w-4 rounded-full blur-xl' />
            <motion.div
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              className='flex flex-col items-start p-8'
            >
              {/* Title */}
              <motion.div variants={titleVariants}>
                <Text
                  as='h1'
                  variant='heading'
                  className='mb-6 text-4xl font-bold text-white md:text-5xl lg:text-7xl xl:text-5xl'
                >
                  {t("home.main.title")}
                </Text>
              </motion.div>
              {/* Subtitle */}
              <motion.div
                variants={subtitleVariants}
                className='mb-6 flex text-lg text-white md:text-2xl'
              >
                {t("home.main.subtitle")}
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
      {/* 4. Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className='absolute bottom-8 left-1/2 z-50 -translate-x-1/2'
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='flex flex-col items-center space-y-2'
        >
          <Text className='text-sm text-gray-400'>
            {t("forOfflineVendor.hero.scrollToExplore")}
          </Text>
          <div className='h-6 w-0.5 bg-gradient-to-b from-gray-400 to-transparent' />
        </motion.div>
      </motion.div>
      {/* 5. BG texture overlay (optional) */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20' />
    </div>
  );
};

export { MainSection };
