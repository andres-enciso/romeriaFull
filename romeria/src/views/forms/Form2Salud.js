import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoSalud from "../../images/logosdep/logo_salud.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

const Form2Salud = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;

  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  //**crear formulario */
  const fetchCreateForm = async (valores) => {
    try {
      const response = await fetch(constants.api + "salud", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadDeshidratacion: valores.cantidadDeshidratacion,
          msjDeshidratacion: valores.msjDeshidratacion,
          cantidadHipertension: valores.cantidadHipertension,
          msjHipertension: valores.msjHipertension,
          cantidadInfartoMiocardio: valores.cantidadInfartoMiocardio,
          msjInfartoMiocardio: valores.msjInfartoMiocardio,
          cantidadConvulsivos: valores.cantidadConvulsivos,
          msjConvulsivos: valores.msjConvulsivos,
          cantidadEnfRespiratoria: valores.cantidadEnfRespiratoria,
          msjEnfRespiratoria: valores.msjEnfRespiratoria,
          cantidadEnfGatrointestinal: valores.cantidadEnfGatrointestinal,
          msjEnfGatrointestinal: valores.msjEnfGatrointestinal,
          cantidadFebrilesExa: valores.cantidadFebrilesExa,
          msjFebrilesExa: valores.msjFebrilesExa,
          cantidadCefaleas: valores.cantidadCefaleas,
          msjCefaleas: valores.msjCefaleas,
          cantidadDiabetico: valores.cantidadDiabetico,
          msjDiabetico: valores.msjDiabetico,
          cantidadIntoxicacion: valores.cantidadIntoxicacion,
          msjIntoxicacion: valores.msjIntoxicacion,
          cantidadCaidas: valores.cantidadCaidas,
          msjCaidas: valores.msjCaidas,
          cantidadQuemaduras: valores.cantidadQuemaduras,
          msjQuemaduras: valores.msjQuemaduras,
          cantidadAtropellado: valores.cantidadAtropellado,
          msjAtropellado: valores.msjAtropellado,
          cantidadChoque: valores.cantidadChoque,
          msjChoque: valores.msjChoque,
          cantidadVolcadura: valores.cantidadVolcadura,
          msjVolcadura: valores.msjVolcadura,
          cantidadMuscoloesqueletico: valores.cantidadMuscoloesqueletico,
          msjMuscoloesqueletico: valores.msjMuscoloesqueletico,
          cantidadArmablanca: valores.cantidadArmablanca,
          msjArmablanca: valores.msjArmablanca,
          cantidadArmadefuego: valores.cantidadArmadefuego,
          msjArmadefuego: valores.msjArmadefuego,
          cantidadOtros: valores.cantidadOtros,
          msjOtros: valores.msjOtros,
          cantidaPediatrico: valores.cantidaPediatrico,
          msjPediatrico: valores.msjPediatrico,
          cantidadAdultos: valores.cantidadAdultos,
          msjAdultos: valores.msjAdultos,
          cantidadAdultoMayor: valores.cantidadAdultoMayor,
          msjAdultoMayor: valores.msjAdultoMayor,
          cantidadFemenino: valores.cantidadFemenino,
          msjFemenino: valores.msjFemenino,
          cantidadMasculino: valores.cantidadMasculino,
          msjMasculino: valores.msjMasculino,
          cantidadIntermedio: valores.cantidadIntermedio,
          msjIntermedio: valores.msjIntermedio,
          cantidadTransladados: valores.cantidadTransladados,
          msjTransladados: valores.msjTransladados,
          oKPunto1: valores.oKPunto1,
          msjPunto1: valores.msjPunto1,
          oKPunto2: valores.oKPunto2,
          msjPunto2: valores.msjPunto2,
          oKPunto3: valores.oKPunto3,
          msjPunto3: valores.msjPunto3,
          oKPunto4: valores.oKPunto4,
          msjPunto4: valores.msjPunto4,
          oKPunto5: valores.oKPunto5,
          msjPunto5: valores.msjPunto5,
          oKPunto6: valores.oKPunto6,
          msjPunto6: valores.msjPunto6,
          tipodependenciasalud: 1,
          usuariorespondio: idUser,
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
        msjAdultoMayor: "Sin Observaciones",
        msjAdultos: "Sin Observaciones",
        msjArmablanca: "Sin Observaciones",
        msjArmadefuego: "Sin Observaciones",
        msjAtropellado: "Sin Observaciones",
        msjCaidas: "Sin Observaciones",
        msjCefaleas: "Sin Observaciones",
        msjChoque: "Sin Observaciones",
        msjConvulsivos: "Sin Observaciones",
        msjDeshidratacion: "Sin Observaciones",
        msjDiabetico: "Sin Observaciones",
        msjEnfGatrointestinal: "Sin Observaciones",
        msjEnfRespiratoria: "Sin Observaciones",
        msjFebrilesExa: "Sin Observaciones",
        msjFemenino: "Sin Observaciones",
        msjHipertension: "Sin Observaciones",
        msjInfartoMiocardio: "Sin Observaciones",
        msjIntermedio: "Sin Observaciones",
        msjIntoxicacion: "Sin Observaciones",
        msjMasculino: "Sin Observaciones",
        msjMuscoloesqueletico: "Sin Observaciones",
        msjOtros: "Sin Observaciones",
        msjPediatrico: "Sin Observaciones",
        msjPunto1: "Sin Observaciones",
        msjPunto2: "Sin Observaciones",
        msjPunto3: "Sin Observaciones",
        msjPunto4: "Sin Observaciones",
        msjPunto5: "Sin Observaciones",
        msjPunto6: "Sin Observaciones",
        msjQuemaduras: "Sin Observaciones",
        msjTransladados: "Sin Observaciones",
        msjVolcadura: "Sin Observaciones",
      }}
      onSubmit={async (valores) => {
        fetchCreateForm(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoSalud}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Salud Zapopan</h3>
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
              <label>Deshidratación</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadDeshidratacion"
                placeholder="Cantidad Deshidratados"
                id="cantidadDeshidratacion"
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
                name="msjDeshidratacion"
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
              <label>Hipertensión</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadHipertension"
                placeholder="Cantidad Hipertensión"
                id="cantidadHipertension"
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
                name="msjHipertension"
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
              <label>Infarto al miocardio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadInfartoMiocardio"
                placeholder="Cantidad Infarto al miocardio"
                id="cantidadInfartoMiocardio"
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
                name="msjInfartoMiocardio"
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
              <label>Convulsivos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadConvulsivos"
                placeholder="Cantidad Convulsivos"
                id="cantidadConvulsivos"
              />
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field as="textarea" name="msjConvulsivos" placeholder="..." />
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Enf. Respiratoria</label>
            </div>
            <div className="col">
              <Field
                className="form-control"
                type="number"
                name="cantidadEnfRespiratoria"
                placeholder="Cantidad Enf. Respiratoria"
                id="cantidadEnfRespiratoria"
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
                name="msjEnfRespiratoria"
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
              <label>Enf. Gatrointestinal</label>
            </div>
            <div className="col">
              <Field
                className="form-control"
                type="number"
                name="cantidadEnfGatrointestinal"
                placeholder="Cantidad Enf. Gatrointestinal"
                id="cantidadEnfGatrointestinal"
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
                name="msjEnfGatrointestinal"
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
              <label>Febriles/Exantemati</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadFebrilesExa"
                placeholder="Cantidad Febriles/Exantemati"
                id="cantidadFebrilesExa"
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
                name="msjFebrilesExa"
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
              <label>Cefaleas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadCefaleas"
                placeholder="Cantidad Cefaleas"
                id="cantidadCefaleas"
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
                name="msjCefaleas"
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
              <label>Diabético</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadDiabetico"
                placeholder="Cantidad Diabetico"
                id="cantidadDiabetico"
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
                name="msjDiabetico"
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
              <label>Intoxicación</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadIntoxicacion"
                placeholder="Cantidad Intoxicacion"
                id="cantidadIntoxicacion"
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
                name="msjIntoxicacion"
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
              <label>Caídas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadCaidas"
                placeholder="Cantidad Caídas"
                id="cantidadCaidas"
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
                name="msjCaidas"
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
              <label>Quemaduras</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadQuemaduras"
                placeholder="Cantidad Quemaduras"
                id="cantidadQuemaduras"
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
                name="msjQuemaduras"
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
              <label>Atropellado</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAtropellado"
                placeholder="Cantidad Atropellado"
                id="cantidadAtropellado"
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
                name="msjAtropellado"
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
              <label>Choque</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadChoque"
                placeholder="Cantidad Choque"
                id="cantidadChoque"
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
                name="msjChoque"
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
              <label>Volcadura</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadVolcadura"
                placeholder="Cantidad Volcadura"
                id="cantidadVolcadura"
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
                name="msjVolcadura"
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
              <label>Muscoloesquelético</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMuscoloesqueletico"
                placeholder="Cantidad Muscoloesqueletico"
                id="cantidadMuscoloesqueletico"
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
                name="msjMuscoloesqueletico"
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
              <label>Arma blanca</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadArmablanca"
                placeholder="Cantidad Arma blanca"
                id="cantidadArmablanca"
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
                name="msjArmablanca"
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
              <label>Arma de fuego</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadArmadefuego"
                placeholder="Cantidad Arma de fuego"
                id="cantidadArmadefuego"
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
                name="msjArmadefuego"
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
              <label>Otros</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadOtros"
                placeholder="Cantidad Otros"
                id="cantidadOtros"
              />
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Observaciones</label>
            </div>
            <div className="col">
              <Field required as="textarea" name="msjOtros" placeholder="..." />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Personas Atendidas</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Pediátrico de 0 a 15 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidaPediatrico"
                placeholder="Cantidad Pediatrico de 0 a 15 años"
                id="cantidadPediatrico"
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
                name="msjPediatrico"
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
              <label>Adultos de 15 a 60 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultos"
                placeholder="Cantidad Adultos de 15 a 60 años"
                id="cantidadAdultos"
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
                name="msjAdultos"
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
              <label>Adulto Mayor más de 60 años</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadAdultoMayor"
                placeholder="Cantidad Adulto Mayor más de 60 años"
                id="cantidadAdultoMayor"
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
                name="msjAdultoMayor"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Sexo</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <div className="col">
              <label>Clave</label>
            </div>
          </div>
          <div className="row row-styes">
            <div className="col">
              <label>Femenino</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadFemenino"
                placeholder="Cantidad Femenino"
                id="cantidadFemenino"
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
                name="msjFemenino"
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
              <label>Masculino</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadMasculino"
                placeholder="Cantidad Masculino"
                id="cantidadMasculino"
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
                name="msjMasculino"
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
              <label>Intermedio</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadIntermedio"
                placeholder="Cantidad Intermedio"
                id="cantidadIntermedio"
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
                name="msjIntermedio"
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
              <label>Pacientes Transladados</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadTransladados"
                placeholder="Cantidad de Pacientes Transladados"
                id="cantidadTransladados"
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
                name="msjTransladados"
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
              <label>Punto 1 Calle San Jorge y Av. Ávila Camacho</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto1"
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
                name="msjPunto1"
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
              <label>Punto 2 Calle Santa Elena y Av. Ávila Camacho</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto2"
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
                name="msjPunto2"
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
              <label>Punto 3 Calle Esparta y Av. Américas</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto3"
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
                name="msjPunto3"
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
                Punto 4 Calle Miguel León Portilla (antes Ávila Camacho) y Av.
                Patria
              </label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto4"
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
                name="msjPunto4"
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
              <label>Punto 5 Atrio Basílica de Zapopan</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto5"
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
                name="msjPunto5"
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
              <label>Punto 6 Kiosco Plaza de las Américas Juan Pablo II</label>
            </div>
            <div className="col">
              <Field
                required
                as="select"
                name="oKPunto6"
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
                name="msjPunto6"
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

export default Form2Salud;
