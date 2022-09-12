import * as React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DashboardContent from "../Dashboard";
import constants from "../utils/constants";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png";
import { useParams } from "react-router-dom";
import "../../styles/styles.css";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function DetailEstrategicoComunicacion() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idConservacion } = useParams();

  const [estrategico, setEstrategico] = useState([]);
  const data = estrategico;

  const fetchEstrategico = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      constants.api + "analisisestrategico/" + idConservacion,
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
    setEstrategico(result);
  };

  useEffect(() => {
    fetchEstrategico();
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
                  Responsable: {data?.usuariosRespondAna?.nombre}{" "}
                  {data?.usuariosRespondAna?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondAna?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondAna?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondAna?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Análisis Estratégico y Comunicación</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondAna?.nombre}{" "}
          {data?.usuariosRespondAna?.apellido}
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
            <td>Medios de Comunicación Atendidos</td>
            <td>{data.cantidadMediosComuAendidos}</td>
            <td>{data.msjMediosComuAendidos}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Cantidad de Medios en Cobertua</td>
            <td>{data.cantidadMediosCobertura}</td>
            <td>{data.msjMediosCobertura}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Atencion en logística</td>
            <td>{data.cantidadAtencionLogistica}</td>
            <td>{data.msjAtencionLogistica}</td>
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
            <td>Sala de Prensa</td>
            <td>{data.SalaPrensaS}</td>
            <td>{data.msjSalaPrensa}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Cierre Sala de Prensa</td>
            <td>{data.CierreSalaPrensa}</td>
            <td>{data.msjCierreSalaPrensa}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Instalación de Medios Plaza Américas</td>
            <td>{data.InstalacionMediosPAmericas}</td>
            <td>{data.msjInstalacionMediosPAmericas}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Instalación de Medios Unidad Basilica</td>
            <td>{data.InstalacionMediosUBasilica}</td>
            <td>{data.msjInstalacionMediosUBasilica}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Instalación de medios Eva Briseño</td>
            <td>{data.InstalacionMediosEvaBriseno}</td>
            <td>{data.msjInstalacionMediosEvaBriseno}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Corte Informativo 11 de Octubre</td>
            <td>{data.CorteInfo11Oct}</td>
            <td>{data.msjCorteInfo11Oct}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Corte Informativo de 12 de Octubre</td>
            <td>{data.CorteInfo12Oct}</td>
            <td>{data.msjCorteInfo12Oct}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Rueda de prensa matutina 12 de Octubre</td>
            <td>{data.RuedaPMat12oct}</td>
            <td>{data.msjRuedaPMat12oct}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Rueda de prensa final 12 de Octubre</td>
            <td>{data.RuedaPFin12oct}</td>
            <td>{data.msjRuedaPFin12oct}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Instalación de comedor para reporteros</td>
            <td>{data.InstaComedorReporteros}</td>
            <td>{data.msjInstaComedorReporteros}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailEstrategicoComunicacion;

if (document.getElementById("detailEstrategicoComunicacion")) {
  ReactDOM.render(
    <DetailEstrategicoComunicacion />,
    document.getElementById("detailEstrategicoComunicacion")
  );
}
