import { motion } from "framer-motion";

export default function Modal(props: { message: string; modalType: string }) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className={`max-w-xs absolute px-10 py-4 rounded-xl border-2 ${
          props.modalType === "message" &&
          "border-green-500 bg-green-200/90 text-black dark:bg-green-950/50 dark:text-white"
        }
        ${
          props.modalType === "alert" &&
          "border-red-500 bg-red-200/90 text-black dark:bg-red-950/50 dark:text-white"
        }
        `}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        {props.message}
      </motion.div>
    </div>
  );
}
