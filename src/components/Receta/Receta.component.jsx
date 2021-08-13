import React, { useState } from "react";
import "./Receta.css";
import Popup from "../PopUp/PopUp.component";

const Receta = (props) => {
  const [isOpen, setOpen] = useState(false);

  const toggleReceta = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="button-container">
      <a onClick={toggleReceta} data-text={props.titulo} />
      {isOpen && (
        <Popup
          content={
            <>
              <h1>{props.titulo}</h1>
              <br />
              <h2>Ingredientes</h2>
              <ul className="ingredientes">
                <li>Arroz</li>
                <li>Pollo</li>
                <li>Pasas</li>
                <li>Cebolla</li>
                <li>Ajo</li>
                <li>Comino</li>
                <li>Curucuma</li>
                <li>Pimienta</li>
                <li>Agua</li>
                <li>Sal</li>
                <li>Aceite</li>
              </ul>
              <br />
              <h2>Pasos</h2>
              <ol className="pasos">
                <li>Picar la cebolla</li>
                <li>Esperar a que lo demas lo haga tu abuela</li>
                <li> Comer mucho</li>
              </ol>
            </>
          }
          handleClose={toggleReceta}
        />
      )}
    </div>
  );
};

export default Receta;
