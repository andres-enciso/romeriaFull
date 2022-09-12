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

function DetailAseoPublico() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const { idAPublico } = useParams();
  const [aseo, setAseo] = useState([]);
  const data = aseo;

  const fetchAseo = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "aseopublico/" + idAPublico, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setAseo(result);
  };

  useEffect(() => {
    fetchAseo();
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
                  Responsable: {data?.usuariosRespondAseo?.nombre}{" "}
                  {data?.usuariosRespondAseo?.apellido}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Teléfono: {data?.usuariosRespondAseo?.telefono}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Correo: {data?.usuariosRespondAseo?.correo}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                No. Empleado: {data?.usuariosRespondAseo?.noEmpleado}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <div className="row card-titles">
        <div className="row">
          <h5 className="col">Aseo Público</h5>
        </div>
        <div className="col-6">
          Responsable: {data?.usuariosRespondAseo?.nombre}{" "}
          {data?.usuariosRespondAseo?.apellido}
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
            <td>Toneladas de residuos recibidas (Picachos)</td>
            <td>{data.cantidadToneladasRecibidasPicachos}</td>
            <td>{data.msjToneladasRecibidasPicachos}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Toneladas Operativo Aseo (Barrido manual)</td>
            <td>{data.cantidadToneladasOperativoBarridoManual}</td>
            <td>{data.msjToneladasOperativoBarridoManual}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">Contenedores</th>
            <th scope="col">OK</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Américas y Esparta</td>
            <td>{data.ContenedorAmericaEsparta}</td>
            <td>{data.msjContenedorAmericaEsparta}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Aurelio Ortega y Juan Pablo II</td>
            <td>{data.ContenedorAurelioJuanpabloii}</td>
            <td>{data.msjContenedorAurelioJuanpabloii}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Sarcofago y Av. Laureles</td>
            <td>{data.SarcofagoLaureles}</td>
            <td>{data.msjSarcofagoLaureles}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Av. Hidalgo y Emilio Carranza</td>
            <td>{data.HidalgoECarranza}</td>
            <td>{data.msjHidalgoECarranza}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Villa Fantasía</td>
            <td>{data.VillaFantasia}</td>
            <td>{data.msjVillaFantasia}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Av. Laureles e Industria</td>
            <td>{data.LaurelesIndustria}</td>
            <td>{data.msjLaurelesIndustria}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Plaza Patria</td>
            <td>{data.PlazaPatria}</td>
            <td>{data.msjPlazaPatria}</td>
          </tr>
        </tbody>
      </table>

      <table className="table texto-table tables-separation">
        <thead>
          <tr>
            <th scope="col">Clave</th>
            <th scope="col">PET</th>
            <th scope="col">OK</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Américas y Romanos</td>
            <td>{data.PetAmericasRomanos}</td>
            <td>{data.msjPetAmericasRomanos}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Américas y Mixtón</td>
            <td>{data.PetPetAmericasMixton}</td>
            <td>{data.msjPetAmericasMixton}</td>
          </tr>

          <tr>
            <th scope="row"></th>
            <td>Laureles y Av. Hidalgo</td>
            <td>{data.PetLaurelesHidalgo}</td>
            <td>{data.msjPetLaurelesHidalgo}</td>
          </tr>
        </tbody>
      </table>
    </DashboardContent>
  );
}

export default DetailAseoPublico;

if (document.getElementById("detailAseoPublico")) {
  ReactDOM.render(
    <DetailAseoPublico />,
    document.getElementById("detailAseoPublico")
  );
}
