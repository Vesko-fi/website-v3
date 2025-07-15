import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { Assets } from "@/shared/constants/assets";
import { RemixIcons } from "@/shared/constants/icons";

const WhySection = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const stats = [
    { key: "onlinePurchases", valueKey: "percentage", color: "text-blue-600" },
    { key: "storeVisits", valueKey: "multiplier", color: "text-purple-600" },
    { key: "conversionRate", valueKey: "percentage", color: "text-green-900" },
  ];
  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const videoContainerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.4 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <Section className='bg-gradient-to-br from-blue-50 to-indigo-100 py-20'>
      <Container>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-6xl space-y-12'
        >
          {/* Title */}
          <div className='space-y-4 text-center'>
            <Text
              as='h2'
              variant='heading'
              className='text-4xl font-bold text-gray-900 md:text-5xl'
            >
              {t("forOfflineVendor.why.title")}
            </Text>
          </div>

          {/* Video */}
          <motion.div variants={videoContainerVariants} className='relative mx-auto max-w-4xl py-8'>
            <div className='relative aspect-video overflow-hidden rounded-2xl bg-gray-900 shadow-2xl'>
              {/* Video */}
              <video
                ref={videoRef}
                className='h-full w-full object-cover'
                autoPlay
                muted
                loop
                playsInline
                aria-label='Product add video'
              >
                <source src={Assets.veskoVideoMinos} type='video/mp4' />
                {t("home.unboxing.videoNotSupported")}
              </video>

              {/* Overlay */}
              <div className='absolute inset-0 min-w-2xl bg-gradient-to-t from-black/30 to-transparent' />

              {/* Floating particles */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className='absolute -top-4 -left-4 h-6 w-6 rounded-full bg-blue-400/30'
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className='absolute -right-4 -bottom-4 h-4 w-4 rounded-full bg-purple-400/30'
              />
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className='absolute top-1/2 -right-6 h-3 w-3 rounded-full bg-green-400/30'
              />

              {/* Controls */}
              <div className='absolute right-4 bottom-4 left-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={togglePlayback}
                    className='rounded-full p-2 text-white hover:bg-white/20'
                  >
                    <i className={`${isPlaying ? RemixIcons.pause : RemixIcons.play} text-lg`} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}

          <motion.div
            variants={textVariants}
            className='mt-12 grid grid-cols-1 gap-6 text-center md:grid-cols-3'
          >
            {stats.map(({ key, valueKey, color }) => (
              <div key={key} className='space-y-2 rounded-lg bg-white/80 p-16 backdrop-blur-md'>
                <Text className={`text-5xl font-bold lg:text-3xl ${color}`}>
                  {t(`forOfflineVendor.why.stats.${key}.${valueKey}`)}
                </Text>
                <Text className='font-semibold text-gray-600'>
                  {t(`forOfflineVendor.why.stats.${key}.description`)}
                </Text>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { WhySection };
