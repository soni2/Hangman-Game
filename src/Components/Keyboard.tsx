import { Tooltip } from "react-tooltip";
import QuestionMark from "../Components/QuestionMark";
import RefreshIcon from "../Components/Refresh";
import usePuntos from "../Hooks/usePuntos";
import House from "./House";

export default function Keyboard() {
  const {
    resetGame,
    letterSuggestion,
    over,
    guess,
    splitWord,
    won,
    homeScreen,
    toggleMeaningModal,
  } = usePuntos();

  //Alphabet
  const alpha = Array.from(Array(26)).map((_e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  return (
    <>
      <Tooltip id="hintTip" place="bottom">
        Pista
      </Tooltip>
      <Tooltip id="resetTip" place="bottom">
        Reiniciar
      </Tooltip>
      <Tooltip id="HomeTip" place="bottom">
        Volver al inicio
      </Tooltip>
      <div className="grid grid-cols-6 justify-center w-fit gap-2">
        {alphabet.map((e, i) => {
          const used = guess.includes(e);
          const included = splitWord?.includes(e);

          return (
            <button
              key={i}
              className={`${
                used && included
                  ? "bg-green-400 text-black"
                  : used && !included
                  ? "bg-red-600 text-white"
                  : over || won
                  ? "text-gray-500 dark:text-gray-500 cursor-not-allowed"
                  : "text-dark-blue dark:text-white"
              }
                  px-2 py-2
                  `}
              onClick={() => letterSuggestion(e)}
              disabled={used || over || won}
            >
              {e}
            </button>
          );
        })}
        <button
          className="col-span-2 flex items-center justify-center"
          data-tooltip-id="HomeTip"
          onClick={homeScreen}
        >
          <House width={23} height={23} />
        </button>
        <button
          className="flex items-center justify-center"
          data-tooltip-id="hintTip"
          onClick={toggleMeaningModal}
        >
          <QuestionMark width={23} height={23} />
        </button>
        <button
          className="flex items-center justify-center"
          data-tooltip-id="resetTip"
          onClick={resetGame}
        >
          <RefreshIcon width={23} height={23} />
        </button>
      </div>
    </>
  );
}
