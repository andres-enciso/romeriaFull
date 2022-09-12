import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoAlumbrado from "../../images/logosdep/logo_alumbrado.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form8Alumbrado = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormAlumbrado = async (valores) => {
    try {
      const response = await fetch(constants.api + "alumbrado", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadRevisionRealizadaComerciantes:valores.cantidadRevisionRealizadaComerciantes,
          msjRevisionRealizadaComerciantes:valores.msjRevisionRealizadaComerciantes,
          cantidadModConectados: valores.cantidadModConectados,
          msjModConectados: valores.msjModConectados,
          tipodependenciaslumbrado: 1,
          usuariorespondioAlum: idUser,
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
        text: "Intente de nuevo o recargue la página",
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <Formik
      initialValues={{
        msjRevisionRealizadaComerciantes: "Sin Observaciones",
        msjModConectados: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormAlumbrado(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoAlumbrado}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Alumbrado Público</h3>
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
              <label>Revisiones realizadas a comerciantes</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadRevisionRealizadaComerciantes"
                placeholder="Revisiones a comerciantes"
                id="cantidadRevisionRealizadaComerciantes"
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
                name="msjRevisionRealizadaComerciantes"
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
              <label>Módulos conectados</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadModConectados"
                placeholder="Módulos conectados"
                id="cantidadModConectados"
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
                name="msjModConectados"
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

export default Form8Alumbrado;
