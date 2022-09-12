import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoDif from "../../images/logosdep/logo_DIF.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form3Dif = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormDif = async (valores) => {
    try {
      const response = await fetch(constants.api + "dif", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadMenores18: valores.cantidadMenores18,
          msjMenores18: valores.msjMenores18,
          cantidadAdultos18a59: valores.cantidadAdultos18a59,
          msjAdultos18a59: valores.msjAdultos18a59,
          cantidadAdultosMay60: valores.cantidadAdultosMay60,
          msjAdultosMay60: valores.msjAdultosMay60,
          cantidadAdDiscapacitados: valores.cantidadAdDiscapacitados,
          msjAdDiscapacitados: valores.msjAdDiscapacitados,
          conceptoInstModPresiMun: valores.conceptoInstModPresiMun,
          msjInstModPresiMun: valores.msjInstModPresiMun,
          conceptoInstModAvilaLaureles: valores.conceptoInstModAvilaLaureles,
          msjInstModAvilaLaureles: valores.msjInstModAvilaLaureles,
          conceptoInstModPerExtravAmericaEsparta:valores.conceptoInstModPerExtravAmericaEsparta,
          msjInstModPerExtravAmericaEsparta:valores.msjInstModPerExtravAmericaEsparta,
          conceptoInstModPerExtravAmericaObelisco:valores.conceptoInstModPerExtravAmericaObelisco,
          msjInstModPerExtravAmericaObelisco:valores.msjInstModPerExtravAmericaObelisco,
          tipodependenciadif: 1,
          usuariorespondiodif: idUser,
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
        msjMenores18: "Sin Observaciones",
        msjAdultos18a59: "Sin Observaciones",
        msjAdultosMay60: "Sin Observaciones",
        msjAdDiscapacitados: "Sin Observaciones",
        msjInstModPresiMun: "Sin Observaciones",
        msjInstModAvilaLaureles: "Sin Observaciones",
        msjInstModPerExtravAmericaEsparta: "Sin Observaciones",
        msjInstModPerExtravAmericaObelisco: "Sin Observaciones",
      }}
      onSubmit={(valores) => {
        fetchCreateFormDif(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoDif}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>DIF Zapopan</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Indicadores</h5>

            <div className="col">
              <label>Clave</label>
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Menores de 18 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMenores18"
                placeholder="Cantidad Menores de 18 años"
                id="cantidadMenores18"
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
                name="msjMenores18"
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
            <div className="col">
              <label>Adultos de 18 años a 59 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultos18a59"
                placeholder="Cantidad Adultos de 18 años a 59 años"
                id="cantidadAdultos18a59"
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
                name="msjAdultos18a59"
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
            <div className="col">
              <label>Adultos Mayores de 60 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultosMay60"
                placeholder="Cantidad Adultos Mayores de 60 años"
                id="cantidadAdultosMay60"
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
                name="msjAdultosMay60"
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
            <div className="col">
              <label>Personas con discapacidad</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdDiscapacitados"
                placeholder="Personas con discapacidad"
                id="cantidadAdDiscapacitados"
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
                name="msjAdDiscapacitados"
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
                Instalación del módulo "Personas Extraviadas" (Presidencia
                Municipal)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="conceptoInstModPresiMun"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjInstModPresiMun"
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
              <label>
                Instalación del módulo "Personas Extraviadas" en Ávila Camacho y
                Av. Laureles
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="conceptoInstModAvilaLaureles"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjInstModAvilaLaureles"
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
              <label>
                Instalación del módulo "Personas Extraviadas" en Américas y
                Esparta
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="conceptoInstModPerExtravAmericaEsparta"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjInstModPerExtravAmericaEsparta"
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
              <label>
                Instalación del módulo "Personas Extraviadas" en Américas y
                Obelisco
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="conceptoInstModPerExtravAmericaObelisco"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjInstModPerExtravAmericaObelisco"
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

export default Form3Dif;
