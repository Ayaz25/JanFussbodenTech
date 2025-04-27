import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App></App>
  </HashRouter>
);
