
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
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png"
import { useParams } from "react-router-dom";
import constants from "../utils/constants";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function DetailMejoramientoUrbano() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idMUrbano } = useParams();
  const [mejoramiento, setMejoramiento] = useState([])
  const data = mejoramiento;

  const fetchMejoramiento = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"mejoramientourbano/"+idMUrbano, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    
    const result = await response.json();
    setMejoramiento(result);
  };

  useEffect(() => {
    fetchMejoramiento();
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
                  Responsable: {data?.usuariosRespondMej?.nombre} {data?.usuariosRespondMej?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Teléfono: {data?.usuariosRespondMej?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Correo: {data?.usuariosRespondMej?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondMej?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Mejoramiento Urbano</h5>
        </div>
        <div className="col-6">Responsable: {data?.usuariosRespondMej?.nombre} {data?.usuariosRespondMej?.apellido}</div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Concepto</th>
            <th scope="col">cantidad en Toneladas</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Toneladas de Basura Recolectadas</td>
            <td>{data.cantidadToneladasBasuraReco}</td>
            <td>{data.msjToneladasBasuraReco}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Operativo Mejoramiento (Barrido manual y mecánico)</td>
            <td>{data.cantidadOperativoMejBarridoManualMecanico}</td>
            <td>{data.msjOperativoMejBarridoManualMecanico}</td>
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
            <td>Limpieza en Av. Américas (Día 12)</td>
            <td>{data.LimpiezaAmericasDia12}</td>
            <td>{data.msjLimpiezaAmericasDia12}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Limpieza en Av. Ávila Camacho (Día 12)</td>
            <td>{data.LimpiezaAvilaCamDia12}</td>
            <td>{data.msjLimpiezaAvilaCamDia12}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Limpieza en Av. Laureles (Día 12)</td>
            <td>{data.LimpiezaLaurelesDia12}</td>
            <td>{data.msjLimpiezaLaurelesDia12}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Limpieza en Av. Patria (Día 12)</td>
            <td>{data.LimpiezaPatriaDia12}</td>
            <td>{data.msjLimpiezaPatriaDia12}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Limpieza en Av. Aurelio Ortega (Día 12)</td>
            <td>{data.LimpiezaAurelioOrtegaDia12}</td>
            <td>{data.msjLimpiezaAurelioOrtegaDia12}</td>
          </tr>

        </tbody>
      </table>

    </DashboardContent>
  );
}

export default DetailMejoramientoUrbano;

if (document.getElementById("detailMejoramientoUrbano")) {
  ReactDOM.render(
    <DetailMejoramientoUrbano />,
    document.getElementById("detailMejoramientoUrbano")
  );
}
