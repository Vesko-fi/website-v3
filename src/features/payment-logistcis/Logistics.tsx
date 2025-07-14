import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Text } from "@/shared/components/ui/text";

const Logistics = () => {
  const { t } = useTranslation();

  const options = [
    {
      heading: t("paymentAndLogistic.logistics.features.option1.heading"),
      description: t("paymentAndLogistic.logistics.features.option1.description"),
    },
    {
      heading: t("paymentAndLogistic.logistics.features.option2.heading"),
      description: t("paymentAndLogistic.logistics.features.option2.description"),
    },
    {
      heading: t("paymentAndLogistic.logistics.features.option3.heading"),
      description: t("paymentAndLogistic.logistics.features.option3.description"),
    },
    {
      heading: t("paymentAndLogistic.logistics.features.option4.heading"),
      description: t("paymentAndLogistic.logistics.features.option4.description"),
    },
    {
      heading: t("paymentAndLogistic.logistics.features.option5.heading"),
      description: t("paymentAndLogistic.logistics.features.option5.description"),
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
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center gap-4'
    >
      <motion.div variants={textVariants} className='py-4 text-center'>
        <Text as='h1' variant='heading'>
          {t("paymentAndLogistic.logistics.heading")}
        </Text>
      </motion.div>
      <motion.div variants={textVariants}>
        <Text>{t("paymentAndLogistic.logistics.subheading")}</Text>
      </motion.div>
      <motion.div>
        {options.map((option, index) => (
          <div key={index} className='py-2'>
            <Text>
              <span className='font-bold whitespace-nowrap'>{option.heading}</span>
              <span>{option.description}</span>
            </Text>
          </div>
        ))}
      </motion.div>
      <motion.div>
        <Text>{t("paymentAndLogistic.logistics.description")}</Text>
      </motion.div>
    </motion.div>
  );
};

export { Logistics };
