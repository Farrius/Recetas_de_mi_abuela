import React, { useState } from "react";
import "./RecetaForm.css";

const RecetaForm = (props) => {
  const initStateValues = {
    ingredientes: "",
    pasos: "",
  };

  const [values, setValues] = useState(initStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addLink(values);
    setValues({ ...initStateValues });
  };

  return (
    <div className="container_recetasForm" onSubmit={handleSubmit}>
      <form>
        <h2>Ingredientes</h2>
        <textarea
          type="text"
          className="lista_ingredientes"
          name="ingredientes"
          placeholder="Escriba cada ingrediente en una línia"
          onChange={handleInputChange}
          value={values.ingredientes}
        />
        <h2>Pasos</h2>
        <textarea
          type="text"
          className="lista_pasos"
          name="pasos"
          placeholder="Escriba cada paso en una línia"
          onChange={handleInputChange}
          value={values.pasos}
        />
        <br />
        <br />
        <button>Crear</button>
      </form>
    </div>
  );
};

export default RecetaForm;
