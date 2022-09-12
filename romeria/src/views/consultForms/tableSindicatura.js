import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TableSindicatuara() {
  const [sindicatura, setSindicatura] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idSindicatura",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadActasCalificadas",
      headerName: "Actas Calificadas",
      width: 175,
    },
    {
      field: "msjActasCalificadas",
      headerName: "Observaciones",
      width: 175,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
            <Link
              href={`/detallesSindicaturaMun/${JSON.stringify(
                params.row.idSindicatura,
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
  const fetchSindicatura = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "sindicatura", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSindicatura(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "sindicatura/total", {
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
    fetchSindicatura();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Sindicatura Municipal</div>
          <div className="col add-users"></div>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={sindicatura}
          columns={columns}
          getRowId={(row) => row.idSindicatura}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Sindicatura Municipal
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cantidad de actas calificadas</td>
            <td>{totalGlobal?.cantidadActasCalificadas}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableSindicatuara")) {
  ReactDOM.render(
    <TableSindicatuara />,
    document.getElementById("tableSindicatuara")
  );
}
