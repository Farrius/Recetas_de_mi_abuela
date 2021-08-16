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
          <RecetaForm
            addLink={props.addLink}
            data={props.data}
            curId={props.curId}
          />
        ) : (
          <RecetaCard
            titulo={props.data.titulo}
            ingredientes={props.data.ingredientes}
            pasos={props.data.pasos}
            deleteLink={props.deleteLink}
            id={props.data.id}
          />
        )}
      </div>
    </div>
  );
};

export default Popup;
