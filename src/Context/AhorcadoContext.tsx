import React, { createContext, useState, ReactNode, FC } from "react";

//Interfaces
interface AhorcadoContextType {
  puntos: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  gameStarted: boolean;
  setGame: (difficulty: string) => void;
  resetGame: () => void;
  meaning: string;
  guess: string[];
  over: boolean;
  letterSuggestion: (props: string) => void;
  splitWord: string[];
  addPoints: () => void;
  homeScreen: () => void;
  toggleMeaningModal: () => void;
  meaningModal: boolean;
  toggleWon: () => void;
  won: boolean;
}

interface AhorcadoProviderProps {
  children: ReactNode;
}
//Context
export const AhorcadoContext = createContext<AhorcadoContextType | undefined>(
  undefined
);

//Provider
export const AhorcadoProvider: FC<AhorcadoProviderProps> = ({ children }) => {
  const wordKey = import.meta.env.VITE_APP_WORD_API_URL;
  const meaningKey = import.meta.env.VITE_APP_MEANING_API_URL;

  //states
  const [puntos, setPoints] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [word, setWord] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [guess, setGuess] = useState<string[]>([]);
  const [over, setOver] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [meaningModal, setMeaningModal] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);

  //Main game function
  function addPoints() {
    if (puntos === 6) return;
    setPoints((prev) => {
      const newPoints = prev + 1;
      if (newPoints >= 6) setOver(true);
      return newPoints;
    });
  }

  //initial function
  async function fetchWords(dif: string) {
    setDifficulty(dif);

    try {
      const url = `${wordKey}/${dif}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!data) throw new Error("Problema obteniendo la palabra");

      const fetchedWord = data[0]
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase();

      setPoints(0);
      setGameStarted(true);
      setWord(fetchedWord);

      await fetchMeaning(fetchedWord);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMeaning(res: string) {
    try {
      const url = `${meaningKey}/api/words/${res.toLowerCase()}`;

      const response = await fetch(url);
      const { data } = await response.json();

      const fetchedMeaning = data?.meanings[0].senses[0].raw;

      if (!fetchedMeaning)
        setMeaning(
          "Lo sentimos, no pudimos encontrar el significado de la palabra."
        );

      setMeaning(fetchedMeaning);
    } catch (error) {
      console.error(error);
      setMeaning(
        "Lo sentimos, no pudimos encontrar el significado de la palabra."
      );
    }
  }

  //functions

  function setGame(difficulty: string) {
    fetchWords(difficulty);
    setGameStarted(true);
  }

  function resetGame() {
    setWon(false);
    setOver(false);
    fetchWords(difficulty);
    setPoints(0);
    setWord("");
    setGuess([]);
  }

  function homeScreen() {
    setWon(false);
    setOver(false);
    setGameStarted(false);
    setPoints(0);
    setWord("");
    setGuess([]);
  }

  const splitWord = word.split("");

  function letterSuggestion(a: string) {
    setGuess((prev) => {
      if (prev.includes(a)) return prev;
      return [...prev, a];
    });
    if (!splitWord.includes(a)) addPoints();
  }

  function toggleMeaningModal() {
    setMeaningModal(true);
    setTimeout(() => {
      setMeaningModal(false);
    }, 4000);
  }

  function toggleWon() {
    setOver(true);
    setWon(true);
  }

  return (
    <AhorcadoContext.Provider
      value={{
        puntos,
        setPoints,
        gameStarted,
        setGame,
        resetGame,
        meaning,
        guess,
        over,
        letterSuggestion,
        splitWord,
        addPoints,
        homeScreen,
        toggleMeaningModal,
        meaningModal,
        toggleWon,
        won,
      }}
    >
      {children}
    </AhorcadoContext.Provider>
  );
};
