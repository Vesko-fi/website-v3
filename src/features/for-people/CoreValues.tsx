import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/components/ui/button";
import { Container } from "@/shared/components/ui/container";
import { Image } from "@/shared/components/ui/image";
import { Section } from "@/shared/components/ui/section";
import { Assets } from "@/shared/constants/assets";

const CoreValues = () => {
  const { t } = useTranslation();

  const values = [
    {
      id: "01",
      title: t("forPeople.values.step1.heading"),
      text1: t("forPeople.values.step1.text1"),
      text2: t("forPeople.values.step1.text2"),
      text3: t("forPeople.values.step1.text3"),
      image: Assets.safePlace,
      color: "from-green-400/20 to-emerald-400/20",
      borderColor: "border-green-400/30",
    },
    {
      id: "02",
      title: t("forPeople.values.step2.heading"),
      text1: t("forPeople.values.step2.text1"),
      text2: t("forPeople.values.step2.text2"),
      text3: null,
      image: Assets.neutral,
      color: "from-blue-400/20 to-indigo-400/20",
      borderColor: "border-blue-400/30",
    },
    {
      id: "03",
      title: t("forPeople.values.step3.heading"),
      text1: t("forPeople.values.step3.text1"),
      text2: t("forPeople.values.step3.text2"),
      text3: t("forPeople.values.step3.text3"),
      image: Assets.connected,
      color: "from-purple-400/20 to-violet-400/20",
      borderColor: "border-purple-400/30",
    },
  ];

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Animation variants
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

  const textLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const textRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const mainTextTopVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
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

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Section>
      <Container>
        <div className='mx-auto max-w-4xl'>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='mb-4 text-center'
          >
            <motion.span
              variants={mainTextTopVariants}
              className='text-accent-600 text-4xl font-bold md:text-5xl lg:text-6xl'
            >
              {t("forPeople.values.title")}
            </motion.span>{" "}
            <motion.span
              variants={textLeftVariants}
              className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'
            >
              {t("forPeople.values.heading")}
            </motion.span>
            <br />
            <motion.span
              variants={textRightVariants}
              className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'
            >
              {t("forPeople.values.heading2")}{" "}
              <span className='text-accent-600 text-2xl font-bold md:text-3xl lg:text-5xl'>
                {t("forPeople.values.heading3")}
              </span>
            </motion.span>
            <br />
            <motion.span
              variants={textLeftVariants}
              className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'
            >
              {t("forPeople.values.heading4")}
            </motion.span>
          </motion.div>

          {values.map((val) => (
            <motion.div
              key={val.id}
              variants={itemVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={`mb-6 flex flex-col items-center gap-4 rounded-xl border ${val.borderColor} bg-gradient-to-br p-4 ${val.color} transition-all duration-300 hover:shadow-xl md:flex-row md:items-start`}
            >
              <div className='flex-1'>
                <div className='flex flex-col gap-2'>
                  <p className='text-accent-600 mb-2 w-12 flex-shrink-0 text-3xl font-light'>
                    {val.id}
                  </p>
                  <h3 className='mb-5 text-lg font-semibold md:text-xl'>{val.title}</h3>
                  <p className='text-gray-700'>{val.text1}</p>
                </div>

                {/* Toggle content */}
                {expanded[val.id] && (
                  <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={expandVariants}
                    className='mt-2 space-y-2 text-gray-700'
                  >
                    {val.text2 && <p>{val.text2}</p>}
                    {val.text3 && <p>{val.text3}</p>}
                  </motion.div>
                )}

                <Button
                  onClick={() => toggleExpand(val.id)}
                  className='mt-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none'
                >
                  {expanded[val.id] ? "View less" : "View more..."}
                </Button>
              </div>
              <div className='aspect-[4/3] w-full flex-1 overflow-hidden rounded-md'>
                <Image src={val.image} alt={val.id} className='h-full w-full object-contain' />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { CoreValues };
