import { AhorcadoContext } from "../Context/AhorcadoContext";
import { useContext } from "react";

function usePuntos() {
  const context = useContext(AhorcadoContext);
  if (context === undefined) {
    throw new Error("Router provider is misplaced");
  }
  return context;
}

export default usePuntos;
