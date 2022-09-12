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

function DetailHealthServices() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idPreguntasSalud } = useParams();
  const [salud, setSalud] = useState([]);
  const data = salud;

  /**CONSULTAR Formulario */
  const fetchSalud = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "salud/" + idPreguntasSalud, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSalud(result);
  };

  useEffect(() => {
    fetchSalud();
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
                  Responsable: {data?.usuariosRespond?.nombre}{" "}
                  {data?.usuariosRespond?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespond?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespond?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespond?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Servicios de Salud</h5>
        </div>

        <div className="col-6">
          Responsable: {data?.usuariosRespond?.nombre}{" "}
          {data?.usuariosRespond?.apellido}
        </div>
      </div>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Tipo de Atención</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciónes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Deshidratación</td>
            <td>{data.cantidadDeshidratacion}</td>
            <td>{data.msjDeshidratacion}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Hipertensión</td>
            <td>{data.cantidadHipertension}</td>
            <td>{data.msjHipertension}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Infarto al miocardio</td>
            <td>{data.cantidadInfartoMiocardio}</td>
            <td>{data.msjInfartoMiocardio}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Convulsivos</td>
            <td>{data.cantidadConvulsivos}</td>
            <td>{data.msjConvulsivos}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Enf. Respiratoria</td>
            <td>{data.cantidadEnfRespiratoria}</td>
            <td>{data.msjEnfRespiratoria}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Enf. Gatrointestinal</td>
            <td>{data.cantidadEnfGatrointestinal}</td>
            <td>{data.msjEnfGatrointestinal}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Febriles/Exantemati</td>
            <td>{data.cantidadFebrilesExa}</td>
            <td>{data.msjFebrilesExa}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Cefaleas</td>
            <td>{data.cantidadCefaleas}</td>
            <td>{data.msjCefaleas}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Diabético</td>
            <td>{data.cantidadDiabetico}</td>
            <td>{data.msjDiabetico}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Intoxicación</td>
            <td>{data.cantidadIntoxicacion}</td>
            <td>{data.msjIntoxicacion}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Caídas</td>
            <td>{data.cantidadCaidas}</td>
            <td>{data.msjCaidas}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Quemaduras</td>
            <td>{data.cantidadQuemaduras}</td>
            <td>{data.msjQuemaduras}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Atropellado</td>
            <td>{data.cantidadAtropellado}</td>
            <td>{data.msjAtropellado}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Choque</td>
            <td>{data.cantidadChoque}</td>
            <td>{data.msjChoque}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Volcadura</td>
            <td>{data.cantidadVolcadura}</td>
            <td>{data.msjVolcadura}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Muscoloesquelético</td>
            <td>{data.cantidadMuscoloesqueletico}</td>
            <td>{data.msjMuscoloesqueletico}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Arma blanca</td>
            <td>{data.cantidadArmablanca}</td>
            <td>{data.msjArmablanca}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Arma de fuego</td>
            <td>{data.cantidadArmadefuego}</td>
            <td>{data.msjArmadefuego}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Otros</td>
            <td>{data.cantidadOtros}</td>
            <td>{data.msjOtros}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Personas Atendidas</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciónes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Pediátrico de 0 a 15 años</td>
            <td>{data.cantidaPediatrico}</td>
            <td>{data.msjPediatrico}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Adultos de 15 a 60 años</td>
            <td>{data.cantidadAdultos}</td>
            <td>{data.msjAdultos}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Adulto Mayor más de 60 años</td>
            <td>{data.cantidadAdultoMayor}</td>
            <td>{data.msjAdultoMayor}</td>
          </tr>
        </tbody>
      </table>

      <table className="table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Sexo</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Observaciónes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Femenino</td>
            <td>{data.cantidadFemenino}</td>
            <td>{data.msjFemenino}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Masculino</td>
            <td>{data.cantidadMasculino}</td>
            <td>{data.msjMasculino}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Intermedio</td>
            <td>{data.cantidadIntermedio}</td>
            <td>{data.msjIntermedio}</td>
          </tr>
        </tbody>
      </table>

      <table className="table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Cantidad de Pacientes Transladados</th>
            <th scope="col">Observaciónes</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>15</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <div className="container total-health row">
        <div className="col-10 font-sizeDetails">
          Total de Personas Atendidas
        </div>
        <div className="col-2"> 15</div>
      </div>

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
            <td>Punto 1 Calle San Jorge y Av. Ávila Camacho</td>
            <td>{data.oKPunto1}</td>
            <td>{data.msjPunto1}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 2 Calle Santa Elena y Av. Ávila Camacho</td>
            <td>{data.oKPunto2}</td>
            <td>{data.msjPunto2}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 3 Calle Esparta y Av. Américas</td>
            <td>{data.oKPunto3}</td>
            <td>{data.msjPunto3}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>
              Punto 4 Calle Miguel León Portilla (antes Ávila Camacho) y Av.
              Patria
            </td>
            <td>{data.oKPunto4}</td>
            <td>{data.msjPunto4}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 5 Atrio Basílica de Zapopan</td>
            <td>{data.oKPunto5}</td>
            <td>{data.msjPunto5}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Punto 6 Kiosco Plaza de las Américas Juan Pablo II</td>
            <td>{data.oKPunto6}</td>
            <td>{data.msjPunto6}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailHealthServices;

if (document.getElementById("detailHealthServices")) {
  ReactDOM.render(
    <DetailHealthServices />,
    document.getElementById("detailHealthServices")
  );
}
