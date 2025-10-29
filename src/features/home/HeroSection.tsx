import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const HeroSection = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const smallDeviceControls = useAnimation();
  const [animationState, setAnimationState] = useState<"initial" | "animated">("initial");
  const isLargeScreen = useMediaQuery({ minWidth: 1025 });

  useEffect(() => {
    const threshold = 120;
    void smallDeviceControls.start("animate");

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > threshold && animationState === "initial") {
        void controls.start("animate");
        setAnimationState("animated");
      } else if (currentScrollY <= threshold && animationState === "animated") {
        void controls.start("initial");
        setAnimationState("initial");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [animationState, controls, smallDeviceControls]);

  const desktopVariants = {
    initial: { opacity: isLargeScreen ? 1 : 0, y: 0, rotate: -8, scale: 1 },
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const mobileVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: 30, x: 120, y: 80 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const smallDeviceVariants = {
    initial: { opacity: 0, scale: 0.5, transition: { duration: 1, ease: "easeInOut" } },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const heroTextVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <>
      <Section className='from-accent-700 hidden min-h-screen items-center overflow-x-hidden bg-gradient-to-b to-black px-4 py-32 lg:flex'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <motion.div
            variants={floatingVariants}
            animate='animate'
            className='absolute top-20 left-20 h-4 w-4 rounded-full bg-white/20'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 1 }}
            className='bg-accent-400/30 absolute top-40 right-32 h-6 w-6 rounded-full'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 2 }}
            className='absolute bottom-20 left-1/3 h-3 w-3 rounded-full bg-purple-400/30'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 0.5 }}
            className='absolute right-1/4 bottom-40 h-5 w-5 rounded-full bg-blue-400/30'
          />
        </div>

        {/* Text content */}
        <div className='absolute top-8 right-0 left-0 z-30 flex flex-col items-center space-y-2'>
          <Text
            className='text-default-white text-center'
            as='h1'
            variant='heading'
            weight='normal'
          >
            {t("home.hero.heading")}
          </Text>
          <Text
            className='text-default-white text-center'
            as='h2'
            variant='subheading'
            weight='normal'
          >
            {t("home.hero.mainHeading")}
          </Text>

          <motion.div
            initial='initial'
            animate={smallDeviceControls}
            variants={heroTextVariants}
            className='mt-4 min-w-[500px] bg-red-300 text-center'
          />
        </div>

        {/* Images */}
        <Container className='relative flex items-center justify-center'>
          <div className='relative flex flex-col items-center py-8'>
            <motion.img
              src={Assets.heroDesktop}
              alt='Desktop'
              className='z-10 max-w-3xl rounded-xl drop-shadow-2xl'
              initial='initial'
              animate={controls}
              variants={desktopVariants}
            />
            <motion.img
              src={Assets.heroMobile}
              alt='Mobile'
              className='z-20 rounded-xl drop-shadow-2xl sm:w-1/12 md:absolute md:right-0 md:bottom-0 lg:w-1/6'
              initial='initial'
              animate={controls}
              variants={mobileVariants}
              style={
                animationState === "animated"
                  ? { bottom: 0, right: 0, transform: "translate(50%, 50%)" }
                  : undefined
              }
            />
          </div>
        </Container>
      </Section>

      {/* Mobile Section remains as-is */}
      <Section className='from-accent-700 flex items-center justify-center overflow-hidden bg-gradient-to-b to-black lg:hidden'>
        <div className='pointer-events-none absolute inset-0 overflow-hidden'>
          <motion.div
            variants={floatingVariants}
            animate='animate'
            className='absolute top-20 left-10 h-4 w-4 rounded-full bg-white/20'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 1 }}
            className='bg-accent-400/30 absolute top-40 right-20 h-6 w-6 rounded-full'
          />
          <motion.div
            variants={floatingVariants}
            animate='animate'
            transition={{ delay: 2 }}
            className='absolute bottom-20 left-1/4 h-3 w-3 rounded-full bg-purple-400/30'
          />
        </div>
        <div className='flex flex-col'>
          <Text
            className='text-default-white mb-2 text-center'
            as='h1'
            variant='heading'
            weight='normal'
          >
            {t("home.hero.mainHeading")}
          </Text>
          <motion.img
            src={Assets.heroMobile}
            alt='Mobile'
            initial='initial'
            animate={smallDeviceControls}
            variants={smallDeviceVariants}
            className='h-auto py-8 sm:py-0'
          />
        </div>
      </Section>
    </>
  );
};

HeroSection.displayName = "HeroSection";

export { HeroSection };
