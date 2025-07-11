import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

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
    <div className='relative overflow-hidden bg-black py-4 md:py-12'>
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
        className='mx-auto w-full overflow-hidden'
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
        className='flex items-center justify-center py-4 text-white'
      >
        <Text variant='subtitle' className='text-xl text-white md:text-2xl'>
          {t("home.unboxing.demo")}
        </Text>
        <a
          href={`https://www.youtube.com/watch?v=${t("home.unboxing.videoId")}`}
          target='_blank'
          rel='noopener noreferrer'
          className='ml-2 rounded-md border px-3 py-1 text-xl'
        >
          {t("home.unboxing.button")}
        </a>
      </motion.div>
    </div>
  );
};

export { UnboxingVideo };
