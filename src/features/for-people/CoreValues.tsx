import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/components/ui/button";
import { Image } from "@/shared/components/ui/image";
import { Assets } from "@/shared/constants/assets";
import { Section } from "@/shared/components/ui/section";
import { Container } from "@/shared/components/ui/container";

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
    },
    {
      id: "02",
      title: t("forPeople.values.step2.heading"),
      text1: t("forPeople.values.step2.text1"),
      text2: t("forPeople.values.step2.text2"),
      text3: null,
      image: Assets.neutral,
    },
    {
      id: "03",
      title: t("forPeople.values.step3.heading"),
      text1: t("forPeople.values.step3.text1"),
      text2: t("forPeople.values.step3.text2"),
      text3: t("forPeople.values.step3.text3"),
      image: Assets.connected,
    },
  ];

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
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
    <Section>
      <Container>
        <div className='mx-auto max-w-4xl px-4 py-12'>
          <motion.h1
            className='mb-8 text-center text-4xl font-bold'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className='text-accent-600 text-4xl font-bold md:text-5xl lg:text-6xl'>
              {t("forPeople.values.title")}
            </span>{" "}
            <span className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
              {t("forPeople.values.heading")}
            </span>
            <br />
            <span className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
              {t("forPeople.values.heading2")}{" "}
              <span className='text-accent-600 text-2xl font-bold md:text-3xl lg:text-5xl'>
                {t("forPeople.values.heading3")}
              </span>
            </span>
            <br />
            <span className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
              {t("forPeople.values.heading4")}
            </span>
          </motion.h1>

          {values.map((val, index) => (
            <motion.div
              key={val.id}
              className='mb-6 flex flex-col items-center gap-4 rounded-xl border bg-emerald-50 p-4 shadow md:flex-row md:items-start'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className='flex-1'>
                <p className='mb-2 font-medium text-gray-500 italic'>{val.id}</p>
                <h3 className='mb-2 text-lg font-semibold'>{val.title}</h3>
                <p className='text-gray-700'>{val.text1}</p>

                {/* Toggle content */}
                {expanded[val.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
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
              <motion.div className='flex-1'>
                <Image
                  src={val.image}
                  alt='Value illustration'
                  className='h-56 w-96 rounded-md object-cover md:w-full'
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export { CoreValues };
