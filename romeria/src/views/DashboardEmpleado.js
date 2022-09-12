import React from "react";
import DashboardContent from "./Dashboard";
import Formulario1 from "./forms/Formulario1.js";
import Form2Salud from "./forms/Form2Salud.js";
import Form3Dif from "./forms/Form3Dif.js";
import Form4SeguridadPublica from "./forms/Form4SeguridadPublica.js";
import Form5InspeccionyVigilancia from "./forms/Form5InspeccionyVigilancia.js";
import Form6Tianguis from "./forms/Form6Tianguis.js";
import Form7Recaudadora from "./forms/Form7Recaudadora.js";
import Form8Alumbrado from "./forms/Form8Alumbrado.js";
import Form9AseoPublico from "./forms/Form9AseoPublico.js";
import Form10AguaDrenaje from "./forms/Form10AguaDrenaje.js";
import Form11AnalisisEstrategico from "./forms/Form11AnalisisEstrategico.js";
import Form12SindicaturaMun from "./forms/Form12SindicaturaMun.js";
import Form13MejoramientoUrb from "./forms/Form13MejoramientoUrb.js";
import Form14ConservacionInm from "./forms/Form14ConservacionInm.js";
import Form16Innovacion from "./forms/Form16Innovacion.js";
import Form17ProteccionCivil from "./forms/Form17ProteccionCivil.js";

const Home = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const dependenciaID = data.tipodependencia;
  const visible = data?.visible;
if (visible == false) {
  window.location.replace("/usuariosEliminado");
}
  return (
    <DashboardContent>
      {dependenciaID == 1 ? <Formulario1 /> : null}

      {dependenciaID == 2 ? < Form3Dif/> : null}

      {dependenciaID == 3 ? < Form2Salud/> : null}

      {dependenciaID == 4 ? <Form4SeguridadPublica /> : null}

      {dependenciaID == 5 ? <Form5InspeccionyVigilancia /> : null}

      {dependenciaID == 6 ? <Form6Tianguis /> : null}

      {dependenciaID == 7 ? <Form7Recaudadora /> : null}

      {dependenciaID == 8 ? <Form8Alumbrado /> : null}

      {dependenciaID == 9 ? <Form9AseoPublico /> : null}

      {dependenciaID == 10 ? <Form10AguaDrenaje /> : null}

      {dependenciaID == 11 ? <Form11AnalisisEstrategico /> : null}

      {dependenciaID == 12 ? <Form12SindicaturaMun /> : null}

      {dependenciaID == 13 ? <Form13MejoramientoUrb /> : null}

      {dependenciaID == 14 ? <Form14ConservacionInm /> : null}

      {dependenciaID == 15 ? <Form16Innovacion /> : null}

      {dependenciaID == 16 ? <Form17ProteccionCivil /> : null}
    </DashboardContent>
  );
};

export default Home;
