import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableDif() {
  const [dif, setDif] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idPreguntasDif",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadMenores18",
      headerName: "Cantidad de Menores de edad",
      width: 175,
    },
    {
      field: "cantidadAdultos18a59",
      headerName: "Cantidad de Adultos 18 - 59",
      width: 175,
    },
    {
      field: "cantidadAdultosMay60",
      headerName: "Cantidad Adulto Mayor",
      width: 175,
    },
    {
      field: "cantidadAdDiscapacitados",
      headerName: "Cantidad de Discapacitados",
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
              href={`/detallesDIFZapopan/${JSON.stringify(
                params.row.idPreguntasDif,
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
  const fetchDif = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dif", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setDif(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dif/total", {
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
    fetchDif();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">DIF</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={dif}
          columns={columns}
          getRowId={(row) => row.idPreguntasDif}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - DIF
            </td>
          </tr>
          <tr>
            <th scope="col">Personas extraviadas</th>
            <th scope="col">Total</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Menores de 18 años</td>
            <td>{totalGlobal?.cantidadMenores18}</td>
            <td rowspan="4">
              {totalGlobal?.cantidadMenores18 +
                totalGlobal?.cantidadAdDiscapacitados +
                totalGlobal?.cantidadAdultosMay60 +
                totalGlobal?.cantidadAdultos18a59}
            </td>
          </tr>
          <tr>
            <td>Adultos de 18 años a 59 años</td>
            <td>{totalGlobal?.cantidadAdultos18a59}</td>
          </tr>
          <tr>
            <td>Adultos mayores a 60 años</td>
            <td>{totalGlobal?.cantidadAdultosMay60}</td>
          </tr>
          <tr>
            <td>Adultos discapacitados</td>
            <td>{totalGlobal?.cantidadAdDiscapacitados}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableDif")) {
  ReactDOM.render(<TableDif />, document.getElementById("tableDif"));
}
