

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

function DetailRecaudadora() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idRecaudadora } = useParams();
  const [recaudadora, setRecaudadora] = useState([])
  const data = recaudadora;

  const fetchReca = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"recaudadora/"+idRecaudadora, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    
    const result = await response.json();
    setRecaudadora(result);
  };

  useEffect(() => {
    fetchReca();
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
                  Responsable: {data?.usuariosRespondReca?.nombre} {data?.usuariosRespondReca?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Teléfono: {data?.usuariosRespondReca?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Correo: {data?.usuariosRespondReca?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondReca?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

     
      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Recaudadora 05</h5>
        </div>
        <div className="col-6">Responsable: {data?.usuariosRespondReca?.nombre} {data?.usuariosRespondReca?.apellido}</div>
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
            <td>Monto Recaudado</td>
            <td>{data.cantidadRecaudado}</td>
            <td>{data.msjMontoRecaudado}</td>
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
            <td></td>
            <td>Cobro Zona 1 - comercio</td>
            <td>{data.CobroZona1}</td>
            <td>{data.msjCobroZona1}</td>
          </tr>
          <tr>
            <td></td>
            <td>Cobro Zona 2 - comercio</td>
            <td>{data.CobroZona2}</td>
            <td>{data.msjCobroZona2}</td>
          </tr>
          <tr>
            <td></td>
            <td >Cobro Zona 3 - comercio</td>
            <td>{data.CobroZona3}</td>
            <td>{data.msjCobroZona3}</td>
          </tr>
          <tr>
            <td></td>
            <td>Cobro Zona 4 - Juegos Mecánicos</td>
            <td>{data.CobroZona4JMecanicos}</td>
            <td>{data.msjCobroZona4JMecanicos}</td>
          </tr>
          <tr>
            <td></td>
            <td>Cobro Zona de amortiguamiento</td>
            <td>{data.CobroZonaAmortiguamiento}</td>
            <td>{data.msjZonaAmortiguamiento}</td>
          </tr>
        </tbody>
      </table>

    </DashboardContent>
  );
}

export default DetailRecaudadora;

if (document.getElementById("detailRecaudadora")) {
  ReactDOM.render(
    <DetailRecaudadora />,
    document.getElementById("detailRecaudadora")
  );
}
