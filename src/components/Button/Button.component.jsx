import React, { useState } from "react";
import "./Button.css";
import Popup from "../PopUp/PopUp.component";

const Button = (props) => {
  const [isOpen, setOpen] = useState(false);

  const togglePopup = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="button-container">
      <a data-text={props.title} onClick={togglePopup} />
      {isOpen && (
        <Popup
          tipo={props.tipo}
          handleClose={togglePopup}
          addLink={props.addLink}
          deleteLink={props.deleteLink}
          data={props.data}
        />
      )}
    </div>
  );
};

export default Button;
