import React from "react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import LogoInspeccion from "../../images/logosdep/logo_inspeccionyvigilancia.png";
import "../../styles/styles.css";
import constants from "../utils/constants";

const Form5InspeccionyVigilancia = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const data = loggedUserType;
  const idUser = data.idUsuarios;
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }
  const fetchCreateFormVigilancia = async (valores) => {
    try {
      const response = await fetch(constants.api + "inspeccionvig", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cantidadActasConDecomisoZona: valores.cantidadActasConDecomisoZona,
          cantidadActasConDecomisoRutaEvac:valores.cantidadActasConDecomisoRutaEvac,
          msjActasDecomiso: valores.msjActasDecomiso,
          cantidadActasComercioEstab: valores.cantidadActasComercioEstab,
          msjActasComercioEstab: valores.msjActasComercioEstab,
          cantidadClausurasComEstablecido:valores.cantidadClausurasComEstablecido,
          msjClausurasComEstablecido: valores.msjClausurasComEstablecido,
          cantidadClausuraLeySeca: valores.cantidadClausuraLeySeca,
          msjClausuraLeySeca: valores.msjClausuraLeySeca,
          cantidadClausurasJMecanicos: valores.cantidadClausurasJMecanicos,
          msjClausurasJMecanicos: valores.msjClausurasJMecanicos,
          cantidadClausuraInfraccDiversas:valores.cantidadClausuraInfraccDiversas,
          msjClausuraInfraccDiversas: valores.msjClausuraInfraccDiversas,
          tipodependenciainspeccion: 1,
          usuariorespondioVig: idUser,
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
        text: "Intente de nuevo y recargue la página",
      });
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <Formik
      initialValues={{
        msjActasComercioEstab: "Sin Observaciones",
        msjActasDecomiso: "Sin Observaciones",
        msjClausuraInfraccDiversas: "Sin Observaciones",
        msjClausuraLeySeca: "Sin Observaciones",
        msjClausurasComEstablecido: "Sin Observaciones",
        msjClausurasJMecanicos: "Sin Observaciones",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        fetchCreateFormVigilancia(valores);
      }}
    >
      {() => (
        <Form className="form-group card-forms">
          <div className="row">
            <div className="col-9">
              <img
                src={LogoInspeccion}
                alt="Girl in a jacket"
                width="150"
                height="100"
              />
            </div>
            <div className="col centerText">
              <h3>Inspección y Vigilancia</h3>
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Actas con Decomisos</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>En Zona</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadActasConDecomisoZona"
                placeholder="En Zona"
                id="cantidadActasConDecomisoZona"
              />
            </div>
          </div>
          <div className="row row-styes">
            <div className="col-6">
              <label>En Ruta de Evacuación</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadActasConDecomisoRutaEvac"
                placeholder="En Ruta de Evacuación"
                id="cantidadActasConDecomisoRutaEvac"
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
                name="msjActasDecomiso"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Actas de Comercio establecido</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>Actas de Comercio establecido</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadActasComercioEstab"
                placeholder="Actas de Comercio establecido"
                id="cantidadActasComercioEstab"
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
                name="msjActasComercioEstab"
                placeholder="..."
              />
            </div>
          </div>

          <div className="row row-styes-clave">
            <h5>Clausuras</h5>
            <div className="col">
              <label>Clave</label>
            </div>
          </div>

          <div className="row row-styes">
            <div className="col-6">
              <label>Comercio establecido</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadClausurasComEstablecido"
                placeholder="Comercio establecid"
                id="cantidadClausurasComEstablecido"
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
                name="msjClausurasComEstablecido"
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
              <label>Ley Seca</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadClausuraLeySeca"
                placeholder="Ley Seca"
                id="cantidadClausuraLeySeca"
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
                name="msjClausuraLeySeca"
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
              <label>Juegos mecánicos</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadClausurasJMecanicos"
                placeholder="Juegos mecánicos"
                id="cantidadClausurasJMecanicos"
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
                name="msjClausurasJMecanicos"
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
              <label>Infracciones Diversas</label>
            </div>
            <div className="col">
              <Field
                required
                className="form-control"
                type="number"
                name="cantidadClausuraInfraccDiversas"
                placeholder="Infracciones Diversas"
                id="cantidadClausuraInfraccDiversas"
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
                name="msjClausuraInfraccDiversas"
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

export default Form5InspeccionyVigilancia;
