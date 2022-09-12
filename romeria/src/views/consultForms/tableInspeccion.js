import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableInspeccion() {
  const [inspeccion, setInspeccion] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idInspeccionVig",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadActasConDecomisoZona",
      headerName: "Cantidad de Decomisos en Zona",
      width: 175,
    },
    {
      field: "cantidadActasConDecomisoRutaEvac",
      headerName: "Cantidad de Decomisos en Ruta",
      width: 175,
    },
    {
      field: "cantidadActasComercioEstab",
      headerName: "Cantidad de Comercio Establevido",
      width: 175,
    },
    {
      field: "cantidadClausurasComEstablecido",
      headerName: "Cantidad de clausuras a comercios",
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
              href={`/detallesInspeccionVigilancia/${JSON.stringify(
                params.row.idInspeccionVig,
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

  /**CONSULTAR inspeccion */
  const fetchDif = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "inspeccionvig", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setInspeccion(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "inspeccionvig/total", {
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
          <div className="col title-users">Inspección y Vigilancia</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={inspeccion}
          columns={columns}
          getRowId={(row) => row.idInspeccionVig}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Inspección y Vigilancia
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody className="tables-detail">
          <tr>
            <td>Cantidad de actas en comericios establecidos</td>
            <td>{totalGlobal?.cantidadActasComercioEstab}</td>
            <td rowspan="1">{totalGlobal?.cantidadActasComercioEstab}</td>
          </tr>
          <tr>
            <td>Cantidad de actas con decomiso en ruta de evacuación</td>
            <td>{totalGlobal?.cantidadActasConDecomisoRutaEvac}</td>
            <td rowspan="2">
              {totalGlobal?.cantidadActasConDecomisoRutaEvac +
                totalGlobal?.cantidadActasConDecomisoZona}
            </td>
          </tr>
          <tr>
            <td>Cantidad de actas con decomisos en zona</td>
            <td>{totalGlobal?.cantidadActasConDecomisoZona}</td>
          </tr>
          <tr>
            <td>Cantidad de clausuras con infracción diversa</td>
            <td>{totalGlobal?.cantidadClausuraInfraccDiversas}</td>
            <td rowspan="4">
              {totalGlobal?.cantidadClausuraInfraccDiversas +
                totalGlobal?.cantidadClausuraLeySeca +
                totalGlobal?.cantidadClausurasComEstablecido +
                totalGlobal?.cantidadClausurasJMecanicos}
            </td>
          </tr>
          <tr>
            <td>Cantidad de clausuras por ley seca</td>
            <td>{totalGlobal?.cantidadClausuraLeySeca}</td>
          </tr>
          <tr>
            <td>Cantidad de clausuras en comercio establecido</td>
            <td>{totalGlobal?.cantidadClausurasComEstablecido}</td>
          </tr>
          <tr>
            <td>Cantidad de clausuras a juegos mecánicos</td>
            <td>{totalGlobal?.cantidadClausurasJMecanicos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableInspeccion")) {
  ReactDOM.render(
    <TableInspeccion />,
    document.getElementById("tableInspeccion")
  );
}
