import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Benefits } from "./Benefits";
import { Logistics } from "./Logistics";
import { Payments } from "./Payments";

import { Container } from "@/shared/components/ui/container";
import { Section } from "@/shared/components/ui/section";
import { Text } from "@/shared/components/ui/text";

const MainContent = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <Section>
      <Container>
        <div className='mx-auto flex w-full flex-col gap-8 px-8 md:gap-12 lg:max-w-5xl'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center gap-4'
          >
            <motion.div variants={textVariants} className='mt-16 text-center md:mt-4'>
              <Text as='h2' className='text-2xl font-bold md:text-4xl lg:text-6xl'>
                {t("paymentAndLogistic.main.heading")}
              </Text>
            </motion.div>
            <motion.div variants={textVariants}>
              <Text>{t("paymentAndLogistic.main.subheading")}</Text>
            </motion.div>
          </motion.div>
          <Payments />
          <Logistics />
          <Benefits />
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div variants={textVariants} className='py-4 text-center'>
              <Text as='h2' className='text-2xl font-bold md:text-4xl lg:text-6xl'>
                {t("paymentAndLogistic.join.heading")}
              </Text>
            </motion.div>
            <motion.div variants={textVariants}>
              <Text>{t("paymentAndLogistic.join.description")}</Text>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export { MainContent };
