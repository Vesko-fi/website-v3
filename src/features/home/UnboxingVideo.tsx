import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";

const UnboxingVideo = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const currentLang = i18n.language;

  // Define URLs for each language
  const demoUrls: Record<string, string> = {
    en: "https://www.youtube.com/watch?v=CDeZSok7CfI",
    fi: "https://youtu.be/tE-OMnNkrRI",
  };

  // Fallback to English if the language is not handled explicitly
  const demoUrl = demoUrls[currentLang] || demoUrls.en;

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
          <Text as='h2' className='mb-4 text-xl font-bold text-white md:text-3xl lg:text-5xl'>
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
        className='flex items-center justify-center gap-3 py-8 text-white'
      >
        <Text variant='subtitle' className='text-xl text-white md:text-3xl'>
          {t("home.unboxing.demo")}
        </Text>
        <div className='group relative ml-2 inline-block overflow-hidden rounded-md border bg-white'>
          {/* Anchor tag for demo button */}
          <a
            href={demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='relative z-10 block px-4 py-1.5 text-xl text-green-800 transition-colors duration-300 group-hover:text-white'
          >
            {t("home.unboxing.button")}
          </a>
          <span className='absolute top-0 left-0 z-0 h-full w-full -translate-x-full bg-green-800 transition-transform duration-300 ease-in-out group-hover:translate-x-0' />
        </div>
      </motion.div>
    </div>
  );
};

export { UnboxingVideo };
