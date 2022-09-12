import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TableSegp() {
  const [segp, setSegp] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idPreguntasSPublica",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadAdultosEnervantes",
      headerName: "Cantidad de Adultos con Enervantes",
      width: 175,
    },
    {
      field: "cantidadAdultosArmaFuego",
      headerName: "Cantidad de Adultos con armas de fuego",
      width: 175,
    },
    {
      field: "cantidadAdultosBebidasEmbriagantes",
      headerName: "Cantidad de Adulto con bebidas embriagantes",
      width: 175,
    },
    {
      field: "cantidadAdultosAlterarOrden",
      headerName: "Cantidad de Adultos que alteraron el orden",
      width: 145,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
          <Link href={`/detallesSeguridadPublica/${JSON.stringify(params.row.idPreguntasSPublica,null,4)}`} underline="hover">
            <Button
              variant="contained"
              color="info"
              startIcon={<VisibilityIcon className="icon-center" />}
            >
            </Button>
            </Link>
          </>
        );
      },
    },
  
  ];

  /**CONSULTAR SEG PUB */
  const fetchSegp = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"segPublica", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSegp(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;
  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"segPublica/total", {
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
    fetchSegp();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Seguridad Pública</div>
          <div className="col add-users"></div>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={segp}
          columns={columns}
          getRowId={(row) => row.idPreguntasSPublica}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Seguridad Pública
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cantidad de adultos que alteraron el orden</td>
            <td>{totalGlobal?.cantidadAdultosAlterarOrden}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosAlterarOrden+totalGlobal?.cantidadMenoresAlterarOrden}</td>
          </tr>
          <tr>
            <td>Cantidad de menores que alteraron el orden</td>
            <td>{totalGlobal?.cantidadMenoresAlterarOrden}</td>
          </tr>
          <tr>
            <td>Cantidad de adultos con armas de fuego</td>
            <td>{totalGlobal?.cantidadAdultosArmaFuego}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosArmaFuego+totalGlobal?.cantidadMenoresArmaFuego}</td>
          </tr>
          <tr>
            <td>Cantidad de menores con armas de fuego</td>
            <td>{totalGlobal?.cantidadMenoresArmaFuego}</td>
          </tr>
          <tr>
            <td>Cantidad de adultos con bebidas embriagantes</td>
            <td>{totalGlobal?.cantidadAdultosBebidasEmbriagantes}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosBebidasEmbriagantes+totalGlobal?.cantidadMenoresBebidasEmbriagantes}</td>
          </tr>
          <tr>
            <td>Cantidad de menores con bebidas embriagantes</td>
            <td>{totalGlobal?.cantidadMenoresBebidasEmbriagantes}</td>
          </tr>
          <tr>
            <td>Cantidad de adultos con enervantes</td>
            <td>{totalGlobal?.cantidadAdultosEnervantes}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosEnervantes+totalGlobal?.cantidadMenoresEnervantes}</td>
          </tr>
          <tr>
            <td>Cantidad de menores con enervantes</td>
            <td>{totalGlobal?.cantidadMenoresEnervantes}</td>
          </tr>
          <tr>
            <td>Cantidad de adultos con faltas administrativas</td>
            <td>{totalGlobal?.cantidadAdultosFaltaAdmin}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosFaltaAdmin+totalGlobal?.cantidadMenoresFaltaAdmin}</td>
          </tr>
          <tr>
            <td>Cantidad de menores con faltas administrativas</td>
            <td>{totalGlobal?.cantidadMenoresFaltaAdmin}</td>
          </tr>
          <tr>
            <td>Cantidad de adultos con otras faltas</td>
            <td>{totalGlobal?.cantidadAdultosOtroServicio}</td>
            <td rowspan="2">{totalGlobal?.cantidadAdultosOtroServicio+totalGlobal?.cantidadMenoresOtroServicio}</td>
          </tr>
          <tr>
            <td>Cantidad de menores con otras faltas</td>
            <td>{totalGlobal?.cantidadMenoresOtroServicio}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableSegp")) {
  ReactDOM.render(<TableSegp />, document.getElementById("tableSegp"));
}
