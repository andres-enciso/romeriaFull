import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import constants from "../utils/constants";
import "../../styles/styles.css";

export default function TableAseop() {
  const [aseop, setAseop] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idAPublico",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadToneladasRecibidasPicachos",
      headerName: "Toneadas en Picachos",
      width: 175,
    },
    {
      field: "cantidadToneladasOperativoBarridoManual",
      headerName: "Toneladas Barridas a Mano",
      width: 175,
    },
    {
      field: "ContenedorAmericaEsparta",
      headerName: "Av. Americas y Esparta",
      width: 175,
    },
    {
      field: "PlazaPatria",
      headerName: "Observaciones Plaza Patria",
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
              href={`/detallesAseoPublico/${JSON.stringify(
                params.row.idAPublico,
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

  /**CONSULTAR fetchApublico */
  const fetchApublico = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "aseopublico", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAseop(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "aseopublico/total", {
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
    fetchApublico();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Aseo Público</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={aseop}
          columns={columns}
          getRowId={(row) => row.idAPublico}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Aseo Público
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cantidad de toneladas en barrido manual</td>
            <td>{totalGlobal?.cantidadToneladasOperativoBarridoManual}</td>
          </tr>
          <tr>
            <td>Cantidad de toneladas recibidas en Picachos</td>
            <td>{totalGlobal?.cantidadToneladasRecibidasPicachos}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tableAseop")) {
  ReactDOM.render(<TableAseop />, document.getElementById("tableAseop"));
}
