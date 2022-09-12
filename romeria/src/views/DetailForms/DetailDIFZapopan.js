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

function DetailDIFZapopan() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idPreguntasDif } = useParams();
  const [dif, setDif] = useState([]);
  const data = dif;

  const sumaPersonasExtr =
    data.cantidadMenores18 +
    data.cantidadAdultos18a59 +
    data.cantidadAdultosMay60 +
    data.cantidadAdDiscapacitados;

  const fetchDif = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dif/" + idPreguntasDif, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setDif(result);
  };

  useEffect(() => {
    fetchDif();
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
                  Responsable: {data?.usuariosrespondDif?.nombre}{" "}
                  {data?.usuariosrespondDif?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosrespondDif?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosrespondDif?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosrespondDif?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">DIF Zapopan</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosrespondDif?.nombre}
          {data?.usuariosrespondDif?.apellido}
        </div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Personas Extraviadas</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Menores de 18 años</td>
            <td>{data.cantidadMenores18}</td>
            <td>{data.msjMenores18}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Adultos de 18 años a 59 años</td>
            <td>{data.cantidadAdultos18a59}</td>
            <td>{data.msjAdultos18a59}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Adultos Mayores de 60 años</td>
            <td>{data.cantidadAdultosMay60}</td>
            <td>{data.msjAdultosMay60}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Personas con discapacidad</td>
            <td>{data.cantidadAdDiscapacitados}</td>
            <td>{data.msjAdDiscapacitados}</td>
          </tr>
        </tbody>
      </table>

      <div className="container total-health row">
        <div className="col-10 font-sizeDetails">
          Total de Personas Extraviadas
        </div>
        <div className="col-2"> {sumaPersonasExtr}</div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto de Tarea</th>
            <th scope="col">OK</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>
              Instalación del módulo "Personas Extraviadas" (Presidencia
              Municipal)
            </td>
            <td>{data.conceptoInstModPresiMun}</td>
            <td>{data.msjInstModPresiMun}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Instalación del módulo "Personas Extraviadas" en Ávila Camacho y
              Av. Laureles
            </td>
            <td>{data.conceptoInstModAvilaLaureles}</td>
            <td>{data.msjInstModAvilaLaureles}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Instalación del módulo "Personas Extraviadas" en Américas y
              Esparta
            </td>
            <td>{data.conceptoInstModPerExtravAmericaEsparta}</td>
            <td>{data.msjInstModPerExtravAmericaEsparta}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Instalación del módulo "Personas Extraviadas" en Américas y
              Obelisco
            </td>
            <td>{data.conceptoInstModPerExtravAmericaObelisco}</td>
            <td>{data.msjInstModPerExtravAmericaObelisco}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailDIFZapopan;

if (document.getElementById("detailDIFZapopan")) {
  ReactDOM.render(
    <DetailDIFZapopan />,
    document.getElementById("detailDIFZapopan")
  );
}
