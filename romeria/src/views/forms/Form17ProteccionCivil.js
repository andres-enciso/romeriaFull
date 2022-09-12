import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoProteccion from "../../images/logosdep/logo_proteccioncivil.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form17ProteccionCivil = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormPCivil = async (valores) => {
    try {
      const response = await fetch(constants.api + "pcivil", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadComSiCumplioNormas: valores.cantidadComSiCumplioNormas,
          msjComSiCumplioNormas: valores.msjComSiCumplioNormas,
          cantidadComNoCumplioNormas: valores.cantidadComNoCumplioNormas,
          msjComNoCumplioNormas: valores.msjComNoCumplioNormas,
          cantidadDeteccionClausuraGasLp:
            valores.cantidadDeteccionClausuraGasLp,
          msjDeteccionClausuraGasLp: valores.msjDeteccionClausuraGasLp,
          cantidadComerInspecc: valores.cantidadComerInspecc,
          msjComerInspecc: valores.msjComerInspecc,
          cantidadPersonasAtendModu: valores.cantidadPersonasAtendModu,
          msjPersonasAtendModu: valores.msjPersonasAtendModu,
          cantidadServIntinRealizados: valores.cantidadServIntinRealizados,
          msjServIntinRealizados: valores.msjServIntinRealizados,
          Mod1PlzCaudillos: valores.Mod1PlzCaudillos,
          msjMod1PlzCaudillos: valores.msjMod1PlzCaudillos,
          Mod2AndadorNovAmericas: valores.Mod2AndadorNovAmericas,
          msjMod2AndadorNovAmericas: valores.msjMod2AndadorNovAmericas,
          Mod3AmericasMixton: valores.Mod3AmericasMixton,
          msjMod3AmericasMixton: valores.msjMod3AmericasMixton,
          Mod4AmericasRomanos: valores.Mod4AmericasRomanos,
          msjMod4AmericasRomanos: valores.msjMod4AmericasRomanos,
          Mod5AmericasPatria: valores.Mod5AmericasPatria,
          msjMod5AmericasPatria: valores.msjMod5AmericasPatria,
          Mod66AvilaObelisco: valores.Mod66AvilaObelisco,
          msjMod66AvilaObelisco: valores.msjMod66AvilaObelisco,
          Mod7AvilaJacarandas: valores.Mod7AvilaJacarandas,
          msjMod7AvilaJacarandas: valores.msjMod7AvilaJacarandas,
          MotobombaHidalgoZapata: valores.MotobombaHidalgoZapata,
          msjMotobombaHidalgoZapata: valores.msjMotobombaHidalgoZapata,
          PipaAguaCamachoPatria: valores.PipaAguaCamachoPatria,
          msjPipaAguaCamachoPatria: valores.msjPipaAguaCamachoPatria,
          PipaAguaLaurelesJManuel: valores.PipaAguaLaurelesJManuel,
          msjPipaAguaLaurelesJManuel: valores.msjPipaAguaLaurelesJManuel,
          InstModGrpUSAR: valores.InstModGrpUSAR,
          msjInstModGrpUSAR: valores.msjInstModGrpUSAR,
          tipodependenciapcivil: 1,
          usuariorespondioPcivil: idUser,
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
        msjComNoCumplioNormas: "Sin Observaciones",
        msjComSiCumplioNormas: "Sin Observaciones",
        msjComerInspecc: "Sin Observaciones",
        msjDeteccionClausuraGasLp: "Sin Observaciones",
        msjInstModGrpUSAR: "Sin Observaciones",
        msjMod1PlzCaudillos: "Sin Observaciones",
        msjMod2AndadorNovAmericas: "Sin Observaciones",
        msjMod3AmericasMixton: "Sin Observaciones",
        msjMod4AmericasRomanos: "Sin Observaciones",
        msjMod5AmericasPatria: "Sin Observaciones",
        msjMod7AvilaJacarandas: "Sin Observaciones",
        msjMod66AvilaObelisco: "Sin Observaciones",
        msjMotobombaHidalgoZapata: "Sin Observaciones",
        msjPersonasAtendModu: "Sin Observaciones",
        msjPipaAguaCamachoPatria: "Sin Observaciones",
        msjPipaAguaLaurelesJManuel: "Sin Observaciones",
        msjServIntinRealizados: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormPCivil(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoProteccion}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Protección Civil y Bomberos</h3>
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
              <label>Comercio que SI cumplió las normas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadComSiCumplioNormas"
                placeholder="Cantidad"
                id="cantidadComSiCumplioNormas"
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
                name="msjComSiCumplioNormas"
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
              <label>Comercio que NO cumplió las normas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadComNoCumplioNormas"
                placeholder="Cantidad"
                id="cantidadComNoCumplioNormas"
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
                name="msjComNoCumplioNormas"
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
              <label>Detecciones y clausura sobre uso de gas lp</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadDeteccionClausuraGasLp"
                placeholder="Cantidad"
                id="cantidadDeteccionClausuraGasLp"
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
                name="msjDeteccionClausuraGasLp"
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
              <label>Comerciantes inspeccionados</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadComerInspecc"
                placeholder="Cantidad"
                id="cantidadComerInspecc"
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
                name="msjComerInspecc"
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
              <label>Personas atendidas en módulos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadPersonasAtendModu"
                placeholder="Cantidad"
                id="cantidadPersonasAtendModu"
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
                name="msjPersonasAtendModu"
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
              <label>Servicios intinerantes realizados</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadServIntinRealizados"
                placeholder="Cantidad"
                id="cantidadServIntinRealizados"
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
                name="msjServIntinRealizados"
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
              <label>Módulo 1 Plaza Caudillos</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod1PlzCaudillos"
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
                name="msjMod1PlzCaudillos"
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
                Módulo 2 Andador 20 de noviembre y Av. Américas (Arco)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod2AndadorNovAmericas"
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
                name="msjMod2AndadorNovAmericas"
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
              <label>Módulo 3 Av. Américas y Mixtón</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod3AmericasMixton"
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
                name="msjMod3AmericasMixton"
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
              <label>Módulo 4 Av. Américas y Romanos</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod4AmericasRomanos"
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
                name="msjMod4AmericasRomanos"
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
              <label>Módulo 5 Av. Américas y Av. Patria</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod5AmericasPatria"
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
                name="msjMod5AmericasPatria"
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
              <label>Módulo 6 Av. Ávila Camacho y Obelisco</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod66AvilaObelisco"
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
                name="msjMod66AvilaObelisco"
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
              <label>Módulo 7 Av. Ávila Camacho y Jacarandas</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="Mod7AvilaJacarandas"
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
                name="msjMod7AvilaJacarandas"
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
              <label>Motobomba (Hidalgo y Emiliano Zapata)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="MotobombaHidalgoZapata"
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
                name="msjMotobombaHidalgoZapata"
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
              <label>Pipa de agua (Av. Camacho y Av. Patria)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PipaAguaCamachoPatria"
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
                name="msjPipaAguaCamachoPatria"
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
              <label>Pipa de agua (Av. Laureles y Juan Manuel)</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PipaAguaLaurelesJManuel"
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
                name="msjPipaAguaLaurelesJManuel"
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
                Instalación de módulo de grupo USAR, (Av. Patria y calle Miguel
                León Portilla antes Ávila Camacho)
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="InstModGrpUSAR"
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
                name="msjInstModGrpUSAR"
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

export default Form17ProteccionCivil;
