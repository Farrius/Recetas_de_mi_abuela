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
        const ingredientsArray = doc.data().ingredientes.split("\n");
        const pasosArray = doc.data().pasos.split("\n");
        docs.push({
          titulo: doc.data().title,
          ingredientes: ingredientsArray,
          pasos: pasosArray,
          id: doc.id,
        });
      });
      setRecetas(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);
  console.log(recetas);
  return (
    <div className="recetas_container">
      {recetas.map((receta) => (
        <Button
          tipo={false}
          title={receta.titulo}
          key={receta.id}
          data={receta}
        />
      ))}
      <div className="crear_button">
        <Button tipo={true} title="Crear" addLink={addLink} data={[]} />
      </div>
    </div>
  );
};

export default Recetas;
