import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoSeguridad from "../../images/logosdep/logo_comisariaseguridadpublica.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

const Form4SeguridadPublica = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormSegp = async (valores) => {
    try {
      const response = await fetch(constants.api + "segPublica", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadAdultosEnervantes: valores.cantidadAdultosEnervantes,
          cantidadMenoresEnervantes: valores.cantidadMenoresEnervantes,
          msjEnervantes: valores.msjEnervantes,
          cantidadAdultosArmaFuego: valores.cantidadAdultosArmaFuego,
          cantidadMenoresArmaFuego: valores.cantidadMenoresArmaFuego,
          msjArmaFuego: valores.msjArmaFuego,
          cantidadAdultosBebidasEmbriagantes:valores.cantidadAdultosBebidasEmbriagantes,
          cantidadMenoresBebidasEmbriagantes:valores.cantidadMenoresBebidasEmbriagantes,
          msjBebidasEmbriagantes: valores.msjBebidasEmbriagantes,
          cantidadMenoresAlterarOrden: valores.cantidadMenoresAlterarOrden,
          cantidadAdultosAlterarOrden: valores.cantidadAdultosAlterarOrden,
          msjAlterarOrden: valores.msjAlterarOrden,
          cantidadMenoresFaltaAdmin: valores.cantidadMenoresFaltaAdmin,
          cantidadAdultosFaltaAdmin: valores.cantidadAdultosFaltaAdmin,
          msjFaltaAdmin: valores.msjFaltaAdmin,
          cantidadAdultosOtroServicio: valores.cantidadAdultosOtroServicio,
          cantidadMenoresOtroServicio: valores.cantidadMenoresOtroServicio,
          msjOtroServicio: valores.msjOtroServicio,
          tipodependenciasegpublica: 1,
          usuariorespondioPublica: idUser,
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
      alert("Error en el servidor, intentelo de nuevo", error);
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Formik
      initialValues={{
        msjEnervantes: "Sin Observaciones",
        msjAlterarOrden: "Sin Observaciones",
        msjArmaFuego: "Sin Observaciones",
        msjBebidasEmbriagantes: "Sin Observaciones",
        msjFaltaAdmin: "Sin Observaciones",
        msjOtroServicio: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormSegp(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoSeguridad}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Comisaría Zapopan</h3>
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
              <label>Detenidos por posesión de enervantes</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosEnervantes"
                placeholder="Adultos"
                id="cantidadAdultosEnervantes"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresEnervantes"
                placeholder="Menores"
                id="cantidadMenoresEnervantes"
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
                name="msjEnervantes"
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
              <label>Detenidos por posesión de arma de fuego</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosArmaFuego"
                placeholder="Adultos"
                id="cantidadAdultosArmaFuego"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresArmaFuego"
                placeholder="Menores"
                id="cantidadMenoresArmaFuego"
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
                name="msjArmaFuego"
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
              <label>Detenidos por consumo de bebidas embriagantes</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosBebidasEmbriagantes"
                placeholder="Adultos"
                id="cantidadAdultosBebidasEmbriagantes"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresBebidasEmbriagantes"
                placeholder="Menores"
                id="cantidadMenoresBebidasEmbriagantes"
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
                name="msjBebidasEmbriagantes"
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
              <label>Detenidos por alterar el orden público</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosAlterarOrden"
                placeholder="Adultos"
                id="cantidadAdultosAlterarOrden"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresAlterarOrden"
                placeholder="Menores"
                id="cantidadMenoresAlterarOrden"
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
                name="msjAlterarOrden"
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
              <label>Detenidos por faltas administrativas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosFaltaAdmin"
                placeholder="Adultos"
                id="cantidadAdultosFaltaAdmin"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresFaltaAdmin"
                placeholder="Menores"
                id="cantidadMenoresFaltaAdmin"
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
                name="msjFaltaAdmin"
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
              <label>Otros Servicios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosOtroServicio"
                placeholder="Adultos"
                id="cantidadAdultosOtroServicio"
              />
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenoresOtroServicio"
                placeholder="Menores"
                id="cantidadMenoresOtroServicio"
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
                name="msjOtroServicio"
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

export default Form4SeguridadPublica;
