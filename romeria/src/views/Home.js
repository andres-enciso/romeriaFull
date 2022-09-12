import { useState, useEffect } from "react";
import DashboardContent from "./Dashboard";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import constants from "./utils/constants";

const Home = () => {
  const loggedUserType = JSON.parse(localStorage.getItem("data"));
  const visible = loggedUserType?.visible;
  if (visible == false) {
    window.location.replace("/usuariosEliminado");
  }

  const [usuarios, setUsuarios] = useState([]);
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

  const [sindicatura, setsindicatura] = useState([]);
  const [tianguis, setTianguis] = useState([]);
  const [segp, setSegp] = useState([]);
  const [salud, setSalud] = useState([]);
  const [reca, setreca] = useState([]);
  const [data, setData] = useState([]);
  const [murbano, setMurbano] = useState([]);
  const [inspeccion, setInspeccion] = useState([]);
  const [innova, setInnova] = useState([]);
  const [dif, setDif] = useState([]);
  const [constr, setConstr] = useState([]);
  const [conserv, setconserv] = useState([]);
  const [aseop, setAseop] = useState([]);
  const [alumbrado, setAlumbrado] = useState([]);
  const [analisis, setAnalisis] = useState([]);
  const [drenaje, setDrenaje] = useState([]);

  const totalSindi = sindicatura.length;
  const totaltianguis = tianguis.length;
  const totalsegp = segp.length;
  const totalsalud = salud.length;
  const totalreca = reca.length;
  const totaldata = data.length;
  const totalmurbano = murbano.length;
  const totalinspeccion = inspeccion.length;
  const totalinnova = innova.length;
  const totaldif = dif.length;
  const totalconstr = constr.length;
  const totalconserv = conserv.length;
  const totalaseop = aseop.length;
  const totalalumbrado = alumbrado.length;
  const totalanalisis = analisis.length;
  const totaldrenaje = drenaje.length;

  const sumatotal =
    totalSindi +
    totaltianguis +
    totaldrenaje +
    totalanalisis +
    totalalumbrado +
    totalaseop +
    totalconserv +
    totalconstr +
    totaldif +
    totalinnova +
    totalinspeccion +
    totalmurbano +
    totalsegp +
    totalsalud +
    totalreca +
    totaldata;

  const fetchTotalSindicatura = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "sindicatura", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setsindicatura(result);
  };
  const fetchTianguis = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "tianguis", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setTianguis(result);
  };
  const fetchSegp = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "segPublica", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSegp(result);
  };
  const fetchSalud = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "salud", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setSalud(result);
  };
  const fetchreca = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "recaudadora", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setreca(result);
  };
  const fetchPCivl = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "pcivil", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setData(result);
  };
  const fetchMurbano = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "mejoramientourbano", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setMurbano(result);
  };
  const fetchInsp = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "inspeccionvig", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setInspeccion(result);
  };
  const fetchInnovacion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "innovacion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setInnova(result);
  };
  const fetchDif = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "dif", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setDif(result);
  };
  const fetchConstruccion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "construccion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setConstr(result);
  };
  const fetchConservacion = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "conservacion", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setconserv(result);
  };
  const fetchApublico = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "aseopublico", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAseop(result);
  };
  const fetchalumbrado = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "alumbrado", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAlumbrado(result);
  };
  const fetchEstrategico = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "analisisestrategico", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setAnalisis(result);
  };
  const fetchAdrenaje = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(constants.api + "adrenaje", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    const result = await response.json();
    setDrenaje(result);
  };
  useEffect(() => {
    fetchUser();
    fetchTianguis();
    fetchTotalSindicatura();
    fetchSegp();
    fetchSalud();
    fetchPCivl();
    fetchreca();
    fetchMurbano();
    fetchInsp();
    fetchInnovacion();
    fetchDif();
    fetchConstruccion();
    fetchConservacion();
    fetchApublico();
    fetchalumbrado();
    fetchEstrategico();
    fetchAdrenaje();
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <DashboardContent>
      <div className="container">
        <div className="row">
          <div className="col card-padd">
            <div className="card size-purple">
              <div className="circle-purple-under" />
              <div className="circle-purple-up" />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <ListItem button component={Link} to="/consultas">
                      <i className="material-icons padding-aling11">
                        manage_search
                      </i>
                      <p className="padd"> Formatos</p>
                    </ListItem>
                  </div>
                  <div className="col-6 mediaquery">
                    <p className="padd"> {sumatotal} Contestados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col card-padd">
            <div className="card size-blue">
              <div className="circle-blue-under" />
              <div className="circle-blue-up" />
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <ListItem button component={Link} to="/usuarios">
                      <i className="material-icons padding-aling11">people</i>
                      <p className="padd"> Usuarios</p>
                    </ListItem>
                  </div>
                  <div className="col-6 mediaquery">
                    <p className="padd"> {usuarios.length} Usuarios</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContent>
  );
};

export default Home;
