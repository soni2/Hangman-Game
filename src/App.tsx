import "./App.css";
import usePuntos from "./Hooks/usePuntos";
import Intro from "./Components/Intro";
import Modal from "./Components/Modal";
import MainGame from "./Components/MainGame";
import Loading from "./Components/Loading";

function App() {
  //Hooks
  const { gameStarted, over, meaningModal, meaning, won, loading } =
    usePuntos();

  //Main App
  return (
    <>
      {!gameStarted ? (
        <Intro />
      ) : (
        <>
          {meaningModal && <Modal message={meaning} modalType="message" />}
          {won && (
            <Modal message="¡Felicidades, has ganado!" modalType="message" />
          )}
          {over && !won && (
            <Modal
              message="Ups, has perdido. ¡Inténtalo de nuevo!"
              modalType="alert"
            />
          )}
          {loading ? <Loading /> : <MainGame />}
        </>
      )}
    </>
  );
}

export default App;
