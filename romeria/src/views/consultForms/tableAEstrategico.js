import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TableAEstrategico() {
  const [analisis, setAnalisis] = useState([]);

  /**COLUMNAS DATAGRID */

  const columns = [
    {
      field: "idAEstrategico",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadMediosComuAendidos",
      headerName: "Medios de Comunicación Atendidos",
      width: 175,
    },
    {
      field: "cantidadMediosCobertura",
      headerName: "Medios de Cobertura",
      width: 175,
    },
    {
      field: "cantidadAtencionLogistica",
      headerName: "Atencion De Lógistica",
      width: 175,
    },
    {
      field: "msjAtencionLogistica",
      headerName: "Observaciones De Lógistica",
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
              href={`/detallesEstrategicoComunicacion/${JSON.stringify(
                params.row.idAEstrategico,
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

  /**CONSULTAR fetchEstrategico */
  const fetchEstrategico = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "analisisestrategico", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAnalisis(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "analisisestrategico/total", {
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
    fetchEstrategico();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">
            Análisis estratégico y Comunicación
          </div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={analisis}
          columns={columns}
          getRowId={(row) => row.idAEstrategico}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Análisis estratégico y Comunicación
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
            <td>Cantidad de atención logística</td>
            <td>{totalGlobal?.cantidadAtencionLogistica}</td>
            <td rowspan="3">
              {totalGlobal?.cantidadAtencionLogistica +
                totalGlobal?.cantidadMediosCobertura +
                totalGlobal?.cantidadMediosComuAendidos}
            </td>
          </tr>
          <tr>
            <td>Cantidad de Medios de Cobertura</td>
            <td>{totalGlobal?.cantidadMediosCobertura}</td>
          </tr>
          <tr>
            <td>Cantidad de medios de comunicación</td>
            <td>{totalGlobal?.cantidadMediosComuAendidos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableAEstrategico")) {
  ReactDOM.render(
    <TableAEstrategico />,
    document.getElementById("tableAEstrategico")
  );
}
