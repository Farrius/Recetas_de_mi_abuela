import React from "react";
import "./RecetaCard.css";

const RecetaCard = (props) => {
  return (
    <div className="container_recetaCard">
      <h1>{props.titulo}</h1>
      <br />
      <h2>Ingredientes</h2>
      <ul className="ingredientes">
        {props.ingredientes.map((ingredient, cnt) => (
          <li key={cnt}>{ingredient}</li>
        ))}
      </ul>
      <br />
      <h2>Pasos</h2>
      <ol className="pasos">
        {props.pasos.map((paso, cnt) => (
          <li key={cnt}>{paso}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecetaCard;
