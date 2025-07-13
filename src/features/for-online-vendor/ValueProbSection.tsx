import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";
import { RemixIcons } from "@/shared/constants/icons";

const ValueProbSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const benefits = [
    {
      icon: RemixIcons.customers,
      color: "from-blue-500 to-purple-500",
      titleKey: "forOnlineVendor.valueProb.benefits.buildCommunity.title",
      descKey: "forOnlineVendor.valueProb.benefits.buildCommunity.description",
    },
    {
      icon: RemixIcons.social,
      color: "from-green-500 to-blue-500",
      titleKey: "forOnlineVendor.valueProb.benefits.socialCommerce.title",
      descKey: "forOnlineVendor.valueProb.benefits.socialCommerce.description",
    },
    {
      icon: RemixIcons.growth,
      color: "from-purple-500 to-pink-500",
      titleKey: "forOnlineVendor.valueProb.benefits.growTogether.title",
      descKey: "forOnlineVendor.valueProb.benefits.growTogether.description",
    },
  ];

  interface BenefitCardProps {
    icon: string;
    color: string;
    title: string;
    description: string;
  }

  const BenefitCard = ({ icon, color, title, description }: BenefitCardProps) => (
    <motion.div
      variants={textVariants}
      className='relative overflow-hidden rounded-2xl bg-transparent p-6 shadow-md'
    >
      {/* Internal background glow and layer */}
      <div className='xl:from-accent-400/10 pointer-events-none absolute inset-0 rounded-2xl xl:bg-gradient-to-br xl:to-black/10' />
      <div className='bg-accent-600/20 absolute -top-3 -right-3 h-5 w-5 rounded-full blur-xl' />

      {/* Foreground content */}
      <div className='relative z-10 flex flex-col items-center text-center'>
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${color}`}
        >
          <i className={`${icon} text-lg text-white`} />
        </div>
        <Text className='mb-2 text-xl font-semibold text-gray-900'>{title}</Text>
        <Text className='text-gray-600'>{description}</Text>
      </div>
    </motion.div>
  );

  return (
    <Section className='relative bg-gradient-to-br from-gray-100 to-gray-300 py-24'>
      <Container>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='flex flex-col items-center space-y-8 text-center'
        >
          <div className='pointer-events-none absolute inset-0 overflow-hidden'>
            <div className='absolute top-16 left-40 h-32 w-32 rounded-full bg-blue-50' />
            <div className='absolute right-10 bottom-20 h-24 w-24 rounded-full bg-purple-50' />
          </div>
          {/* Headline */}
          <motion.div variants={textVariants}>
            <Text
              as='h2'
              variant='heading'
              className='mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl'
            >
              {t("forOnlineVendor.valueProb.title")}
            </Text>
          </motion.div>

          {/* Subheader */}
          <motion.div variants={textVariants}>
            <Text className='max-w-2xl text-lg text-gray-600 md:text-xl'>
              {t("forOnlineVendor.valueProb.subtitle")}
            </Text>
          </motion.div>

          {/* Benefit Cards */}
          <div className='mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3'>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                color={benefit.color}
                title={t(benefit.titleKey)}
                description={t(benefit.descKey)}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export { ValueProbSection };
