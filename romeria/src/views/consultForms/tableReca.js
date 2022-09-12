import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TableReca() {
  const [reca, setreca] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idRecaudadora",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadRecaudado",
      headerName: "Cantidad Recaudado",
      width: 175,
    },
    {
      field: "msjMontoRecaudado",
      headerName: "Observaciones del monto",
      width: 175,
    },
    {
      field: "CobroZona1",
      headerName: "Cobro zona 1",
      width: 175,
    },
    {
      field: "CobroZonaAmortiguamiento",
      headerName: "Cobro Zona Amortiguamiento",
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
              href={`/detallesRecaudadora/${JSON.stringify(
                params.row.idRecaudadora,
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

  /**CONSULTAR RECA */
  const fetchreca = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "recaudadora", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setreca(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "recaudadora/total", {
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
    fetchreca();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Recaudadora 05</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={reca}
          columns={columns}
          getRowId={(row) => row.idRecaudadora}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Recaudadora 05
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cantidad recaudada</td>
            <td>{totalGlobal?.cantidadRecaudado}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableReca")) {
  ReactDOM.render(<TableReca />, document.getElementById("tableReca"));
}
