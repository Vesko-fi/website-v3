import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

import { Text } from "@/shared/components/ui/text";

interface BenefitCardProps {
  icon: string | ReactNode;
  color: string;
  title: string;
  description: string;
  textVariants: Variants;
}

const BenefitCard: FC<BenefitCardProps> = ({ icon, color, title, description, textVariants }) => (
  <motion.div
    variants={textVariants}
    className='relative overflow-hidden rounded-2xl bg-transparent p-6 shadow-md'
  >
    {/* Internal background glow */}
    <div className='xl:from-accent-400/10 pointer-events-none absolute inset-0 rounded-2xl xl:bg-gradient-to-br xl:to-black/10' />
    <div className='bg-accent-600/20 absolute -top-3 -right-3 h-5 w-5 rounded-full blur-xl' />

    {/* Foreground content */}
    <div className='relative z-10 flex flex-col items-center text-center'>
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${color}`}
      >
        {typeof icon === "string" ? <i className={`${icon} text-lg text-white`} /> : icon}
      </div>
      <Text className='mb-2 text-xl font-semibold text-gray-900'>{title}</Text>
      <Text className='text-gray-600'>{description}</Text>
    </div>
  </motion.div>
);

export { BenefitCard };
