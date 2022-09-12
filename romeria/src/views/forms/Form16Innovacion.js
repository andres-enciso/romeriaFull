import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoInnovacion from "../../images/logosdep/logo_innovacion.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form16Innovacion = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormInnovacion = async (valores) => {
    try {
      const response = await fetch(constants.api + "innovacion", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadServiciosRealizados: valores.cantidadServiciosRealizados,
          msjServiciosRealizados: valores.msjServiciosRealizados,
          cantidadAtencionRepoCentroMando:valores.cantidadAtencionRepoCentroMando,
          msjAtencionRepoCentroMando: valores.msjAtencionRepoCentroMando,
          cantidadAtencionRepoSalaPrensa:valores.cantidadAtencionRepoSalaPrensa,
          msjAtencionRepoSalaPrensa: valores.msjAtencionRepoSalaPrensa,
          cantidadAtencionCentOperaciones:valores.cantidadAtencionCentOperaciones,
          msjAtencionCentOperaciones: valores.msjAtencionCentOperaciones,
          HabCentroMandoGnrl: valores.HabCentroMandoGnrl,
          msjHabCentroMandoGnrl: valores.msjHabCentroMandoGnrl,
          HabSalaPrensa: valores.HabSalaPrensa,
          msjHabSalaPrensa: valores.msjHabSalaPrensa,
          HabCentroOpZpn: valores.HabCentroOpZpn,
          msjHabCentroOpZpn: valores.msjHabCentroOpZpn,
          tipodependenciainnovacion: 1,
          usuariorespondioInnov: idUser,
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
        msjAtencionCentOperaciones: "Sin Observaciones",
        msjAtencionRepoCentroMando: "Sin Observaciones",
        msjAtencionRepoSalaPrensa: "Sin Observaciones",
        msjHabCentroMandoGnrl: "Sin Observaciones",
        msjHabCentroOpZpn: "Sin Observaciones",
        msjHabSalaPrensa: "Sin Observaciones",
        msjServiciosRealizados: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormInnovacion(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoInnovacion}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Innovación Gubernamental</h3>
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
              <label>Cantidad de servicios realizados</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadServiciosRealizados"
                placeholder="Cantidad"
                id="cantidadServiciosRealizados"
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
                name="msjServiciosRealizados"
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
              <label>
                Atención a reportes del Centro de Mando - Coordinación General (UB)
              </label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionRepoCentroMando"
                placeholder="Cantidad"
                id="cantidadAtencionRepoCentroMando"
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
                name="msjAtencionRepoCentroMando"
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
              <label>Atención a reportes del Sala de Prensa (UB)</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionRepoSalaPrensa"
                placeholder="Cantidad"
                id="cantidadAtencionRepoSalaPrensa"
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
                name="msjAtencionRepoSalaPrensa"
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
              <label>Atención a reportes del Centro de Operaciones (C5)</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionCentOperaciones"
                placeholder="Cantidad"
                id="cantidadAtencionCentOperaciones"
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
                name="msjAtencionCentOperaciones"
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
              <label>
                Habilitación de Centro de Mando Coordinación General (UB)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="HabCentroMandoGnrl"
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
                name="msjHabCentroMandoGnrl"
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
              <label>Habilitación Sala de Prensa (UB)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="HabSalaPrensa"
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
                name="msjHabSalaPrensa"
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
              <label>Habilitación Centro de Operaciones Zapopan (C5)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="HabCentroOpZpn"
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
                name="msjHabCentroOpZpn"
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

export default Form16Innovacion;
