import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoAguaDrenaje from "../../images/logosdep/logo_gestionagua.png";
import "../../styles/styles.css";
// Contruccion de cominidad Form
import constants from "../utils/constants";

const Form10AguaDrenaje = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }

  const fetchCreateFormAguaDrenaje = async (valores) => {
    const sumatoriaUsuarios =
      valores.cantidadEstimadaP1JMinaMatamoros +
      valores.cantidadEstimadaP2EvaSofia +
      valores.cantidadEstimadaP3CincoMayoSofia +
      valores.cantidadEstimadaP4MixtonAmericas +
      valores.cantidadEstimadaP5AmericasEsparta +
      valores.cantidadEstimadaP6AmericasPatria +
      valores.cantidadEstimadaP7AvilaSantaElena +
      valores.cantidadEstimadaP8AvilaPatria +
      valores.cantidadEstimadaP9HidalgoLauralesJPabloii +
      valores.cantidadEstimadaP10EmilioLaureles +
      valores.cantidadEstimadaP11SarcofagoLaurelesJPabloii;

    try {
      const response = await fetch(constants.api + "adrenaje", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadBanosInstalados: valores.cantidadBanosInstalados,
          msjBanosInstalados: valores.msjBanosInstalados,
          cantidadUsuarios: sumatoriaUsuarios,
          msjUsuarios: valores.msjUsuarios,
          P1JMinaMatamoros: valores.P1JMinaMatamoros,
          cantidadEstimadaP1JMinaMatamoros:valores.cantidadEstimadaP1JMinaMatamoros,
          P2EvaSofia: valores.P2EvaSofia,
          cantidadEstimadaP2EvaSofia: valores.cantidadEstimadaP2EvaSofia,
          P3CincoMayoSofia: valores.P3CincoMayoSofia,
          cantidadEstimadaP3CincoMayoSofia:valores.cantidadEstimadaP3CincoMayoSofia,
          P4MixtonAmericas: valores.P4MixtonAmericas,
          cantidadEstimadaP4MixtonAmericas:valores.cantidadEstimadaP4MixtonAmericas,
          P5AmericasEsparta: valores.P5AmericasEsparta,
          cantidadEstimadaP5AmericasEsparta:valores.cantidadEstimadaP5AmericasEsparta,
          P6AmericasPatria: valores.P6AmericasPatria,
          cantidadEstimadaP6AmericasPatria:valores.cantidadEstimadaP6AmericasPatria,
          P7AvilaSantaElena: valores.P7AvilaSantaElena,
          cantidadEstimadaP7AvilaSantaElena:valores.cantidadEstimadaP7AvilaSantaElena,
          P8AvilaPatria: valores.P8AvilaPatria,
          cantidadEstimadaP8AvilaPatria: valores.cantidadEstimadaP8AvilaPatria,
          P9HidalgoLauralesJPabloii: valores.P9HidalgoLauralesJPabloii,
          cantidadEstimadaP9HidalgoLauralesJPabloii:valores.cantidadEstimadaP9HidalgoLauralesJPabloii,
          P10EmilioLaureles: valores.P10EmilioLaureles,
          cantidadEstimadaP10EmilioLaureles:valores.cantidadEstimadaP10EmilioLaureles,
          P11SarcofagoLaurelesJPabloii: valores.P11SarcofagoLaurelesJPabloii,
          cantidadEstimadaP11SarcofagoLaurelesJPabloii:valores.cantidadEstimadaP11SarcofagoLaurelesJPabloii,
          tipodependenciaaguadrenaje: 1,
          usuariorespondioDren: idUser,
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
        msjBanosInstalados: "Sin Obervaciones",
        msjUsuarios: "Sin Obervaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormAguaDrenaje(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-7">
              <img
                src={LogoAguaDrenaje}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Gestión Integral del Agua y Drenaje</h3>
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
              <label>Total de Baños Instalados</label>
            </div>
            <div className="col">
              <Field
                className="form-control"
                type="number"
                name="cantidadBanosInstalados"
                placeholder="Total de Baños Instalados"
                id="cantidadBanosInstalados"
                required
              />
            </div>
          </div>

          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                as="textarea"
                name="msjBanosInstalados"
                placeholder="..."
                required
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
              <label>Punto 1 Calle Javier Mina y Calle Matamoros</label>
            </div>
            <div className="col">
              <Field
                as="select"
                name="P1JMinaMatamoros"
                className=" form-select position-static"
                required
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                className="form-control"
                type="number"
                name="cantidadEstimadaP1JMinaMatamoros"
                placeholder="Usuarios"
                id="cantidadEstimadaP1JMinaMatamoros"
                required
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
              <label>Punto 2 Calle Eva Briseño y Calle Sofía Camarena</label>
            </div>
            <div className="col">
              <Field
                as="select"
                name="P2EvaSofia"
                className=" form-select position-static"
                required
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP2EvaSofia"
                placeholder="Usuarios"
                id="cantidadEstimadaP2EvaSofia"
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
              <label>Punto 3 Calle 5 de Mayo y Calle Sofía Camarena</label>
            </div>
            <div className="col">
              <Field
                as="select"
                name="P3CincoMayoSofia"
                className=" form-select position-static"
                required
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP3CincoMayoSofia"
                placeholder="Usuarios"
                id="cantidadEstimadaP3CincoMayoSofia"
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
              <label>Punto 4 Calle Mixtón y Av. Américas</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P4MixtonAmericas"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP4MixtonAmericas"
                placeholder="Usuarios"
                id="cantidadEstimadaP4MixtonAmericas"
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
              <label>Punto 5 Av. Américas y Esparta</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P5AmericasEsparta"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP5AmericasEsparta"
                placeholder="Usuarios"
                id="cantidadEstimadaP5AmericasEsparta"
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
              <label>Punto 6 Av. Américas y Av. Patria</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P6AmericasPatria"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP6AmericasPatria"
                placeholder="Usuarios"
                id="cantidadEstimadaP6AmericasPatria"
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
              <label>Punto 7 Av. Ávila Camacho y Calle Santa Elena</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P7AvilaSantaElena"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP7AvilaSantaElena"
                placeholder="Usuarios"
                id="cantidadEstimadaP7AvilaSantaElena"
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
              <label>Punto 8 Av. Ávila Camacho y Av. Patria</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P8AvilaPatria"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP8AvilaPatria"
                placeholder="Usuarios"
                id="cantidadEstimadaP8AvilaPatria"
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
                Punto 9 Av. Av. Hidalgo y Av. Laureles/Juan Pablo II
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P9HidalgoLauralesJPabloii"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP9HidalgoLauralesJPabloii"
                placeholder="Usuarios"
                id="cantidadEstimadaP9HidalgoLauralesJPabloii"
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
              <label>Punto 10 Calle Emilio Carranza y Av. Laureles</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P10EmilioLaureles"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP10EmilioLaureles"
                placeholder="Usuarios"
                id="cantidadEstimadaP10EmilioLaureles"
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
                Punto 11 Calle Sarcófago y Av. Laureles/Juan Pablo II
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="P11SarcofagoLaurelesJPabloii"
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
              <label>Cantidad Estimada de Usuarios</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadEstimadaP11SarcofagoLaurelesJPabloii"
                placeholder="Usuarios"
                id="cantidadEstimadaP11SarcofagoLaurelesJPabloii"
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

export default Form10AguaDrenaje;
