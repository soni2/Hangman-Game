import { useEffect, useState } from "react";
import { fetchWord } from "../Hooks/fetchWords";
// import usePuntos from "../Hooks/usePuntos";

export default function Intro() {
  // const { setGame } = usePuntos()

  const [turnRed, setTurnRed] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTurnRed((a) => !a);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-row text-[2rem] sm:text-[3rem] md:text-[6rem]">
        {["h", "a", "n", "g", "m", "a", "n"].map((e, i) => {
          if (e === "a")
            return (
              <div
                key={i}
                className="introText tracking-widest text-whiteduration-300 flex items-center justify-center px-2"
              >
                <h1
                  className={`absolute ${
                    turnRed ? "text-red-600" : "text-dark-blue dark:text-white"
                  } duration-300`}
                >
                  {e}
                </h1>
                <h1 className="pt-4">_</h1>
              </div>
            );

          return (
            <div key={i} className="flex items-center justify-center">
              <h1 className="introText tracking-widest text-whiteduration-300">
                {e}
              </h1>
            </div>
          );
        })}
      </div>
      <p className="tracking-widest">
        Adivina la palabra antes de que te{" "}
        <strong className="uppercase">ahorquen</strong>
      </p>
      <p className="tracking-widest">Elije el nivel de dificultad:</p>
      <div className="flex content-between place-content-between w-full">
        {[
          { name: "facil", category: "easy" },
          { name: "medio", category: "medium" },
          { name: "dificil", category: "hard" },
        ].map((e, i) => {
          return (
            <button
              key={i}
              onClick={() => fetchWord(e.category)}
              className="px-8 py-2 rounded-none border-white transition-all duration-300 ease-in-out capitalize"
            >
              {e.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
