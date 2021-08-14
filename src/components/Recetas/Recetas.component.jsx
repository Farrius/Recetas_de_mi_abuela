import React from "react";
import "./Recetas.css";

import Button from "../Button/Button.component";
import RecetaCard from "../RecetaCard/RecetaCard.component";

const Recetas = () => {
  return (
    <div className="recetas_container">
      <Button title="Arroz al curry" htmlContent={<RecetaCard />} />
    </div>
  );
};

export default Recetas;
