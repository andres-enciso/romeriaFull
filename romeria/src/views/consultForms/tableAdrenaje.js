import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableDrenaje() {
  const [drenaje, setDrenaje] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idADrenaje",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadBanosInstalados",
      headerName: "Baños Instalados",
      width: 175,
    },
    {
      field: "cantidadUsuarios",
      headerName: "Usuarios",
      width: 175,
    },
    {
      field: "cantidadEstimadaP1JMinaMatamoros",
      headerName: "Usuarios Estimados Javier Mina",
      width: 175,
    },
    {
      field: "cantidadEstimadaP7AvilaSantaElena",
      headerName: "Usuarios Estimados Ávila Camacho",
      width: 145,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
            <Link
              href={`/detallesAguaDrenaje/${JSON.stringify(
                params.row.idADrenaje,
                null,
                4
              )}`}
              underline="hover"
            >
              <Button
                variant="contained"
                color="info"
                startIcon={<VisibilityIcon className="icon-center" />}
              ></Button>
            </Link>
          </>
        );
      },
    },
  ];

  /**CONSULTAR SALUD */
  const fetchalumbrado = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "adrenaje", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setDrenaje(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "adrenaje/total", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setTotal(result);
  };

  useEffect(() => {
    fetchalumbrado();
    fetchTotal();
  }, []);

  const suma =
    totalGlobal?.cantidadEstimadaP1JMinaMatamoros +
    totalGlobal?.cantidadEstimadaP2EvaSofia +
    totalGlobal?.cantidadEstimadaP3CincoMayoSofia +
    totalGlobal?.cantidadEstimadaP4MixtonAmericas +
    totalGlobal?.cantidadEstimadaP5AmericasEsparta +
    totalGlobal?.cantidadEstimadaP6AmericasPatria +
    totalGlobal?.cantidadEstimadaP7AvilaSantaElena +
    totalGlobal?.cantidadEstimadaP8AvilaPatria +
    totalGlobal?.cantidadEstimadaP9HidalgoLauralesJPabloii +
    totalGlobal?.cantidadEstimadaP10EmilioLaureles +
    totalGlobal?.cantidadEstimadaP11SarcofagoLaurelesJPabloii;

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Agua y Drenaje</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={drenaje}
          columns={columns}
          getRowId={(row) => row.idADrenaje}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Agua y Drenaje
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total </th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Baños Instalados</td>
            <td>{totalGlobal?.cantidadBanosInstalados}</td>
            <td rowspan="1">{totalGlobal?.cantidadBanosInstalados}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 1 Calle Javier Mina y Calle Matamoros
            </td>
            <td>{totalGlobal?.cantidadEstimadaP1JMinaMatamoros}</td>
            <td rowspan="11">{suma}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 2 Calle Eva Briseño y Calle Sofía
              Camarena
            </td>
            <td>{totalGlobal?.cantidadEstimadaP2EvaSofia}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 3 Calle 5 de Mayo y Calle Sofía
              Camarena
            </td>
            <td>{totalGlobal?.cantidadEstimadaP3CincoMayoSofia}</td>
          </tr>
          <tr>
            <td>Usuarios estimados en Punto 4 Calle Mixtón y Av. Américas</td>
            <td>{totalGlobal?.cantidadEstimadaP4MixtonAmericas}</td>
          </tr>
          <tr>
            <td>Usuarios estimados en Punto 5 Av. Américas y Esparta</td>
            <td>{totalGlobal?.cantidadEstimadaP5AmericasEsparta}</td>
          </tr>
          <tr>
            <td>Usuarios estimados en Punto 6 Av. Américas y Av. Patria</td>
            <td>{totalGlobal?.cantidadEstimadaP6AmericasPatria}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 7 Av. Ávila Camacho y Calle Santa
              Elena
            </td>
            <td>{totalGlobal?.cantidadEstimadaP7AvilaSantaElena}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 8 Av. Ávila Camacho y Av. Patria
            </td>
            <td>{totalGlobal?.cantidadEstimadaP8AvilaPatria}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 9 Av. Av. Hidalgo y Av. Laureles/Juan
              Pablo II
            </td>
            <td>{totalGlobal?.cantidadEstimadaP9HidalgoLauralesJPabloii}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 10 Calle Emilio Carranza y Av.
              Laureles
            </td>
            <td>{totalGlobal?.cantidadEstimadaP10EmilioLaureles}</td>
          </tr>
          <tr>
            <td>
              Usuarios estimados en Punto 11 Calle Sarcófago y Av. Laureles/Juan
              Pablo II
            </td>
            <td>{totalGlobal?.cantidadEstimadaP11SarcofagoLaurelesJPabloii}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableDrenaje")) {
  ReactDOM.render(<TableDrenaje />, document.getElementById("tableDrenaje"));
}
