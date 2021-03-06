import React, { useEffect, useState } from "react";
import "./Recetas.css";

import Button from "../Button/Button.component";

import { db } from "../../firebase";

const Recetas = () => {
  const [recetas, setRecetas] = useState([]);

  const addLink = async (linkObject) => {
    await db.collection("recetas").doc().set(linkObject);
  };

  const deleteLink = async (id) => {
    if (window.confirm("Seguro?")) {
      await db.collection("recetas").doc(id).delete();
    }
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

  return (
    <div className="recetas_container">
      {recetas.map((receta) => (
        <Button
          tipo={false}
          title={receta.titulo}
          key={receta.id}
          data={receta}
          deleteLink={deleteLink}
        />
      ))}
      <div className="crear_button">
        <Button tipo={true} title="Crear" addLink={addLink} data={recetas} />
      </div>
    </div>
  );
};

export default Recetas;
