import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DashboardContent from "./Dashboard";
import ReactDOM from "react-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import "../styles/styles.css";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import constants from "./utils/constants";

export default function Usuarios() {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const typeUser = loggedUserType?.rolUsuario;
  console.log(typeUser);

  if (typeUser != 1) {
    window.location.replace("/DashboardEmpleado");
  }

  const [usuarios, setUsuarios] = useState([]);
  const [rolegegido, setRolelegido] = useState([]);
  const [depElegida, setDepElegida] = useState([]);
  const [roles, setroles] = useState([]);
  const [dependencias, setDependencias] = useState([]);

  const dataTable = usuarios.filter((item) => item.visible == true);

  /**COLUMNAS DATAGRID */
  const columns = [
    { field: "idUsuarios", headerName: "ID", width: 50, padingLeft: 15 },
    { field: "nombre", headerName: "Nombre", width: 175 },
    { field: "apellido", headerName: "Apellido", width: 175 },
    { field: "correo", headerName: "Correo", width: 175 },
    { field: "noEmpleado", headerName: "No. Empleado", width: 175 },
    { field: "telefono", headerName: "Teléfono", width: 145 },
    {
      field: "Eliminar",
      width: 130,
      sortable: false,

      renderCell: (params) => {
        return (
          <>
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon className="icon-center" />}
              onClick={() =>
                ConfirmAlert(JSON.stringify(params.row.idUsuarios, null, 4))
              }
            />
          </>
        );
      },
    },
  ];

  const idUser = loggedUserType?.idUsuarios;
  console.log(idUser);

  /**ALERTA ELIMINAR */
  const ConfirmAlert = async (id) => {
    if (id != idUser) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "Este cambio será permanente!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Eliminar!",
        cancelButtonText: "Cancelar",
        iconColor: "#d33",
      }).then((result) => {
        if (result.isConfirmed) {
          onDelete(id);
          Swal.fire("Eliminado!", "El usuario fue Eliminado.", "success");
        }
      });
    }
    if (id == idUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No es posible eliminar tu propia cuenta.",
      });
    }
  };

  /**ELIMINAR USUARIOS */
  const onDelete = async (idUsuarios) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        constants.api + "users/delete/" + idUsuarios,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            visible: false,
          }),
        }
      );
      await response.json();
      fetchUser();
    } catch (error) {
      alert("Error en el servidor, intentelo de nuevo", error);
    }
  };

  /**CREAR USUARIOS */
  const fetchCreateUser = async (valores) => {
    try {
      const response = await fetch(constants.api + "register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: valores.nombre,
          apellido: valores.apellido,
          telefono: valores.telefono.toString(),
          correo: valores.correo,
          contrasena: valores.contrasena,
          noEmpleado: valores.noEmpleado,
          rolUsuario: rolegegido.id,
          tipodependencia: depElegida.id,
        }),
      });
      const result = await response.json();
      if (result) {
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El Contacto se ha creado con exito",
          showConfirmButton: false,
          timer: 3000,
        });
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Ocurrio un error al registrar el contacto",
          text: "Intente de nuevo",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ocurrio un error al registrar el contacto",
        text: "Intente de nuevo",
      });
    }
  };

  /**CONSULTAR USUARIOS */
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    if (result) {
      setUsuarios(result);
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "No autenticado, favor de volverse a ingresar.",
        text: "Intente de nuevo",
      });
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  //onChanges
  const handleInputRol = (event, values) => {
    setRolelegido(values);
  };

  const handleInputDep = (event, values) => {
    setDepElegida(values);
  };

  /**CONSULTAR ROLES */
  const fetchroles = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "roles", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();

    if (result) {
      let arrayTipo = [];
      for (const key in result) {
        arrayTipo.push({
          label: result[key].tipoRol,
          id: result[key].idRol,
        });
      }
      setroles(arrayTipo);
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "No autenticado, favor de volverse a ingresar.",
        text: "Intente de nuevo",
      });
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  /**CONSULTAR DEPS */
  const fetchdependencias = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dependencia", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();

    if (result) {
      let arrayTipo = [];
      for (const key in result) {
        arrayTipo.push({
          label: result[key].nombreDependencia,
          id: result[key].idDependencia,
        });
      }
      setDependencias(arrayTipo);
    } else if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "No autenticado, favor de volverse a ingresar.",
        text: "Intente de nuevo",
      });
      localStorage.clear();
      window.location.replace("/login");
    }
  };

  useEffect(() => {
    fetchUser();
    fetchroles();
    fetchdependencias();
  }, []);

  return (
    <DashboardContent>
      <div className="container">
        <div className="container">
          <div className="row header-users">
            <div className="col title-users">Usuarios</div>
            <div className="col add-users"></div>
          </div>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={dataTable}
            columns={columns}
            getRowId={(row) => row.idUsuarios}
            pageSize={5}
          />
        </div>
        <br />
        <br />
        <Formik
          initialValues={{
            nombre: "",
          }}
          onSubmit={async (valores) => {
            fetchCreateUser(valores);
          }}
        >
          {() => (
            <Form className="form-group card-forms">
              <div className="col">
                <h4>Registrar Usuario</h4>
              </div>
              <br />

              <div className="row row-styes">
                <div className="col">
                  <label>Nombre:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    id="nombre"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col">
                  <label>Apellido:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    id="apellido"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col-6">
                  <label>Dependencia</label>
                </div>
                <div className="col-6">
                  <Autocomplete
                    onChange={handleInputDep}
                    value={depElegida}
                    className=" form-control"
                    name="rol"
                    required
                    disablePortal
                    id="rol"
                    getOptionLabel={(options) => options.label || ""}
                    options={dependencias}
                    fullWidth={true}
                    renderInput={(params) => (
                      <TextField
                        className=" form-control"
                        id="rol"
                        name="rol"
                        variant="standard"
                        {...params}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col">
                  <label>Teléfono:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="text"
                    name="telefono"
                    placeholder="Teléfono"
                    id="telefono"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col">
                  <label>Correo:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="email"
                    name="correo"
                    placeholder="Correo@Correo.com"
                    id="correo"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col">
                  <label>Contraseña:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="password"
                    name="contrasena"
                    placeholder="********"
                    id="contrasena"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col">
                  <label>No. Empleado:</label>
                </div>
                <div className="col">
                   <Field
                    required
                    className="form-control"
                    type="number"
                    name="noEmpleado"
                    placeholder="No. Empleado"
                    id="noEmpleado"
                  />
                </div>
              </div>

              <div className="row row-styes">
                <div className="col-6">
                  <label>Rol</label>
                </div>
                <div className="col-6">
                  <Autocomplete
                    onChange={handleInputRol}
                    value={rolegegido}
                    className=" form-control"
                    name="rol"
                    required
                    disablePortal
                    id="rol"
                    getOptionLabel={(options) => options.label || ""}
                    options={roles}
                    fullWidth={true}
                    renderInput={(params) => (
                      <TextField
                        className=" form-control"
                        id="rol"
                        name="rol"
                        variant="standard"
                        {...params}
                      />
                    )}
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
      </div>
    </DashboardContent>
  );
}

if (document.getElementById("usuarios")) {
  ReactDOM.render(<Usuarios />, document.getElementById("usuarios"));
}
