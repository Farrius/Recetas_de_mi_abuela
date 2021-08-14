import React, { useState } from "react";
import "./App.css";
import "./fonts/Homer/Homer_Simpson_Revised.ttf";
//components
import Recetas from "./components/Recetas/Recetas.component";
import Header from "./components/Header/Header.component";
import Popup from "./components/PopUp/PopUp.component";
const App = () => {
  return (
    <div className="app_container">
      <Header />
      <Recetas />
    </div>
  );
};

export default App;
