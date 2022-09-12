import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/styles.css";
import romeria from "../images/logosdep/IMAGEN ROMERIA 2022.png";
import constants from "./utils/constants";
import Swal from "sweetalert2";
import { TextField } from "@mui/material";

const theme = createTheme();

export default function Login() {
  localStorage.clear();
  const [correo, setCorro] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleInputUser = (event) => {
    setCorro(event.target.value);
  };
  const handleInputPass = (event) => {
    setContrasena(event.target.value);
  };

  const submit = async () => {
    try {
      const rawResponse = await fetch(constants.api + "login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo: correo, contrasena: contrasena }),
      });
      const result = await rawResponse.json();

      if (result) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("data", JSON.stringify(result.data));
        if (result.data.rolUsuario == 1) {
          window.location.replace("/dashboard");
        }
        if (result.data.rolUsuario == 2) {
          window.location.replace("/dashboardempleado");
        }
        if (result.data.visible == false) {
          window.location.replace("/usuariosEliminado");
        }
      } else if (!result) {
        console.log(result);
        return;
      }
    } catch (err) {
      Swal.fire({
        title: "El nombre de usuario o contraseña son incorrectos",
        timer: 3000,
        showCancelButton: false,
        showConfirmButton: false,
        position: "top",
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col mb-5 mb-lg-0 contents">
              <h1 className="my-5 display-5 fw-bold ls-tight">
                Romería 2022 <br />
                <span>Gobierno de Zapopan</span>
              </h1>
              <p className="mb-4 logint-text">
                La Romería de la Virgen de Zapopan, tradición centenaria, 288
                años de historia.
                <br />
                Desde 1734, se celebra la famosa “Llevada de la Virgen” desde la
                Catedral Metropolitana de Guadalajara hasta su santuario en la
                Basílica de Zapopan; un andar de aproximadamente 8 kilómetros
                que se realizan caminando.
              </p>
            </div>

            <div className="col mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3"></i>
                    <span className="h1 fw-bold mb-0 rom-posc">
                      <img src={romeria} alt="" className="posicion-romeria " />
                    </span>
                  </div>

                  <p className="loginp">Ingresa a tu cuenta</p>

                  <TextField
                    fullWidth
                    sx={{ m: 1 }}
                    id="outlined-basicCorr"
                    label="Correo Electronico"
                    variant="outlined"
                    value={correo}
                    onChange={handleInputUser}
                    type="text"
                    name="correo"
                  />

                  <TextField
                    fullWidth
                    sx={{ m: 1 }}
                    id="outlined-basicPass"
                    label="Contraseña"
                    variant="outlined"
                    value={contrasena}
                    onChange={handleInputPass}
                    type="password"
                    name="contrasena"
                    autoComplete="off"
                  />

                  <div className="form-outline mb-4 login">
                    <button
                      className="btn btn-primary btn-lg btn-block "
                      onClick={submit}
                    >
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
