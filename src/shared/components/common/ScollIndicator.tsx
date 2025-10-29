import { motion } from "framer-motion";

import { Text } from "@/shared/components/ui/text";

interface ScrollIndicatorProps {
  text: string;
}

const ScrollIndicator = ({ text }: ScrollIndicatorProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className='absolute bottom-0 left-1/2 z-20 -translate-x-1/2'
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className='flex flex-col items-center space-y-2'
    >
      <Text className='text-sm text-gray-100'>{text}</Text>
      <div className='h-6 w-0.5 bg-gradient-to-b from-gray-400 to-transparent' />
    </motion.div>
  </motion.div>
);

export { ScrollIndicator };
