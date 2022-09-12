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

function DetailProteccionCivilBomberos() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idPCivil } = useParams();
  const [proteccion, setInnovacion] = useState([])
  const data = proteccion;

  const fetchProteccion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api+"pcivil/"+idPCivil, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    
    const result = await response.json();
    setInnovacion(result);
  };

  useEffect(() => {
    fetchProteccion();
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
                  Responsable: {data?.usuariosRespondPcivil?.nombre} {data?.usuariosRespondPcivil?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Teléfono: {data?.usuariosRespondPcivil?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                Correo: {data?.usuariosRespondPcivil?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondPcivil?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Protección Cívil y Bomberos</h5>
        </div>
        <div className="col-6">Responsable: {data?.usuariosRespondPcivil?.nombre} {data?.usuariosRespondPcivil?.apellido}</div>
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
            <td>Comercio que SI cumplió las normas</td>
            <td>{data.cantidadComSiCumplioNormas}</td>
            <td>{data.msjComSiCumplioNormas}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Comercio que NO cumplió las normas</td>
            <td>{data.cantidadComNoCumplioNormas}</td>
            <td>{data.msjComNoCumplioNormas}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Detecciones y clausura sobre uso de gas LP</td>
            <td>{data.cantidadDeteccionClausuraGasLp}</td>
            <td>{data.msjDeteccionClausuraGasLp}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Comerciantes inspeccionados</td>
            <td>{data.cantidadComerInspecc}</td>
            <td>{data.msjComerInspecc}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Personas atendidas en módulos</td>
            <td>{data.cantidadPersonasAtendModu}</td>
            <td>{data.msjPersonasAtendModu}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Servicios intinerantes realizados</td>
            <td>{data.cantidadServIntinRealizados}</td>
            <td>{data.msjServIntinRealizados}</td>
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
            <td>Módulo 1 Plaza Caudillos</td>
            <td>{data.Mod1PlzCaudillos}</td>
            <td>{data.msjMod1PlzCaudillos}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 2 Andador 20 de noviembre y Av. Américas (Arco)</td>
            <td>{data.Mod2AndadorNovAmericas}</td>
            <td>{data.msjMod2AndadorNovAmericas}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 3 Av. Américas y Mixtón</td>
            <td>{data.Mod3AmericasMixton}</td>
            <td>{data.msjMod3AmericasMixton}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 4 Av. Américas y Romanos</td>
            <td>{data.Mod4AmericasRomanos}</td>
            <td>{data.msjMod4AmericasRomanos}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 5 Av. Américas y Av. Patria</td>
            <td>{data.Mod5AmericasPatria}</td>
            <td>{data.msjMod5AmericasPatria}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 6 Av. Ávila Camacho y Obelisco</td>
            <td>{data.Mod66AvilaObelisco}</td>
            <td>{data.msjMod66AvilaObelisco}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Módulo 7 Av. Ávila Camacho y Jacarandas</td>
            <td>{data.Mod7AvilaJacarandas}</td>
            <td>{data.msjMod7AvilaJacarandas}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Motobomba (Hidalgo y Emiliano Zapata)</td>
            <td>{data.MotobombaHidalgoZapata}</td>
            <td>{data.msjMotobombaHidalgoZapata}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Pipa de agua (Av. Camacho y Av. Patria)</td>
            <td>{data.PipaAguaCamachoPatria}</td>
            <td>{data.msjPipaAguaCamachoPatria}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Pipa de agua (Av. Laureles y Juan Manuel)</td>
            <td>{data.PipaAguaLaurelesJManuel}</td>
            <td>{data.msjPipaAguaLaurelesJManuel}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Instalación de módulo de grupo USAR, (Av. Patria y calle Miguel León Portilla antes Ávila Camacho)</td>
            <td>{data.InstModGrpUSAR}</td>
            <td>{data.msjInstModGrpUSAR}</td>
          </tr>
        </tbody>
      </table>

    </DashboardContent>
  );
}

export default DetailProteccionCivilBomberos;

if (document.getElementById("detailProteccionCivilBomberos")) {
  ReactDOM.render(
    <DetailProteccionCivilBomberos />,
    document.getElementById("detailProteccionCivilBomberos")
  );
}

