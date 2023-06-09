import React, { useState } from "react";
import { Contexto } from "./context";

export default function UserContext(props) {
  const { children } = props;
  const [email, setEmail] = useState(null);
  const [emailAgente, setEmailAgente] = useState(null);
  const [datos_cliente, setDatos_cliente] = useState([]);
  const [tarjeta, setTarjeta] = useState([]);
  const [poliza, setPoliza] = useState(null);

  const ObteneraDatos = (datos) => {
    setTarjeta(datos);
    setDatos_cliente(datos);

    const objetoPoliza = datos.find((objeto) =>
      objeto.hasOwnProperty("num_Poliza")
    );

    const num_Poliza = objetoPoliza ? objetoPoliza.num_Poliza : "";

    setPoliza(num_Poliza);
  };

  console.log("No entra en bucle ?", poliza)

  
  const obtenerUsuario = (email) => {
    setEmail(email);

    console.log("Obtuviste el email del Cliente", email);
  };

  const obtenerAgente = (emailAgente) => {
    setEmailAgente(emailAgente);

    console.log("Obtuviste el email del Agente", emailAgente);
  };

  return (
    <>
      <Contexto.Provider
        value={{
          email,
          obtenerUsuario,
          emailAgente,
          obtenerAgente,
          ObteneraDatos,
          datos_cliente,
          tarjeta,
          poliza,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}
