import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./views/Home.js";
import DashboardEmpleado from "./views/DashboardEmpleado";
import Userdelete from "./views/Userdelete";
import Login from "../src/views/Login.js";
import Myaccount from "./views/Myaccount";
import Consultas from "./views/Consultas";
import Usuarios from "./views/Usuarios.js";
import DetailCommunityConstruction from "./views/DetailForms/DetailCommunityConstruction.js";
import DetailHealthServices from "./views/DetailForms/DetailHealthServices.js";
import DetailDIFZapopan from "./views/DetailForms/DetailDIFZapopan.js";
import DetailSeguridadPublica from "./views/DetailForms/DetailSeguridadPublica.js";
import DetailInspeccionVigilancia from "./views/DetailForms/DetailInspeccionVigilancia.js";
import DetailTianguis from "./views/DetailForms/DetailTianguis.js";
import DetailRecaudadora from "./views/DetailForms/DetailRecaudadora.js";
import DetailAlumbrado from "./views/DetailForms/DetailAlumbrado.js";
import DetailAseoPublico from "./views/DetailForms/DetailAseoPublico.js";
import DetailAguaDrenaje from "./views/DetailForms/DetailAguaDrenaje.js";
import DetailEstrategicoComunicacion from "./views/DetailForms/DetailEstrategicoComunicacion.js";
import DetailSindicaturaMunicipal from "./views/DetailForms/DetailSindicaturaMunicipal.js";
import DetailMejoramientoUrbano from "./views/DetailForms/DetailMejoramientoUrbano.js";
import DetailConservacionInmuebles from "./views/DetailForms/DetailConservacionInmuebles.js";
import DetailInnovacionGub from "./views/DetailForms/DetailInnovacionGub.js";
import DetailProteccionCivilBomberos from "./views/DetailForms/DetailProteccionCivilBomberos.js";

import Formulario1 from "./views/forms/Formulario1.js";
import Form2Salud from "./views/forms/Form2Salud.js";
import Form3Dif from "./views/forms/Form3Dif.js";
import Form4SeguridadPublica from "./views/forms/Form4SeguridadPublica.js";
import Form5InspeccionyVigilancia from "./views/forms/Form5InspeccionyVigilancia.js";
import Form6Tianguis from "./views/forms/Form6Tianguis.js";
import Form7Recaudadora from "./views/forms/Form7Recaudadora.js";
import Form8Alumbrado from "./views/forms/Form8Alumbrado.js";
import Form9AseoPublico from "./views/forms/Form9AseoPublico.js";
import Form10AguaDrenaje from "./views/forms/Form10AguaDrenaje.js";
import Form11AnalisisEstrategico from "./views/forms/Form11AnalisisEstrategico.js";
import Form12SindicaturaMun from "./views/forms/Form12SindicaturaMun.js";
import Form13MejoramientoUrb from "./views/forms/Form13MejoramientoUrb.js";
import Form14ConservacionInm from "./views/forms/Form14ConservacionInm.js";
import Form16Innovacion from "./views/forms/Form16Innovacion.js";
import Form17ProteccionCivil from "./views/forms/Form17ProteccionCivil.js";
import FormilariosList from "./views/formsList.js";

function App() {
  const token = localStorage.getItem("token");
  console.log("token",token)
  if (!token) {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route exact path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/DashboardEmpleado" element={<DashboardEmpleado />} />
          <Route exact path="/usuariosEliminado" element={<Userdelete />} />
          <Route exact path="/miCuenta" element={<Myaccount />} />
          <Route exact path="/consultas" element={<Consultas />} />
          <Route exact path="/formatos" element={<FormilariosList />} />
          <Route exact path="/usuarios" element={<Usuarios />} />
           
          <Route exact path="/detallesConstruccion/:idConstruccion" element={<DetailCommunityConstruction />}/>
          <Route exact path="/detallesServiciosSalud/:idPreguntasSalud" element={<DetailHealthServices />}/>
          <Route exact path="/detallesDIFZapopan/:idPreguntasDif" element={<DetailDIFZapopan />}/>
          <Route exact path="/detallesSeguridadPublica/:idPreguntasSPublica" element={<DetailSeguridadPublica />}/>
          <Route exact path="/detallesInspeccionVigilancia/:idInspeccionVig" element={<DetailInspeccionVigilancia />}/>
          <Route exact path="/detallesTianguis/:idTianguis" element={<DetailTianguis />} />
          <Route exact path="/detallesRecaudadora/:idRecaudadora" element={<DetailRecaudadora />} />
          <Route exact path="/detallesAlumbrado/:idAlumbrado" element={<DetailAlumbrado />}/>
          <Route exact path="/detallesAseoPublico/:idAPublico" element={<DetailAseoPublico />}/>
          <Route exact path="/detallesAguaDrenaje/:idADrenaje" element={<DetailAguaDrenaje />} />
          <Route exact path="/detallesEstrategicoComunicacion/:idAEstrategico" element={<DetailEstrategicoComunicacion />} />
          <Route exact path="/detallesSindicaturaMun/:idSindicatura" element={<DetailSindicaturaMunicipal />}/>
          <Route exact path="/detallesMejoraUrbano/:idMUrbano" element={<DetailMejoramientoUrbano />}/>
          <Route exact path="/detallesConservacionInmu/:idConservacion" element={<DetailConservacionInmuebles />}/>
          <Route exact path="/detallesInnovacionGub/:idInnovacion" element={<DetailInnovacionGub />}/>
          <Route exact path="/detallesProtCivilBomberos/:idPCivil" element={<DetailProteccionCivilBomberos />} />

          <Route exact path="/formConstruccion" element={<Formulario1 />} />
          <Route exact path="/formServiciosSalud" element={<Form2Salud />} />
          <Route exact path="/formDif" element={<Form3Dif />} />
          <Route exact path="/formSeguridadPublica" element={<Form4SeguridadPublica />}/>
          <Route exact path="/formInspeccionVigilancia" element={<Form5InspeccionyVigilancia />}/>
          <Route exact path="/formTianguis" element={<Form6Tianguis />} />
          <Route exact path="/formRecaudadora" element={<Form7Recaudadora />} />
          <Route exact path="/formAlumbradoPublico" element={<Form8Alumbrado />}/>
          <Route exact path="/formAseoPublico" element={<Form9AseoPublico />} />
          <Route exact path="/formAguaDrenaje" element={<Form10AguaDrenaje />}/>
          <Route exact path="/formAnalisisEstrategico" element={<Form11AnalisisEstrategico />}/>
          <Route exact path="/formSindicaturaMunicipal" element={<Form12SindicaturaMun />}/>
          <Route exact path="/formMejoramientoUrbano" element={<Form13MejoramientoUrb />}/>
          <Route exact path="/formConservacionInmuebles" element={<Form14ConservacionInm />}/>
          <Route exact path="/formInnovacionGub" element={<Form16Innovacion />}/>
          <Route exact path="/formProteccionCivilBomberos" element={<Form17ProteccionCivil />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
