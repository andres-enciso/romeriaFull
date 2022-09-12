import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoReca from "../../images/logosdep/logo_reca5.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

const Form7Recaudadora = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormTianguis = async (valores) => {
    try {
      const response = await fetch(constants.api + "recaudadora", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadRecaudado: valores.cantidadRecaudado,
          msjMontoRecaudado: valores.msjMontoRecaudado,
          CobroZona1: valores.CobroZona1,
          msjCobroZona1: valores.msjCobroZona1,
          CobroZona2: valores.CobroZona2,
          msjCobroZona2: valores.msjCobroZona2,
          CobroZona3: valores.CobroZona3,
          msjCobroZona3: valores.msjCobroZona3,
          CobroZona4JMecanicos: valores.CobroZona4JMecanicos,
          msjCobroZona4JMecanicos: valores.msjCobroZona4JMecanicos,
          CobroZonaAmortiguamiento: valores.CobroZonaAmortiguamiento,
          msjZonaAmortiguamiento: valores.msjZonaAmortiguamiento,
          tipodependenciareca: 1,
          usuariorespondioReca: idUser,
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
        msjCobroZona1: "Sin Observaciones",
        msjCobroZona2: "Sin Observaciones",
        msjCobroZona3: "Sin Observaciones",
        msjCobroZona4JMecanicos: "Sin Observaciones",
        msjMontoRecaudado: "Sin Observaciones",
        msjZonaAmortiguamiento: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormTianguis(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoReca}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Recaudadora 05</h3>
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
              <label>Monto Recaudado</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadRecaudado"
                placeholder="Monto Recaudado"
                id="cantidadRecaudado"
              />
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjMontoRecaudado"
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
              <label>Cobro Zona 1 de Comercio</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CobroZona1"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjCobroZona1"
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
              <label>Cobro Zona 2 de Comercio</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CobroZona2"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjCobroZona2"
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
              <label>Cobro Zona 3 de Comercio</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CobroZona3"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjCobroZona3"
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
              <label>Cobro Zona 4 Juegos Mecánicos</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CobroZona4JMecanicos"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjCobroZona4JMecanicos"
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
              <label>Cobro Zona de Amortiguamiento</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="CobroZonaAmortiguamiento"
                className=" form-select position-static"
              >
                <option value="" disabled selected>
                  Selecciona una Opción
                </option>
                <option value="Ok">Sí</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Obeservaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjZonaAmortiguamiento"
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

export default Form7Recaudadora;
