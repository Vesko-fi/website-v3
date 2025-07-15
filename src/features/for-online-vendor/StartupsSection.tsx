import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { BenefitCard } from "./BenefitCard";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const StartupsSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 1, x: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const benefits = [
    {
      icon: RemixIcons.signup,
      color: "from-blue-500 to-purple-500",
      title: t("forOnlineVendor.startups.benefits.startJourney.title"),
      description: t("forOnlineVendor.startups.benefits.startJourney.description"),
    },
    {
      icon: RemixIcons.customers,
      color: "from-green-500 to-blue-500",
      title: t("forOnlineVendor.startups.benefits.findCustomers.title"),
      description: t("forOnlineVendor.startups.benefits.findCustomers.description"),
    },
    {
      icon: RemixIcons.growth,
      color: "from-purple-500 to-pink-500",
      title: t("forOnlineVendor.startups.benefits.growTogether.title"),
      description: t("forOnlineVendor.startups.benefits.growTogether.description"),
    },
  ];

  return (
    <Section className='relative bg-gradient-to-br from-blue-50 to-indigo-100 py-24'>
      {/* Background elements */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute top-20 left-10 h-32 w-32 rounded-full bg-blue-50' />
        <div className='absolute right-10 bottom-20 h-24 w-24 rounded-full bg-purple-50' />
      </div>

      <Container className='relative'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='grid items-center gap-16'
        >
          {/* Text & Benefits */}
          <motion.div
            variants={textVariants}
            className='flex flex-col items-center space-y-8 text-center'
          >
            <Text
              as='h2'
              variant='heading'
              className='text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("forOnlineVendor.startups.title")}
            </Text>

            <Text className='text-xl leading-relaxed text-gray-600 md:text-2xl'>
              {t("forOnlineVendor.startups.subtitle")}
            </Text>
          </motion.div>
        </motion.div>
        <div className='mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3'>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} textVariants={textVariants} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { StartupsSection };
