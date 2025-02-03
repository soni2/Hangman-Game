import { useEffect } from "react";
import HangMan from "./Hangman";
import Keyboard from "./Keyboard";
import { motion } from "framer-motion";
import usePuntos from "../Hooks/usePuntos";

export default function MainGame() {
  const { guess, over, splitWord } = usePuntos();
  const { toggleWon } = usePuntos();

  useEffect(() => {
    if (splitWord?.length > 0) {
      if (splitWord?.every((item: string) => guess.includes(item))) {
        toggleWon();
      }
    }
  }, [guess]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HangMan />

      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-flow-col gap-8 pb-4">
          {splitWord?.map((e: string, i: number) => {
            if (guess.includes(e)) return <h1 key={i}>{e}</h1>;
            if (!guess.includes(e) && over)
              return (
                <h1 key={i} className="text-red-600">
                  {e}
                </h1>
              );
            return <h1 key={i}>_</h1>;
          })}
        </div>
        <Keyboard />
      </div>
    </motion.div>
  );
}
