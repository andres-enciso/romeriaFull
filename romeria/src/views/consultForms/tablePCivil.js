import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function TablePCivil() {
  const [data, setData] = useState([]);

  /**COLUMNAS DATAGRID */
  const columns = [
    {
      field: "idPCivil",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadComSiCumplioNormas",
      headerName: "Cumpio Normas",
      width: 175,
    },
    {
      field: "cantidadComNoCumplioNormas",
      headerName: "No Cumplio Normas",
      width: 175,
    },
    {
      field: "cantidadDeteccionClausuraGasLp",
      headerName: "Clausuras por Gas LP",
      width: 175,
    },
    {
      field: "cantidadComerInspecc",
      headerName: "Comercios Inspeccionados",
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
              href={`/detallesProtCivilBomberos/${JSON.stringify(
                params.row.idPCivil,
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

  /**CONSULTAR CIVIL */
  const fetchPCivl = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "pcivil", {
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
    const response = await fetch(constants.api + "pcivil/total", {
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
    fetchPCivl();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Protección Cívil y Bomberos</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.idPCivil}
          pageSize={5}
        />
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Protección civil y bomberos
            </td>
          </tr>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Total Global</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Cantidad de Comercios que no cumplieron las normas</td>
            <td>{totalGlobal?.cantidadComNoCumplioNormas}</td>
          </tr>
          <tr>
            <td>Cantidad de Comercios que si cumplieron las normas</td>
            <td>{totalGlobal?.cantidadComSiCumplioNormas}</td>
          </tr>
          <tr>
            <td>Cantidad de Comercios inspeccionados</td>
            <td>{totalGlobal?.cantidadComerInspecc}</td>
          </tr>
          <tr>
            <td>Cantidad de Comercios clausurados por gas LP</td>
            <td>{totalGlobal?.cantidadDeteccionClausuraGasLp}</td>
          </tr>
          <tr>
            <td>Cantidad de personas atendidas en módulo</td>
            <td>{totalGlobal?.cantidadPersonasAtendModu}</td>
          </tr>
          <tr>
            <td>Cantidad de servicios intinerantes realizados</td>
            <td>{totalGlobal?.cantidadServIntinRealizados}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tablePCivil")) {
  ReactDOM.render(<TablePCivil />, document.getElementById("tablePCivil"));
}
