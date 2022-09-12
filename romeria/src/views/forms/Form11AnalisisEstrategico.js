import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoAnalisis from "../../images/logosdep/logo_alumbrado.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form11AnalisisEstrategico = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormAnalisis = async (valores) => {
    try {
      const response = await fetch(constants.api + "analisisestrategico", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadMediosComuAendidos: valores.cantidadMediosComuAendidos,
          msjMediosComuAendidos: valores.msjMediosComuAendidos,
          cantidadMediosCobertura: valores.cantidadMediosCobertura,
          msjMediosCobertura: valores.msjMediosCobertura,
          cantidadAtencionLogistica: valores.cantidadAtencionLogistica,
          msjAtencionLogistica: valores.msjAtencionLogistica,
          SalaPrensaS: valores.SalaPrensa,
          msjSalaPrensa: valores.msjSalaPrensa,
          CierreSalaPrensa: valores.CierreSalaPrensa,
          msjCierreSalaPrensa: valores.msjCierreSalaPrensa,
          InstalacionMediosPAmericas: valores.InstalacionMediosPAmericas,
          msjInstalacionMediosPAmericas: valores.msjInstalacionMediosPAmericas,
          InstalacionMediosUBasilica: valores.InstalacionMediosUBasilica,
          msjInstalacionMediosUBasilica: valores.msjInstalacionMediosUBasilica,
          InstalacionMediosEvaBriseno: valores.InstalacionMediosEvaBriseno,
          msjInstalacionMediosEvaBriseno:valores.msjInstalacionMediosEvaBriseno,
          CorteInfo11Oct: valores.CorteInfo11Oct,
          msjCorteInfo11Oct: valores.msjCorteInfo11Oct,
          CorteInfo12Oct: valores.CorteInfo12Oct,
          msjCorteInfo12Oct: valores.msjCorteInfo12Oct,
          RuedaPMat12oct: valores.RuedaPMat12oct,
          msjRuedaPMat12oct: valores.msjRuedaPMat12oct,
          RuedaPFin12oct: valores.RuedaPFin12oct,
          msjRuedaPFin12oct: valores.msjRuedaPFin12oct,
          InstaComedorReporteros: valores.InstaComedorReporteros,
          msjInstaComedorReporteros: valores.msjInstaComedorReporteros,
          tipodependenciaanaestrategico: 1,
          usuariorespondioAna: idUser,
        }),
      });
      const result = await response.json();
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          title:"El formato se ha guardado con éxito",
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
        msjAtencionLogistica: "Sin Observaciones",
        msjCierreSalaPrensa: "Sin Observaciones",
        msjCorteInfo11Oct: "Sin Observaciones",
        msjCorteInfo12Oct: "Sin Observaciones",
        msjInstaComedorReporteros: "Sin Observaciones",
        msjInstalacionMediosEvaBriseno: "Sin Observaciones",
        msjInstalacionMediosPAmericas: "Sin Observaciones",
        msjInstalacionMediosUBasilica: "Sin Observaciones",
        msjMediosCobertura: "Sin Observaciones",
        msjMediosComuAendidos: "Sin Observaciones",
        msjRuedaPFin12oct: "Sin Observaciones",
        msjRuedaPMat12oct: "Sin Observaciones",
        msjSalaPrensa: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormAnalisis(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoAnalisis}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Análisis Estratégico y Comunicación</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Indicadores</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>Medios de Comunicación atendidos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMediosComuAendidos"
                placeholder="Medios de Comunicación atendidos"
                id="cantidadMediosComuAendidos"
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
                name="msjMediosComuAendidos"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>Cantidad de Medios en cobertura</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMediosCobertura"
                placeholder="Cantidad de Medios en cobertura"
                id="cantidadMediosCobertura"
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
                name="msjMediosCobertura"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>Atención en logística</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionLogistica"
                placeholder="Cantidad de atenciones"
                id="cantidadAtencionLogistica"
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
                name="msjAtencionLogistica"
                placeholder="..."
              />
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
              <label>Sala de Prensa</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="SalaPrensa"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjSalaPrensa"
                placeholder="..."
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
              <label>Cierre Sala de Prensa</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CierreSalaPrensa"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjCierreSalaPrensa"
                placeholder="..."
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
              <label>Instalación de Medios Plaza Américas</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="InstalacionMediosPAmericas"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjInstalacionMediosPAmericas"
                placeholder="..."
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
              <label>Instalación de medios Unidad Basílica</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="InstalacionMediosUBasilica"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjInstalacionMediosUBasilica"
                placeholder="..."
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
              <label>Instalación de medios Eva Briseño</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="InstalacionMediosEvaBriseno"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjInstalacionMediosEvaBriseno"
                placeholder="..."
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
              <label>Corte informativo 11 de octubre</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CorteInfo11Oct"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjCorteInfo11Oct"
                placeholder="..."
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
              <label>Corte informativo 12 de octubre</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CorteInfo12Oct"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjCorteInfo12Oct"
                placeholder="..."
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
              <label>Rueda de Prensa matutina 12 de octubre</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="RuedaPMat12oct"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjRuedaPMat12oct"
                placeholder="..."
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
              <label>Rueda de Prensa final 12 de octubre</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="RuedaPFin12oct"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjRuedaPFin12oct"
                placeholder="..."
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
              <label>Instalación de comedor para reporteros</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="InstaComedorReporteros"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Seleccione una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
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
                name="msjInstaComedorReporteros"
                placeholder="..."
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

export default Form11AnalisisEstrategico;
