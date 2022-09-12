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

function DetailAguaDrenaje() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }

  const { idADrenaje } = useParams();
  const [agua, setAgua] = useState([]);
  const data = agua;

  const fetchAgua = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "adrenaje/" + idADrenaje, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setAgua(result);
  };

  useEffect(() => {
    fetchAgua();
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
          <h5 className="col">Agua y Drenaje</h5>
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
            <th scope="col">Total</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Baños Instalados</td>
            <td>{data.cantidadBanosInstalados}</td>
            <td>{data.msjBanosInstalados}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Usuarios</td>
            <td>{data.cantidadUsuarios}</td>
            <td>{data.msjUsuarios}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Estimación de Usarios</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Punto 1 Calle Javier Mina y Calle Matamoros</td>
            <td>{data.P1JMinaMatamoros}</td>
            <td>{data.cantidadEstimadaP1JMinaMatamoros}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 2 Calle Eva Briseño y Calle Sofía Camarena</td>
            <td>{data.P2EvaSofia}</td>
            <td>{data.cantidadEstimadaP2EvaSofia}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 3 Calle 5 de Mayo y Calle Sofía Camarena</td>
            <td>{data.P3CincoMayoSofia}</td>
            <td>{data.cantidadEstimadaP3CincoMayoSofia}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 4 Calle Mixtón y Av. Américas</td>
            <td>{data.P4MixtonAmericas}</td>
            <td>{data.cantidadEstimadaP4MixtonAmericas}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 5 Av. Américas y Esparta</td>
            <td>{data.P5AmericasEsparta}</td>
            <td>{data.cantidadEstimadaP5AmericasEsparta}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 6 Av. Américas y Av. Patria</td>
            <td>{data.P6AmericasPatria}</td>
            <td>{data.cantidadEstimadaP6AmericasPatria}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 7 Av. Ávila Camacho y Av. Santa Elena</td>
            <td>{data.P7AvilaSantaElena}</td>
            <td>{data.cantidadEstimadaP7AvilaSantaElena}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 8 Av. Ávila Camacho y Av. Patria</td>
            <td>{data.P8AvilaPatria}</td>
            <td>{data.cantidadEstimadaP8AvilaPatria}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 9 Av. Av. Hidalgo y Av. Laureles/Juan Pablo II</td>
            <td>{data.P9HidalgoLauralesJPabloii}</td>
            <td>{data.cantidadEstimadaP9HidalgoLauralesJPabloii}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 10 Calle Emilio Carranza y Av. Laureles</td>
            <td>{data.P10EmilioLaureles}</td>
            <td>{data.cantidadEstimadaP10EmilioLaureles}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 11 Calle Sarcófago y Av. Laureles/Juan Pablo II</td>
            <td>{data.P11SarcofagoLaurelesJPabloii}</td>
            <td>{data.cantidadEstimadaP11SarcofagoLaurelesJPabloii}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailAguaDrenaje;

if (document.getElementById("detailAguaDrenaje")) {
  ReactDOM.render(
    <DetailAguaDrenaje />,
    document.getElementById("detailAguaDrenaje")
  );
}
