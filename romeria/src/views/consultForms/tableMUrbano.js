import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableMUrbano() {
  const [murbano, setMurbano] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idMUrbano",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadToneladasBasuraReco",
      headerName: "Basura Recogida",
      width: 175,
    },
    {
      field: "msjToneladasBasuraReco",
      headerName: "Observaciones",
      width: 175,
    },
    {
      field: "cantidadOperativoMejBarridoManualMecanico",
      headerName: "Operativo Barrido",
      width: 175,
    },
    {
      field: "msjOperativoMejBarridoManualMecanico",
      headerName: "Observaciones",
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
              href={`/detallesMejoraUrbano/${JSON.stringify(
                params.row.idMUrbano,
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

  /**CONSULTAR SALDUD */
  const fetchalumbrado = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "mejoramientourbano", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setMurbano(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;
  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "mejoramientourbano/total", {
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

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Mejoramiento Urbano</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={murbano}
          columns={columns}
          getRowId={(row) => row.idMUrbano}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Mejoramiento Urbano
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
            <td>Operativo Mejoramiento (Barrido manual y mecánico)</td>
            <td>{totalGlobal?.cantidadOperativoMejBarridoManualMecanico}</td>
            <td rowspan="2">
              {totalGlobal?.cantidadToneladasBasuraReco +
                totalGlobal?.cantidadOperativoMejBarridoManualMecanico}
            </td>
          </tr>
          <tr>
            <td>Toneladas de basura recolectada</td>
            <td>{totalGlobal?.cantidadToneladasBasuraReco}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableMUrbano")) {
  ReactDOM.render(<TableMUrbano />, document.getElementById("tableMUrbano"));
}
