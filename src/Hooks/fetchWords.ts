import { useGameStore } from "./store";

async function fetchWord(dif: string) {
  const wordKey = import.meta.env.VITE_APP_WORD_API_URL;
  const { setDifficulty, setWord, setPoints, setGameStarted, setOver } =
    useGameStore.getState();

  try {
    setDifficulty(dif);
    setPoints(0);
    setGameStarted(true);
    setOver(false);

    const response = await fetch(`${wordKey}/${dif}`);
    const res = await response.json();

    if (!res[0]) throw new Error("No hay palabras disponibles");

    const formattedWord = res[0]
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();

    setWord(formattedWord);

    await fetchMeaning(res[0].toLowerCase());
  } catch (error) {
    console.log(error);
  }
}

async function fetchMeaning(word: string) {
  const meaningKey = import.meta.env.VITE_APP_MEANING_API_URL;
  const url = `${meaningKey}/api/words/${word}`;
  const { setMeaning } = useGameStore.getState();

  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const data = res.data.meanings[0].senses[0].raw;

      setMeaning(data);
    })
    .catch((error) => {
      console.log(error);
      setMeaning(
        "Lo sentimos, no pudimos encontrar el significado de la palabra"
      );
    });
}

export { fetchWord };
