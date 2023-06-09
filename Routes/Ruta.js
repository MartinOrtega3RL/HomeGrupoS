import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "../Components/Prueba";
import Home from "../Container/Home";
import Dashboard from "../Components/Dash/Dashboard";
import MisVehiculos from "../Components/Tarjetas_Vehiculos";
import MisPagos from "../Components/MisPagos";
import ModuloInformacion from "../Components/Denunciar_Siniestro/Denuncia";
import Sidebar from "../Container/Sidebar";
import UserContext from "../context/userContext";

function Ruta() {
  return (
    <BrowserRouter>
      <UserContext>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Vehiculos" element={<MisVehiculos />} />
          <Route path="/MisPagos" element={<MisPagos />} />
          <Route path="/Siniestros" element={<ModuloInformacion />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  );
}
export default Ruta;
