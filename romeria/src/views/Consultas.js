import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DashboardContent from "./Dashboard";
import ReactDOM from "react-dom";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "../styles/styles.css";
import Tablesalud from "./consultForms/tableSalud";
import TableDif from "./consultForms/tableDif";
import TableSegp from "./consultForms/tableSegp";
import TableInspeccion from "./consultForms/tableInspeccion";
import TableTianguis from "./consultForms/tableTianguis";
import TableReca from "./consultForms/tableReca";
import TableAlumbrado from "./consultForms/tableAlumbrado";
import TableAseop from "./consultForms/tableAseop";
import TableDrenaje from "./consultForms/tableAdrenaje";
import TableAEstrategico from "./consultForms/tableAEstrategico";
import TableSindicatuara from "./consultForms/tableSindicatura";
import TableMUrbano from "./consultForms/tableMUrbano";
import TableConservacion from "./consultForms/tableConservacion";
import TableInnovacion from "./consultForms/tableInnovacion";
import TablePCivil from "./consultForms/tablePCivil";
import TableConstruccion from "./consultForms/tableConstruccion";
import constants from "./utils/constants";

export default function Consultas() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const typeUser = loggedUserType?.rolUsuario;
  console.log(typeUser);

  if (typeUser != 1) {
    window.location.replace("/DashboardEmpleado");
  } else if (loggedUserType.visible == false) {
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
            <div className="col title-form">Consultas</div>
            <div className="col read-forms">
              <div className="col-8">
                <Autocomplete
                  onChange={handleInputRol}
                  value={depElegida}
                  className=" form-control"
                  name="rol"
                  id="rol"
                  getOptionLabel={(options) => options.label || ""}
                  options={dependencia}
                  fullWidth={true}
                  renderInput={(params) => (
                    <TextField
                      className=" form-control"
                      id="rol"
                      name="rol"
                      placeholder="Formatos"
                      variant="standard"
                      {...params}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {depElegida.id == 1 ? <TableConstruccion /> : null}
        {depElegida.id == 2 ? <TableDif /> : null}
        {depElegida.id == 3 ? <Tablesalud /> : null}
        {depElegida.id == 4 ? <TableSegp /> : null}
        {depElegida.id == 5 ? <TableInspeccion /> : null}
        {depElegida.id == 6 ? <TableTianguis /> : null}
        {depElegida.id == 7 ? <TableReca /> : null}
        {depElegida.id == 8 ? <TableAlumbrado /> : null}
        {depElegida.id == 9 ? <TableAseop /> : null}
        {depElegida.id == 10 ? <TableDrenaje /> : null}
        {depElegida.id == 11 ? <TableAEstrategico /> : null}
        {depElegida.id == 12 ? <TableSindicatuara /> : null}
        {depElegida.id == 13 ? <TableMUrbano /> : null}
        {depElegida.id == 14 ? <TableConservacion /> : null}
        {depElegida.id == 15 ? <TableInnovacion /> : null}
        {depElegida.id == 16 ? <TablePCivil /> : null}
      </div>
    </DashboardContent>
  );
}

if (document.getElementById("consultas")) {
  ReactDOM.render(<Consultas />, document.getElementById("Consultas"));
}
