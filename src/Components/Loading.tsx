import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [dots, setDots] = useState(0);

  const dotsArray = [".", "..", "..."];

  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setDots(dots + 1);
      if (dots === 3) {
        setDots(0);
      }
    }, 1000);

    return () => clearInterval(dotsInterval);
  }, [dots]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center flex-col"
    >
      <div className="grid grid-flow-col gap-8 pb-4">
        <h1 className="text-dark-blue dark:text-white text-4xl">
          Cargando{dotsArray[dots]}
        </h1>
      </div>
    </motion.div>
  );
}
