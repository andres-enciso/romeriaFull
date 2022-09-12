import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoConstruccion from "../../images/logosdep/logo_construccion.png";
import "../../styles/styles.css";
// Contruccion de cominidad Form
import constants from "../utils/constants";

const Formulario1 = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormConstruccion = async (valores) => {
    const inicioOperac1 = new Date(valores.inicioOperac).toISOString();
    const cierreOperac1 = new Date(valores.cierreOperac).toISOString();
    const horaIniConto2 = new Date(valores.horaIniConto2).toISOString();
    const horaFinConto2 = new Date(valores.horaFinConto2).toISOString();
    const horarioCierre = new Date(valores.horarioCierre).toISOString();
    const horarioApertura = new Date(valores.horarioApertura).toISOString();
    const horaInstalacionVallas = new Date(valores.horaInstalacionVallas).toISOString();
    const horaInstalacionSiilleria = new Date(valores.horaInstalacionSiilleria).toISOString();
    const horaDesinstalacionSiilleria = new Date(valores.horaDesinstalacionSiilleria).toISOString();
    const horaInstalacionAmericasObelisco = new Date(valores.horaInstalacionAmericasObelisco).toISOString();
    const horaArriboPCuartel = new Date(valores.horaArriboPCuartel).toISOString();
    const horaArriboSCuartel = new Date(valores.horaArriboSCuartel).toISOString();
    const horaArriboTCuartel = new Date(valores.horaArriboTCuartel).toISOString();
    const horaArriboImagenAmePatria = new Date(valores.horaArriboImagenAmePatria).toISOString();
    const horaArriboImagenBasilica = new Date(valores.horaArriboImagenBasilica).toISOString();
    const horaIniEucaristica = new Date(valores.horaIniEucaristica).toISOString();
    const horaFinEucaristica = new Date(valores.horaFinEucaristica).toISOString();
    const horaInstalacionAguaAmericas = new Date(valores.horaInstalacionAguaAmericas).toISOString();
    const horaInstalacionAguaHidalgo = new Date(valores.horaInstalacionAguaHidalgo).toISOString();
    try {
      const response = await fetch(constants.api + "construccion", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          concepto1: valores.concepto1,
          inicioOperac: inicioOperac1,
          cierreOperac: cierreOperac1,
          concepto2: valores.concepto2,
          horaIniConto2: horaIniConto2,
          horaFinConto2: horaFinConto2,
          concepto3: valores.concepto3,
          horarioCierre: horarioCierre,
          horarioApertura: horarioApertura,
          concepto4: valores.concepto4,
          horaInstalacionVallas: horaInstalacionVallas,
          cantidadVallasIns: valores.cantidadVallasIns,
          concepto5: valores.concepto5,
          horaInstalacionSiilleria: horaInstalacionSiilleria,
          horaDesinstalacionSiilleria: horaDesinstalacionSiilleria,
          concepto6: valores.concepto6,
          horaInstalacionAmericasObelisco: horaInstalacionAmericasObelisco,
          cantidadAguaAmericasObelisco: valores.cantidadAguaAmericasObelisco,
          concepto7: valores.concepto7,
          horaArriboPCuartel: horaArriboPCuartel,
          msjConto7: valores.msjConto7,
          concepto8: valores.concepto8,
          horaArriboSCuartel: horaArriboSCuartel,
          msjConto8: valores.msjConto8,
          concepto9: valores.concepto9,
          horaArriboTCuartel: horaArriboTCuartel,
          msjConto9: valores.msjConto9,
          concepto10: valores.concepto10,
          horaArriboImagenAmePatria: horaArriboImagenAmePatria,
          msjConto10: valores.msjConto10,
          concepto11: valores.concepto11,
          horaArriboImagenBasilica: horaArriboImagenBasilica,
          msjConto11: valores.msjConto11,
          concepto12: valores.concepto12,
          horaIniEucaristica: horaIniEucaristica,
          msjConto12: valores.msjConto12,
          concepto13: valores.concepto13,
          horaFinEucaristica: horaFinEucaristica,
          msjConto13: valores.msjConto13,
          concepto14: valores.concepto14,
          horaInstalacionAguaAmericas: horaInstalacionAguaAmericas,
          cantidadConto14: valores.cantidadConto14,
          concepto15: valores.concepto15,
          horaInstalacionAguaHidalgo: horaInstalacionAguaHidalgo,
          cantidadConto15: valores.cantidadConto15,
          tipodependenciaconstruccion: 1,
          usuariorespondioconstr: idUser,
        }),
      });
      const result = await response.json();
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El formato se ha guardado con éxito",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ocurrio un error al registrar el Formulario",
          text: "Intente de nuevo",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error al registrar el Formulario",
        text: "Recargue la página y asegurece de llenar todos los campos",
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <Formik
      initialValues={{
        msjConto7: "Sin Observaciones",
        msjConto8: "Sin Observaciones",
        msjConto9: "Sin Observaciones",
        msjConto10: "Sin Observaciones",
        msjConto11: "Sin Observaciones",
        msjConto12: "Sin Observaciones",
        msjConto13: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormConstruccion(valores);
        //Conectar a API y mandar Data
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          {/** */}
          <div className="row">
            <div className="col-9">
              <img
                src={LogoConstruccion}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Construcción de Comunidad</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Tareas</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Apertura del Centro de Mando de la Coordinación General
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto1"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Inicio de Operaciones</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="inicioOperac"
                placeholder="inicioOperac"
                id="inicioOperac"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cierre de Operaciones</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="cierreOperac"
                placeholder="cierreOperac"
                id="cierreOperac"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Recorrido del C. Presidente Municipal</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto2"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Horario incio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaIniConto2"
                id="horaIniConto2"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cierre de Operaciones</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaFinConto2"
                id="horaFinConto2"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Cierre Total de Vialidades</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto3"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Horario Cierre</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horarioCierre"
                id="horarioCierre"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Horario Apertura</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horarioApertura"
                id="horarioApertura"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Instalación de vallas en atrio</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto4"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora en que se Instaló</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaInstalacionVallas"
                id="horaInstalacionVallas"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cantidad de Vallas Instaladas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadVallasIns"
                placeholder="Cantidad Vallas"
                id="cantidadVallasIns"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Instalación de sillería para Misa de Recepción</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto5"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora en que se Instaló</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaInstalacionSiilleria"
                id="horaInstalacionSiilleria"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora Desisntalación</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaDesinstalacionSiilleria"
                id="horaDesinstalacionSiilleria"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Módulo de agua en Av. Américas y Obelisco (Banorte) (Botellas)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto6"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora en que se Instaló</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaInstalacionAmericasObelisco"
                id="horaInstalacionAmericasObelisco"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cantidad de agua entregada</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAguaAmericasObelisco"
                id="cantidadAguaAmericasObelisco"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Módulo de agua en Av. Américas y Serbia (Botellas)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto14"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora en que se Instaló</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaInstalacionAguaAmericas"
                id="horaInstalacionAguaAmericas"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cantidad de agua entregada</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadConto14"
                id="cantidadConto14"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Módulo de agua en Av. Hidalgo y Emiliano Zapata (Presidencia)
                (Botellas)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto15"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora en que se Instaló</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaInstalacionAguaHidalgo"
                id="horaInstalacionAguaHidalgo"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Cantidad de agua entregada</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadConto15"
                id="cantidadConto15"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Primer Cuartel de Danzantes en Av. Laureles y Av. Ávila Camacho
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto7"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de arribo</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaArriboPCuartel"
                id="horaArriboPCuartel"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto7"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Segundo Cuartel de Danzantes en Av. Laureles y Av. Ávila Camacho
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto8"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de arribo</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaArriboSCuartel"
                id="horaArriboSCuartel"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto8"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>
                Tercer Cuartel de Danzantes en Av. Laureles y Av. Ávila Camacho
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto9"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de arribo</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaArriboTCuartel"
                id="horaArriboTCuartel"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto9"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Arribo de la imagen Av. Américas y Av. Patria</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto10"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de arribo</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaArriboImagenAmePatria"
                id="horaArriboImagenAmePatria"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto10"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Arribo de imagen a Basílica</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto11"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de arribo</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaArriboImagenBasilica"
                id="horaArriboImagenBasilica"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto11"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Inicio Celebración Eucarística</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto12"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de Inicio Celebración Eucarística</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaIniEucaristica"
                id="horaIniEucaristica"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto12"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Fin de la Celebración Eucarística</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="concepto13"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona Una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Hora de Fin Celebración Eucarística</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="datetime-local"
                name="horaFinEucaristica"
                id="horaFinEucaristica"
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjConto13"
                placeholder="Observaciones"
              />
            </div>
          </div>

          <div className="col-12 btn-succ">
            <button type="submit" className="btn btn-success ">
              Guardar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Formulario1;
