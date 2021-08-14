import React from "react";
import "./Header.css";

import Button from "../Button/Button.component";
import RecetaForm from "../RecetaForm/RecetaForm.component";

const Header = () => {
  return (
    <div className="header_container">
      <h1 className="header_title">Recetas</h1>
      <Button title="Crear" htmlContent={<RecetaForm />} />
    </div>
  );
};

export default Header;
