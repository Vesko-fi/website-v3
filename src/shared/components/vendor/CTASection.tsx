import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import i18n, { type SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";
import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const CTASection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const contactPath = getLocalizedPath("contact", i18n.language as SupportedLanguages);
  const registerPath = getLocalizedPath("register", i18n.language as SupportedLanguages);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Section className='relative bg-gradient-to-br from-blue-600 to-purple-700 py-24'>
      {/* Background decorative elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <motion.div
          variants={floatingVariants}
          animate='animate'
          className='absolute top-20 left-10 h-8 w-8 rounded-full bg-white/20'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 1 }}
          className='absolute right-10 bottom-20 h-6 w-6 rounded-full bg-white/20'
        />
        <motion.div
          variants={floatingVariants}
          animate='animate'
          transition={{ delay: 2 }}
          className='absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-white/20'
        />
      </div>

      <Container className='relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto max-w-4xl text-center'
        >
          {/* Main Headline */}
          <motion.div variants={itemVariants} className='mb-8'>
            <Text
              as='h2'
              variant='heading'
              className='mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl'
            >
              {t("vendor.cta.title")}
            </Text>
          </motion.div>

          {/* Subheader */}
          <motion.div variants={itemVariants} className='mb-12'>
            <Text as='h4' variant='caption' className='text-blue-100 md:text-xl'>
              {t("vendor.cta.subtitle")}
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={buttonVariants}
            className='flex cursor-pointer flex-col items-center gap-4 sm:flex-row sm:justify-center'
          >
            <motion.div variants={buttonVariants} whileHover='hover'>
              <Button
                onClick={() => void navigate(registerPath)}
                containerClassName='bg-white px-8 w-40 py-4 text-lg font-semibold text-blue-600 shadow-lg hover:bg-gray-100 border-0'
                textClassName='text-blue-600 group-hover:text-white'
              >
                {t("vendor.cta.buttons.register")}
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover='hover'>
              <Button
                onClick={() => void navigate(contactPath)}
                containerClassName='border-2 w-40 border-white px-6 py-4 text-lg font-semibold text-white hover:bg-white hover:text-white bg-transparent'
                textClassName='text-white group-hover:text-white'
              >
                {t("vendor.cta.buttons.contactUs")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className='mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-blue-100'
          >
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-400`} />
              <span>{t("vendor.cta.trustIndicators.freeToStart")}</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-400`} />
              <span>{t("vendor.cta.trustIndicators.noSetupFees")}</span>
            </div>
            <div className='flex items-center gap-2'>
              <i className={`${RemixIcons.check} text-green-400`} />
              <span>{t("vendor.cta.trustIndicators.support")}</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { CTASection };
