import { useState, useEffect } from "react";
import * as React from "react";
import ReactDOM from "react-dom";
import DashboardContent from "../Dashboard";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png";
import { useParams } from "react-router-dom";
import constants from "../utils/constants";
import "../../styles/styles.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function DetailAlumbrado() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idAlumbrado } = useParams();
  const [alumbrado, setAlumbrado] = useState([]);
  const data = alumbrado;

  const fetchAlumbrado = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "alumbrado/" + idAlumbrado, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setAlumbrado(result);
  };

  useEffect(() => {
    fetchAlumbrado();
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
                  Responsable: {data?.usuariosRespondDren?.nombre}{" "}
                  {data?.usuariosRespondDren?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondDren?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondDren?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondDren?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Alumbrado Público</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondDren?.nombre}{" "}
          {data?.usuariosRespondDren?.apellido}
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
            <td>Revisiones realizadas a comerciantes</td>
            <td>{data.cantidadRevisionRealizadaComerciantes}</td>
            <td>{data.msjRevisionRealizadaComerciantes}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Módulos Conectados</td>
            <td>{data.cantidadModConectados}</td>
            <td>{data.msjModConectados}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailAlumbrado;

if (document.getElementById("detailAlumbrado")) {
  ReactDOM.render(
    <DetailAlumbrado />,
    document.getElementById("detailAlumbrado")
  );
}
