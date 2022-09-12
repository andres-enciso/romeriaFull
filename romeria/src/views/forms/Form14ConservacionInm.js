import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoConservacion from "../../images/logosdep/logo_conservacioninmuebles.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form14ConservacionInm = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormConservacion = async (valores) => {
    try {
      const response = await fetch(constants.api + "conservacion", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadAtencionUnidadBasilica:valores.cantidadAtencionUnidadBasilica,
          msjAtencionUnidadBasilica: valores.msjAtencionUnidadBasilica,
          cantidadAtencionPresidenciaMun:valores.cantidadAtencionPresidenciaMun,
          msjAtencionPresidenciaMun: valores.msjAtencionPresidenciaMun,
          cantidadAtencionCOZ: valores.cantidadAtencionCOZ,
          msjAtencionCOZ: valores.msjAtencionCOZ,
          ApoyoDanzantes: valores.ApoyoDanzantes,
          msjApoyoDanzantes: valores.msjApoyoDanzantes,
          tipodependenciaconservacion: 1,
          usuariorespondioConserv: idUser,
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
        msjApoyoDanzantes: "Sin Observaciones",
        msjAtencionCOZ: "Sin Observaciones",
        msjAtencionPresidenciaMun: "Sin Observaciones",
        msjAtencionUnidadBasilica: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormConservacion(valores);
        //Conectar a API y mandar Data
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoConservacion}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Conservación de Inmuebles</h3>
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
              <label>Atenciones brindadas en la Unidad Basílica</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionUnidadBasilica"
                placeholder="Cantidad"
                id="cantidadAtencionUnidadBasilica"
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
                name="msjAtencionUnidadBasilica"
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
              <label>Atenciones brindadas en la Presidencia Municipal</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionPresidenciaMun"
                placeholder="Cantidad"
                id="cantidadAtencionPresidenciaMun"
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
                name="msjAtencionPresidenciaMun"
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
                Atenciones brindadas al Centro de Operaciones Zapopan (C5)
              </label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtencionCOZ"
                placeholder="Cantidad"
                id="cantidadAtencionCOZ"
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
                name="msjAtencionCOZ"
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
              <label>Apoyo al área de danzantes</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="ApoyoDanzantes"
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
                name="msjApoyoDanzantes"
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

export default Form14ConservacionInm;
