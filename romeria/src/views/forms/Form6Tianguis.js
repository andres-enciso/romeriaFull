import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoTianguis from "../../images/logosdep/logo_tianguis.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

const Form6Tianguis = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormTianguis = async (valores) => {
    const totalComerciantes = valores.cantidadComercio + valores.cantidadJuegos;
    try {
      const response = await fetch(constants.api + "tianguis", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadComerciantesInst: totalComerciantes,
          msjComerciantesInst: valores.msjComerciantesInst,
          cantidadComercio: valores.cantidadComercio,
          msjComercio: valores.msjComercio,
          cantidadJuegos: valores.cantidadJuegos,
          msjJuegos: valores.msjJuegos,
          callesZona1: valores.callesZona1,
          callesZona2: valores.callesZona2,
          callesZona3: valores.callesZona3,
          callesZona4: valores.callesZona4,
          zonaAmortiguamiento: valores.zonaAmortiguamiento,
          tipodependenciatianguis: 1,
          usuariorespondioTia: idUser,
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
        msjComerciantesInst: "Sin Observaciones",
        msjComercio: "Sin Observaciones",
        msjJuegos: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormTianguis(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-6">
              <img
                src={LogoTianguis}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col-6 centerText">
              <h3>Tianguis y Comercios en Espacios Abiertos</h3>
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
              <label>Comercio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadComercio"
                placeholder="Comercios"
                id="cantidadComercio"
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
                name="msjComercio"
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
              <label>Juegos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadJuegos"
                placeholder="Juegos"
                id="cantidadJuegos"
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
                name="msjJuegos"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Tareas</h5>
            <div className="col">
              <label>Zona 1 comercio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="text"
                name="callesZona1"
                placeholder="Especificar Calles"
                id="callesZona1"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Zona 2 comercio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="text"
                name="callesZona2"
                placeholder="Especificar Calles"
                id="callesZona2"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Zona 3 comercio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="text"
                name="callesZona3"
                placeholder="Especificar Calles"
                id="callesZona3"
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Zona 4 Juegos Mecanicos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="text"
                name="callesZona4"
                placeholder="Especificar Calles"
                id="callesZona4"
              />
            </div>
          </div>
          
          <div className="row row-styes-clave">
            <div className="col">
              <label>Zona de Amortiguamiento</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="text"
                name="zonaAmortiguamiento"
                placeholder="Especificar Calles"
                id="zonaAmortiguamiento"
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

export default Form6Tianguis;
