import * as React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DashboardContent from "../Dashboard";
import "../../styles/styles.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png";
import { useParams } from "react-router-dom";
import constants from "../utils/constants";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function DetailSeguridadPublica() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idPreguntasSPublica } = useParams();
  const [seguridadPublica, setSeguridadPublica] = useState([]);
  const data = seguridadPublica;

  const sumaTotal =
    data.cantidadAdultosOtroServicio +
    data.cantidadMenoresOtroServicio +
    data.cantidadMenoresFaltaAdmin +
    data.cantidadAdultosFaltaAdmin +
    data.cantidadMenoresAlterarOrden +
    data.cantidadAdultosAlterarOrden +
    data.cantidadAdultosEnervantes +
    data.cantidadAdultosBebidasEmbriagantes +
    data.cantidadMenoresBebidasEmbriagantes +
    data.cantidadMenoresEnervantes +
    data.cantidadAdultosArmaFuego +
    data.cantidadMenoresArmaFuego;

  const fetchSegPublica = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      constants.api + "segPublica/" + idPreguntasSPublica,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const result = await response.json();
    setSeguridadPublica(result);
  };
  useEffect(() => {
    fetchSegPublica();
  }, []);

  return (
    <DashboardContent>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 800,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img sx={{ width: 1 }} alt="complex" src={LogoInnovacion} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Responsable: {data?.usuariosRespondPublica?.nombre}{" "}
                  {data?.usuariosRespondPublica?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondPublica?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondPublica?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondPublica?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Seguridad Pública</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondPublica?.nombre}{" "}
          {data?.usuariosRespondPublica?.apellido}
        </div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Detenidos por Posesión de Enervantes</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosEnervantes}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresEnervantes}</td>
            <td>msjEnervantes</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Detenidos por posesión de arma de fuego</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosArmaFuego}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresArmaFuego}</td>
            <td>{data.msjArmaFuego}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Detenidos por consumo de bebidas embriagantes</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosBebidasEmbriagantes}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresBebidasEmbriagantes}</td>
            <td>{data.msjBebidasEmbriagantes}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Detenidos por alterar el orden público</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosAlterarOrden}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresAlterarOrden}</td>
            <td>{data.msjAlterarOrden}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Detenidos por faltas administrativas</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosFaltaAdmin}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresFaltaAdmin}</td>
            <td>{data.msjFaltaAdmin}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Otros Servicios</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Adultos</td>
            <td>{data.cantidadAdultosOtroServicio}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Menores</td>
            <td>{data.cantidadMenoresOtroServicio}</td>
            <td>{data.msjOtroServicio}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Cantidad Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Detenidos por posesión de enervantes</td>
            <td>
              {data.cantidadAdultosEnervantes + data.cantidadMenoresEnervantes}
            </td>
          </tr>
          <tr>
            <td>Detenidos por posesión de arma de fuego</td>
            <td>
              {data.cantidadAdultosArmaFuego + data.cantidadMenoresArmaFuego}
            </td>
          </tr>
          <tr>
            <td>Detenidos por consumo de bebidas embriagantes</td>
            <td>
              {data.cantidadAdultosBebidasEmbriagantes +
                data.cantidadMenoresBebidasEmbriagantes}
            </td>
          </tr>
          <tr>
            <td>Detenidos por alterar el orden público</td>
            <td>
              {data.cantidadMenoresAlterarOrden +
                data.cantidadAdultosAlterarOrden}
            </td>
          </tr>
          <tr>
            <td>Detenidos por faltas administrativas</td>
            <td>
              {data.cantidadMenoresFaltaAdmin + data.cantidadAdultosFaltaAdmin}
            </td>
          </tr>
          <tr>
            <td>Otros servicios</td>
            <td>
              {data.cantidadAdultosOtroServicio +
                data.cantidadMenoresOtroServicio}
            </td>
          </tr>
          <tr>
            <td>Detenidos Totales</td>
            <td>{sumaTotal}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailSeguridadPublica;

if (document.getElementById("detailSeguridadPublica")) {
  ReactDOM.render(
    <DetailSeguridadPublica />,
    document.getElementById("detailSeguridadPublica")
  );
}
