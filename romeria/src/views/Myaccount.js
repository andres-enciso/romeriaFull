import * as React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import DashboardContent from "./Dashboard";
import constants from "./utils/constants";
import "../styles/styles.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import logoZapopan from "../images/header/zapopan-logoGob.png";
import { Button, Link } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "40px",
});

function Myaccount() {
  const datas = JSON.parse(localStorage.getItem("data"));
  const dependenciaID = datas.rolUsuario;

  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idusurio = data.idUsuarios;

  const [user, setUser] = useState([]);

  const formCons = user?.formconstruccions;
  const formDif = user?.formdifs;
  const formSalud = user?.formsaluds;
  const formSPub = user?.formspublicas;
  const formIns = user?.forminspeccionvigs;
  const formTian = user?.formtianguiss;
  const formReca = user?.formrecaudadoras;
  const formAPub = user?.formalumbrados;
  const formAseo = user?.formapublicos;
  const formAgua = user?.formadrenajes;
  const formAnalisi = user?.formaestrategicos;
  const formSind = user?.formsindicaturas;
  const formUbr = user?.formmurbanos;
  const formInm = user?.formconservacios;
  const formInno = user?.forminnovacions;
  const formPCivil = user?.formpcivils;

  const info = user;

  /**CONSULTAR USER */
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "users/" + idusurio, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const result = await response.json();
    setUser(result);
  };

  useEffect(() => {
    fetchUser();
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
              <Img sx={{ width: 1 }} alt="complex" src={logoZapopan} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>Nombre:</strong> {data.nombre} {data.apellido}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {info?.dependenciaUsuario?.nombreDependencia}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>No. Empleado:</strong> {data.noEmpleado}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>Correo:</strong> {data.correo}
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                  <strong>Teléfono:</strong>
                  {data.telefono}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {dependenciaID == 1 ? (
        <div>
          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Construcción de la comunidad</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Vallas Instaladas</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formCons
                        ? formCons.map((item, pos6) => (
                            <tr key={item?.idConstruccion}>
                              <td>{item?.idConstruccion}</td>
                              <td>{item?.cantidadVallasIns}</td>
                              <td>{item?.concepto5}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesConstruccion/${item?.idConstruccion}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">DIF</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Cantidad de Menores</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formDif
                        ? formDif.map((item, pos6) => (
                            <tr key={item?.idPreguntasDif}>
                              <td>{item?.idPreguntasDif}</td>
                              <td>{item?.cantidadMenores18}</td>
                              <td>{item?.msjMenores18}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesDIFZapopan/${item?.idPreguntasDif}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Servicios de Salud</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Deshidratados</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formSalud
                        ? formSalud.map((item, pos6) => (
                            <tr key={item?.idPreguntasSalud}>
                              <td>{item?.idPreguntasSalud}</td>
                              <td>{item?.cantidadDeshidratacion}</td>
                              <td>{item?.msjDeshidratacion}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesServiciosSalud/${item?.idPreguntasSalud}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Seguridad Pública</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Enervantes Adultos</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formSPub
                        ? formSPub.map((item, pos6) => (
                            <tr key={item?.idPreguntasSPublica}>
                              <td>{item?.idPreguntasSPublica}</td>
                              <td>{item?.cantidadAdultosEnervantes}</td>
                              <td>{item?.msjEnervantes}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesSeguridadPublica/${item?.idPreguntasSPublica}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Inspección y Vigilancia</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Actas con Decomiso</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formIns
                        ? formIns.map((item, pos6) => (
                            <tr key={item.idInspeccionVig}>
                              <td>{item?.idInspeccionVig}</td>
                              <td>{item?.cantidadActasConDecomisoZona}</td>
                              <td>{item?.msjActasDecomiso} </td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesInspeccionVigilancia/${item?.idInspeccionVig}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Tianguis</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Comerciantes Instalados</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formTian
                        ? formTian.map((item, pos6) => (
                            <tr key={item.idTianguis}>
                              <td>{item?.idTianguis}</td>
                              <td>{item?.cantidadComerciantesInst}</td>
                              <td>{item?.msjComerciantesInst}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesTianguis/${item?.idTianguis}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Recaudadora 05</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Cantidad Recaudada</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formReca
                        ? formReca.map((item, pos6) => (
                            <tr key={item.idRecaudadora}>
                              <td>{item?.idRecaudadora}</td>
                              <td>{item?.cantidadRecaudado}</td>
                              <td>{item?.msjMontoRecaudado}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesRecaudadora/${item?.idRecaudadora}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Alumbrado Publico</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Revisiones</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formAPub
                        ? formAPub.map((item, pos6) => (
                            <tr key={item.idAlumbrado}>
                              <td>{item?.idAlumbrado}</td>
                              <td>
                                {item?.cantidadRevisionRealizadaComerciantes}
                              </td>
                              <td>{item?.msjRevisionRealizadaComerciantes}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesAlumbrado/${item?.idAlumbrado}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Aseo Publico</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Toneladas Picachos</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formAseo
                        ? formAseo.map((item, pos6) => (
                            <tr key={item.idAPublico}>
                              <td>{item?.idAPublico}</td>
                              <td>
                                {item?.cantidadToneladasRecibidasPicachos}
                              </td>
                              <td>{item?.msjToneladasRecibidasPicachos}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesAseoPublico/${item?.idAPublico}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Agua y Drenaje</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Baños Instalados</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formAgua
                        ? formAgua.map((item, pos6) => (
                            <tr key={item.idADrenaje}>
                              <td>{item?.idADrenaje}</td>
                              <td>{item?.cantidadBanosInstalados}</td>
                              <td>{item?.msjBanosInstalados}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesAguaDrenaje/${item?.idADrenaje}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">
                    Análisis estratégico y Comunicación
                  </h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Medios Atendidos</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formAnalisi
                        ? formAnalisi.map((item, pos6) => (
                            <tr key={item.idAEstrategico}>
                              <td>{item?.idAEstrategico}</td>
                              <td>{item?.cantidadMediosComuAendidos}</td>
                              <td>{item?.msjMediosComuAendidos}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesEstrategicoComunicacion/${item?.idAEstrategico}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Sindicatura Municipal</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Actas Calificadas</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formSind
                        ? formSind.map((item, pos6) => (
                            <tr key={item.idSindicatura}>
                              <td>{item?.idSindicatura}</td>
                              <td>{item?.cantidadActasCalificadas}</td>
                              <td>{item?.msjActasCalificadas}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesSindicaturaMun/${item?.idSindicatura}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Mejoramiento Urbano</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Basura Recogida</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formUbr
                        ? formUbr.map((item, pos6) => (
                            <tr key={item.idMUrbano}>
                              <td>{item?.idMUrbano}</td>
                              <td>{item?.cantidadToneladasBasuraReco}</td>
                              <td>{item?.msjToneladasBasuraReco}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesMejoraUrbano/${item?.idMUrbano}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Conservación de Inmuebles</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Unidad Basilica</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formInm
                        ? formInm.map((item, pos6) => (
                            <tr key={item.idConservacion}>
                              <td>{item?.idConservacion}</td>
                              <td>{item?.cantidadAtencionUnidadBasilica}</td>
                              <td>{item?.msjAtencionUnidadBasilica}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesConservacionInmu/${item?.idConservacion}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row texto-table">
            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Innovación gubernamental</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Servicios Realizados</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formInno
                        ? formInno.map((item, pos6) => (
                            <tr key={item.idInnovacion}>
                              <td>{item?.idInnovacion}</td>
                              <td>{item?.cantidadServiciosRealizados}</td>
                              <td>{item?.msjServiciosRealizados}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesInnovacionGub/${item?.idInnovacion}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="card z-index-card">
                <div className="card-header  background-upband-accoutn header-card">
                  <h4 className="card-title ">Protección civil y bomberos</h4>
                </div>

                <div className="card-body table-responsive  overflow-scrool myaccoutn-tables">
                  <table className="table table-hover">
                    <thead id="headRe">
                      <tr>
                        <th>ID Formato</th>
                        <th>Cumplieron Normas</th>
                        <th>Observaciones</th>
                        <th>Detalles</th>
                      </tr>
                    </thead>
                    <tbody id="resulta">
                      {formPCivil
                        ? formPCivil.map((item, pos6) => (
                            <tr key={item.idPCivil}>
                              <td>{item?.idPCivil}</td>
                              <td>{item?.cantidadComSiCumplioNormas}</td>
                              <td>{item?.msjComSiCumplioNormas}</td>
                              <td>
                                <>
                                  <Link
                                    href={`/detallesProtCivilBomberos/${item?.idPCivil}`}
                                    underline="hover"
                                  >
                                    <Button
                                      variant="contained"
                                      color="info"
                                      startIcon={
                                        <VisibilityIcon className="icon-center" />
                                      }
                                    ></Button>
                                  </Link>
                                </>
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </DashboardContent>
  );
}

export default Myaccount;

if (document.getElementById("myaccount")) {
  ReactDOM.render(<Myaccount />, document.getElementById("myaccount"));
}
