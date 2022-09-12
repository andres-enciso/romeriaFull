import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
// import EditIcon from "@mui/icons-material/Edit";
import "../../styles/styles.css";

export default function TableInnovacion() {
  const [data, setData] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idInnovacion",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadServiciosRealizados",
      headerName: "Servicios Realizados",
      width: 175,
    },
    {
      field: "cantidadAtencionRepoCentroMando",
      headerName: "Atención Centro de Mando",
      width: 175,
    },
    {
      field: "cantidadAtencionRepoSalaPrensa",
      headerName: "Atención Sala de Prensa",
      width: 175,
    },
    {
      field: "cantidadAtencionCentOperaciones",
      headerName: "Atención Centro de Operaciones",
      width: 145,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
          <Link href={`/detallesInnovacionGub/${JSON.stringify(params.row.idInnovacion,null,4)}`} underline="hover">
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

  /**CONSULTAR innovacion */
  const fetchInnovacion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"innovacion", {
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
    const response = await fetch(constants.api+"innovacion/total", {
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
    fetchInnovacion();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Innovación gubernamental</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.idInnovacion}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Innovación gubernamental
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
            <td>Cantidad de atención a centro de operaciones</td>
            <td>{totalGlobal?.cantidadAtencionCentOperaciones}</td>
            <td rowspan="3">{totalGlobal?.cantidadAtencionCentOperaciones+totalGlobal?.cantidadAtencionRepoSalaPrensa+totalGlobal?.cantidadAtencionRepoCentroMando}</td>
          </tr>
          <tr>
            <td>Cantidad de atención a centro de mando</td>
            <td>{totalGlobal?.cantidadAtencionRepoCentroMando}</td>
          </tr>
          <tr>
            <td>Cantidad de atención a sala de prensa</td>
            <td>{totalGlobal?.cantidadAtencionRepoSalaPrensa}</td>
          </tr>
          <tr>
            <td>Cantidad de servicios realizados</td>
            <td>{totalGlobal?.cantidadServiciosRealizados}</td>
            <td rowspan="1">{totalGlobal?.cantidadServiciosRealizados}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableInnovacion")) {
  ReactDOM.render(<TableInnovacion />, document.getElementById("tableInnovacion"));
}
