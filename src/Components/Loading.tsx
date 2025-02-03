import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center flex-col"
    >
      <div className="grid grid-flow-col gap-8 pb-4">
        <h1 className="text-red-600">Cargando...</h1>
      </div>
    </motion.div>
  );
}
