import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ReactDOM from "react-dom";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
import "../../styles/styles.css";
import constants from "../utils/constants";

export default function Tablesalud() {
  const [salud, setSalud] = useState([]);

  /**COLUMNAS DATAGRID */

  const columns = [
    {
      field: "idPreguntasSalud",
      headerName: "ID Formato",
      width: 175,
      padingLeft: 15,
    },
    {
      field: "cantidadDeshidratacion",
      headerName: "Cantidad de Deshidratados",
      width: 175,
    },
    {
      field: "cantidadHipertension",
      headerName: "Cantidad de Hipertension",
      width: 175,
    },
    {
      field: "cantidadInfartoMiocardio",
      headerName: "Cantidad Miocardio",
      width: 175,
    },
    // { field: "rolUsuario", headerName: "Rol", width: 175 },
    {
      field: "cantidadConvulsivos",
      headerName: "Cantidad Convulsiones",
      width: 145,
    },
    // { field: "tipodependencia.", headerName: "Dependencia", width: 145 },
    {
      field: "Detalles",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
            <Link
              href={`/detallesServiciosSalud/${JSON.stringify(
                params.row.idPreguntasSalud,
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
    // {
    //   field: "Editar",
    //   renderCell: (params) => {
    //     return (
    //       <Button
    //         variant="contained"
    //         startIcon={<EditIcon className="icon-center" />}
    //         onClick={() =>
    //           ConfirmAlert(JSON.stringify(params.row.idUsuarios, null, 4))
    //         }
    //       />
    //     );
    //   },
    //   width: 130,
    // },
  ];

  /**CONSULTAR SALUD **/
  const fetchSalud = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "salud", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSalud(result);
  };

  const [total, setTotal] = useState([]);
  const totalGlobal = total[0]?._sum;

  const fetchTotal = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "salud/saludTotal", {
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
    fetchSalud();
    fetchTotal();
  }, []);

  return (
    <div className="container">
      <div className="container">
        <div className="row header-users">
          <div className="col title-users">Salud</div>
          <div className="col add-users"></div>
        </div>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={salud}
          columns={columns}
          getRowId={(row) => row.idPreguntasSalud}
          pageSize={5}
        />
      </div>
      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <td className=" title-users" colspan="4">
              Datos Globales - Servicios de Salud
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
            <td>Cantidad de adultos mayores</td>
            <td>{totalGlobal?.cantidadAdultoMayor}</td>
            <td rowspan="22">
              {totalGlobal?.cantidadAdultoMayor +
                totalGlobal?.cantidadVolcadura +
                totalGlobal?.cantidadTransladados +
                totalGlobal?.cantidadQuemaduras +
                totalGlobal?.cantidadOtros +
                totalGlobal?.cantidadMuscoloesqueletico +
                totalGlobal?.cantidadIntoxicacion +
                totalGlobal?.cantidadInfartoMiocardio +
                totalGlobal?.cantidadHipertension +
                totalGlobal?.cantidadFebrilesExa +
                totalGlobal?.cantidadEnfRespiratoria +
                totalGlobal?.cantidadEnfGatrointestinal +
                totalGlobal?.cantidadDiabetico +
                totalGlobal?.cantidadArmablanca +
                totalGlobal?.cantidadDeshidratacion +
                totalGlobal?.cantidadConvulsivos +
                totalGlobal?.cantidadChoque +
                totalGlobal?.cantidadCefaleas +
                totalGlobal?.cantidadArmablanca +
                totalGlobal?.cantidadCaidas +
                totalGlobal?.cantidadArmadefuego +
                totalGlobal?.cantidadArmablanca}
            </td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadArmablanca}</td>
          </tr>
          <tr>
            <td>Cantidad de armas de fuego</td>
            <td>{totalGlobal?.cantidadArmadefuego}</td>
          </tr>
          <tr>
            <td>Cantidad de caídas</td>
            <td>{totalGlobal?.cantidadCaidas}</td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadArmablanca}</td>
          </tr>
          <tr>
            <td>Cantidad de cefañeas</td>
            <td>{totalGlobal?.cantidadCefaleas}</td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadChoque}</td>
          </tr>
          <tr>
            <td>Cantidad de convulcoui</td>
            <td>{totalGlobal?.cantidadConvulsivos}</td>
          </tr>
          <tr>
            <td>Cantidad de Deshidatos</td>
            <td>{totalGlobal?.cantidadDeshidratacion}</td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadArmablanca}</td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadDiabetico}</td>
          </tr>
          <tr>
            <td>Cantidad de armas blancas</td>
            <td>{totalGlobal?.cantidadEnfGatrointestinal}</td>
          </tr>
          <tr>
            <td>Cantidad de resfriado</td>
            <td>{totalGlobal?.cantidadEnfRespiratoria}</td>
          </tr>
          <tr>
            <td>Cantidad de armas febriles</td>
            <td>{totalGlobal?.cantidadFebrilesExa}</td>
          </tr>
          <tr>
            <td>Cantidad de hipertencion</td>
            <td>{totalGlobal?.cantidadHipertension}</td>
          </tr>
          <tr>
            <td>Cantidad de hipertencion</td>
            <td>{totalGlobal?.cantidadInfartoMiocardio}</td>
          </tr>
          <tr>
            <td>Cantidad de Intoicados</td>
            <td>{totalGlobal?.cantidadIntoxicacion}</td>
          </tr>
          <tr>
            <td>Cantidad de Musculo-Esqueliticos</td>
            <td>{totalGlobal?.cantidadMuscoloesqueletico}</td>
          </tr>
          <tr>
            <td>Cantidad de otros</td>
            <td>{totalGlobal?.cantidadOtros}</td>
          </tr>
          <tr>
            <td>Cantidad de quemaduras</td>
            <td>{totalGlobal?.cantidadQuemaduras}</td>
          </tr>
          <tr>
            <td>Cantidad de translados</td>
            <td>{totalGlobal?.cantidadTransladados}</td>
          </tr>
          <tr>
            <td>Cantidad de volcaduaras</td>
            <td>{totalGlobal?.cantidadVolcadura}</td>
          </tr>
          <tr>
            <td>Cantidad de hombres atendidos</td>
            <td>{totalGlobal?.cantidadMasculino}</td>
            <td rowspan="3">
              {totalGlobal?.cantidadAdultoMayor +
                totalGlobal?.cantidadIntermedio +
                totalGlobal?.cantidadFemenino}
            </td>
          </tr>
          <tr>
            <td>Cantidad de mujeres atendidas</td>
            <td>{totalGlobal?.cantidadFemenino}</td>
          </tr>
          <tr>
            <td>Cantidad de Intermedio</td>
            <td>{totalGlobal?.cantidadIntermedio}</td>
          </tr>
          <tr>
            <td>Pediátrico de 0 a 15 años</td>
            <td>{totalGlobal?.cantidaPediatrico}</td>
            <td rowspan="3">
              {totalGlobal?.cantidadAdultoMayor +
                totalGlobal?.cantidadAdultoMayor +
                totalGlobal?.cantidadAdultos}
            </td>
          </tr>
          <tr>
            <td>Adultos de 15 a 60 años</td>
            <td>{totalGlobal?.cantidadAdultos}</td>
          </tr>
          <tr>
            <td>Adulto Mayor más de 60 años</td>
            <td>{totalGlobal?.cantidadAdultoMayor}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

if (document.getElementById("tablesalud")) {
  ReactDOM.render(<Tablesalud />, document.getElementById("tablesalud"));
}
