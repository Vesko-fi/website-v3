import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/components/ui/text";

const Payments = () => {
  const { t } = useTranslation();

  const options = [
    {
      heading: t("paymentAndLogistic.payment.features.option1.heading"),
      description: t("paymentAndLogistic.payment.features.option1.description"),
    },
    {
      heading: t("paymentAndLogistic.payment.features.option2.heading"),
      description: t("paymentAndLogistic.payment.features.option2.description"),
    },
    {
      heading: t("paymentAndLogistic.payment.features.option3.heading"),
      description: t("paymentAndLogistic.payment.features.option3.description"),
    },
    {
      heading: t("paymentAndLogistic.payment.features.option4.heading"),
      description: t("paymentAndLogistic.payment.features.option4.description"),
    },
    {
      heading: t("paymentAndLogistic.payment.features.option5.heading"),
      description: t("paymentAndLogistic.payment.features.option5.description"),
    },
  ];

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
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    }),
  };
  return (
    <motion.div className='flex flex-col items-center justify-center gap-4'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <motion.div variants={textVariants} className='py-4 text-center'>
          <Text as='h2' className='text-2xl font-bold md:text-4xl lg:text-6xl'>
            {t("paymentAndLogistic.payment.heading")}
          </Text>
        </motion.div>
        <motion.div variants={textVariants}>
          <Text>{t("paymentAndLogistic.payment.subheading")}</Text>
        </motion.div>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {options.map((option, index) => (
          <motion.div key={index} variants={itemVariants} custom={index} className='py-2'>
            <Text>
              <span className='font-bold whitespace-nowrap'>{option.heading}</span>{" "}
              <span>{option.description}</span>
            </Text>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={textVariants}
        initial='hidden'
        animate='visible'
        viewport={{ once: true }}
      >
        <Text>{t("paymentAndLogistic.payment.description")}</Text>
      </motion.div>
    </motion.div>
  );
};

export { Payments };
