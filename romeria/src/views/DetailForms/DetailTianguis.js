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

function DetailTianguis() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idTianguis } = useParams();
  const [tianguis, setTianguis] = useState([]);
  const data = tianguis;

  const fetchTianguis = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "tianguis/" + idTianguis, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setTianguis(result);
  };

  useEffect(() => {
    fetchTianguis();
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
                  Responsable: {data?.usuariosRespondTia?.nombre}{" "}
                  {data?.usuariosRespondTia?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondTia?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondTia?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondTia?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Tianguis</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondTia?.nombre}{" "}
          {data?.usuariosRespondTia?.apellido}
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
            <td>Cantidad de comerciantes instalados</td>
            <td>{data.cantidadComerciantesInst}</td>
            <td>{data.msjComerciantesInst}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Comercio</td>
            <td>{data.cantidadComercio}</td>
            <td>{data.msjComercio}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Juegos</td>
            <td>{data.cantidadJuegos}</td>
            <td>{data.msjJuegos}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Concepto</th>
            <th scope="col">Calles</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Zona 1 - comercio</td>
            <td>{data.callesZona1}</td>
          </tr>
          <tr>
            <td>Zona 2 - comercio</td>
            <td>{data.callesZona2}</td>
          </tr>
          <tr>
            <td>Zona 3 - comercio</td>
            <td>{data.callesZona3}</td>
          </tr>
          <tr>
            <td>Zona 4 - Juegos Mecánicos</td>
            <td>{data.callesZona4}</td>
          </tr>
          <tr>
            <td>Zona de amortiguamiento</td>
            <td>{data.zonaAmortiguamiento}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailTianguis;

if (document.getElementById("detailTianguis")) {
  ReactDOM.render(
    <DetailTianguis />,
    document.getElementById("detailTianguis")
  );
}
