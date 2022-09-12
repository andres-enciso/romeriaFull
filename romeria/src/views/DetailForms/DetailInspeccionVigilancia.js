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

function DetailInspeccionVigilancia() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idInspeccionVig } = useParams();
  const [inspeccion, setInspeccion] = useState([]);
  const data = inspeccion;

  const totalClausuras =
    data.cantidadClausurasComEstablecido +
    data.cantidadClausuraLeySeca +
    data.cantidadClausurasJMecanicos +
    data.cantidadClausuraInfraccDiversas;

    const totalDeco =data.cantidadActasConDecomisoZona + data.cantidadActasConDecomisoRutaEvac;
    const fetchnspeccion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      constants.api + "inspeccionvig/" + idInspeccionVig,
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
    setInspeccion(result);
  };

  useEffect(() => {
    fetchnspeccion();
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
                  Responsable: {data?.usuariosRespondVig?.nombre}{" "}
                  {data?.usuariosRespondVig?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondVig?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondVig?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondVig?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Inspección y Vigilancia</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondVig?.nombre}{" "}
          {data?.usuariosRespondVig?.apellido}
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
            <td>Actas con decomisos en Zona</td>
            <td>{data.cantidadActasConDecomisoZona}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Actas con decomisos en rutas de evacuación</td>
            <td>{data.cantidadActasConDecomisoRutaEvac}</td>
            <td>{data.msjActasDecomiso}</td>
          </tr>
        </tbody>
      </table>

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
            <td>Actas con un comercio establecido</td>
            <td>{data.cantidadActasComercioEstab}</td>
            <td>{data.msjActasComercioEstab}</td>
          </tr>
        </tbody>
      </table>

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
            <td>Comercio establecido</td>
            <td>{data.cantidadClausurasComEstablecido}</td>
            <td>{data.msjClausurasComEstablecido}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Clausura - Ley Seca</td>
            <td>{data.cantidadClausuraLeySeca}</td>
            <td>{data.msjClausuraLeySeca}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Clausura - Juego Mecanicos</td>
            <td>{data.cantidadClausurasJMecanicos}</td>
            <td>{data.msjClausurasJMecanicos}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Clausura - LInfracciones diversas</td>
            <td>{data.cantidadClausuraInfraccDiversas}</td>
            <td>{data.msjClausuraInfraccDiversas}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">Toltal</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Actas Comercio establecido</td>
            <td>{data.cantidadActasComercioEstab}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Clausuras</td>
            <td>{totalClausuras}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Actas con Decomisos</td>
            <td>{totalDeco}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailInspeccionVigilancia;

if (document.getElementById("detailInspeccionVigilancia")) {
  ReactDOM.render(
    <DetailInspeccionVigilancia />,
    document.getElementById("detailInspeccionVigilancia")
  );
}
