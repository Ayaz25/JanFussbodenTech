import { Route, Routes } from "react-router-dom";
import SideBar from "./frontend-components/SideBar";
import HomePage from "./frontend-components/HomePage";
import Produkte from "./frontend-components/Produkte";
import GalariePage from "./frontend-components/Galariepage";

function App() {
  return (
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/produkte" element={<Produkte />}></Route>
        <Route path="/galarie" element={<GalariePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
