import { useState, useEffect } from "react";
import DashboardContent from "./Dashboard";
import ReactDOM from "react-dom";
import "../styles/styles.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
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
import constants from "./utils/constants";

export default function FormilariosList() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const typeUser = loggedUserType?.rolUsuario;
  console.log(typeUser);

  if (typeUser != 1) {
    window.location.replace("/DashboardEmpleado");
  }

  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }

  const [dependencia, setDependencia] = useState([]);
  const [depElegida, setDepelegida] = useState([]);

  const fetchDep = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dependencia", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();

    if (result) {
      let arrayTipo = [];
      for (const key in result) {
        arrayTipo.push({
          label: result[key].nombreDependencia,
          id: result[key].idDependencia,
        });
      }
      setDependencia(arrayTipo);
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "No autenticado, favor de volverse a ingresar.",
        text: "Intente de nuevo",
      });
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  useEffect(() => {
    fetchDep();
  }, []);

  //onChanges
  const handleInputRol = (event, values) => {
    setDepelegida(values);
  };

  return (
    <DashboardContent>
      <div className="container">
        <div className="container">
          <div className="row header-users">
            <div className="col title-form">Formatos </div>
            <div className="col read-forms">
              <Autocomplete
                onChange={handleInputRol}
                value={depElegida}
                className=" form-control"
                name="rol"
                required
                disablePortal
                id="rol"
                getOptionLabel={(options) => options.label || ""}
                options={dependencia}
                fullWidth={true}
                renderInput={(params) => (
                  <TextField
                    className=" form-control"
                    placeholder="Formatos"
                    id="rol"
                    name="rol"
                    variant="standard"
                    {...params}
                  />
                )}
              />
            </div>
          </div>
        </div>
        {depElegida.id == 1 ? <Formulario1 /> : null}
        {depElegida.id == 2 ? <Form3Dif /> : null}
        {depElegida.id == 3 ? <Form2Salud /> : null}
        {depElegida.id == 4 ? <Form4SeguridadPublica /> : null}
        {depElegida.id == 5 ? <Form5InspeccionyVigilancia /> : null}
        {depElegida.id == 6 ? <Form6Tianguis /> : null}
        {depElegida.id == 7 ? <Form7Recaudadora /> : null}
        {depElegida.id == 8 ? <Form8Alumbrado /> : null}
        {depElegida.id == 9 ? <Form9AseoPublico /> : null}
        {depElegida.id == 10 ? <Form10AguaDrenaje /> : null}
        {depElegida.id == 11 ? <Form11AnalisisEstrategico /> : null}
        {depElegida.id == 12 ? <Form12SindicaturaMun /> : null}
        {depElegida.id == 13 ? <Form13MejoramientoUrb /> : null}
        {depElegida.id == 14 ? <Form14ConservacionInm /> : null}
        {depElegida.id == 15 ? <Form16Innovacion /> : null}
        {depElegida.id == 16 ? <Form17ProteccionCivil /> : null}
      </div>
    </DashboardContent>
  );
}

if (document.getElementById("formilariosList")) {
  ReactDOM.render(
    <FormilariosList />,
    document.getElementById("formilariosList")
  );
}
