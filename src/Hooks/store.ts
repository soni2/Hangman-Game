import { create } from "zustand";
import { fetchWord } from "./fetchWords";

interface GameStore {
  puntos: number;
  gameStarted: boolean;
  word: string;
  meaning: string;
  guess: string[];
  over: boolean;
  difficulty: string;
  meaningModal: boolean;
  won: boolean;

  setPoints(points: number): void;
  addPoints(): void;
  setGameStarted(started: boolean): void;
  setWord(word: string): void;
  setMeaning(meaning: string): void;
  setGuess(guess: string[]): void;
  setOver(over: boolean): void;
  setDifficulty(difficulty: string): void;
  toggleMeaningModal(): void;
  setWon(won: boolean): void;
  resetGame(): void;
  splitWord: () => string[];
  letterSuggestion(letter: string): void;
  homeScreen(): void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  puntos: 0,
  gameStarted: false,
  word: "",
  meaning: "",
  guess: [],
  over: false,
  difficulty: "easy",
  meaningModal: false,
  won: false,

  setPoints: (points: number) => set({ puntos: points }),
  addPoints: () =>
    set((state) => {
      if (state.puntos >= 6) return state;
      return { puntos: state.puntos + 1, over: state.puntos + 1 === 6 };
    }),
  setGameStarted: (started: boolean) => set({ gameStarted: started }),
  setWord: (word: string) => set({ word }),
  setMeaning: (meaning: string) => set({ meaning }),
  setGuess: (guess: string[]) => set({ guess }),
  setOver: (over: boolean) => set({ over }),
  setDifficulty: (difficulty: string) => set({ difficulty }),
  setWon: (won: boolean) => set({ won }),
  splitWord: () => get().word.split(""),

  toggleMeaningModal: () => {
    set({ meaningModal: true });
    setTimeout(() => set({ meaningModal: false }), 4000);
  },
  letterSuggestion: (letter: string) => {
    const { word, guess } = get();
    const { addPoints } = get();
    if (!word) return;

    if (!guess.includes(letter)) {
      if (word.includes(letter)) {
        set({ guess: [...guess, letter] });
      } else {
        addPoints();
        set({ guess: [...guess, letter] });
      }
    }
  },
  resetGame: () => {
    const { difficulty } = get();
    set({
      puntos: 0,
      word: "",
      meaning: "",
      guess: [],
      over: false,
      meaningModal: false,
      won: false,
    });

    fetchWord(difficulty);
  },
  homeScreen: () =>
    set({
      gameStarted: false,
      word: "",
      meaning: "",
      guess: [],
      over: false,
      difficulty: "easy",
      meaningModal: false,
      won: false,
    }),
}));
