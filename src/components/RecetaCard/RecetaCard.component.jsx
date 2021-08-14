import React from "react";
import "./RecetaCard.css";

const RecetaCard = (props) => {
  return (
    <div className="container_recetaCard">
      <h1>{props.title}</h1>
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
        <li>Curry</li>
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
        <li>Picar la cebolla</li>
        <li>Esperar a que lo demas lo haga tu abuela</li>
        <li> Comer mucho</li>
        <li>Picar la cebolla</li>
        <li>Esperar a que lo demas lo haga tu abuela</li>
        <li> Comer mucho</li>
        <li>Picar la cebolla</li>
        <li>Esperar a que lo demas lo haga tu abuela</li>
        <li> Comer mucho</li>
      </ol>
    </div>
  );
};

export default RecetaCard;
