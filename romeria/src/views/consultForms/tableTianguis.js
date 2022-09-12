import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TableTianguis() {
  const [tianguis, setTianguis] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idTianguis",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadComerciantesInst",
      headerName: "Cantidad de Comerciantes Instalados",
      width: 175,
    },
    {
      field: "cantidadComercio",
      headerName: "Cantidad de Comercios",
      width: 175,
    },
    {
      field: "cantidadJuegos",
      headerName: "Cantidad de Juegos",
      width: 175,
    },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
          <Link href={`/detallesTianguis/${JSON.stringify(params.row.idTianguis,null,4)}`} underline="hover">
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
  const fetchTianguis = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"tianguis", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setTianguis(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;
  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"tianguis/total", {
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
    fetchTianguis();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Tianguis</div>
          <div className="col add-users"></div>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={tianguis}
          columns={columns}
          getRowId={(row) => row.idTianguis}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Tianguis
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
            <td>Cantidad de comercios</td>
            <td>{totalGlobal?.cantidadComercio}</td>
            <td rowspan="2">{totalGlobal?.cantidadComerciantesInst}</td>
          </tr>
           <tr>
            <td>Cantidad de juegos</td>
            <td>{totalGlobal?.cantidadJuegos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableTianguis")) {
  ReactDOM.render(<TableTianguis />, document.getElementById("tableTianguis"));
}
