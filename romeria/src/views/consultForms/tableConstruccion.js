import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableConstruccion() {
  const [data, setData] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idConstruccion",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "concepto1",
      headerName: "Apertura del Centro de Mando de la Coordinación General",
      width: 175,
    },
    {
      field: "concepto2",
      headerName: "	Recorrido del C. Presidente Municipal",
      width: 175,
    },
    {
      field: "concepto3",
      headerName: "Instalación de sillería para Misa de Recepción",
      width: 175,
    },
    {
      field: "concepto4",
      headerName: "	Cierre total de vialidades",
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
              href={`/detallesConstruccion/${JSON.stringify(
                params.row.idConstruccion,
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

  /**CONSULTAR cons */
  const fetchConstruccion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "construccion", {
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
    const response = await fetch(constants.api + "construccion/total", {
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
    fetchConstruccion();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Construcción de Comunidad</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.idConstruccion}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Construcción de la comunidad
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
            <td>Vallas Instaladas en atrio</td>
            <td>{totalGlobal?.cantidadVallasIns}</td>
            <td rowspan="1">{totalGlobal?.cantidadVallasIns}</td>
          </tr>
          <tr>
            <td>Agua entregada en Av. Américas y Serbia</td>
            <td>{totalGlobal?.cantidadConto14}</td>
            <td rowspan="3">
              {totalGlobal?.cantidadConto14 +
                totalGlobal?.cantidadConto15 +
                totalGlobal?.cantidadAguaAmericasObelisco}
            </td>
          </tr>
          <tr>
            <td>Agua entregada en Av. Américas y Obelisco</td>
            <td>{totalGlobal?.cantidadAguaAmericasObelisco}</td>
          </tr>
          <tr>
            <td>Agua entregada en Av. Hidalgo y Emiliano Zapata</td>
            <td>{totalGlobal?.cantidadConto15}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableConstruccion")) {
  ReactDOM.render(
    <TableConstruccion />,
    document.getElementById("tableConstruccion")
  );
}
