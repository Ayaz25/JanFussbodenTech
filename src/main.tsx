import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SideBar from "./frontend-components/SideBar.tsx";
import "bootstrap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SideBar></SideBar>
  </StrictMode>
);
