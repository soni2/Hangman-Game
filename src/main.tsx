import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AhorcadoProvider } from "./Context/AhorcadoContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AhorcadoProvider>
    <App />
  </AhorcadoProvider>
);
