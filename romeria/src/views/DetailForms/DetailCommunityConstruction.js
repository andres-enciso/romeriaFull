import * as React from "react";
import ReactDOM from "react-dom";
import DashboardContent from "../Dashboard";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import constants from "../utils/constants";
import "../../styles/styles.css";

var moment = require("moment");

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function DetailCommunityConstruction() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idConstruccion } = useParams();
  const [construccion, setConstruccion] = useState([]);
  const data = construccion;

  const fetchMejoramiento = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      constants.api + "construccion/" + idConstruccion,
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
    setConstruccion(result);
  };

  useEffect(() => {
    fetchMejoramiento();
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
                  Responsable: {data?.usuariosrespondconstr?.nombre}{" "}
                  {data?.usuariosrespondconstr?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosrespondconstr?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosrespondconstr?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosrespondconstr?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Construcción de Comunidad</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosrespondconstr?.nombre}{" "}
          {data?.usuariosrespondconstr?.apellido}
        </div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Inicio de Tarea</th>
            <th scope="col">Fin de Tarea</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Apertura del Centro de Mando de la Coordinación General</td>
            <td>{data.concepto1}</td>
            <td>{moment(data.inicioOperac).format("YYYY-MM-DD HH:mm:ss")}</td>
            <td>{moment(data.cierreOperac).format("YYYY-MM-DD HH:mm:ss")}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Recorrido del C. Presidente Municipal</td>
            <td>{data.concepto2}</td>
            <td>{moment(data.horaIniConto2).format("YYYY-MM-DD HH:mm:ss")}</td>
            <td>{moment(data.horaFinConto2).format("YYYY-MM-DD HH:mm:ss")}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Cierre total de vialidades</td>
            <td>{data.concepto3}</td>
            <td>{moment(data.horarioCierre).format("YYYY-MM-DD HH:mm:ss")}</td>
            <td>
              {moment(data.horarioApertura).format("YYYY-MM-DD HH:mm:ss")}
            </td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Instalación de sillería para Misa de Recepción</td>
            <td>{data.concepto5}</td>
            <td>
              {moment(data.horaInstalacionSiilleria).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
            <td>
              {moment(data.horaDesinstalacionSiilleria).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Horario de Instalación</th>
            <th scope="col">Vallas Instaladas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Instalación de vallas en atrio</td>
            <td>{data.concepto4}</td>
            <td>
              {moment(data.horaInstalacionVallas).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.cantidadVallasIns}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Hora de Instalación</th>
            <th scope="col">Cantidad De Agua entregada</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              Módulo de agua en Av. Américas y Obelisco (Banorte) (Botellas)
            </td>
            <td>{data.concepto6}</td>
            <td>
              {moment(data.horaInstalacionAmericasObelisco).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
            <td>{data.cantidadAguaAmericasObelisco}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Módulo de agua en Av. Américas y Serbia (Botellas)</td>
            <td>{data.concepto14}</td>
            <td>
              {moment(data.horaInstalacionAguaAmericas).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
            <td>{data.cantidadConto14}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Módulo de agua en Av. Hidalgo y Emiliano Zapata (Presidencia)
              (Botellas)
            </td>
            <td>{data.concepto15}</td>
            <td>
              {moment(data.horaInstalacionAguaHidalgo).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
            <td>{data.cantidadConto15}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">OK</th>
            <th scope="col">Hora</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              Hora de arribo Primer Cuartel de Danzantes en Av. Laureles y Av.
              Ávila Camacho
            </td>
            <td>{data.concepto7}</td>
            <td>
              {moment(data.horaArriboPCuartel).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.msjConto7}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Hora de arribo Segundo Cuartel de Danzantes en Av. Laureles y Av.
              Ávila Camacho
            </td>
            <td>{data.concepto8}</td>
            <td>
              {moment(data.horaArriboSCuartel).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.msjConto8}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Hora de arribo Tercer Cuartel de Danzantes en Av. Laureles y Av.
              Ávila Camacho
            </td>
            <td>{data.concepto9}</td>
            <td>
              {moment(data.horaArriboTCuartel).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.msjConto9}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Hora de arribo de la imagen Av. Américas y Av. Patria</td>
            <td>{data.concepto10}</td>
            <td>{data.horaArriboImagenAmePatria}</td>
            <td>{data.msjConto10}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Hora de arribo de arribo de imagen a Basílica</td>
            <td>{data.concepto11}</td>
            <td>
              {moment(data.horaArriboImagenBasilica).format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            </td>
            <td>{data.msjConto11}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Hora de inicio Celebración Eucarística</td>
            <td>{data.concepto12}</td>
            <td>
              {moment(data.horaIniEucaristica).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.msjConto12}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Fin de la Celebración Eucarística</td>
            <td>{data.concepto13}</td>
            <td>
              {moment(data.horaFinEucaristica).format("YYYY-MM-DD HH:mm:ss")}
            </td>
            <td>{data.msjConto13}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailCommunityConstruction;

if (document.getElementById("detailCommunityConstruction")) {
  ReactDOM.render(
    <DetailCommunityConstruction />,
    document.getElementById("detailCommunityConstruction")
  );
}
