import express from "express";
import bodyParser from "body-parser";
import dependenciaRoutes from "./routes/dependencia.js";
import usersRoutes from "./routes/user.js";
import formSaludRoutes from "./routes/salud.js";
import roles from "./routes/rol.js";
import dif from "./routes/dif.js";
import segPublica from "./routes/segPublica.js";
import inspeccionvig from "./routes/inspeccionvigilancia.js";
import tianguis from "./routes/tianguis.js";
import recaudadora from "./routes/recaudadora.js";
import alumbrado from "./routes/alumbrado.js";
import aseopublico from "./routes/aseopublico.js";
import adrenaje from "./routes/adrenaje.js";
import analisisestrategico from "./routes/analisisestrategico.js";
import sindicatura from "./routes/sindicatura.js";
import mejoramientourbano from "./routes/mejoramientourbano.js";
import conservacion from "./routes/conservacion.js";
import innovacion from "./routes/innovacion.js";
import pcivil from "./routes/pcivil.js";
import register from "./routes/auth.js";
import login from "./routes/login.js";
import construccion from "./routes/construccion.js";
import cors from 'cors';



const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }));
  
app.use("/dependencia", dependenciaRoutes);
app.use("/users", usersRoutes);
app.use("/salud",formSaludRoutes );
app.use("/roles",roles );
app.use("/dif",dif );
app.use("/segPublica",segPublica );
app.use("/inspeccionvig",inspeccionvig );
app.use("/tianguis",tianguis );
app.use("/recaudadora",recaudadora );
app.use("/alumbrado",alumbrado );
app.use("/aseopublico",aseopublico );
app.use("/adrenaje",adrenaje );
app.use("/analisisestrategico",analisisestrategico );
app.use("/sindicatura",sindicatura );
app.use("/mejoramientourbano",mejoramientourbano );
app.use("/conservacion",conservacion );
app.use("/innovacion",innovacion );
app.use("/pcivil",pcivil );
app.use("/construccion",construccion );
app.use("/register",register );
app.use("/login",login );

app.get("/", (req, res) => {
  res.send("Debe iniciar sesión para acceder a esta vista");
 
});

app.listen(PORT, () =>
  console.log(`Server corriendo en puerto: http://localhost:${PORT}`)
);



