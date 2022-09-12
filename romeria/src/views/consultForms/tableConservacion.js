import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableConservacion() {
  const [data, setData] = useState([]);


  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idConservacion",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadAtencionUnidadBasilica",
      headerName: "Atención Unidad Basilica",
      width: 175,
    },
    {
      field: "cantidadAtencionPresidenciaMun",
      headerName: "Atención Presidencia Municipal",
      width: 175,
    },
    {
      field: "msjAtencionPresidenciaMun",
      headerName: "Observaciones",
      width: 175,
    },
    {
      field: "ApoyoDanzantes",
      headerName: "Apoyo a danzantes",
      width: 145,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
          <Link href={`/detallesConservacionInmu/${JSON.stringify(params.row.idConservacion,null,4)}`} underline="hover">
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

  /**CONSULTAR SALUD */
  const fetchConservacion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"conservacion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setData(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"conservacion/total", {
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
    fetchConservacion();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Conservación de Inmuebles</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.idConservacion}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Conservación de Inmuebles
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Atenciones brindadas al Centro de Operaciones Zapopan (C5)</td>
            <td>{totalGlobal?.cantidadAtencionCOZ}</td>
          </tr>
          <tr>
            <td>Cantidad de atención a precidencia municipal</td>
            <td>{totalGlobal?.cantidadAtencionPresidenciaMun}</td>
          </tr>
          <tr>
            <td>Cantidad de atención a unidad basílica</td>
            <td>{totalGlobal?.cantidadAtencionUnidadBasilica}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableConservacion")) {
  ReactDOM.render(<TableConservacion />, document.getElementById("tableConservacion"));
}
