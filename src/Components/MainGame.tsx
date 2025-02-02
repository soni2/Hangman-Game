import { useEffect } from "react";
import usePuntos from "../Hooks/usePuntos";
import HangMan from "./Hangman";
import Keyboard from "./Keyboard";

export default function MainGame() {
  const { splitWord, guess, over, toggleWon } = usePuntos();

  useEffect(() => {
    if (splitWord.length > 0) {
      if (splitWord.every((item) => guess.includes(item))) {
        toggleWon();
      }
    }
  }, [guess]);
  return (
    <>
      <HangMan />

      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-flow-col gap-8 pb-4">
          {splitWord.map((e, i) => {
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
    </>
  );
}
