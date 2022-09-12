import { useState, useEffect } from "react";
import * as React from "react";
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

function DetailInnovacionGub() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idInnovacion } = useParams();
  const [innovacion, setInnovacion] = useState([]);
  const data = innovacion;

  const fetchInmuebles = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "innovacion/" + idInnovacion, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setInnovacion(result);
  };

  useEffect(() => {
    fetchInmuebles();
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
                  Responsable: {data?.usuariosRespondInnov?.nombre}{" "}
                  {data?.usuariosRespondInnov?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondInnov?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondInnov?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondInnov?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Innovación Gubernamental</h5>
        </div>
        <div className="col-6">Reporte: 1510</div>
        <div className="col-6">
          Responsable:{data?.usuariosRespondInnov?.nombre}{" "}
          {data?.usuariosRespondInnov?.apellido}
        </div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Cantidad de servicios realizados</td>
            <td>{data.cantidadServiciosRealizados}</td>
            <td>{data.msjServiciosRealizados}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Atención a reportes del Centro de Mando - Coordinación General
              (UB)
            </td>
            <td>{data.cantidadAtencionRepoCentroMando}</td>
            <td>{data.msjAtencionRepoCentroMando}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Atención a reportes del Sala de Prensa (UB)</td>
            <td>{data.cantidadAtencionRepoSalaPrensa}</td>
            <td>{data.msjAtencionRepoSalaPrensa}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Atención a reportes del Centro de Operaciones (C5)</td>
            <td>{data.cantidadAtencionCentOperaciones}</td>
            <td>{data.msjAtencionCentOperaciones}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Habilitación de Centro de Mando Coordinación General (UB)</td>
            <td>{data.HabCentroMandoGnrl}</td>
            <td>{data.msjHabCentroMandoGnrl}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Habilitación Sala de Prensa (UB)</td>
            <td>{data.HabSalaPrensa}</td>
            <td>{data.msjHabSalaPrensa}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Habilitación Centro de Operaciones Zapopan (C5)</td>
            <td>{data.HabCentroOpZpn}</td>
            <td>{data.msjHabCentroOpZpn}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailInnovacionGub;

if (document.getElementById("detailInnovacionGub")) {
  ReactDOM.render(
    <DetailInnovacionGub />,
    document.getElementById("detailInnovacionGub")
  );
}
