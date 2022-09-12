import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoAseoPublico from "../../images/logosdep/logo_aseopublico.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

// Contruccion de cominidad Form

const Form9AseoPublico = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormAseop = async (valores) => {
    try {
      const response = await fetch(constants.api + "aseopublico", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadToneladasRecibidasPicachos:valores.cantidadToneladasRecibidasPicachos,
          msjToneladasRecibidasPicachos: valores.msjToneladasRecibidasPicachos,
          cantidadToneladasOperativoBarridoManual:valores.cantidadToneladasOperativoBarridoManual,
          msjToneladasOperativoBarridoManual:valores.msjToneladasOperativoBarridoManual,
          ContenedorAmericaEsparta: valores.ContenedorAmericaEsparta,
          msjContenedorAmericaEsparta: valores.msjContenedorAmericaEsparta,
          ContenedorAurelioJuanpabloii: valores.ContenedorAurelioJuanpabloii,
          msjContenedorAurelioJuanpabloii:valores.msjContenedorAurelioJuanpabloii,
          SarcofagoLaureles: valores.SarcofagoLaureles,
          msjSarcofagoLaureles: valores.msjSarcofagoLaureles,
          HidalgoECarranza: valores.HidalgoECarranza,
          msjHidalgoECarranza: valores.msjHidalgoECarranza,
          VillaFantasia: valores.VillaFantasia,
          msjVillaFantasia: valores.msjVillaFantasia,
          LaurelesIndustria: valores.LaurelesIndustria,
          msjLaurelesIndustria: valores.msjLaurelesIndustria,
          PlazaPatria: valores.PlazaPatria,
          msjPlazaPatria: valores.msjPlazaPatria,
          PetAmericasRomanos: valores.PetAmericasRomanos,
          msjPetAmericasRomanos: valores.msjPetAmericasRomanos,
          PetPetAmericasMixton: valores.PetPetAmericasMixton,
          msjPetAmericasMixton: valores.msjPetAmericasMixton,
          PetLaurelesHidalgo: valores.PetLaurelesHidalgo,
          msjPetLaurelesHidalgo: valores.msjPetLaurelesHidalgo,
          tipodependenciaaseopub: 1,
          usuariorespondioAseo: idUser,
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
        msjContenedorAmericaEsparta: "Sin Observaciones",
        msjContenedorAurelioJuanpabloii: "Sin Observaciones",
        msjHidalgoECarranza: "Sin Observaciones",
        msjLaurelesIndustria: "Sin Observaciones",
        msjPetAmericasMixton: "Sin Observaciones",
        msjPetAmericasRomanos: "Sin Observaciones",
        msjPetLaurelesHidalgo: "Sin Observaciones",
        msjPlazaPatria: "Sin Observaciones",
        msjSarcofagoLaureles: "Sin Observaciones",
        msjToneladasOperativoBarridoManual: "Sin Observaciones",
        msjToneladasRecibidasPicachos: "Sin Observaciones",
        msjVillaFantasia: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormAseop(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoAseoPublico}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Aseo Público</h3>
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
              <label>Toneladas de residuos recibidas (Picachos)</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadToneladasRecibidasPicachos"
                placeholder="Toneladas Recibidas"
                id="cantidadToneladasRecibidasPicachos"
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
                name="msjToneladasRecibidasPicachos"
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
              <label>Toneladas Operativo Aseo (Barrido manual)</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadToneladasOperativoBarridoManual"
                placeholder="Toneladas Operativo Aseo (Barrido manual)"
                id="cantidadToneladasOperativoBarridoManual"
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
                name="msjToneladasOperativoBarridoManual"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Tareas Contenedores</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Américas y Esparta</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="ContenedorAmericaEsparta"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjContenedorAmericaEsparta"
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
              <label>Aurelio Ortega y Juan Pablo II</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="ContenedorAurelioJuanpabloii"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjContenedorAurelioJuanpabloii"
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
              <label>Sarcofago y Av. Laureles</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="SarcofagoLaureles"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjSarcofagoLaureles"
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
              <label>Av. Hidalgo y Emilio Carranza</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="HidalgoECarranza"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjHidalgoECarranza"
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
              <label>Villa Fantasía</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="VillaFantasia"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjVillaFantasia"
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
              <label>Villa Fantasía</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="LaurelesIndustria"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjLaurelesIndustria"
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
              <label>Plaza Patria</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PlazaPatria"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjPlazaPatria"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Tareas PET</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col form-check">
              <label>Américas y Romanos</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PetAmericasRomanos"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjPetAmericasRomanos"
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
              <label>Américas y Mixtón</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PetPetAmericasMixton"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjPetAmericasMixton"
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
              <label>Laureles y Av. Hidalgo</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="PetLaurelesHidalgo"
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
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field
                required
                as="textarea"
                name="msjPetLaurelesHidalgo"
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

export default Form9AseoPublico;
