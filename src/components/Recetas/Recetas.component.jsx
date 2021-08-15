import React, { useEffect, useState } from "react";
import "./Recetas.css";

import Button from "../Button/Button.component";
import RecetaCard from "../RecetaCard/RecetaCard.component";
import RecetaForm from "../RecetaForm/RecetaForm.component";

import { db } from "../../firebase";

const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  const addLink = async (linkObject) => {
    await db.collection("recetas").doc().set(linkObject);
  };

  const getLinks = async () => {
    db.collection("recetas").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="recetas_container">
      <Button title="Arroz al curry" htmlContent={<RecetaCard />} />
      <div className="crear_button">
        <Button title="Crear" htmlContent={<RecetaForm addLink={addLink} />} />
      </div>
    </div>
  );
};

export default Recetas;
