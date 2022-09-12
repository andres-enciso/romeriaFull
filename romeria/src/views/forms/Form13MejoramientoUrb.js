import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoMejoramiento from "../../images/logosdep/logo_mejoramientourbano.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form13MejoramientoUrb = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormMejoramiento = async (valores) => {
    try {
      const response = await fetch(constants.api + "mejoramientourbano", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadToneladasBasuraReco: valores.cantidadToneladasBasuraReco,
          msjToneladasBasuraReco: valores.msjToneladasBasuraReco,
          cantidadOperativoMejBarridoManualMecanico:valores.cantidadOperativoMejBarridoManualMecanico,
          msjOperativoMejBarridoManualMecanico:valores.msjOperativoMejBarridoManualMecanico,
          LimpiezaAmericasDia12: valores.LimpiezaAmericasDia12,
          msjLimpiezaAmericasDia12: valores.msjLimpiezaAmericasDia12,
          LimpiezaAvilaCamDia12: valores.LimpiezaAvilaCamDia12,
          msjLimpiezaAvilaCamDia12: valores.msjLimpiezaAvilaCamDia12,
          LimpiezaLaurelesDia12: valores.LimpiezaLaurelesDia12,
          msjLimpiezaLaurelesDia12: valores.msjLimpiezaLaurelesDia12,
          LimpiezaPatriaDia12: valores.LimpiezaPatriaDia12,
          msjLimpiezaPatriaDia12: valores.msjLimpiezaPatriaDia12,
          LimpiezaAurelioOrtegaDia12: valores.LimpiezaAurelioOrtegaDia12,
          msjLimpiezaAurelioOrtegaDia12: valores.msjLimpiezaAurelioOrtegaDia12,
          tipodependenciamejoramiento: 1,
          usuariorespondioMej: idUser,
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
        msjLimpiezaAmericasDia12: "Sin Observaciones",
        msjLimpiezaAurelioOrtegaDia12: "Sin Observaciones",
        msjLimpiezaAvilaCamDia12: "Sin Observaciones",
        msjLimpiezaLaurelesDia12: "Sin Observaciones",
        msjLimpiezaPatriaDia12: "Sin Observaciones",
        msjOperativoMejBarridoManualMecanico: "Sin Observaciones",
        msjToneladasBasuraReco: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormMejoramiento(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoMejoramiento}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Mejoramiento Urbano</h3>
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
              <label>Toneladas de basura recolectada</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadToneladasBasuraReco"
                placeholder="Cantidad de Toneladas"
                id="cantidadToneladasBasuraReco"
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
                name="msjToneladasBasuraReco"
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
              <label>Operativo Mejoramiento (Barrido manual y mecánico)</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadOperativoMejBarridoManualMecanico"
                placeholder="Cantidad de Toneladas"
                id="cantidadOperativoMejBarridoManualMecanico"
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
                name="msjOperativoMejBarridoManualMecanico"
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
              <label>Limpieza en Av. Américas (Día 12)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LimpiezaAmericasDia12"
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
                name="msjLimpiezaAmericasDia12"
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
              <label>Limpieza en Av. Ávila Camacho (Día 12)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LimpiezaAvilaCamDia12"
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
                name="msjLimpiezaAvilaCamDia12"
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
              <label>Limpieza en Av. Ávila Camacho (Día 12)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LimpiezaLaurelesDia12"
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
                name="msjLimpiezaLaurelesDia12"
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
              <label>Limpieza en Av. Patria (Día 12)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LimpiezaPatriaDia12"
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
                name="msjLimpiezaPatriaDia12"
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
              <label>Limpieza en Av. Aurelio Ortega (Día 12)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LimpiezaAurelioOrtegaDia12"
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
                name="msjLimpiezaAurelioOrtegaDia12"
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

export default Form13MejoramientoUrb;
