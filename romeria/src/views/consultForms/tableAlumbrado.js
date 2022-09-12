import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableAlumbrado() {
  const [alumbrado, setAlumbrado] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idAlumbrado",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadRevisionRealizadaComerciantes",
      headerName: "Revisiones Realizadas",
      width: 175,
    },
    {
      field: "msjRevisionRealizadaComerciantes",
      headerName: "Observaciones",
      width: 175,
    },
    {
      field: "cantidadModConectados",
      headerName: "Modulos Conectados",
      width: 175,
    },
    {
      field: "msjModConectados",
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
              href={`/detallesAlumbrado/${JSON.stringify(
                params.row.idAlumbrado,
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

  /**CONSULTAR fetchalumbrado */
  const fetchalumbrado = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "alumbrado", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAlumbrado(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "alumbrado/total", {
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
          <div className="col title-users">Alumbrado Público</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={alumbrado}
          columns={columns}
          getRowId={(row) => row.idAlumbrado}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Alumbrado Público
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cantidad de módulos conectados</td>
            <td>{totalGlobal?.cantidadModConectados}</td>
          </tr>
          <tr>
            <td>Cantidad de revisiones realizadas a comerciantes</td>
            <td>{totalGlobal?.cantidadRevisionRealizadaComerciantes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableAlumbrado")) {
  ReactDOM.render(
    <TableAlumbrado />,
    document.getElementById("tableAlumbrado")
  );
}
