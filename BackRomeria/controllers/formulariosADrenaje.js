import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const getADrenaje = async (req, res) => {
  try {
    const formaguadrenaje = await prisma.formaguadrenaje.findMany({
      include: {
        usuariosRespondDren: true,
      },
    });
    res.send(formaguadrenaje);
  } catch (error) {
    res.status(403)
  }
};

export const getFormADrenajeById = async (req, res) => {
  try {
    const { id } = req.params;
    const formaguadrenaje = await prisma.formaguadrenaje.findUnique({
      where: {
        idADrenaje: Number(id),
      },
      include: {
        usuariosRespondDren: true,
      },
    });
    res.json(formaguadrenaje);
  } catch (error) {
    res.status(403)
  }
};

export const getAdrenajeTotal = async (req, res) => {
  try {
    const formaguadrenaje = await prisma.formaguadrenaje.groupBy({
      by: ['tipodependenciaaguadrenaje'],
      _sum: {
        cantidadBanosInstalados: true,
        cantidadUsuarios: true,
        cantidadEstimadaP1JMinaMatamoros:true,
        cantidadEstimadaP2EvaSofia:true,
        cantidadEstimadaP3CincoMayoSofia:true,
        cantidadEstimadaP4MixtonAmericas:true,
        cantidadEstimadaP5AmericasEsparta: true,
        cantidadEstimadaP6AmericasPatria: true,
        cantidadEstimadaP7AvilaSantaElena:true,
        cantidadEstimadaP8AvilaPatria:true,
        cantidadEstimadaP9HidalgoLauralesJPabloii:true,
        cantidadEstimadaP10EmilioLaureles:true,
        cantidadEstimadaP11SarcofagoLaurelesJPabloii:true
      },
    });
    res.send(formaguadrenaje);
  } catch (error) {
    res.status(403)
    console.log('error', error);
  }
};

export const createFormADrenaje = async (req, res) => {
  try {
    const {
      cantidadBanosInstalados,
      msjBanosInstalados,
      cantidadUsuarios,
      msjUsuarios,
      P1JMinaMatamoros,
      cantidadEstimadaP1JMinaMatamoros,
      P2EvaSofia,
      cantidadEstimadaP2EvaSofia,
      P3CincoMayoSofia,
      cantidadEstimadaP3CincoMayoSofia,
      P4MixtonAmericas,
      cantidadEstimadaP4MixtonAmericas,
      P5AmericasEsparta,
      cantidadEstimadaP5AmericasEsparta,
      P6AmericasPatria,
      cantidadEstimadaP6AmericasPatria,
      P7AvilaSantaElena,
      cantidadEstimadaP7AvilaSantaElena,
      P8AvilaPatria,
      cantidadEstimadaP8AvilaPatria,
      P9HidalgoLauralesJPabloii,
      cantidadEstimadaP9HidalgoLauralesJPabloii,
      P10EmilioLaureles,
      cantidadEstimadaP10EmilioLaureles,
      P11SarcofagoLaurelesJPabloii,
      cantidadEstimadaP11SarcofagoLaurelesJPabloii,
      tipodependenciaaguadrenaje,
      usuariorespondioDren
    } = req.body;

    const formaguadrenaje = await prisma.formaguadrenaje.create({
      data: {
        cantidadBanosInstalados,
        msjBanosInstalados,
        cantidadUsuarios,
        msjUsuarios,
        P1JMinaMatamoros,
        cantidadEstimadaP1JMinaMatamoros,
        P2EvaSofia,
        cantidadEstimadaP2EvaSofia,
        P3CincoMayoSofia,
        cantidadEstimadaP3CincoMayoSofia,
        P4MixtonAmericas,
        cantidadEstimadaP4MixtonAmericas,
        P5AmericasEsparta,
        cantidadEstimadaP5AmericasEsparta,
        P6AmericasPatria,
        cantidadEstimadaP6AmericasPatria,
        P7AvilaSantaElena,
        cantidadEstimadaP7AvilaSantaElena,
        P8AvilaPatria,
        cantidadEstimadaP8AvilaPatria,
        P9HidalgoLauralesJPabloii,
        cantidadEstimadaP9HidalgoLauralesJPabloii,
        P10EmilioLaureles,
        cantidadEstimadaP10EmilioLaureles,
        P11SarcofagoLaurelesJPabloii,
        cantidadEstimadaP11SarcofagoLaurelesJPabloii,
        dependenciaADrenaje: {
          connect: { idDependencia: Number(tipodependenciaaguadrenaje) },
        },
        usuariosRespondDren: {
          connect: { idUsuarios: Number(usuariorespondioDren) },
        },
      },
    });

    res.send(formaguadrenaje);
    console.log("FORM SALUD CREATE", formaguadrenaje);
  } catch (error) {
    res.send("NO SE PUDO CREAR ESTE FORM");
    console.log("FORM SALUD CREATE", error);
  }
};
