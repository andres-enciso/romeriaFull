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

function DetailConservacionInmuebles() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idConservacion } = useParams();
  const [inmuebles, setInmuebles] = useState([])
  const data = inmuebles;

  const fetchInmuebles = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"conservacion/"+idConservacion, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    
    const result = await response.json();
    setInmuebles(result);
  };

  useEffect(() => {
    fetchInmuebles();
  },[]);

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
              <Img
                sx={{ width: 1 }}
                alt="complex"
                src={LogoInnovacion}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Responsable: {data?.usuariosRespondConserv?.nombre} {data?.usuariosRespondConserv?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Teléfono: {data?.usuariosRespondConserv?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Correo: {data?.usuariosRespondConserv?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondConserv?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Conservación de Inmuebles</h5>
        </div>
        <div className="col-6">Responsable: {data?.usuariosRespondConserv?.nombre} {data?.usuariosRespondConserv?.apellido}</div>
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
            <td>Atenciones brindadas en la Unidad Basílica</td>
            <td>{data.cantidadAtencionUnidadBasilica}</td>
            <td>{data.msjAtencionUnidadBasilica}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Atenciones brindadas en la Presidencia Municipal</td>
            <td>{data.cantidadAtencionPresidenciaMun}</td>
            <td>{data.msjAtencionPresidenciaMun}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Atenciones brindadas al Centro de Operaciones Zapopan (C5)</td>
            <td>{data.cantidadAtencionCOZ}</td>
            <td>{data.msjAtencionCOZ}</td>
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
            <td>Apoyo al área de danzantes</td>
            <td>{data.ApoyoDanzantes}</td>
            <td>{data.msjApoyoDanzantes}</td>
          </tr>
        </tbody>
      </table>

    </DashboardContent>
  );
}

export default DetailConservacionInmuebles;

if (document.getElementById("detailConservacionInmuebles")) {
  ReactDOM.render(
    <DetailConservacionInmuebles />,
    document.getElementById("detailConservacionInmuebles")
  );
}
