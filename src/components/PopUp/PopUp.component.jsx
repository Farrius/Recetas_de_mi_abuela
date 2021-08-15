import React from "react";
import "./PopUp.css";

import RecetaForm from "../RecetaForm/RecetaForm.component";
import RecetaCard from "../RecetaCard/RecetaCard.component";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          X
        </span>
        {props.tipo ? (
          <RecetaForm addLink={props.addLink} />
        ) : (
          <RecetaCard
            titulo={props.data.titulo}
            ingredientes={props.data.ingredientes}
            pasos={props.data.pasos}
          />
        )}
      </div>
    </div>
  );
};

export default Popup;
