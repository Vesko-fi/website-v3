import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const UnboxingVideo = () => {
  const { t } = useTranslation();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <Section className='bg-accent-600 relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_80%,_rgba(0,0,0,0.7)_100%)]'></div>
      <Container className='relative z-10'>
        <div className='md:p-12'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            className='text-center'
          >
            <motion.div variants={titleVariants}>
              <Text as='h2' className='mb-4 text-xl font-bold text-white md:text-3xl lg:text-4xl'>
                {t("home.unboxing.heading")}
              </Text>
            </motion.div>
          </motion.div>

          <motion.div
            variants={videoVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: "-10%" }}
            className='mx-auto w-full overflow-hidden rounded-2xl'
          >
            <div className='aspect-video w-full'>
              <video
                ref={videoRef}
                className='aspect-video h-auto w-full object-cover'
                autoPlay
                muted
                loop
                playsInline
                aria-label='Product unboxing demonstration'
              >
                <source src={Assets.veskoVideo} type='video/mp4' />
                {t("home.unboxing.videoNotSupported")}
              </video>
            </div>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            whileHover='hover'
            className='flex justify-center py-4 text-center text-white'
          >
            <Text className='text-white'>{t("home.unboxing.demo")}</Text>
            <a
              href={`https://www.youtube.com/watch?v=${t("home.unboxing.videoId")}`}
              target='_blank'
              rel='noopener noreferrer'
              className='ml-2 rounded-md border px-3 py-1'
            >
              {t("home.unboxing.button")}
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export { UnboxingVideo };
