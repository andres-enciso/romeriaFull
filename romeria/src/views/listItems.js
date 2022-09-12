import * as React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import "../styles/styles.css";

const loggedUserType = JSON.parse(localStorage.getItem("data"));
const typeUser = loggedUserType?.rolUsuario;

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/Dashboard">
      <i className="material-icons ">dashboard</i>
      <ListItemText primary="Dashboard" className="padding-aling2" />
    </ListItem>

    <ListItem button component={Link} to="/usuarios">
      <i className="material-icons ">people</i>
      <ListItemText primary="Usuarios" className="padding-aling2" />
    </ListItem>

    <ListItem button component={Link} to="/formatos">
      <i className="material-icons ">format_list_bulleted</i>
      <ListItemText primary="Formatos" className="padding-aling2" />
    </ListItem>

    <ListItem button component={Link} to="/consultas">
      <i className="material-icons ">content_paste</i>
      <ListItemText primary="Consultas" className="padding-aling2" />
    </ListItem>
  </div>
);

function clearData() {
  localStorage.clear();
  window.location.replace("/");
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Mi Cuenta</ListSubheader>

    {typeUser == 2 ? (
      <ListItem button component={Link} to="/dashboardempleado">
        <i className="material-icons ">dashboard</i>
        <ListItemText primary="Formato" className="padding-aling2" />
      </ListItem>
    ) : null}

    <ListItem button component={Link} to="/miCuenta">
      <i className="material-icons ">account_circle</i>
      <ListItemText primary="Mi Cuenta" className="padding-aling2" />
    </ListItem>

    <ListItem button component={Link} to="/" onClick={clearData}>
      <i className="material-icons ">logout</i>

      <ListItemText primary="Cerrar Sesión" className="padding-aling2" />
    </ListItem>
  </div>
);
